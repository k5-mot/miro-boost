import {
  SerendieSymbolChevronLeft,
  SerendieSymbolPen,
} from "@serendie/symbols";
import { Divider, IconButton, TextArea, TextField } from "@serendie/ui";
import { Container, Center } from "@styled-system/jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import FileDialog from "@/components/dialog/FileDialog";
import { Headline, Body, Title } from "@/components/typography";
import "@/assets/style.css";

const Demo: React.FC = () => {
  React.useEffect(() => {}, []);
  const navigate = useNavigate();

  const handleFileSelect = (file: File) => {
    console.log("選択されたファイル:", file);
    // ここでファイルの処理を行うのだ
  };

  const handleMultipleFileSelect = (files: FileList) => {
    console.log("選択されたファイル（複数）:", Array.from(files));
    // ここで複数ファイルの処理を行うのだ
  };

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
          <Headline variant="small">DEMO</Headline>
        </Center>
      </Center>
      <Divider />

      <Center flexDirection="column" width="100%" gap={8} paddingY={8}>
        <Title variant="medium">TextArea</Title>
        <Body variant="medium">Description</Body>
        <TextArea label="placeholder">Sample</TextArea>

        <Divider />

        <Title variant="medium">TextField</Title>
        <Body variant="medium">Description</Body>
        <TextField label="placeholder"></TextField>

        <Divider />

        <Title variant="medium">FileDialog</Title>
        <Body variant="medium">ファイルを選択するためのダイアログなのだ</Body>

        {/* 単一ファイル選択 */}
        <FileDialog
          showFileInfo={false}
          onFileSelect={handleFileSelect}
          accept="image/*"
        >
          画像ファイルを選択
        </FileDialog>

        {/* 複数ファイル選択 */}
        <FileDialog
          onMultipleFileSelect={handleMultipleFileSelect}
          multiple
          accept=".pdf,.doc,.docx,.txt"
          styleType="outlined"
        >
          複数のドキュメントを選択
        </FileDialog>
      </Center>
    </Container>
  );
};

export default Demo;
