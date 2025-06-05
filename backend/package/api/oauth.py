import secrets
import uuid
from typing import Annotated, Any

from fastapi import APIRouter, Cookie, Depends, HTTPException, Query, Request, Response
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse
from miro_api.miro_api_wrapper import Miro
from miro_api.storage import InMemoryStorage, Storage
from pydantic import BaseModel, Field

from package.db.session import Session, SessionManager
from package.util import get_logger, get_settings

settings = get_settings()
logger = get_logger()
router = APIRouter()


session_manager = SessionManager()


@router.get("/status")
def status(user_id: Annotated[str, Query(...)] = "") -> dict:
    """セッションの状態を取得."""
    session = session_manager.get_session_by_user_id(user_id)
    return {
        "user_id": session.user_id,
        "status": session_manager.get_authentication_status(user_id),
        "session_id": session.session_id,
        "csrf_token": session.csrf_token,
    }


@router.api_route("/authorize", methods=["GET", "POST"])
def authorize(
    response: Response, user_id: Annotated[str, Query(...)] = ""
) -> JSONResponse:
    """セッションを確立し、Miro OAuth画面の認証URLを返す."""
    # session = session_manager.get_session_by_user_id(user_id)
    auth_url = session_manager.get_authentication_url(user_id)
    # response.set_cookie(
    #     key="session_id", value=session.session_id, httponly=True, samesite="lax"
    # )
    return JSONResponse({"url": auth_url})


@router.api_route("/redirect", methods=["GET", "POST"])
def redirect(
    code: str = "",
    state: str = "",
    team_id: str = "",
) -> RedirectResponse:
    """Miroからのリダイレクトを受けてアクセストークンを取得する."""
    redirect_url = session_manager.get_redirect_url(
        code=code, state=state, team_id=team_id
    )
    return RedirectResponse(redirect_url)


@router.post("/refresh")
def logout(
    response: Response, user_id: Annotated[str, Query(...)] = ""
) -> JSONResponse:
    """セッションを削除してログアウトするのだ."""
    status = session_manager.clear_session(user_id)
    # session = session_manager.find_sessions_by_user_id(user_id)
    # session.csrf_token = ""
    # session.storage = InMemoryStorage()
    return JSONResponse({"message": "Logged out successfully", "status": str(status)})
