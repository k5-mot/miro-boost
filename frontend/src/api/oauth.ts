const baseUrl = String(import.meta.env.VITE_PUBLIC_BACKEND_URL);

/**
 * APIの認証ステータスを取得.
 *
 * @async
 * @returns {*}
 */
export const fetchAuthStatus = async (): Promise<boolean | undefined> => {
  try {
    const userId = (await miro.board.getUserInfo()).id;
    const boardId = (await miro.board.getInfo()).id;
    const response = await fetch(
      `${baseUrl}/api/oauth/status?user_id=${encodeURIComponent(userId)}&board_id=${encodeURIComponent(boardId)}`
    );
    const responseBody: {
      user_id?: string;
      status?: boolean;
      session_id?: string;
      csrf_token?: string;
    } = await response.json();
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
export const fetchAuthUrl = async (): Promise<string | undefined> => {
  try {
    const userId = (await miro.board.getUserInfo()).id;
    const boardId = (await miro.board.getInfo()).id;
    const response = await fetch(
      `${baseUrl}/api/oauth/authorize?user_id=${encodeURIComponent(userId)}&board_id=${encodeURIComponent(boardId)}`
    );
    const responseBody: {
      url?: string;
    } = await response.json();
    return responseBody.url;
  } catch (e) {
    console.error("status fetch error", e);
    return undefined;
  }
};
