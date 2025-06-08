import * as React from "react";
import { Container, Center, Wrap } from "../../styled-system/jsx";
import { Button, Divider } from "@serendie/ui";
import {
  SerendieSymbolPlaceholder,
  SerendieSymbolVerifiedBadge,
} from "@serendie/symbols";
import { useNavigate } from "react-router-dom";

import "../assets/style.css";
import "../assets/title.css";

const Miro: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {}, []);

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
          <h3>Miro BOOST</h3>
        </Center>
        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <h4>機能A群</h4>
          <Button onClick={() => navigate("/miro/group")}>付箋を追加</Button>
          <Button onClick={() => {}}>placeholder</Button>
          <Button onClick={() => {}}>placeholder</Button>
          <Button onClick={() => {}}>placeholder</Button>
          <Button onClick={() => {}}>placeholder</Button>
          <Button onClick={() => {}}>placeholder</Button>
        </Center>

        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <h4>お問い合わせ</h4>
          <Wrap gap={12} align="center" justify="center">
            <Button
              leftIcon={<SerendieSymbolPlaceholder />}
              size="small"
              styleType="outlined"
              onClick={() => navigate("/auth/check")}
            >
              トラブルシューティング
            </Button>
          </Wrap>
        </Center>
      </Center>
    </Container>
  );
};
export default Miro;
