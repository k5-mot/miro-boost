import React, { ReactNode } from "react";
import "@/assets/style.css";

/**
 * Labelテキストコンポーネントのプロパティ型定義
 *
 * @typedef {LabelProps}
 */
type LabelProps = {
  children: ReactNode;
  variant?: "small" | "medium" | "large" | "extraLarge";
  className?: string;
  as?: "label" | "small";
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

/**
 * Labelテキストコンポーネント
 *   label/small
 *
 * @param {LabelProps} props
 * @returns {*}
 */
const Label = (props: LabelProps): React.JSX.Element => {
  const Tag = props.as || "label";
  const variant = props.variant || "medium";

  // レスポンシブ対応のフォントスタイルを決定
  const getFontStyle = () => {
    // メディアクエリの判定（768px以上かどうか）
    const isWideScreen = window.matchMedia("(min-width: 768px)").matches;

    if (isWideScreen) {
      return `var(--sd-system-typography-label-${variant}_expanded) "Roboto", "Noto Sans JP", "Noto Sans Mono", sans-serif`;
    } else {
      return `var(--sd-system-typography-label-${variant}_compact) "Roboto", "Noto Sans JP", "Noto Sans Mono", sans-serif`;
    }
  };

  // デフォルトスタイルとpropsのスタイルをマージ（propsを優先）
  const mergedStyle: React.CSSProperties = {
    font: getFontStyle(),
    ...props.style, // propsのstyleで同じプロパティがある場合は上書き
  };

  return (
    <Tag
      className={`label ${props.className || ""}`}
      style={mergedStyle}
      onClick={props.onClick}
    >
      {props.children}
    </Tag>
  );
};

export default Label;
