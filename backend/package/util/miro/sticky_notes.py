import secrets

from miro_api.miro_api_wrapper import Miro
from miro_api.models.caption import Caption
from miro_api.models.connector_creation_data import ConnectorCreationData
from miro_api.models.connector_style import ConnectorStyle
from miro_api.models.fixed_ratio_no_rotation_geometry import (
    FixedRatioNoRotationGeometry,
)
from miro_api.models.item_connection_creation_data import ItemConnectionCreationData
from miro_api.models.position import Position
from miro_api.models.position_change import PositionChange
from miro_api.models.sticky_note_create_request import StickyNoteCreateRequest
from miro_api.models.sticky_note_data import StickyNoteData
from miro_api.models.sticky_note_item import StickyNoteItem
from miro_api.models.sticky_note_style import StickyNoteStyle
from pydantic import BaseModel, Field

from package.common import get_logger, get_settings

settings = get_settings()
logger = get_logger()


STICKY_NOTE_COLORS = [
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

# 過去の色履歴の保持数
COLOR_HISTORY_SIZE = 15

# 過去15回の色履歴を管理するリスト
_color_history: list[str] = []


def get_random_color() -> str:
    """ランダムなグループ色を取得する(過去15回同じ色を返さない)."""
    # 利用可能な色のリストを作成(過去15回に使われていない色)
    available_colors = [
        color for color in STICKY_NOTE_COLORS if color not in _color_history
    ]

    # 利用可能な色からランダムに選択
    selected_color = secrets.choice(available_colors)

    # 履歴に追加
    _color_history.append(selected_color)

    # 履歴が指定数を超えた場合、古いものから削除
    if len(_color_history) > COLOR_HISTORY_SIZE:
        _color_history.pop(0)

    return selected_color


class MinMaxBox(BaseModel):
    """付箋の最小最大ボックスを表すデータモデル."""

    min_x: int = Field(..., description="最小X座標")
    max_x: int = Field(..., description="最大X座標")
    min_y: int = Field(..., description="最小Y座標")
    max_y: int = Field(..., description="最大Y座標")


def get_minmaxbox(miro: Miro, board_id: str) -> MinMaxBox:
    """指定された付箋アイテムの情報を取得する."""
    items = list(miro.api.get_all_items(board_id=board_id))
    if not items:
        logger.warning("No items found on board %s", board_id)
        return MinMaxBox(min_x=0, max_x=100, min_y=0, max_y=100)
    return MinMaxBox(
        min_x=int(min(item.position.x for item in items)),
        max_x=int(max(item.position.x + item.geometry.width for item in items)),
        min_y=int(min(item.position.y for item in items)),
        max_y=int(max(item.position.y + item.geometry.height for item in items)),
    )


def get_vacant_position(miro: Miro, board_id: str) -> Position:
    """指定された付箋アイテムの情報を取得し、空いている位置を計算する."""
    minmaxbox = get_minmaxbox(miro, board_id)
    vacant_x = minmaxbox.max_x + 200  # 200px右にずらす
    vacant_y = minmaxbox.min_y + 0  # 0px下にずらす
    return Position(x=vacant_x, y=vacant_y)


def get_selected_sticky_notes(
    miro: Miro, board_id: str, item_ids: list[str]
) -> list[StickyNoteItem]:
    """指定された付箋アイテムの情報を取得する."""
    sticky_notes: list[StickyNoteItem] = []
    for item_id in item_ids:
        try:
            sticky_note = miro.api.get_sticky_note_item(
                board_id=board_id, item_id=item_id
            )
            sticky_notes.append(sticky_note)
        except Exception as e:
            logger.error("Error fetching sticky note %s: %s", item_id, e)
    return sticky_notes


def post_grouped_sticky_notes(
    miro: Miro, board_id: str, groups: dict[str, list[str]]
) -> None:
    """付箋をグループ化して配置する."""
    offset_y = 500
    width_sticky_note = 200
    margin_x = 10
    offset_x = width_sticky_note + margin_x
    try:
        origin = get_vacant_position(miro, board_id)

        x_title = origin.x
        y_title = origin.y
        x_child = origin.x
        y_child = origin.y + offset_y
        for group_title, group_items in groups.items():
            color = get_random_color()

            # グループタイトルのSticky Noteを作成.
            title_note = miro.api.create_sticky_note_item(
                board_id=board_id,
                sticky_note_create_request=StickyNoteCreateRequest(
                    data=StickyNoteData(
                        content=f"📌 {group_title}",
                    ),
                    style=StickyNoteStyle(
                        fillColor=color,
                    ),
                    position=PositionChange(
                        x=x_title
                        + offset_x * (len(group_items) / 2)
                        - width_sticky_note / 2,
                        y=y_title,
                    ),
                    geometry=FixedRatioNoRotationGeometry(
                        # height=100,
                        width=width_sticky_note,
                    ),
                ),
            )
            logger.debug("x_title: %s", x_title)
            logger.debug(
                "x_title_center: %s",
                x_title + width_sticky_note * (len(group_items) / 2),
            )
            # x_title: -869
            # x_title_center: -569.0

            # グループアイテムのSticky Noteを作成.
            for group_item in group_items:
                group_note = miro.api.create_sticky_note_item(
                    board_id=board_id,
                    sticky_note_create_request=StickyNoteCreateRequest(
                        data=StickyNoteData(
                            content=group_item,
                        ),
                        style=StickyNoteStyle(
                            fillColor=color,
                        ),
                        position=PositionChange(
                            x=x_child,
                            y=y_child,
                        ),
                        geometry=FixedRatioNoRotationGeometry(
                            # height=100,
                            width=width_sticky_note,
                        ),
                    ),
                )

                # グループタイトルとグループアイテムを接続するコネクタを作成.
                connector = miro.api.create_connector(
                    board_id=board_id,
                    connector_creation_data=ConnectorCreationData(
                        start_item=ItemConnectionCreationData(id=title_note.id),
                        end_item=ItemConnectionCreationData(id=group_note.id),
                        shape="curved",  # 曲線コネクターを使用
                        # "straight", "elbowed", "curved"
                        captions=[
                            Caption(content="categorized"),
                        ],
                        style=ConnectorStyle(
                            lineColor="black",
                            lineWidth=2,
                        ),
                    ),
                )

                # 次の子要素の位置を計算
                x_child += offset_x
            x_title = x_child

    except Exception as e:
        logger.error("Error creating sticky note groups: %s", e)


def post_mocked_sticky_notes(miro: Miro, board_id: str) -> None:
    """モックの付箋を配置する."""
    mock_keywords = [
        "iPhone",
        "犬",
        "医師",
        "赤",
        "日本",
        "MacBook",
        "猫",
        "教師",
        "青",
        "アメリカ",
        "iPad",
        "鳥",
        "エンジニア",
        "緑",
        "フランス",
        "Android",
        "魚",
        "看護師",
        "黄色",
        "ドイツ",
    ]
    for keyword in mock_keywords:
        try:
            miro.api.create_sticky_note_item(
                board_id=board_id,
                item=StickyNoteCreateRequest(
                    data={"content": keyword, "shape": "square"},
                    style={"fillColor": get_random_color()},
                    position={"x": 0, "y": 0},
                ),
            )
        except Exception as e:
            logger.error("Error creating sticky note %s: %s", keyword, e)
