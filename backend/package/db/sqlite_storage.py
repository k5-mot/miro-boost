import datetime
import sqlite3

from miro_api.storage import State, Storage

SQLITE_PATH = "./db/user_sessions.sqlite3"


class SQLiteStorage(Storage):
    """SQLiteベースのStorage実装."""

    def __init__(
        self,
        user_id: str,
        session_id: str,
    ) -> None:
        """SQLiteStorageの初期化."""
        self.user_id = user_id
        self.session_id = session_id
        self._init_db()

    def _init_db(self) -> None:
        """データベースとテーブルを初期化."""
        conn = sqlite3.connect(SQLITE_PATH)
        try:
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS user_sessions (
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

    def get(self) -> State | None:
        """ユーザーのセッション状態を取得."""
        conn = sqlite3.connect(SQLITE_PATH)
        try:
            # UserIDに基づいてセッション状態を取得.
            cur = conn.execute(
                """
                SELECT access_token, refresh_token, token_expires_at
                FROM user_sessions WHERE user_id = ?
                """,
                (self.user_id,),
            )
            row = cur.fetchone()

            # レコードが存在しない場合はNoneを返す.
            if not row:
                return None
            access_token, refresh_token, token_expires_at = row

            # token_expires_atがISOフォーマットでない場合はNoneに変換
            expires_at = None
            if token_expires_at:
                try:
                    expires_at = datetime.datetime.fromisoformat(token_expires_at)
                except ValueError:
                    expires_at = None

            return State(
                access_token=access_token or "",
                refresh_token=refresh_token or None,
                token_expires_at=expires_at,
            )
        finally:
            conn.close()

    def set(
        self,
        state: State,
        session_id: str | None = None,
        csrf_token: str | None = None,
    ) -> None:
        """ユーザーのセッション状態を保存."""
        conn = sqlite3.connect(self.SQLITE_PATH)
        try:
            # 既存レコードがあればUPDATE、なければINSERT
            # テーブル名はクラス変数からのみ取得し、値部分はパラメータ化するのだ
            # 特定のuser_idのセッションが存在するか確認.
            cur = conn.execute(
                """
                SELECT user_id
                FROM user_sessions
                WHERE user_id = ?
                """,
                (self.user_id,),
            )
            is_exists = cur.fetchone() is not None
            token_expires_at = (
                state.token_expires_at.isoformat() if state.token_expires_at else None
            )
            if is_exists:
                conn.execute(
                    """
                    UPDATE user_sessions
                    SET
                        access_token = ?,
                        refresh_token = ?,
                        token_expires_at = ?,
                        session_id = COALESCE(?, session_id),
                        csrf_token = COALESCE(?, csrf_token)
                    WHERE user_id = ?
                    """,
                    (
                        state.access_token,
                        state.refresh_token,
                        token_expires_at,
                        session_id,
                        csrf_token,
                        self.user_id,
                    ),
                )
                conn.execute(
                    """
                    INSERT INTO user_sessions (
                        user_id,
                        session_id,
                        csrf_token,
                        access_token,
                        refresh_token,
                        token_expires_at
                    )
                    VALUES (?, ?, ?, ?, ?, ?)
                    """,
                    (
                        self.user_id,
                        session_id or "",
                        csrf_token or "",
                        state.access_token,
                        state.refresh_token,
                        token_expires_at,
                    ),
                )
            conn.commit()
        finally:
            conn.close()

    def get_session_info(self) -> dict:
        """user_id, session_id, csrf_tokenを取得."""
        conn = sqlite3.connect(self.SQLITE_PATH)
        try:
            cur = conn.execute(
                "SELECT user_id,                                                           session_id, csrf_token FROM user_sessions WHERE user_id = ?",
                (self.user_id,),
            )
            row = cur.fetchone()
            if not row:
                return {}
            return {"user_id": row[0], "session_id": row[1], "csrf_token": row[2]}
        finally:
            conn.close()
