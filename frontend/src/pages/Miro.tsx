import {
  SerendieSymbolFlag,
  SerendieSymbolPlaceholder,
} from "@serendie/symbols";
import { Button, Divider, TabItem, Tabs } from "@serendie/ui";
import { Center, Container, Wrap } from "@styled-system/jsx";
import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "@/components/typography";
import "@/assets/style.css";
import logo from "@/assets/logo.png";
import DemoTab from "@/features/Miro/DemoTab";
import GenericTab from "@/features/Miro/GenericTab";
import ScrumTab from "@/features/Miro/ScrumTab";

const Miro: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("generic");

  const tabs = [
    { title: "汎用機能", value: "generic", component: <GenericTab /> },
    { title: "スクラム機能", value: "scrum", component: <ScrumTab /> },
    { title: "デモ機能", value: "demo", component: <DemoTab /> },
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

        <Tabs
          defaultValue="generic"
          style={{ width: "100%" }}
          onValueChange={(details) => {
            const selectedTab = details.value;
            console.debug("Switch tab:", selectedTab);
            setActiveTab(selectedTab);
          }}
        >
          {tabs.map((tab) => (
            <TabItem key={tab.value} title={tab.title} value={tab.value} />
          ))}
        </Tabs>

        <Divider />

        <Center flexDirection="column" width="80%" gap={8} paddingY={8}>
          {tabs.find((tab) => tab.value === activeTab)?.component ?? null}
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
