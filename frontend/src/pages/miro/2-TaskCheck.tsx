import { StickyNote } from "@mirohq/websdk-types";
import {
  SerendieSymbolAlertTriangle,
  SerendieSymbolListBullet,
  SerendieSymbolLightning,
  SerendieSymbolChevronLeft,
  SerendieSymbolStickyNote,
} from "@serendie/symbols";
import { Button, Divider, List, ListItem } from "@serendie/ui";
import { Container, Center, Wrap, Flex } from "@styled-system/jsx";
import React from "react";
import { Headline } from "@/components/typography";
import "@/assets/style.css";

const MiroTaskCheck: React.FC = () => {
  const [stickyNotes, setStickyNotes] = React.useState<StickyNote[]>([]);

  React.useEffect(() => {
    // モーダルデータから、選択された付箋の情報を取得する.
    const fetchBoardModalData = async () => {
      try {
        const modalDatas = (await miro.board.ui.getModalData()) as StickyNote[];
        setStickyNotes(modalDatas);
      } catch (error) {
        console.error("Cannot fetch modal datas.: ", error);
      }
    };
    void fetchBoardModalData();
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
      <Center
        flexDirection="column"
        style={{
          width: "100%",
        }}
      >
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={12}
          paddingY={4}
        >
          <SerendieSymbolListBullet />
          <Headline variant="large">
            <strong>タスク切り出し対象の付箋</strong>
          </Headline>
        </Flex>

        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <Wrap gap={12} align="center" justify="center">
            <Button
              leftIcon={<SerendieSymbolChevronLeft />}
              styleType="outlined"
              onClick={() => {
                void miro.board.ui.closeModal<string>("cancel");
              }}
            >
              閉じる
            </Button>
            <Button
              leftIcon={<SerendieSymbolLightning />}
              styleType="filled"
              onClick={() => {
                void miro.board.ui.closeModal<string>("ok");
              }}
            >
              タスク切り出しを実行
            </Button>
          </Wrap>
        </Center>

        <Divider />

        <List style={{ paddingTop: "16", paddingBottom: "16" }}>
          {stickyNotes.length > 0 ? (
            stickyNotes.map((note) => (
              <ListItem
                key={note.id}
                title={note.content}
                leftIcon={<SerendieSymbolStickyNote />}
              />
            ))
          ) : (
            <ListItem
              key="unknown"
              title="付箋が選択されていません"
              leftIcon={<SerendieSymbolAlertTriangle />}
            />
          )}
        </List>
      </Center>
    </Container>
  );
};

export default MiroTaskCheck;
