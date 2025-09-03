import { ProgressIndicator } from "@serendie/ui";
import { Container, Flex } from "@styled-system/jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchAuthStatus } from "@/api/oauth";
import "@/assets/style.css";

/**
 * Authentication Start Page.
 *
 * @returns {React.JSX.Element}
 */
const AuthStart: React.FC = (): React.JSX.Element => {
  const navigate = useNavigate();

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const start = Date.now();

    const run = () => {
      // 1秒は必ず表示する
      timeoutId = setTimeout(
        () => {
          // 認証ステータスを確認する.
          void (async () => {
            let isAuthenticated: boolean | undefined = false;
            try {
              const userId = (await miro.board.getUserInfo()).id;
              const boardId = (await miro.board.getInfo()).id;
              isAuthenticated = await fetchAuthStatus(userId, boardId);
            } catch (_e) {
              isAuthenticated = false;
            }
            console.log(`isAuthenticated: ${isAuthenticated}`);

            if (isAuthenticated) {
              // 認証されていれば、アプリ画面に遷移.
              void navigate("/miro");
            } else {
              void navigate("/auth/signin");
            }
          })();
        },
        Math.max(0, 500 - (Date.now() - start)),
      );
    };
    void run();
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        // backgroundImage: 'url("/src/assets/portrait.svg")',
        backgroundImage: 'url("/portrait.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex
        width="100%"
        height="100%"
        direction="column"
        align="center"
        justify="center"
      >
        <Flex
          direction="column"
          align="center"
          style={{
            borderRadius: "64px",
            backdropFilter: "blur(128px)",
            padding: "32px",
          }}
        >
          <ProgressIndicator size="large" color="white" />
        </Flex>
      </Flex>
    </Container>
  );
};
export default AuthStart;
