from typing import Dict, List

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from package.common import get_logger
from package.util.layout_sticky_notes import (
    calculate_group_layout,
    create_sticky_notes_on_board,
    get_layout_dimensions,
    layout_sticky_notes,
    test_create_sample_sticky_notes,
)

logger = get_logger()
router = APIRouter()


class LayoutRequest(BaseModel):
    """レイアウト計算リクエスト."""

    groups: Dict[str, List[str]]


class CreateLayoutRequest(BaseModel):
    """付箋レイアウト作成リクエスト."""

    user_id: str
    board_id: str
    groups: Dict[str, List[str]]


class LayoutResponse(BaseModel):
    """レイアウト計算レスポンス."""

    layout_data: Dict[str, dict]
    dimensions: Dict[str, int]


class CreateLayoutResponse(BaseModel):
    """付箋作成レスポンス."""

    created_notes: Dict[str, List[str]]
    total_created: int


@router.post("/calculate", response_model=LayoutResponse)
def calculate_layout(request: LayoutRequest) -> LayoutResponse:
    """グループの階層レイアウトを計算する."""
    try:
        logger.info("レイアウト計算リクエスト - グループ数: %d", len(request.groups))

        # レイアウト計算を実行
        layout_data = calculate_group_layout(request.groups)

        # 寸法を計算
        width, height = get_layout_dimensions(request.groups)
        dimensions = {"width": width, "height": height}

        logger.info("レイアウト計算完了 - 寸法: %dx%d", width, height)

        return LayoutResponse(layout_data=layout_data, dimensions=dimensions)

    except Exception as e:
        logger.error("レイアウト計算エラー: %s", str(e))
        raise HTTPException(
            status_code=500, detail=f"レイアウト計算に失敗しました: {str(e)}"
        )


@router.post("/create", response_model=CreateLayoutResponse)
def create_layout_on_board(request: CreateLayoutRequest) -> CreateLayoutResponse:
    """計算されたレイアウトでMiroボードに付箋を作成する."""
    try:
        logger.info(
            "付箋作成リクエスト - ユーザー: %s, ボード: %s, グループ数: %d",
            request.user_id,
            request.board_id,
            len(request.groups),
        )

        # 付箋を作成
        created_notes = create_sticky_notes_on_board(
            request.user_id, request.board_id, request.groups
        )

        # 作成された付箋の総数を計算
        total_created = sum(len(notes) for notes in created_notes.values())

        logger.info("付箋作成完了 - 総数: %d個", total_created)

        return CreateLayoutResponse(
            created_notes=created_notes, total_created=total_created
        )

    except Exception as e:
        logger.error("付箋作成エラー: %s", str(e))
        raise HTTPException(status_code=500, detail=f"付箋作成に失敗しました: {str(e)}")


@router.post("/sample", response_model=CreateLayoutResponse)
def create_sample_layout(user_id: str, board_id: str) -> CreateLayoutResponse:
    """サンプルデータでMiroボードに付箋を作成する."""
    try:
        logger.info(
            "サンプル付箋作成リクエスト - ユーザー: %s, ボード: %s", user_id, board_id
        )

        # サンプル付箋を作成
        created_notes = test_create_sample_sticky_notes(user_id, board_id)

        # 作成された付箋の総数を計算
        total_created = sum(len(notes) for notes in created_notes.values())

        logger.info("サンプル付箋作成完了 - 総数: %d個", total_created)

        return CreateLayoutResponse(
            created_notes=created_notes, total_created=total_created
        )

    except Exception as e:
        logger.error("サンプル付箋作成エラー: %s", str(e))
        raise HTTPException(
            status_code=500, detail=f"サンプル付箋作成に失敗しました: {str(e)}"
        )


@router.get("/health")
def health_check():
    """ヘルスチェックエンドポイント."""
    return {"status": "ok", "service": "layout_api"}
