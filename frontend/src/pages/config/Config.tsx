import React, { useState } from "react";
import { Container, Center } from "@styled-system/jsx";
import {
  Button,
  Divider,
  IconButton,
  TabItem,
  Tabs,
  TextField,
} from "@serendie/ui";
import {
  SerendieSymbolChevronLeft,
  SerendieSymbolGear,
} from "@serendie/symbols";
import { useNavigate } from "react-router-dom";
import { Title, Headline, Body } from "@/styles";
import "@/assets/style.css";

const Config: React.FC = (): React.JSX.Element => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<number>(0);
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
        <Center
          flexDirection="row"
          alignItems="center"
          gap={12}
          justifyContent="flex-start"
          position="relative"
          width="100%"
        >
          <IconButton
            icon={<SerendieSymbolChevronLeft />}
            shape="circle"
            styleType="outlined"
            size="small"
            onClick={() => navigate("/miro")}
            aria-label="戻る"
            style={{ position: "absolute", left: 10 }}
          />
          <Center flexDirection="row" alignItems="center" gap={12} width="100%">
            <SerendieSymbolGear />
            <Headline variant="small">設定</Headline>
          </Center>
        </Center>
        <Divider />

        <Tabs
          defaultValue="0"
          style={{ width: "100%" }}
          onValueChange={(details) => {
            setTab(Number(details.value));
          }}
        >
          <TabItem title="Default" value="0" />
          <TabItem title="Azure OpenAI" value="1" disabled />
          <TabItem title="AWS Bedrock" value="2" disabled />
          <TabItem title="Google VertexAI" value="3" disabled />
        </Tabs>
        <Divider />

        {(tab === 0 && (
          <Center flexDirection="column" width="90%" gap={8} paddingY={8}>
            <Title>Default</Title>
            <Body>
              デフォルト設定の場合、Google Gemini-2.0-Flashが使用されます.
              <br />
              また、ユーザ情報の収集を行います.
            </Body>
          </Center>
        )) ||
          (tab === 1 && (
            <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
              <Title>Azure OpenAI</Title>
              <TextField
                label="Base URL"
                placeholder="Azure OpenAI Base URL"
                style={{ width: "100%" }}
              />
              <TextField
                label="API Key"
                placeholder="Azure OpenAI API Key"
                style={{ width: "100%" }}
              />
              <TextField
                label="Model ID"
                placeholder="Azure OpenAI Model ID"
                style={{ width: "100%" }}
              />
              <Divider />

              <Button onClick={() => {}}>保存</Button>
            </Center>
          )) ||
          (tab === 2 && (
            <>
              <Title>AWS Bedrock</Title>
              <TextField
                label="AWS Access Key"
                placeholder="AWS Bedrock Access Key"
                style={{ width: "100%" }}
              />
              <TextField
                label="AWS Secret Key"
                placeholder="AWS Bedrock Secret Key"
                style={{ width: "100%" }}
              />
              <TextField
                label="AWS Session Token"
                placeholder="AWS Bedrock Session Token"
                style={{ width: "100%" }}
              />
              <TextField
                label="AWS Region"
                placeholder="AWS Bedrock Region"
                style={{ width: "100%" }}
              />
              <Divider />

              <Button onClick={() => {}}>保存</Button>
            </>
          )) ||
          (tab === 3 && (
            <>
              <Title>Google VertexAI</Title>
              <TextField
                label="API Key"
                placeholder="Google VertexAI API Key"
                style={{ width: "100%" }}
              />
              <Divider />
              <Button onClick={() => {}}>保存</Button>
            </>
          ))}
      </Center>
    </Container>
  );
};
export default Config;
