const baseUrl = String(import.meta.env.VITE_PUBLIC_BACKEND_URL);

/**
 * APIの認証ステータスを取得.
 *
 * @async
 * @returns {*}
 */
export const fetchAuthStatus = async (
  userId: string,
  boardId: string,
): Promise<boolean | undefined> => {
  try {
    const response = await fetch(
      `${baseUrl}/api/oauth/status?user_id=${encodeURIComponent(userId)}&board_id=${encodeURIComponent(boardId)}`,
    );
    const responseBody = (await response.json()) as {
      user_id?: string;
      status?: boolean;
      session_id?: string;
      csrf_token?: string;
    };
    console.info("Fetch auth status response:", responseBody);
    return responseBody.status;
  } catch (e) {
    console.error("status fetch error", e);
    return undefined;
  }
};

/**
 * APIの認証URLを取得.
 *
 * @async
 * @returns {unknown}
 */
export const fetchAuthUrl = async (
  userId: string,
  boardId: string,
): Promise<string | undefined> => {
  try {
    const response = await fetch(
      `${baseUrl}/api/oauth/authorize?user_id=${encodeURIComponent(userId)}&board_id=${encodeURIComponent(boardId)}`,
    );
    const responseBody = (await response.json()) as { auth_url?: string };
    return responseBody.auth_url;
  } catch (e) {
    console.error("status fetch error", e);
    return undefined;
  }
};

export const fetchLogout = async (): Promise<void> => {
  try {
    const userId = (await miro.board.getUserInfo()).id;
    await fetch(
      `${baseUrl}/api/oauth/revoke?user_id=${encodeURIComponent(userId)}`,
      {
        method: "POST",
      },
    );
  } catch (e) {
    console.error("logout error", e);
  }
};
