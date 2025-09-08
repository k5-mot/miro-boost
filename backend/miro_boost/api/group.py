from fastapi import APIRouter
from miro_api.models.position_change import PositionChange
from miro_api.models.sticky_note_create_request import StickyNoteCreateRequest
from miro_api.models.sticky_note_data import StickyNoteData
from miro_api.models.sticky_note_style import StickyNoteStyle
from pydantic import BaseModel, Field

from miro_boost.api.oauth import session_manager
from miro_boost.chain.group_sticky_notes import group_sticky_notes
from miro_boost.chain.random_sticky_notes import random_sticky_notes
from miro_boost.common import get_logger, get_settings
from miro_boost.util.miro.sticky_notes import (
    get_random_color,
    get_selected_sticky_notes,
    post_grouped_sticky_notes,
)

settings = get_settings()
logger = get_logger()
router = APIRouter()


class GroupRequest(BaseModel):
    """グルーピングリクエスト."""

    user_id: str = Field(..., description="User ID")
    board_id: str = Field(..., description="Board ID")
    item_ids: list[str] = Field(..., description="IDs of Selected Sticky Notes")


class GroupResponse(BaseModel):
    """グルーピングレスポンス."""

    groups: dict[str, list[str]]  # グループ名 -> アイテムIDのリスト
    group_headers: dict[str, str]  # グループ名 -> ヘッダー付箋のID
    connectors: list[str]  # 作成されたコネクタのIDリスト


@router.post("/group-sticky-notes")
def post_group_sticky_notes(request: GroupRequest) -> None:
    """ボード全体の付箋を取得してグルーピングする."""
    logger.info("ggg")

    try:
        # UserIDからMiroクライアントを取得
        miro = session_manager.get_miro_client(request.user_id)
        logger.info(
            "user_id=%s, board_id=%s",
            request.user_id,
            request.board_id,
        )

        # Miro APIで、StickyNotesを取得.
        sticky_notes = get_selected_sticky_notes(
            miro,
            request.board_id,
            request.item_ids,
        )
        logger.info("取得した付箋数: %s", len(sticky_notes))

        # StickyNotesを生成AIでセマンティックグルーピング.
        contents = [sticky_note.data.content for sticky_note in sticky_notes]
        grouped_notes = group_sticky_notes(contents)
        logger.info(grouped_notes.groups)
        for group_name, items in grouped_notes.groups.items():
            logger.info(
                "- グループ名: %s",
                group_name,
            )
            for item in items:
                logger.info("  - %s", item)

        # グループ化されたStickyNotesをMiro APIで作成.
        post_grouped_sticky_notes(
            miro,
            request.board_id,
            grouped_notes.groups,
        )
        # layout_sticky_notes(request.user_id, request.board_id, grouped_notes.groups)
    except Exception as e:
        logger.error("グルーピングエラー: %s", e)


class SampleDataRequest(BaseModel):
    """サンプルデータ生成リクエスト."""

    user_id: str
    board_id: str


class SampleDataResponse(BaseModel):
    """サンプルデータ生成レスポンス."""

    created_notes: list[str]  # 作成された付箋のIDリスト
    message: str


@router.post("/generate-sample-data")
def generate_sample_data(request: SampleDataRequest) -> SampleDataResponse:
    """サンプルデータを生成する."""
    try:
        miro = session_manager.get_miro_client(request.user_id)
        logger.info(
            "サンプルデータ生成開始 - user_id=%s, board_id=%s",
            request.user_id,
            request.board_id,
        )

        # ランダムな付箋のリストを生成
        sticky_note_contents = random_sticky_notes()
        logger.info("生成する付箋数: %d", len(sticky_note_contents))

        created_notes = []

        # 各付箋を作成
        for i, content in enumerate(sticky_note_contents):
            # 付箋の配置位置を計算(グリッド配置)
            x = (i % 5) * 200  # 5列に配置
            y = (i // 5) * 200  # 行ごとに200px間隔

            # Miro APIで付箋を作成
            created_note = miro.api.create_sticky_note_item(
                board_id=request.board_id,
                sticky_note_create_request=StickyNoteCreateRequest(
                    data=StickyNoteData(
                        content=content,
                        shape="square",
                    ),
                    style=StickyNoteStyle(
                        fillColor=get_random_color(),
                    ),
                    position=PositionChange(
                        x=x,
                        y=y,
                    ),
                ),
            )

            created_notes.append(created_note.id)
            logger.info("付箋作成完了: %s", content[:20])

        return SampleDataResponse(
            created_notes=created_notes,
            message=f"{len(created_notes)}個のサンプル付箋を作成しました",
        )

    except Exception as e:
        logger.error("サンプルデータ生成エラー: %s", e)
        return SampleDataResponse(
            created_notes=[],
            message=f"エラーが発生しました: {e!s}",
        )
