import {
  SerendieSymbolUser,
  SerendieSymbolClipboard,
  SerendieSymbolCheckCircle,
  SerendieSymbolChevronLeft,
  SerendieSymbolRefresh,
  SerendieSymbolDownload,
  SerendieSymbolPhone,
} from "@serendie/symbols";
import { Button, List, ListItem, Divider } from "@serendie/ui";
import { Container, Flex, Wrap } from "@styled-system/jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuthStatus, logout } from "@/api/auth/oauth";
import "@/assets/style.css";
import { Body, Headline } from "@/components/typography";

const AuthCheck: React.FC = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = React.useState<string>("");
  const [boardId, setBoardId] = React.useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    const setMiroInfo = async () => {
      setUserId((await miro.board.getUserInfo()).id);
      setBoardId((await miro.board.getInfo()).id);
    };
    const checkAuthStatus = async () => {
      const status = await getAuthStatus();
      if (status) {
        setIsAuthenticated(status);
      } else {
        setIsAuthenticated(false);
      }
    };
    void setMiroInfo();
    void checkAuthStatus();
  }, []);

  const handleBack = () => {
    void navigate("/miro");
  };

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "auto",
        backgroundImage: 'url("/portrait2.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex
        width="100%"
        height="100%"
        gap={8}
        direction="column"
        align="center"
        justify="center"
      >
        <Flex
          width="90%"
          direction="column"
          align="center"
          style={{
            borderRadius: "64px",
            backdropFilter: "blur(128px)",
            padding: "16px",
          }}
        >
          <Headline variant="small">認証確認画面</Headline>
          <Body style={{ width: "90%", textWrap: "wrap" }}>
            うまく動作しない場合、以下の手順をお試しください。
          </Body>
          <Wrap
            gap={8}
            align="center"
            justify="center"
            style={{ marginTop: 8, marginBottom: 8 }}
          >
            <Button
              styleType="filled"
              size="small"
              onClick={() => {
                const handleLogout = async () => {
                  await logout()
                    .then(async () => {
                      console.info("Logged out successfully.");
                      await miro.board.ui.closePanel();
                    })
                    .catch((error) => {
                      console.error("Logout failed:", error);
                    });
                };
                void handleLogout();
              }}
              rightIcon={<SerendieSymbolRefresh />}
            >
              ① リセット
            </Button>
            <Button
              styleType="filled"
              size="small"
              onClick={() => {
                const url =
                  "https://miro.com/app-install/?response_type=code&client_id=3458764630509406517&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Foauth%2Fredirect";
                window.open(url, "_blank");
              }}
              rightIcon={<SerendieSymbolDownload />}
            >
              ② 再インストール
            </Button>
            <Button
              styleType="filled"
              size="small"
              onClick={() => {
                const url =
                  "https://miro.com/app-install/?response_type=code&client_id=3458764630509406517&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Foauth%2Fredirect";
                window.open(url, "_blank");
              }}
              rightIcon={<SerendieSymbolPhone />}
            >
              ③ お問い合わせ
            </Button>
          </Wrap>
          <Divider color="dark" />
          <Button
            styleType="outlined"
            size="small"
            leftIcon={<SerendieSymbolChevronLeft />}
            style={{ marginTop: 8, marginBottom: 8 }}
            onClick={handleBack}
          >
            戻る
          </Button>
        </Flex>
        <Flex
          width="90%"
          direction="column"
          align="center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "32px",
            backdropFilter: "blur(128px)",
            padding: "4px",
          }}
        >
          <List>
            <ListItem
              title={`UserID: ${userId}`}
              leftIcon={<SerendieSymbolUser name="placeholder" />}
            />
            <ListItem
              title={`BoardID: ${boardId}`}
              leftIcon={<SerendieSymbolClipboard name="placeholder" />}
            />
            <ListItem
              title={`Status: ${isAuthenticated}`}
              leftIcon={<SerendieSymbolCheckCircle name="placeholder" />}
            />
          </List>
        </Flex>
      </Flex>
    </Container>
  );
};
export default AuthCheck;
