import { SerendieSymbolFile } from "@serendie/symbols";
import { Button, ModalDialog, ListItem, List } from "@serendie/ui";
import { css } from "@styled-system/css";
import { VStack, HStack } from "@styled-system/jsx";
import React, { useRef, useState } from "react";
import { Label } from "@/styles";

/**
 * FileDialogコンポーネントのプロパティ
 *
 * @interface FileDialogProps
 */
type FileDialogProps = {
  /** ファイル選択時のコールバック関数 */
  onFileSelect?: (file: File) => void;
  /** 複数ファイル選択時のコールバック関数 */
  onMultipleFileSelect?: (files: FileList) => void;
  /** 受け入れるファイルタイプ（例: "image/*", ".pdf,.doc" など） */
  accept?: string;
  /** 複数ファイル選択を許可するかどうか */
  multiple?: boolean;
  /** ボタンに表示するテキスト */
  children?: React.ReactNode;
  /** ボタンのスタイルタイプ */
  styleType?: "filled" | "outlined";
  /** ボタンのサイズ */
  size?: "small" | "medium";
  /** 無効化するかどうか */
  disabled?: boolean;
  /** 選択されたファイル情報を表示するかどうか */
  showFileInfo?: boolean;
}

/**
 * ファイル選択ダイアログコンポーネント
 *
 * Serendie Design SystemとPanda CSSを使用した美しいファイル選択UI
 * 単一ファイルまたは複数ファイルの選択に対応し、選択されたファイルの情報を表示する
 *
 * @param props - FileDialogコンポーネントのプロパティ
 * @returns ファイル選択ダイアログのReactコンポーネント
 */
const FileDialog: React.FC<FileDialogProps> = ({
  onFileSelect,
  onMultipleFileSelect,
  accept,
  multiple = false,
  children = "ファイルを選択",
  styleType = "filled",
  size = "medium",
  disabled = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * ファイル選択ボタンクリック時のハンドラー
   * 無効化されていない場合のみ、隠れたinput要素をクリックしてファイル選択ダイアログを開く
   */
  const handleButtonClick = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  /**
   * ファイル選択時のイベントハンドラー
   * 選択されたファイルを状態に保存し、適切なコールバック関数を呼び出す
   *
   * @param event - ファイル入力要素の変更イベント
   */
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(files);

      if (multiple) {
        onMultipleFileSelect?.(files);
      } else {
        onFileSelect?.(files[0]);
      }
    }
  };

  /**
   * ファイルサイズを人間が読みやすい形式にフォーマットする
   *
   * @param bytes - ファイルサイズ（バイト数）
   * @returns フォーマットされたファイルサイズ文字列（例: "1.5 MB"）
   */
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  /**
   * ファイル名が21文字を超える場合、先頭9文字...末尾9文字の形式に切り詰める
   *
   * @param fileName - 元のファイル名
   * @returns 切り詰められたファイル名（21文字以下の場合はそのまま返す）
   */
  const truncateFileName = (fileName: string): string => {
    const maxLength = 25;
    const ellipsis = "...";
    if (fileName.length <= maxLength) {
      return fileName;
    }

    const firstPart = fileName.slice(0, (maxLength - ellipsis.length) / 2);
    const lastPart = fileName.slice(-(maxLength - ellipsis.length) / 2);
    return `${firstPart}${ellipsis}${lastPart}`;
  };

  return (
    <VStack gap={8} alignItems="center" position="relative" marginY={4}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className={css({
          display: "none",
        })}
        disabled={disabled}
      />

      <HStack gap={4} alignItems="center">
        <Button
          onClick={handleButtonClick}
          styleType={styleType}
          size={size}
          disabled={disabled}
        >
          {children}
        </Button>
      </HStack>

      {selectedFiles &&
        selectedFiles.length > 0 &&
        (selectedFiles.length === 1 ? (
          <Label variant="small">
            {`${truncateFileName(selectedFiles[0].name)}`}
            {`(${formatFileSize(selectedFiles[0].size)})`}
          </Label>
        ) : (
          <Label variant="small" onClick={() => setIsModalOpen(true)}>
            {`選択されたファイル: ${selectedFiles.length}個`}
          </Label>
        ))}

      {selectedFiles && selectedFiles.length > 0 && (
        <ModalDialog
          isOpen={isModalOpen}
          onOpenChange={(details) => setIsModalOpen(details.open)}
          title="選択されたファイル一覧"
          cancelButtonLabel=" "
          submitButtonLabel="閉じる"
          onButtonClick={() => setIsModalOpen(false)}
        >
          <List style={{ height: "60vh", overflow: "auto" }}>
            {Array.from(selectedFiles).map((file, index) => (
              <ListItem
                key={index}
                title={`${truncateFileName(file.name)} (${formatFileSize(file.size)})`}
                leftIcon={<SerendieSymbolFile />}
              />
            ))}
          </List>
        </ModalDialog>
      )}
    </VStack>
  );
};

export default FileDialog;
