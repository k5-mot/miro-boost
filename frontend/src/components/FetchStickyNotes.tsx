import { StickyNote } from "@mirohq/websdk-types";
import { SerendieSymbolStickyNoteFilled } from "@serendie/symbols";
import { Button, ModalDialog } from "@serendie/ui";
import { Center, Box } from "@styled-system/jsx";
import React, { useState } from "react";
import { Body } from "@/styles";

const fetchStickyNotes = async (): Promise<StickyNote[]> => {
  try {
    const responseSDK = await miro.board.getSelection();
    const selectedNotes = responseSDK.filter(
      (item) => item.type === "sticky_note",
    ) as StickyNote[];
    return selectedNotes;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

type FetchStickyNotesProps = {
  // Define any props if needed
  stickyNotes?: StickyNote[];
  setStickyNotes?: React.Dispatch<React.SetStateAction<StickyNote[]>>;
};

const FetchStickyNotes: React.FC<FetchStickyNotesProps> = (props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedStickeyNotes, setSelectedStickeyNotes] = useState<
    StickyNote[]
  >([]);

  return (
    <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
      <Center flexDirection="row" width="100%" gap={16}>
        <Button
          leftIcon={<SerendieSymbolStickyNoteFilled />}
          onClick={() => {
            void fetchStickyNotes().then((notes) => {
              setSelectedStickeyNotes(notes);
              setIsOpenModal(true);
            });
          }}
        >
          付箋を取り込み
        </Button>
        <Body variant="large">{selectedStickeyNotes.length}付箋</Body>
      </Center>

      <Body style={{ width: "90%" }}>選択した付箋の情報を取り込みます。</Body>
      <ModalDialog
        cancelButtonLabel="閉じる"
        submitButtonLabel="取り込み"
        title="選択した付箋の内容"
        isOpen={isOpenModal}
        onOpenChange={(e) => setIsOpenModal(e.open)}
        onButtonClick={() => {
          props.setStickyNotes?.(selectedStickeyNotes);
          setIsOpenModal(false);
        }}
      >
        <Box style={{ height: "50vh", overflowY: "auto" }}>
          {selectedStickeyNotes.map((note) => (
            <Body key={note.id}>- {note.content}</Body>
          ))}
        </Box>
      </ModalDialog>
    </Center>
  );
};

export default FetchStickyNotes;
