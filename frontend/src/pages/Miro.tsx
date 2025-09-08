import {
  SerendieSymbolFlag,
  SerendieSymbolPlaceholder,
} from "@serendie/symbols";
import { Button, Divider,Tabs,TabItem } from "@serendie/ui";
import { Center, Container, Wrap } from "@styled-system/jsx";
import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
import {  Title } from "@/components/typography";
import "@/assets/style.css";
import logo from "@/assets/logo.png";


const Miro: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

    const tabs = [
    { label: 'タブ1', content: <div>内容1</div> },
    { label: 'タブ2', content: <div>内容2</div> },
    { label: 'タブ3', content: <div>内容3</div> },
  ];

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
      <Tabs>
        <TabItem title="ホーム" value="home" />
        <TabItem title="生成AI機能" value="ai" />
        <TabItem title="お問い合わせ" value="contact" />
      </Tabs>
      <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
        <Center
          flexDirection="row"
          alignItems="center"
          gap={12}
          justifyContent="flex-start"
          position="relative"
          width="100%"
        >
          <Center flexDirection="row" alignItems="center" gap={12} width="100%">
            <img src={logo} alt={logo.toString()} width="90%" />
          </Center>
        </Center>

        <Divider />

        <Center flexDirection="column" width="80%" gap={8} paddingY={8}>
          <Title>生成AI機能</Title>
          <Button
            onClick={() => {
              void navigate("/miro/group");
            }}
            style={{ width: "100%" }}
          >
            🤖セマンティックグルーピング
          </Button>
          <Button
            leftIcon={<SerendieSymbolPlaceholder/>}
            onClick={() => {
              void navigate("/miro/task");
            }}
            style={{ width: "100%" }}
          >
            📝タスク切り出し
          </Button>
          <Button
            onClick={() => {
              void navigate("/miro/typography");
            }}
            style={{ width: "100%" }}
          >
            ✏️タイポグラフィ
          </Button>
          <Button
            onClick={() => {
              void navigate("/miro/demo");
            }}
            style={{ width: "100%" }}
          >
            ✏️デモ
          </Button>
        </Center>

        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <Title>お問い合わせ</Title>
          <Wrap gap={12} align="center" justify="center">
            <Button
              leftIcon={<SerendieSymbolFlag />}
              size="small"
              styleType="outlined"
              onClick={() => {
                void navigate("/auth/check");
              }}
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

      </Center>
    </Container>
  );
};
export default Miro;
