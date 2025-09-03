import React, { ReactNode } from "react";
import "@/assets/style.css";

/**
 * Bodyテキストコンポーネントのプロパティ型定義
 *   p/span/strong/em
 *
 * @typedef {BodyProps}
 */
type BodyProps = {
  children: ReactNode;
  variant?: "extraSmall" | "small" | "medium" | "large";
  className?: string;
  as?: "p" | "span" | "strong" | "em";
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

/**
 * Bodyテキストコンポーネント
 *
 * @param {BodyProps} props
 * @returns {*}
 */
const Body = (props: BodyProps): React.JSX.Element => {
  const Tag = props.as || "p";
  const variant = props.variant || "medium";

  // レスポンシブ対応のフォントスタイルを決定
  const getFontStyle = () => {
    // メディアクエリの判定（768px以上かどうか）
    const isWideScreen = window.matchMedia("(min-width: 768px)").matches;

    if (isWideScreen) {
      return `var(--sd-system-typography-body-${variant}_expanded) "Roboto", "Noto Sans JP", "Noto Sans Mono", sans-serif`;
    } else {
      return `var(--sd-system-typography-body-${variant}_compact) "Roboto", "Noto Sans JP", "Noto Sans Mono", sans-serif`;
    }
  };

  // デフォルトスタイルとpropsのスタイルをマージ（propsを優先）
  const mergedStyle: React.CSSProperties = {
    font: getFontStyle(),
    ...props.style, // propsのstyleで同じプロパティがある場合は上書き
  };

  return (
    <Tag
      className={`body ${props.className || ""}`}
      style={mergedStyle}
      onClick={props.onClick}
    >
      {props.children}
    </Tag>
  );
};

export default Body;
