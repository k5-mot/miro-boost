import * as React from "react";
import { Container, Center } from "../../../styled-system/jsx";
import { Button, Divider } from "@serendie/ui";
import { SerendieSymbolVerifiedBadge } from "@serendie/symbols";
import { useNavigate } from "react-router-dom";
import { StickyNote } from "@mirohq/websdk-types";
import "../../assets/style.css";
import "../../assets/title.css";

const baseUrl = String(import.meta.env.VITE_PUBLIC_BACKEND_URL);

async function groupStickyNotes(params: {
  userId: string;
  boardId: string;
  groupCriteria: string;
}) {
  try {
  } catch (error) {
    console.error("選択アイテムの取得に失敗:", error);
    return;
  }

  try {
    const responseSDK = await miro.board.getSelection();
    const selectedIdx = responseSDK
      .filter((item) => item.type === "sticky_note")
      .map((item) => item.id);
    if (selectedIdx.length === 0) {
      throw new Error("Cannot find any selected items.");
    }

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
          item_idx: selectedIdx,
        }),
      }
    );
    if (!responseAPI.ok) {
      throw new Error(`Cannot fetch group sticky notes: ${responseAPI.status}`);
    }

    const result = await responseAPI.json();
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
      }
    );

    if (!response.ok) {
      throw new Error(`Cannot fetch group sticky notes: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const MiroGroup: React.FC = () => {
  const navigate = useNavigate();
  const [boardInfo, setBoardInfo] = React.useState<{
    boardId: string;
    userId: string;
  } | null>(null);

  React.useEffect(() => {
    // ボード情報を取得
    const getBoardInfo = async () => {
      try {
        const boardInfo = await miro.board.getInfo();
        const userInfo = await miro.board.getUserInfo();
        setBoardInfo({
          boardId: boardInfo.id,
          userId: userInfo.id,
        });
      } catch (error) {
        console.error("ボード情報の取得に失敗:", error);
      }
    };

    getBoardInfo();
  }, []);

  const handleGroupStickyNotes = async (criteria: string) => {
    if (!boardInfo) {
      console.error("ボード情報が取得できていません");
      return;
    }

    try {
      await groupStickyNotes({
        userId: boardInfo.userId,
        boardId: boardInfo.boardId,
        groupCriteria: criteria,
      });
    } catch (error) {
      console.error("グルーピングに失敗:", error);
    }
  };

  const handleGenerateSampleData = async () => {
    if (!boardInfo) {
      console.error("ボード情報が取得できていません");
      return;
    }

    try {
      await generateSampleData({
        userId: boardInfo.userId,
        boardId: boardInfo.boardId,
      });
    } catch (error) {
      console.error("サンプルデータ生成に失敗:", error);
    }
  };

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
          <h3>グルーピング機能</h3>
        </Center>
        <Divider />

        <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
          <h4>サンプルデータ</h4>
          <Button onClick={handleGenerateSampleData}>
            📝 サンプル付箋を生成
          </Button>

          <h4>グルーピング機能</h4>
          <Button onClick={() => handleGroupStickyNotes("semantic")}>
            🤖 AI セマンティックグルーピング
          </Button>
        </Center>

        <Divider />

        <Button styleType="outlined" onClick={() => navigate("/miro")}>
          戻る
        </Button>
      </Center>
    </Container>
  );
};

export default MiroGroup;
