import * as React from "react";
import { Container, Center } from "../../../styled-system/jsx";
import { Accordion, AccordionGroup, Button, Divider } from "@serendie/ui";
import { SerendieSymbolVerifiedBadge } from "@serendie/symbols";
import { useNavigate } from "react-router-dom";

import "../../assets/style.css";
import "../../assets/title.css";

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

const MiroGroup: React.FC = () => {
  const navigate = useNavigate();

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
          <h3>Group</h3>
        </Center>
        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <h4>機能A群</h4>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
          <Button onClick={() => addSticky()}>付箋を追加するのだ！</Button>
        </Center>

        <Divider />

        <Button styleType="outlined" onClick={() => navigate("/miro")}>
          戻る
        </Button>
      </Center>
    </Container>
  );
};

export default MiroGroup;
