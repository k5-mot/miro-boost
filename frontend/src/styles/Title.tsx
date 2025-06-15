import React, { ReactNode } from "react";
import "@/assets/style.css";

/**
 * Titleテキストコンポーネントのプロパティ型定義
 *    h5/h6
 *
 * @typedef {TitleProps}
 */
type TitleProps = {
  children: ReactNode;
  variant?: "small" | "medium" | "large";
  className?: string;
  as?: "h5" | "h6";
  style?: React.CSSProperties;
};

/**
 * Titleテキストコンポーネント
 *
 * @param {TitleProps} props
 * @returns {*}
 */
const Title = (props: TitleProps): React.JSX.Element => {
  const Tag = props.as || "h5";
  const variant = props.variant || "medium";

  // レスポンシブ対応のフォントスタイルを決定
  const getFontStyle = () => {
    // メディアクエリの判定（768px以上かどうか）
    const isWideScreen = window.matchMedia("(min-width: 768px)").matches;

    if (isWideScreen) {
      return `var(--sd-system-typography-title-${variant}_expanded) "Roboto", "Noto Sans JP", "Noto Sans Mono", sans-serif`;
    } else {
      return `var(--sd-system-typography-title-${variant}_compact) "Roboto", "Noto Sans JP", "Noto Sans Mono", sans-serif`;
    }
  };

  // デフォルトスタイルとpropsのスタイルをマージ（propsを優先）
  const mergedStyle: React.CSSProperties = {
    font: getFontStyle(),
    ...props.style, // propsのstyleで同じプロパティがある場合は上書き
  };

  return (
    <Tag className={`title ${props.className || ""}`} style={mergedStyle}>
      {props.children}
    </Tag>
  );
};

export default Title;
