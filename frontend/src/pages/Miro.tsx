import React, { useState } from "react";
import { Container, Center, Wrap } from "@styled-system/jsx";
import { Button, Divider, IconButton, ModalDialog } from "@serendie/ui";
import {
  SerendieSymbolPlaceholder,
  SerendieSymbolFlag,
  SerendieSymbolGear,
  SerendieSymbolQuestion,
} from "@serendie/symbols";
import { useNavigate } from "react-router-dom";
import { Title, Headline } from "@/styles";
import "@/assets/style.css";

const Miro: React.FC = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);

  React.useEffect(() => {}, []);

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "auto",
      }}
    >
      <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
        <Center
          flexDirection="row"
          alignItems="center"
          gap={12}
          justifyContent="flex-start"
          position="relative"
          width="100%"
        >
          <IconButton
            icon={<SerendieSymbolGear />}
            shape="circle"
            styleType="outlined"
            size="small"
            onClick={() => navigate("/config/config")}
            aria-label="戻る"
            style={{ position: "absolute", left: 10 }}
          />
          <Center flexDirection="row" alignItems="center" gap={12} width="100%">
            <img src="/icon.svg" alt="Miro-Boost" width="10%" />
            <Headline variant="small">Miro Boost</Headline>
          </Center>
          <IconButton
            icon={<SerendieSymbolQuestion />}
            shape="circle"
            styleType="outlined"
            size="small"
            onClick={() => {
              setIsOpenModal(true);
            }}
            aria-label="ヘルプ"
            style={{ position: "absolute", right: 10 }}
          />
        </Center>
        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <Title>生成AI機能</Title>
          <Button onClick={() => navigate("/miro/group")}>
            🤖セマンティックグルーピング
          </Button>
          <Button onClick={() => navigate("/miro/task")}>
            📝タスク切り出し
          </Button>
          <Button onClick={() => navigate("/miro/typography")}>
            ✏️タイポグラフィ
          </Button>
          <Button onClick={() => navigate("/miro/demo")}>✏️デモ</Button>
        </Center>

        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <Title>お問い合わせ</Title>
          <Wrap gap={12} align="center" justify="center">
            <Button
              leftIcon={<SerendieSymbolFlag />}
              size="small"
              styleType="outlined"
              onClick={() => navigate("/auth/check")}
            >
              トラブルシューティング
            </Button>
            <Button
              leftIcon={<SerendieSymbolPlaceholder />}
              size="small"
              styleType="outlined"
              onClick={() => {}}
            >
              TBD
            </Button>
          </Wrap>
        </Center>

        <ModalDialog
          cancelButtonLabel="閉じる"
          submitButtonLabel="詳細"
          title="ヘルプ"
          isOpen={isOpenModal}
          onOpenChange={(e) => setIsOpenModal(e.open)}
          onButtonClick={() => {
            setIsOpenModal(false);
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalDialog>
      </Center>
    </Container>
  );
};
export default Miro;
