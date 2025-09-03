import { SerendieSymbolLink } from "@serendie/symbols";
import { ProgressIndicator, Button } from "@serendie/ui";
import { Container, Flex } from "@styled-system/jsx";
import React from "react";
import { Headline } from "@/components/typography";
import "@/assets/style.css";

const Root: React.FC = (): React.JSX.Element => {
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);
  // // Open the Top page.
  React.useEffect(() => {
    const setup = async () => {
      const canOpenPanel = await miro.board.ui.canOpenPanel();
      if (canOpenPanel) {
        setIsPanelOpen(true);
        void miro.board.ui.on("icon:click", () => {
          void miro.board.ui.openPanel({ url: "/auth/start" });
        });
      }
    };
    void setup();
  }, []);

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        // backgroundImage: 'url("/src/assets/landscape.svg")',
        backgroundImage: 'url("/landscape.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex
        width="100%"
        height="100%"
        direction="column"
        align="center"
        justify="center"
      >
        <Flex
          direction="column"
          align="center"
          style={{
            borderRadius: "64px",
            backdropFilter: "blur(128px)",
            padding: "32px",
          }}
        >
          <img
            // src="/src/assets/congratulations.png"
            src="/congratulations.png"
            alt=""
            style={{
              height: "50vh",
              width: "auto",
              borderRadius: "64px",
              backdropFilter: "blur(64px)",
            }}
          />
          {isPanelOpen ? (
            <>
              <Headline variant="medium">アプリを起動中です...</Headline>
              <ProgressIndicator size="large" color="white" />
            </>
          ) : (
            <>
              <Headline variant="medium">Miroではないようです...</Headline>
              <Button
                styleType="filled"
                size="medium"
                leftIcon={<SerendieSymbolLink />}
                onClick={() => window.open("https://miro.com/", "_blank")}
                style={{ marginTop: "16px" }}
              >
                Miroに移動
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Root;
