import type { StickyNote } from "@mirohq/websdk-types";
import {
  SerendieSymbolChevronLeft,
  SerendieSymbolLightning,
  SerendieSymbolLightningFilled,
  SerendieSymbolPenFilled,
} from "@serendie/symbols";
import { Button, Divider, IconButton } from "@serendie/ui";
import { Center, Container } from "@styled-system/jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Body, Headline } from "@/components/typography";
import "@/assets/style.css";

const baseUrl = String(import.meta.env.VITE_PUBLIC_BACKEND_URL);

async function groupStickyNotes(params: {
  userId: string;
  boardId: string;
  groupCriteria: string;
  stickyNotes?: StickyNote[];
}) {
  try {
    if (!params.stickyNotes || params.stickyNotes.length <= 0) {
      return;
    }
    const selectedIdx = params.stickyNotes.map((note) => note.id);
    const responseAPI = await fetch(
      `${baseUrl}/api/miro/group/group-sticky-notes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: params.userId,
          board_id: params.boardId,
          item_ids: selectedIdx,
        }),
      },
    );
    if (!responseAPI.ok) {
      throw new Error(`Cannot fetch group sticky notes: ${responseAPI.status}`);
    }

    const result: unknown = await responseAPI.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function generateSampleData(params: { userId: string; boardId: string }) {
  try {
    const response = await fetch(
      `${baseUrl}/api/miro/group/generate-sample-data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: params.userId,
          board_id: params.boardId,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Cannot fetch group sticky notes: ${response.status}`);
    }

    const result: unknown = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const MiroGroup: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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
            <SerendieSymbolLightning />
            <Headline variant="small">グルーピング</Headline>
          </Center>
        </Center>
        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <Button
            leftIcon={<SerendieSymbolPenFilled />}
            isLoading={isLoading}
            disabled={isLoading}
            onClick={() => {
              void (async () => {
                try {
                  // ボード・ユーザー情報を取得.
                  const boardInfo = await miro.board.getInfo();
                  const userInfo = await miro.board.getUserInfo();
                  if (!boardInfo || !userInfo) {
                    throw new Error("Cannot fetch board or user info.");
                  }

                  // ローディング開始
                  setIsLoading(true);

                  // モックデータを生成.
                  await generateSampleData({
                    userId: userInfo.id,
                    boardId: boardInfo.id,
                  });
                } catch (error) {
                  console.error("Cannot create mock sticky notes.: ", error);
                  return;
                } finally {
                  // ローディング終了
                  setIsLoading(false);
                }
              })();
            }}
          >
            モックデータを生成
          </Button>
          <Body style={{ width: "90%" }}>
            セマンティックグルーピングをお試しするために、ランダムなキーワードを含む付箋を生成します。
          </Body>

          <Divider />

          <Button
            isLoading={isLoading}
            disabled={isLoading}
            leftIcon={<SerendieSymbolLightningFilled />}
            onClick={() => {
              void (async () => {
                try {
                  // ボード・ユーザー情報を取得.
                  const boardInfo = await miro.board.getInfo();
                  const userInfo = await miro.board.getUserInfo();
                  if (!boardInfo || !userInfo) {
                    throw new Error("Cannot fetch board or user info.");
                  }

                  // ローディング開始
                  setIsLoading(true);

                  // 選択した付箋を取得.
                  const selectedNotes = await miro.board.getSelection();
                  const selectedStickyNotes = selectedNotes.filter(
                    (item) => item.type === "sticky_note",
                  ) as StickyNote[];

                  // 選択した付箋一覧を表示.
                  const { waitForClose } = await miro.board.ui.openModal<
                    StickyNote[]
                  >({
                    url: "/miro/group-check",
                    // width: 1000,
                    // height: 600,
                    fullscreen: true,
                    data: selectedStickyNotes,
                  });

                  // モーダルが閉じられたときの処理.
                  const result = await waitForClose();
                  if (result === "cancel") {
                    return;
                  } else if (result === "ok") {
                    await groupStickyNotes({
                      userId: userInfo.id,
                      boardId: boardInfo.id,
                      groupCriteria: "semantic",
                      stickyNotes: selectedStickyNotes,
                    });
                  }
                } catch (error) {
                  console.error("Cannot group sticky notes: ", error);
                } finally {
                  // ローディング終了
                  setIsLoading(false);
                }
              })();
            }}
          >
            セマンティックグルーピング
          </Button>
          <Body style={{ width: "90%" }}>
            生成AIで選択した付箋をグルーピングします。
          </Body>
        </Center>
      </Center>
    </Container>
  );
};

export default MiroGroup;
