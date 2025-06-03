import * as React from "react";
import { Container, Center } from "../../../styled-system/jsx";
import { Accordion, AccordionGroup, Button, Divider } from "@serendie/ui";
import { SerendieSymbolVerifiedBadge } from "@serendie/symbols";
import { useNavigate } from "react-router-dom";
import { fetchAuthUrl } from "../../api/oauth";
import "../../assets/style.css";

const Miro: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const authUrl = fetchAuthUrl();

    // 認証されていなければ、サインイン画面に遷移.
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
          <h3>Signin</h3>
        </Center>
        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <h4>機能A群</h4>
          <Button onClick={() => navigate("/miro/group")}>
            付箋を追加するのだ！
          </Button>
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
