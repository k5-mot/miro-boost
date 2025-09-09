const baseUrl = String(import.meta.env.VITE_PUBLIC_BACKEND_URL);
/**
 * APIの認証ステータスを取得.
 *
 * @async
 * @returns {Promise<boolean | undefined>}
 */
export const getAuthStatus = async (): Promise<boolean | undefined> => {
	return await Promise.all([miro.board.getUserInfo(), miro.board.getInfo()])
		.then(([userInfo, boardInfo]) => {
			const userId = userInfo.id;
			const boardId = boardInfo.id;
			return fetch(
				`${baseUrl}/api/oauth/status?user_id=${encodeURIComponent(userId)}&board_id=${encodeURIComponent(boardId)}`,
			);
		})
		.then((response) => {
			return response.json() as Promise<{
				user_id?: string;
				status?: boolean;
				session_id?: string;
				csrf_token?: string;
			}>;
		})
		.then((responseBody) => {
			if (!responseBody) {
				throw new Error(`HTTP error! responseBody is undefined.`);
			} else if (!("status" in responseBody)) {
				throw new Error(`HTTP error! status is undefined.`);
			}
			return responseBody.status;
		})
		.catch((e) => {
			console.error("getAuthStatus.: ", e);
			return undefined;
		});
};

/**
 * APIの認証URLを取得.
 *
 * @async
 * @returns {Promise<string | undefined>}
 */
export const getAuthUrl = async (): Promise<string | undefined> => {
	return await Promise.all([miro.board.getUserInfo(), miro.board.getInfo()])
		.then(([userInfo, boardInfo]) => {
			const userId = userInfo.id;
			const boardId = boardInfo.id;
			return fetch(
				`${baseUrl}/api/oauth/authorize?user_id=${encodeURIComponent(userId)}&board_id=${encodeURIComponent(boardId)}`,
			);
		})
		.then((response) => {
			return response.json() as Promise<{ auth_url?: string }>;
		})
		.then((responseBody) => {
			if (!responseBody) {
				throw new Error(`HTTP error! responseBody is undefined.`);
			} else if (!("auth_url" in responseBody)) {
				throw new Error(`HTTP error! auth_url is undefined.`);
			}
			return responseBody.auth_url;
		})
		.catch((e) => {
			console.error("getAuthUrl.: ", e);
			return undefined;
		});
};

/**
 * APIのログアウトを実行.
 *
 * @async
 * @returns {Promise<void>}
 */
export const logout = async (): Promise<void> => {
	return await Promise.all([miro.board.getUserInfo()])
		.then(([userInfo]) => {
			// ログアウトAPIをコール.
			const userId = userInfo.id;
			return fetch(
				`${baseUrl}/api/oauth/revoke?user_id=${encodeURIComponent(userId)}`,
				{
					method: "POST",
				},
			);
		})
		.then((response) => {
			// レスポンスをチェック.
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return;
		})
		.catch((e) => {
			console.error("logout error", e);
		});
};
