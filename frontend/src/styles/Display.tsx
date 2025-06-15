import React, { ReactNode } from "react";
import "@/assets/style.css";

/**
 * Displayテキストコンポーネントのプロパティ型定義
 *    h1/h2
 *
 * @typedef {DisplayProps}
 */
type DisplayProps = {
  children: ReactNode;
  variant?: "small" | "medium";
  className?: string;
  as?: "h1" | "h2";
  style?: React.CSSProperties;
};

/**
 * Displayテキストコンポーネント
 *
 * @param {DisplayProps} props
 * @returns {*}
 */
const Display = (props: DisplayProps): React.JSX.Element => {
  const Tag = props.as || "h1";
  const variant = props.variant || "medium";

  // レスポンシブ対応のフォントスタイルを決定
  const getFontStyle = () => {
    // メディアクエリの判定（768px以上かどうか）
    const isWideScreen = window.matchMedia("(min-width: 768px)").matches;

    if (isWideScreen) {
      return `var(--sd-system-typography-display-${variant}_expanded) "Roboto", "Noto Sans JP", "Noto Sans Mono", sans-serif`;
    } else {
      return `var(--sd-system-typography-display-${variant}_compact) "Roboto", "Noto Sans JP", "Noto Sans Mono", sans-serif`;
    }
  };

  // デフォルトスタイルとpropsのスタイルをマージ（propsを優先）
  const mergedStyle: React.CSSProperties = {
    font: getFontStyle(),
    ...props.style, // propsのstyleで同じプロパティがある場合は上書き
  };

  return (
    <Tag className={`display ${props.className || ""}`} style={mergedStyle}>
      {props.children}
    </Tag>
  );
};

export default Display;
