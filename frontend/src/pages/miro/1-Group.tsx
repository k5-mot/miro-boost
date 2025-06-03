import * as React from "react";
import { Container, Center } from "../../../styled-system/jsx";
import { Accordion, AccordionGroup, Button, Divider } from "@serendie/ui";
import { SerendieSymbolVerifiedBadge } from "@serendie/symbols";
import "../../assets/style.css";
import { useNavigate } from "react-router-dom";

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

export default MiroGroup;
