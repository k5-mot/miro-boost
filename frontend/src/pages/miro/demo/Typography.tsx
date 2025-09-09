import {
  SerendieSymbolChevronLeft,
  SerendieSymbolPen,
} from "@serendie/symbols";
import { Divider, IconButton } from "@serendie/ui";
import { Center, Container } from "@styled-system/jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Body, Display, Headline, Label, Title } from "@/components/typography";
import "@/assets/style.css";

const MiroTypography: React.FC = () => {
  React.useEffect(() => {}, []);
  const navigate = useNavigate();

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
          onClick={() => {
            void navigate("/miro");
          }}
          aria-label="戻る"
          style={{ position: "absolute", left: 10 }}
        />
        <Center flexDirection="row" alignItems="center" gap={12} width="100%">
          <SerendieSymbolPen />
          <Headline variant="small">タイポグラフィ</Headline>
        </Center>
      </Center>
      <Divider />

      <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
        <Display variant="medium">Display M</Display>
        <Display variant="small">Display S</Display>

        <Divider />

        <Headline variant="large">Headline L</Headline>
        <Headline variant="medium">Headline M</Headline>
        <Headline variant="small">Headline S</Headline>

        <Divider />

        <Title variant="large">Title L</Title>
        <Title variant="medium">Title M</Title>
        <Title variant="small">Title S</Title>

        <Divider />

        <Body variant="large">Body L</Body>
        <Body variant="medium">Body M</Body>
        <Body variant="small">Body S</Body>
        <Body variant="extraSmall">Body XS</Body>

        <Divider />

        <Label variant="extraLarge">Label XL</Label>
        <Label variant="large">Label L</Label>
        <Label variant="medium">Label M</Label>
        <Label variant="small">Label S</Label>
      </Center>
    </Container>
  );
};

export default MiroTypography;
