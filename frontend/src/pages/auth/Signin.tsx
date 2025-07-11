import {
  SerendieSymbolUser,
  SerendieSymbolClipboard,
  SerendieSymbolCheckCircle,
} from "@serendie/symbols";
import { Button, List, ListItem } from "@serendie/ui";
import { Container, Flex } from "@styled-system/jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchAuthUrl, fetchAuthStatus } from "@/api/oauth";
import "@/assets/style.css";
import { Headline, Body } from "@/styles";

const Signin: React.FC = () => {
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
      const userId = (await miro.board.getUserInfo()).id;
      const boardId = (await miro.board.getInfo()).id;
      const status = await fetchAuthStatus(userId, boardId);
      if (status) {
        setIsAuthenticated(status);
      } else {
        setIsAuthenticated(false);
      }
    };
    void setMiroInfo();
    void checkAuthStatus();
  }, []);

  const openAuthModal = async () => {
    console.log("Opening auth modal...");
    const userId = (await miro.board.getUserInfo()).id;
    const boardId = (await miro.board.getInfo()).id;
    const authUrl = await fetchAuthUrl(userId, boardId);
    console.log(`authUrl: ${authUrl}`);
    if (authUrl) {
      const { waitForClose } = await miro.board.ui.openModal<string, string>({
        data: "data",
        url: authUrl,
        width: 900,
        height: 1200,
      });
      await waitForClose()
        .then(async () => {
          console.info("Auth modal closed, checking auth status...");
          const userId = (await miro.board.getUserInfo()).id;
          const boardId = (await miro.board.getInfo()).id;
          const status = await fetchAuthStatus(userId, boardId);
          if (status) {
            setIsAuthenticated(status);
            console.log("User is authenticated.");
            await navigate("/splash");
          } else {
            setIsAuthenticated(false);
            console.log("User is not authenticated.");
          }
        })
        .catch((error) => {
          console.error("Error waiting for auth modal close:", error);
        });
    } else {
      console.error("Failed to open auth url.");
    }
  };

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundImage: 'url("/portrait_auth.svg")',
        overflow: "auto",
        // backgroundImage: 'url("/src/assets/portrait_auth.svg")',
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
          <Headline variant="small">認証が必要です</Headline>
          <Body variant="small">
            このアプリを使用するには、認証が必要です。
          </Body>
          <Body variant="small">
            認証を行うには、下のボタンをクリックしてください。
          </Body>
          <Button
            styleType="filled"
            color="primary"
            style={{ margin: 8 }}
            onClick={() => {
              void openAuthModal();
            }}
          >
            Miro 認証
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
export default Signin;
