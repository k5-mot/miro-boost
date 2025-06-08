import datetime
import secrets
import sqlite3
import uuid

from miro_api.miro_api_wrapper import Miro
from miro_api.storage import InMemoryStorage, State
from pydantic import BaseModel, Field

from package.util import get_logger, get_settings

settings = get_settings()
logger = get_logger()

CSRF_TOKEN_LENGTH = 64


class Session(BaseModel):
    user_id: str = Field(default="")
    session_id: str = Field(default="")
    csrf_token: str = Field(default="")
    access_token: str = Field(default="")
    refresh_token: str | None = Field(default=None)
    token_expires_at: datetime.datetime | None = Field(default=None)

    model_config = {"arbitrary_types_allowed": True}


class SessionManager:
    """セッション管理クラス (SQLite対応) なのだ."""

    def __init__(self) -> None:
        """SessionManagerを初期化."""
        self.db_path = "./db/user_sessions.sqlite3"
        self.table_name = "user_sessions"
        self.__init_db__()

    def __init_db__(self) -> None:
        """SQLiteのDBとテーブルを初期化."""
        conn = sqlite3.connect(self.db_path)
        try:
            conn.execute(
                f"""
                CREATE TABLE IF NOT EXISTS {self.table_name} (
                    user_id TEXT PRIMARY KEY,
                    session_id TEXT,
                    csrf_token TEXT,
                    access_token TEXT,
                    refresh_token TEXT,
                    token_expires_at TEXT
                )
                """
            )
            conn.commit()
        finally:
            conn.close()

    def get_session_by_user_id(self, user_id: str) -> Session:
        """指定したuser_idのセッションを取得または新規作成."""
        conn = sqlite3.connect(self.db_path)
        try:
            # SQLiteからuser_idを元にセッションを取得
            query = (
                "SELECT "
                "  user_id, "
                "  session_id, "
                "  csrf_token, "
                "  access_token, "
                "  refresh_token, "
                "  token_expires_at "
                "FROM " + self.table_name + " WHERE user_id = ?"
            )
            cur = conn.execute(
                query,
                (user_id,),
            )
            row = cur.fetchone()

            # 取得できれば、セッションを返す.
            if row:
                logger.debug("Session found for row: %s", row)
                return Session(
                    user_id=row[0],
                    session_id=row[1],
                    csrf_token=row[2],
                    access_token=row[3],
                    refresh_token=row[4] or None,
                    token_expires_at=datetime.datetime.fromisoformat(row[5])
                    if row[5]
                    else None,  # naiveなdatetimeを使用
                )
            # 取得できなければ、新規作成.
            # 新規セッションを作成する場合は、token_expires_atはNoneにする
            # (Miroライブラリが内部でnaiveなdatetimeを使うため)
            session = Session(
                user_id=user_id,
                session_id=str(uuid.uuid4()),
                csrf_token="",
                access_token="",
                refresh_token=None,
                token_expires_at=None,
            )
            conn.execute(
                "INSERT INTO " + self.table_name + " "
                "("
                "  user_id, "
                "  session_id, "
                "  csrf_token, "
                "  access_token, "
                "  refresh_token, "
                "  token_expires_at"
                ") "
                "VALUES (?, ?, ?, ?, ?, ?)",
                (
                    session.user_id,
                    session.session_id,
                    session.csrf_token,
                    "",
                    "",
                    "",
                ),
            )
            conn.commit()
            return session
        finally:
            conn.close()

    def get_session_by_csrf_token(self, csrf_token: str) -> Session | None:
        """指定したcsrf_tokenのセッションを取得."""
        conn = sqlite3.connect(self.db_path)
        try:
            # SQLiteからcsrf_tokenを元にセッションを取得
            cur = conn.execute(
                "SELECT "
                "  user_id, "
                "  session_id, "
                "  csrf_token, "
                "  access_token, "
                "  refresh_token, "
                "  token_expires_at "
                "FROM " + self.table_name + " "
                "WHERE csrf_token = ?",
                (csrf_token,),
            )
            row = cur.fetchone()

            # 取得できなければ、Noneを返す.
            if not row:
                return None

            # 取得できれば、セッションを返す.
            token_expires_at = None
            if row[5]:
                # naiveなdatetimeとして取得する
                dt = datetime.datetime.fromisoformat(row[5])
                # もしタイムゾーン情報があれば、削除する
                if dt.tzinfo is not None:
                    token_expires_at = dt.replace(tzinfo=None)
                else:
                    token_expires_at = dt

            return Session(
                user_id=row[0],
                session_id=row[1],
                csrf_token=row[2],
                access_token=row[3],
                refresh_token=row[4],
                token_expires_at=token_expires_at,
            )
        finally:
            conn.close()

    def get_miro_client(self, user_id: str) -> Miro:
        """指定したuser_idのMiroクライアントを取得."""
        session = self.get_session_by_user_id(user_id)
        logger.debug("user_id: %s", user_id)
        logger.debug("access_token: %s", session.access_token)
        logger.debug("refresh_token: %s", session.refresh_token)
        logger.debug("token_expires_at: %s", session.token_expires_at)

        # 有効なアクセストークンが存在する場合のみStateを作成
        if session.access_token:
            # token_expires_atをnaiveな状態にする
            expires_at = None
            if session.token_expires_at:
                # token_expires_atがawareの場合、naiveにする
                if session.token_expires_at.tzinfo is not None:
                    # タイムゾーン情報を削除して純粋な日時だけにする
                    expires_at = session.token_expires_at.replace(tzinfo=None)
                else:
                    expires_at = session.token_expires_at

            state = State(
                access_token=session.access_token,
                refresh_token=session.refresh_token or None,
                token_expires_at=expires_at,
            )
            storage = InMemoryStorage()
            storage.set(state=state)
            logger.debug("state: %s", state)
            logger.debug("Storage: %s", storage)

            # Miroクライアントを作成して返す
            miro = Miro(
                client_id=settings.MIRO_CLIENT_ID,
                client_secret=settings.MIRO_CLIENT_SECRET,
                redirect_url=settings.MIRO_REDIRECT_URI,
                storage=storage,
            )

            # アクセストークンが設定されていることを確認
            logger.debug("miro.access_token: %s", miro.access_token)
            logger.debug("miro.is_authorized: %s", miro.is_authorized)

            return miro

        # アクセストークンがない場合は空のストレージでクライアントを作成
        storage = InMemoryStorage()
        return Miro(
            client_id=settings.MIRO_CLIENT_ID,
            client_secret=settings.MIRO_CLIENT_SECRET,
            redirect_url=settings.MIRO_REDIRECT_URI,
            storage=storage,
        )

    def get_authentication_status(self, user_id: str) -> bool:
        """指定したuser_idの認証ステータスを取得."""
        miro = self.get_miro_client(user_id)
        logger.debug("status: %s", miro.is_authorized)
        return miro.is_authorized

    def get_authentication_url(self, user_id: str) -> str:
        """指定したuser_idの認証URLを取得."""
        csrf_token = secrets.token_urlsafe(CSRF_TOKEN_LENGTH)[:CSRF_TOKEN_LENGTH]
        conn = sqlite3.connect(self.db_path)
        try:
            conn.execute(
                "UPDATE " + self.table_name + " SET csrf_token = ? WHERE user_id = ? ",
                (
                    csrf_token,
                    user_id,
                ),
            )
            conn.commit()
        finally:
            conn.close()
        miro = self.get_miro_client(user_id)
        return miro.get_auth_url(state=csrf_token)

    def get_redirect_url(
        self, code: str = "", state: str = "", team_id: str = ""
    ) -> str:
        """指定したuser_idのリダイレクトURLを取得."""
        # stateが空の場合は、アプリインストールのフロー.
        #
        # [Note]
        # このフローは、OAuth認証ができるかどうかを確認するのみであり、
        # ここで取得したアクセストークンは、REST APIの呼び出しに使用しない.
        if not state:
            miro = Miro(
                client_id=settings.MIRO_CLIENT_ID,
                client_secret=settings.MIRO_CLIENT_SECRET,
                redirect_url=settings.MIRO_REDIRECT_URI,
                storage=InMemoryStorage(),
            )
            miro.exchange_code_for_access_token(code)
            return (
                # Miroのダッシュボードページ.
                "https://miro.com/app-install-completed"
                f"?client_id={settings.MIRO_CLIENT_ID}"
                f"&team_id={team_id}"
            )

        # stateがある場合は、ユーザ認証のフロー.
        #
        # [Note]
        # このフローは、ユーザごとのアクセストークンを取得するためのものであり、
        # ここで取得したアクセストークンは、REST APIの呼び出しに使用する.
        session = self.get_session_by_csrf_token(state)
        miro = self.get_miro_client(session.user_id)

        logger.debug("user_id: %s", session.user_id)
        miro.exchange_code_for_access_token(code)

        logger.debug("access_token: %s", miro.access_token)
        logger.debug("refresh_token: %s", miro._storage.get().refresh_token)
        logger.debug("token_expires_at: %s", miro._storage.get().token_expires_at)

        # アクセストークンの保存のために、必要な情報を取得
        access_token = miro.access_token
        refresh_token = miro._storage.get().refresh_token or ""

        # トークンの有効期限をnaiveな状態で扱う
        token_expires_at = ""
        if miro._storage.get().token_expires_at:
            # タイムゾーン情報を無視して日時だけを保存
            # 既にnaiveならそのまま、awareならタイムゾーン情報を削除する
            naive_expires_at = miro._storage.get().token_expires_at.replace(tzinfo=None)
            token_expires_at = naive_expires_at.isoformat()

        conn = sqlite3.connect(self.db_path)
        try:
            conn.execute(
                "UPDATE " + self.table_name + " "
                "SET "
                "  access_token = ?, "
                "  refresh_token = ?, "
                "  token_expires_at = ? "
                "WHERE user_id = ?",
                (
                    access_token,
                    refresh_token,
                    token_expires_at,
                    session.user_id,
                ),
            )
            conn.commit()
        finally:
            conn.close()

        # Miroアプリのサインイン完了ページ.
        return f"{settings.FRONTEND_URL}/auth/signed"

    def clear_session(self, user_id: str) -> bool:
        """指定したuser_idのセッションを削除."""
        conn = sqlite3.connect(self.db_path)
        try:
            conn.execute(
                "UPDATE " + self.table_name + " "
                "SET "
                "  csrf_token = '', "
                "  access_token = '', "
                "  refresh_token = '', "
                "  token_expires_at = '' "
                "WHERE user_id = ?",
                (user_id,),
            )
            conn.commit()
        except sqlite3.Error:
            logger.exception("Failed to clear session for user_id %s", user_id)
            return False
        except Exception:
            logger.exception(
                "Unexpected error while clearing session for user_id %s", user_id
            )
            return False
        finally:
            conn.close()
        return True
