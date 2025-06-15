import React, { ReactNode } from "react";
import "@/assets/style.css";

/**
 * Headlineテキストコンポーネントのプロパティ型定義
 *   h3/h4
 *
 * @typedef {HeadlineProps}
 */
type HeadlineProps = {
  children: ReactNode;
  variant?: "small" | "medium" | "large";
  className?: string;
  as?: "h3" | "h4";
  style?: React.CSSProperties;
};

/**
 * Headlineテキストコンポーネント
 *
 * @param {HeadlineProps} props
 * @returns {*}
 */
const Headline = (props: HeadlineProps): React.JSX.Element => {
  const Tag = props.as || "h3";
  const variant = props.variant || "medium";

  // レスポンシブ対応のフォントスタイルを決定
  const getFontStyle = () => {
    // メディアクエリの判定（768px以上かどうか）
    const isWideScreen = window.matchMedia("(min-width: 768px)").matches;

    if (isWideScreen) {
      return `var(--sd-system-typography-headline-${variant}_expanded) "Roboto", "Noto Sans JP", "Noto Sans Mono", sans-serif`;
    } else {
      return `var(--sd-system-typography-headline-${variant}_compact) "Roboto", "Noto Sans JP", "Noto Sans Mono", sans-serif`;
    }
  };

  // デフォルトスタイルとpropsのスタイルをマージ（propsを優先）
  const mergedStyle: React.CSSProperties = {
    font: getFontStyle(),
    ...props.style, // propsのstyleで同じプロパティがある場合は上書き
  };

  return (
    <Tag className={`headline ${props.className || ""}`} style={mergedStyle}>
      {props.children}
    </Tag>
  );
};

export default Headline;
