#!/usr/bin/env python3
"""水平配置テスト"""


def test_horizontal_layout():
    print("🎯 水平配置アルゴリズムのテスト開始！")

    # テストデータ
    groups = {
        "食品": ["りんご", "バナナ", "チェリー", "アボカド"],
        "タスク": ["会議準備", "資料作成", "レビュー"],
        "アイデア": [
            "新機能",
            "改善提案",
            "ユーザビリティ",
            "パフォーマンス",
            "セキュリティ",
        ],
        "その他": ["メモ1", "メモ2"],
    }

    # レイアウト定数
    group_offset_x = 550
    group_offset_y = 150
    child_offset_x = 200
    child_offset_y = 120

    def calculate_group_layout(notes_count, header_x, header_y):
        small_group_size = 4
        medium_group_size = 9
        large_group_size = 16

        if notes_count <= small_group_size:
            cols = 2
        elif notes_count <= medium_group_size:
            cols = 3
        elif notes_count <= large_group_size:
            cols = 4
        else:
            cols = 5

        total_width = (cols - 1) * child_offset_x
        start_x = header_x - total_width / 2
        start_y = header_y + group_offset_y

        return cols, start_x, start_y

    def calculate_child_position(child_index, cols, start_x, start_y):
        row = child_index // cols
        col = child_index % cols

        child_x = start_x + col * child_offset_x
        child_y = start_y + row * child_offset_y

        return child_x, child_y

    # 水平配置の計算
    base_x = -len(groups) * group_offset_x // 2
    base_y = 0

    print("📐 グループレイアウトの計算結果:")
    print(f"  ベース位置: ({base_x}, {base_y})")
    print(f"  グループ数: {len(groups)}")
    print()

    layout_results = []

    for group_index, (group_name, notes) in enumerate(groups.items()):
        header_x = base_x + group_index * group_offset_x
        header_y = base_y

        print(f"🏷️  グループ: {group_name}")
        print(f"  ヘッダー位置: ({header_x}, {header_y})")
        print(f"  子付箋数: {len(notes)}")

        cols, child_start_x, child_start_y = calculate_group_layout(
            len(notes), header_x, header_y
        )

        print(f"  列数: {cols}")
        print(f"  子付箋エリア開始位置: ({child_start_x}, {child_start_y})")

        child_positions = []
        for child_index, note_text in enumerate(notes):
            child_x, child_y = calculate_child_position(
                child_index, cols, child_start_x, child_start_y
            )
            child_positions.append(
                {
                    "text": note_text,
                    "position": (child_x, child_y),
                    "connector_from": (header_x, header_y),
                    "connector_to": (child_x, child_y),
                }
            )
            print(f"    └ {note_text}: ({child_x}, {child_y})")

        layout_results.append(
            {
                "group_name": group_name,
                "header_position": (header_x, header_y),
                "children": child_positions,
            }
        )
        print()

    print("🎨 レイアウト品質の評価:")

    header_positions = [result["header_position"][0] for result in layout_results]
    min_spacing = min(
        header_positions[i + 1] - header_positions[i]
        for i in range(len(header_positions) - 1)
    )
    print(f"  ✅ 最小ヘッダー間隔: {min_spacing}px (推奨: {group_offset_x}px)")

    all_child_positions = []
    for result in layout_results:
        for child in result["children"]:
            all_child_positions.append(child["position"])

    overlaps = 0
    for i, pos1 in enumerate(all_child_positions):
        for pos2 in all_child_positions[i + 1 :]:
            if abs(pos1[0] - pos2[0]) < 180 and abs(pos1[1] - pos2[1]) < 100:
                overlaps += 1

    print(f"  ✅ 付箋重複数: {overlaps}個 (0が理想)")

    total_connectors = sum(len(result["children"]) for result in layout_results)
    print(f"  ✅ 総コネクタ数: {total_connectors}本")

    print("\n🎯 水平配置テスト完了！")

    if overlaps == 0 and min_spacing >= group_offset_x:
        print("✨ 完璧な水平配置が実現されているのだ！")
        return True
    else:
        print("⚠️  改善の余地があるのだ。")
        return False


if __name__ == "__main__":
    print("🚀 Miro-boost 水平配置テスト")
    print("=" * 50)
    success = test_horizontal_layout()
    print("=" * 50)
    if success:
        print("🎉 テスト成功！水平配置は完璧なのだ！")
    else:
        print("🔧 テスト完了。さらなる改善が必要なのだ。")
