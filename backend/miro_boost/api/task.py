from fastapi import APIRouter
from miro_api.models.position_change import PositionChange
from miro_api.models.sticky_note_create_request import StickyNoteCreateRequest
from miro_api.models.sticky_note_data import StickyNoteData
from miro_api.models.sticky_note_style import StickyNoteStyle
from pydantic import BaseModel, Field

from miro_boost.api.oauth import session_manager
from miro_boost.chain.extract_tasks import extract_tasks_from_sticky_notes
from miro_boost.common import get_logger, get_settings
from miro_boost.util.miro.sticky_notes import (
    get_random_color,
    get_selected_sticky_notes,
)

settings = get_settings()
logger = get_logger()
router = APIRouter()


class TaskRequest(BaseModel):
    """タスク切り出しリクエスト."""

    user_id: str = Field(..., description="User ID")
    board_id: str = Field(..., description="Board ID")
    item_ids: list[str] = Field(..., description="IDs of Selected Sticky Notes")


class TaskResponse(BaseModel):
    """タスク切り出しレスポンス."""

    created_tasks: list[str]  # 作成されたタスク付箋のIDリスト
    message: str


@router.post("/extract-tasks")
def post_extract_tasks(request: TaskRequest) -> TaskResponse:
    """選択した付箋からタスクを切り出して新しい付箋として生成する."""
    logger.info("タスク切り出し開始")

    try:
        # UserIDからMiroクライアントを取得
        miro = session_manager.get_miro_client(request.user_id)
        logger.info(
            "user_id=%s, board_id=%s",
            request.user_id,
            request.board_id,
        )

        # Miro APIで、選択されたStickyNotesを取得
        sticky_notes = get_selected_sticky_notes(
            miro,
            request.board_id,
            request.item_ids,
        )
        logger.info("取得した付箋数: %s", len(sticky_notes))

        # StickyNotesの内容からタスクを抽出
        contents = [sticky_note.data.content for sticky_note in sticky_notes]
        extracted_tasks = extract_tasks_from_sticky_notes(contents)
        logger.info("抽出されたタスク数: %d", len(extracted_tasks.tasks))

        created_task_ids = []

        # 抽出されたタスクを新しい付箋として作成
        for i, task in enumerate(extracted_tasks.tasks):
            # タスク付箋の配置位置を計算(グリッド配置)
            x = (i % 4) * 250  # 4列に配置
            y = (i // 4) * 250 + 500  # 行ごとに250px間隔、下の方に配置

            # Miro APIでタスク付箋を作成
            created_task = miro.api.create_sticky_note_item(
                board_id=request.board_id,
                sticky_note_create_request=StickyNoteCreateRequest(
                    data=StickyNoteData(content=task, shape="square"),
                    style=StickyNoteStyle(fillColor="#FFE066"),  # タスクは黄色
                    # style=StickyNoteStyle(fillColor=get_random_color()),
                    position=PositionChange(x=x, y=y),
                ),
            )

            created_task_ids.append(created_task.id)
            logger.info("タスク付箋作成完了: %s", task[:30])

        return TaskResponse(
            created_tasks=created_task_ids,
            message=f"{len(created_task_ids)}個のタスクを作成しました",
        )

    except Exception as e:
        logger.error("タスク切り出しエラー: %s", e)
        return TaskResponse(
            created_tasks=[],
            message=f"タスク切り出し中にエラーが発生しました: {e!s}",
        )


class SampleTaskDataRequest(BaseModel):
    """サンプルタスクデータ生成リクエスト."""

    user_id: str
    board_id: str


class SampleTaskDataResponse(BaseModel):
    """サンプルタスクデータ生成レスポンス."""

    created_notes: list[str]  # 作成された付箋のIDリスト
    message: str


@router.post("/generate-sample-task-data")
def generate_sample_task_data(request: SampleTaskDataRequest) -> SampleTaskDataResponse:
    """タスク切り出し用のサンプルデータを生成する."""
    try:
        miro = session_manager.get_miro_client(request.user_id)
        logger.info(
            "タスク用サンプルデータ生成開始 - user_id=%s, board_id=%s",
            request.user_id,
            request.board_id,
        )

        # タスク切り出し用のサンプル付箋内容
        sample_contents = [
            "新機能の企画書を作成する\n・ユーザーニーズの調査\n・競合分析\n・機能仕様の検討",
            "プロジェクトの進捗管理\n・タスクの洗い出し\n・スケジュール作成\n・チームメンバーへの共有",
            "システムのパフォーマンス改善\n・ボトルネックの特定\n・最適化案の検討\n・実装とテスト",
            "ユーザーインターフェースの改善\n・ユーザビリティテスト\n・デザイン修正\n・フロントエンド実装",
            "データベース設計の見直し\n・現状の問題点整理\n・新しいスキーマ設計\n・マイグレーション計画",
        ]
        logger.info("生成する付箋数: %d", len(sample_contents))

        created_notes = []

        # 各付箋を作成
        for i, content in enumerate(sample_contents):
            # 付箋の配置位置を計算
            x = (i % 3) * 300  # 3列に配置
            y = (i // 3) * 250  # 行ごとに250px間隔

            # Miro APIで付箋を作成
            logger.info("生成する付箋数B: %d", len(sample_contents))

            created_note = miro.api.create_sticky_note_item(
                board_id=request.board_id,
                sticky_note_create_request=StickyNoteCreateRequest(
                    data=StickyNoteData(content=content, shape="square"),
                    style=StickyNoteStyle(fillColor=get_random_color()),
                    position=PositionChange(x=x, y=y),
                ),
            )
            logger.info("生成する付箋数C: %d", len(sample_contents))

            created_notes.append(created_note.id)
            logger.info("サンプル付箋作成完了: %s", content[:30])

        return SampleTaskDataResponse(
            created_notes=created_notes,
            message=f"{len(created_notes)}個のタスク用サンプル付箋を作成しました",
        )

    except Exception as e:
        logger.error("タスク用サンプルデータ生成エラー: %s", e)
        return SampleTaskDataResponse(
            created_notes=[],
            message=f"エラーが発生しました: {e!s}",
        )
