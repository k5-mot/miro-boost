import * as React from "react";
import { Container, Center } from "../../styled-system/jsx";
import { Accordion, AccordionGroup, Button, Divider } from "@serendie/ui";
import { SerendieSymbolVerifiedBadge } from "@serendie/symbols";
import { useNavigate } from "react-router-dom";
import { fetchAuthStatus } from "../api/oauth";

import "../assets/style.css";

/**
 * 付箋生成.
 *
 * @async
 * @returns {*}
 */
async function addSticky() {
  const stickyNote = await miro.board.createStickyNote({
    content: "Hello, World!",
  });

  await miro.board.viewport.zoomTo(stickyNote);
}

const Miro: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetch = async () => {
      // 認証されていなければ、サインイン画面に遷移.
      const status = await fetchAuthStatus();
      if (!status) {
        navigate("/auth/signin");
      }
    };
    fetch();
  }, []);

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
        <Center flexDirection="row" alignItems="center" gap={12}>
          <SerendieSymbolVerifiedBadge />
          <h3>Welcome</h3>
        </Center>
        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <h4>機能A群</h4>
          <Button onClick={() => navigate("/miro/group")}>
            付箋を追加するのだ！
          </Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
        </Center>

        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <h4>機能B群</h4>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
        </Center>

        <Divider />

        <AccordionGroup width="100%">
          <Accordion
            value=""
            title="問い合わせ"
            description="Accordion Description"
            isLeftIcon
          />
        </AccordionGroup>
      </Center>
    </Container>
  );
};
export default Miro;
