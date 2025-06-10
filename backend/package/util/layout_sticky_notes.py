import secrets

from package.common import get_logger, get_settings

settings = get_settings()
logger = get_logger()


# グルーピング用の定数 - 美しい水平配置と完全な重複回避
GROUP_OFFSET_X = 550  # グループ間の横間隔を最適化
GROUP_OFFSET_Y = 150  # ヘッダーから子要素までの縦間隔を広げる
CHILD_OFFSET_X = 220  # 子要素間の横間隔をさらに広げる
CHILD_OFFSET_Y = 120  # 子要素間の縦間隔を広げる
COLUMNS_PER_GROUP = 4  # 1グループあたりの列数を増やす

# レイアウト計算用の定数
SMALL_GROUP_SIZE = 4  # 小グループのサイズ閾値
MEDIUM_GROUP_SIZE = 9  # 中グループのサイズ閾値
LARGE_GROUP_SIZE = 16  # 大グループのサイズ閾値

SHORT_TEXT_LENGTH = 5
MEDIUM_TEXT_LENGTH = 15
GROUP_COLORS = [
    "gray",
    "light_yellow",
    "yellow",
    "orange",
    "light_green",
    "green",
    "dark_green",
    "cyan",
    "light_pink",
    "pink",
    "violet",
    "red",
    "light_blue",
    "blue",
    "dark_blue",
    "black",
]
# サンプルデータ用の定数
SAMPLE_NOTES = [
    {"text": "牛乳を買う", "color": "light_yellow"},
    {"text": "パンを買う", "color": "light_yellow"},
    {"text": "野菜を買う", "color": "light_yellow"},
    {"text": "プロジェクトの進捗確認", "color": "light_blue"},
    {"text": "会議の準備", "color": "light_blue"},
    {"text": "資料作成", "color": "light_blue"},
    {"text": "映画を見る", "color": "light_pink"},
    {"text": "音楽を聞く", "color": "light_pink"},
    {"text": "友達と会う", "color": "light_green"},
    {"text": "運動する", "color": "light_green"},
    {"text": "掃除をする", "color": "orange"},
    {"text": "洗濯をする", "color": "orange"},
]


def get_random_group_color() -> str:
    """ランダムなグループ色を取得する."""
    return secrets.choice(GROUP_COLORS)


def layout_sticky_notes(groups: dict[str, list[str]]) -> None:
    """グルーピングされた、付箋を階層構造にレイアウトする."""
    logger.info("レイアウト処理を開始 - グループ数: %d", len(groups))

    # グループ情報をログに出力
    for group_name, items in groups.items():
        logger.info("グループ '%s': %d個のアイテム", group_name, len(items))
        for item in items:
            logger.info("  - %s", item)

    # 実際のレイアウト計算を実行
    layout_data = calculate_group_layout(groups)

    # 計算されたレイアウト情報をログに出力
    logger.info("レイアウト計算完了")
    for group_name, layout in layout_data.items():
        logger.info("グループ '%s' の配置:", group_name)
        logger.info(
            "  ヘッダー位置: (%d, %d)", layout["header"]["x"], layout["header"]["y"]
        )
        logger.info("  子要素数: %d", len(layout["children"]))


def calculate_group_layout(groups: dict[str, list[str]]) -> dict[str, dict]:
    """グループの階層レイアウトを計算する."""
    layout_data = {}
    current_x = 0

    for _group_index, (group_name, items) in enumerate(groups.items()):
        # グループヘッダーの位置を計算
        header_x = current_x
        header_y = 0

        # 子要素の配置を計算
        children_layout = []
        items_per_row = min(len(items), COLUMNS_PER_GROUP)

        for item_index, item in enumerate(items):
            # 子要素の位置を計算(ヘッダーの下に配置)
            col = item_index % items_per_row
            row = item_index // items_per_row

            child_x = header_x + (col * CHILD_OFFSET_X)
            child_y = header_y + GROUP_OFFSET_Y + (row * CHILD_OFFSET_Y)

            children_layout.append(
                {
                    "content": item,
                    "x": child_x,
                    "y": child_y,
                    "color": get_random_group_color(),
                }
            )

        # グループのレイアウト情報を保存
        layout_data[group_name] = {
            "header": {"x": header_x, "y": header_y, "color": get_random_group_color()},
            "children": children_layout,
        }

        # 次のグループのX座標を計算
        group_width = max(items_per_row * CHILD_OFFSET_X, 200)  # 最小幅を確保
        current_x += group_width + GROUP_OFFSET_X

    return layout_data


def get_layout_dimensions(groups: dict[str, list[str]]) -> tuple[int, int]:
    """レイアウト全体の寸法を計算する."""
    if not groups:
        return 0, 0

    total_width = 0
    max_height = 0

    for items in groups.values():
        items_per_row = min(len(items), COLUMNS_PER_GROUP)
        rows = (len(items) + items_per_row - 1) // items_per_row

        group_width = items_per_row * CHILD_OFFSET_X
        group_height = GROUP_OFFSET_Y + (rows * CHILD_OFFSET_Y)

        total_width += group_width + GROUP_OFFSET_X
        max_height = max(max_height, group_height)

    return total_width, max_height


def create_sticky_notes_on_board(
    user_id: str, board_id: str, groups: dict[str, list[str]]
) -> dict[str, list[str]]:
    """グルーピングされた付箋をMiroボードに実際に作成する."""
    from concurrent.futures import ThreadPoolExecutor

    from miro_api.models.sticky_note_create_request import StickyNoteCreateRequest

    from package.api.oauth import session_manager

    logger.info("付箋作成処理を開始 - グループ数: %d", len(groups))

    # Miroクライアントを取得
    miro = session_manager.get_miro_client(user_id)

    # レイアウト計算を実行
    layout_data = calculate_group_layout(groups)

    # 作成された付箋のIDを保存
    created_notes = {}

    def create_single_sticky_note(group_name: str, item_data: dict) -> str:
        """単一の付箋を作成する."""
        try:
            sticky_note = miro.api.create_sticky_note_item(
                board_id,
                StickyNoteCreateRequest(
                    data={
                        "content": item_data["content"],
                    },
                    style={
                        "fillColor": item_data["color"],
                    },
                    position={
                        "x": item_data["x"],
                        "y": item_data["y"],
                    },
                ),
            )
            logger.info("付箋作成完了: グループ=%s, ID=%s", group_name, sticky_note.id)
            return sticky_note.id
        except Exception as e:
            logger.error("付箋作成エラー: グループ=%s, エラー=%s", group_name, str(e))
            return ""

    def create_header_sticky_note(group_name: str, header_data: dict) -> str:
        """グループヘッダーの付箋を作成する."""
        try:
            sticky_note = miro.api.create_sticky_note_item(
                board_id,
                StickyNoteCreateRequest(
                    data={
                        "content": f"📌 {group_name}",
                    },
                    style={
                        "fillColor": header_data["color"],
                    },
                    position={
                        "x": header_data["x"],
                        "y": header_data["y"],
                    },
                ),
            )
            logger.info(
                "ヘッダー付箋作成完了: グループ=%s, ID=%s", group_name, sticky_note.id
            )
            return sticky_note.id
        except Exception as e:
            logger.error(
                "ヘッダー付箋作成エラー: グループ=%s, エラー=%s", group_name, str(e)
            )
            return ""

    # 各グループの付箋を作成
    for group_name, layout in layout_data.items():
        group_note_ids = []

        # ヘッダー付箋を作成
        header_id = create_header_sticky_note(group_name, layout["header"])
        if header_id:
            group_note_ids.append(header_id)

        # 子要素の付箋を並列で作成
        with ThreadPoolExecutor(max_workers=5) as executor:
            child_ids = list(
                executor.map(
                    lambda item, gname=group_name: create_single_sticky_note(
                        gname, item
                    ),
                    layout["children"],
                )
            )

            # 成功した付箋IDのみを追加
            group_note_ids.extend([note_id for note_id in child_ids if note_id])

        created_notes[group_name] = group_note_ids
        logger.info(
            "グループ '%s' の付箋作成完了: %d個", group_name, len(group_note_ids)
        )

    logger.info("全付箋作成処理完了")
    return created_notes


def test_create_sample_sticky_notes(
    user_id: str, board_id: str
) -> dict[str, list[str]]:
    """サンプルデータを使って付箋を作成する."""
    sample_groups = {
        "買い物リスト": ["牛乳を買う", "パンを買う", "野菜を買う"],
        "仕事タスク": ["プロジェクトの進捗確認", "会議の準備", "資料作成"],
        "趣味活動": ["映画を見る", "音楽を聞く", "友達と会う", "運動する"],
        "家事": ["掃除をする", "洗濯をする"],
    }

    logger.info("サンプル付箋作成開始 - グループ数: %d", len(sample_groups))

    # 実際の付箋を作成
    created_notes = create_sticky_notes_on_board(user_id, board_id, sample_groups)

    logger.info("サンプル付箋作成完了")
    return created_notes


# テスト実行用のメイン関数
if __name__ == "__main__":
    # 使用例:
    # python -m package.util.layout_sticky_notes
    print("layout_sticky_notes.py - 付箋レイアウト機能テスト")

    # サンプルグループでレイアウト計算のテスト
    test_groups = {
        "グループA": ["アイテム1", "アイテム2", "アイテム3"],
        "グループB": ["アイテム4", "アイテム5"],
        "グループC": ["アイテム6", "アイテム7", "アイテム8", "アイテム9"],
    }

    print("=== レイアウト計算テスト ===")
    layout_sticky_notes(test_groups)

    print("\n=== レイアウト計算結果 ===")
    layout_result = calculate_group_layout(test_groups)
    for group_name, layout in layout_result.items():
        print(f"グループ: {group_name}")
        print(f"  ヘッダー位置: ({layout['header']['x']}, {layout['header']['y']})")
        print(f"  子要素数: {len(layout['children'])}")
        for child in layout["children"]:
            print(
                f"    - {child['content']}: ({child['x']}, {child['y']}) 色:{child['color']}"
            )

    print("\n=== 寸法計算テスト ===")
    width, height = get_layout_dimensions(test_groups)
    print(f"レイアウト全体のサイズ: 幅={width}, 高さ={height}")
