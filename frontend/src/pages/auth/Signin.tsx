import * as React from "react";
import { Button, List, ListItem } from "@serendie/ui";
import { useNavigate } from "react-router-dom";
import { fetchAuthUrl, fetchAuthStatus } from "../../api/oauth";
import { Container, Flex } from "../../../styled-system/jsx";
import {
  SerendieSymbolUser,
  SerendieSymbolClipboard,
  SerendieSymbolCheckCircle,
} from "@serendie/symbols";

import "../../assets/style.css";

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
      const status = await fetchAuthStatus();
      if (status) {
        setIsAuthenticated(status);
      } else {
        setIsAuthenticated(false);
      }
    };
    setMiroInfo();
    checkAuthStatus();
  }, []);

  const openAuthModal = async () => {
    console.log("Opening auth modal...");
    const authUrl = await fetchAuthUrl();
    console.log(`authUrl: ${authUrl}`);
    if (authUrl) {
      const { waitForClose } = await miro.board.ui.openModal<string, string>({
        data: "data",
        url: authUrl,
        width: 600,
        height: 1200,
      });
      console.log(await waitForClose());
      // navigate("/miro");
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
        backgroundImage: 'url("/src/assets/portrait_auth.svg")',
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
          <h4>認証が必要です</h4>
          <p>このアプリを使用するには、認証が必要です。</p>
          <p>認証を行うには、下のボタンをクリックしてください。</p>
          <Button
            styleType="filled"
            color="primary"
            style={{ margin: 8 }}
            onClick={() => openAuthModal()}
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
              leftIcon={<SerendieSymbolUser name={"placeholder"} />}
            />
            <ListItem
              title={`BoardID: ${boardId}`}
              leftIcon={<SerendieSymbolClipboard name={"placeholder"} />}
            />
            <ListItem
              title={`Status: ${isAuthenticated}`}
              leftIcon={<SerendieSymbolCheckCircle name={"placeholder"} />}
            />
          </List>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Signin;
