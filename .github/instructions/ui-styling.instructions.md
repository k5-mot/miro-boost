---
applyTo: "frontend/**/*"
---

# PandaCSS & Serendie Design System ガイドライン

## 概要

このプロジェクトでは **PandaCSS v0.54.0** と **Serendie Design System** を使用してスタイリングと UI コンポーネントを管理しています。

### PandaCSS

ゼロランタイム CSS-in-JS ライブラリ。型安全性とパフォーマンスを両立し、ビルド時に CSS を生成します。レイアウトプリミティブ（パターン）を提供し、堅牢でレスポンシブなレイアウトを簡単に作成できます。

### Serendie Design System

三菱電機発のデザインシステム。デザイントークンベースの設計で、5 つのカラーテーマ（konjo, asagi, sumire, tsutsuji, kurikawa）をサポートします。コードと Figma の間で Single Source of Truth を実現しています。

## PandaCSS パターン一覧

### 基本レイアウトパターン

#### Box

- 基本的なコンテナコンポーネント
- `css`関数と同等の機能、JSX 形式では`styled.div`相当
- スタイルプロパティを JSX で利用可能

```tsx
import { Box } from "../styled-system/jsx";

<Box p="4" bg="blue.300" color="white">
  Cool content!
</Box>;
```

#### Container

- 最大幅を持つセンタリングコンテナ
- デフォルト設定:
  - `maxWidth: 8xl`
  - `marginX: auto`
  - `position: relative`
  - `paddingX: { base: 4, md: 6, lg: 8 }`

```tsx
import { Container } from "../styled-system/jsx";

<Container>
  <div>Centered content</div>
</Container>;
```

#### Stack, HStack, VStack

- **Stack**: 垂直・水平スタックレイアウト（デフォルト: `column`）
- **HStack**: 水平スタック（`direction="row"`）、要素を垂直方向に中央揃え
- **VStack**: 垂直スタック（`direction="column"`）、要素を水平方向に中央揃え

プロパティ:

- `direction`: `flex-direction`のエイリアス
- `gap`: 要素間の間隔
- `align`: `align-items`のエイリアス
- `justify`: `justify-content`のエイリアス

```tsx
import { Stack, HStack, VStack } from '../styled-system/jsx'

<HStack gap="4" align="center">
  <button>Button 1</button>
  <button>Button 2</button>
</HStack>

<VStack gap="2">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</VStack>
```

#### Wrap

- フレックスラップレイアウト
- 要素間にスペースを追加し、十分なスペースがない場合は自動的に折り返し

プロパティ:

- `gap`: 要素間の間隔
- `columnGap`: 水平方向の間隔
- `rowGap`: 垂直方向の間隔
- `align`: `align-items`のエイリアス
- `justify`: `justify-content`のエイリアス

```tsx
import { Wrap } from "../styled-system/jsx";

<Wrap gap="4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Wrap>;
```

### 高度なレイアウトパターン

#### Flex

- フレックスコンテナとフレックスプロパティのショートカット

プロパティ:

- `direction`: フレックス方向（`row`, `column`, `row-reverse`, `column-reverse`）
- `wrap`: フレックスアイテムの折り返し（boolean）
- `align`: `align-items`のエイリアス
- `justify`: `justify-content`のエイリアス
- `basis`: `flex-basis`のエイリアス
- `grow`: `flex-grow`のエイリアス
- `shrink`: `flex-shrink`のエイリアス

```tsx
import { Flex } from "../styled-system/jsx";

<Flex direction="row" align="center" justify="space-between">
  <div>Left</div>
  <div>Right</div>
</Flex>;
```

#### Grid & GridItem

- **Grid**: グリッドレイアウト作成
- **GridItem**: グリッドアイテムのスタイリング

Grid プロパティ:

- `columns`: グリッドの列数
- `gap`: 要素間の間隔
- `columnGap`/`rowGap`: 方向別間隔
- `minChildWidth`: 子要素の最小幅（`columns`と排他）

GridItem プロパティ:

- `colSpan`/`rowSpan`: 跨る列数・行数
- `colStart`/`colEnd`: 開始・終了列
- `rowStart`/`rowEnd`: 開始・終了行

```tsx
import { Grid, GridItem } from "../styled-system/jsx";

<Grid columns={3} gap="6">
  <GridItem colSpan={2}>Wide item</GridItem>
  <div>Normal item</div>
</Grid>;
```

#### Center

- コンテンツを中央配置

プロパティ:

- `inline`: `inline-flex`または`flex`の選択（boolean）

```tsx
import { Center } from "../styled-system/jsx";

<Center bg="gray.100" h="20">
  <span>Centered content</span>
</Center>;
```

### 専用パターン

#### AspectRatio

- 固定アスペクト比のコンテナ（画像、動画、マップ用）

```tsx
import { AspectRatio } from "../styled-system/jsx";

<AspectRatio ratio={16 / 9}>
  <iframe src="..." />
</AspectRatio>;
```

#### Circle & Square

- **Circle**: 円形要素
- **Square**: 正方形要素

```tsx
import { Circle, Square } from '../styled-system/jsx'

<Circle size="12" bg="red.300" />
<Square size="12" bg="blue.300" />
```

#### Divider

- 水平・垂直ディバイダー

プロパティ:

- `orientation`: `horizontal`または`vertical`
- `thickness`: ディバイダーの太さ
- `color`: ディバイダーの色

```tsx
import { Divider, VStack } from "../styled-system/jsx";

<VStack>
  <button>First</button>
  <Divider orientation="horizontal" />
  <button>Second</button>
</VStack>;
```

#### VisuallyHidden

- 視覚的に隠すが、スクリーンリーダーからはアクセス可能

```tsx
import { VisuallyHidden } from "../styled-system/jsx";

<label>
  <input type="checkbox" />
  <VisuallyHidden>Screen reader only text</VisuallyHidden>
  <span>Visible label</span>
</label>;
```

#### Bleed

- 親コンテナのパディングを打ち消して全幅要素を作成

プロパティ:

- `inline`: 水平軸のパディング打ち消し量
- `block`: 垂直軸のパディング打ち消し量

```tsx
import { Bleed } from "../styled-system/jsx";

<div style={{ padding: "24px" }}>
  <Bleed inline="6">
    <div>Full width content</div>
  </Bleed>
</div>;
```

#### Float

- 要素をコンテナの上下左右に固定配置（親要素は`position: relative`必須）

プロパティ:

- `placement`: 配置位置（`top-start`, `top`, `top-end`, `bottom-start`, etc.）
- `offset`: エッジからのオフセット
- `offsetX`/`offsetY`: 軸別オフセット

```tsx
import { Float } from "../styled-system/jsx";

<div style={{ position: "relative", height: "200px" }}>
  <Float placement="top-end" offset="2">
    <span>Floating content</span>
  </Float>
</div>;
```

#### LinkOverlay

- リンクのクリック可能エリアを最も近い相対配置親まで拡張

```tsx
import { LinkOverlay } from "../styled-system/jsx";

<div style={{ position: "relative" }}>
  <img src="..." alt="..." />
  <LinkOverlay href="#">View more</LinkOverlay>
</div>;
```

#### CQ (Container Query)

- コンテナクエリパターン

プロパティ:

- `name`: コンテナクエリ名
- `type`: コンテナタイプ（デフォルト: `inline-size`）

```tsx
import { CQ } from "../styled-system/jsx";

<CQ name="sidebar">
  <div
    className={css({
      fontSize: { base: "lg", "@sidebar/sm": "md" },
    })}
  />
</CQ>;
```

## Serendie Design System コンポーネント一覧

### ナビゲーション・レイアウト

- **BottomNavigation** & **BottomNavigationItem**: モバイル向けボトムナビゲーション
- **TopAppBar**: アプリケーション上部バー
- **Drawer**: サイドドロワーナビゲーション
- **Tabs** & **TabItem**: タブナビゲーション
- **Pagination**: ページネーション

### インタラクション要素

- **Button**: 基本ボタン（プライマリ、セカンダリ、アウトライン等）
- **IconButton**: アイコンボタン
- **CheckBox**: チェックボックス入力
- **RadioButton** & **RadioGroup**: ラジオボタン・グループ
- **Switch**: オン/オフスイッチ
- **ChoiceBox**: 選択ボックス

### 入力フィールド

- **TextField**: 基本テキスト入力
- **TextArea**: 複数行テキスト入力
- **PasswordField**: パスワード入力（表示/非表示切り替え機能付き）
- **Search**: 検索入力フィールド
- **Select**: セレクトボックス（ドロップダウン選択）

### 表示・情報要素

- **Avatar**: ユーザーアバター画像
- **Badge**: ステータスバッジ
- **NotificationBadge**: 通知カウントバッジ
- **Banner**: 重要情報表示バナー
- **Toast**: 一時的な通知メッセージ
- **ProgressIndicator**: プログレス表示（線形・円形）

### レイアウト・構造要素

- **Accordion** & **AccordionGroup**: 折りたたみ可能なコンテンツ
- **List** & **ListItem**: リスト表示
- **DashboardWidget**: ダッシュボードウィジェット
- **Divider**: セクション区切り線

### モーダル・オーバーレイ

- **ModalDialog**: モーダルダイアログ
- **DropdownMenu**: ドロップダウンメニュー

## Serendie アイコンシステム

### Serendie Symbols

現在 Outlined（線）と Filled（塗り）の 2 パターンで、それぞれ約 300 種類のアイコンを提供。

#### 設計原則

1. **Arc を生かす**: Serendie ブランドのシンボルである半円（Arc）を表現に活用
2. **極端なシルエット**: 線と角のコントラストを意識したメリハリのある形状
3. **ユーザーを驚かせない**: 個性よりも一般性を重視した分かりやすいアイコン

#### 技術仕様

- **線幅**: 1.2px
- **角丸半径**: 0.25px
- **グリッド**: 24dp × 24dp
- **ライブエリア**: 20dp × 20dp（パディング 2dp）
- **パスの間隔**: 1.6px

#### React 環境での使用

```tsx
import { IconName } from "@serendie/symbols";

<IconName />;
```

## Serendie デザイントークン

### デザイントークンとは

Key/Value（名前と値）のペアからなるデザインシステムの最小単位。カラー、タイポグラフィ、寸法、階層などを定義し、デザインと開発の共通言語となります。

### 2 層構造

- **リファレンストークン**: `color.scale.green.500`（生の値）
- **システムトークン**: `color.impression.positiveContainer`（意味のある名前）

### カラーテーマ（5 種類）

```tsx
// HTMLのdata-panda-theme属性でテーマ切り替え
<html data-panda-theme="konjo" />     // 紺青
<html data-panda-theme="asagi" />     // 浅葱
<html data-panda-theme="sumire" />    // 菫
<html data-panda-theme="tsutsuji" />  // 躑躅
<html data-panda-theme="kurikawa" />  // 栗皮
```

### システムトークンカテゴリ

#### カラートークン例

- `sd.system.color.impression.primary`
- `sd.system.color.impression.primaryContainer`
- `sd.system.color.impression.positive`
- `sd.system.color.impression.positiveContainer`
- `sd.system.color.impression.negative`
- `sd.system.color.impression.negativeContainer`
- `sd.system.color.surface.primary`
- `sd.system.color.surface.secondary`

#### タイポグラフィトークン（Compact/Expanded 対応）

**Display（大見出し）**

- `sd.system.typography.display.small_compact`
- `sd.system.typography.display.medium_compact`
- `sd.system.typography.display.small_expanded`
- `sd.system.typography.display.medium_expanded`

**Headline（見出し）**

- `sd.system.typography.headline.small_compact`
- `sd.system.typography.headline.medium_compact`
- `sd.system.typography.headline.large_compact`
- `sd.system.typography.headline.small_expanded`
- `sd.system.typography.headline.medium_expanded`
- `sd.system.typography.headline.large_expanded`

**Title（タイトル）**

- `sd.system.typography.title.small_compact`
- `sd.system.typography.title.medium_compact`
- `sd.system.typography.title.large_compact`
- `sd.system.typography.title.small_expanded`
- `sd.system.typography.title.medium_expanded`
- `sd.system.typography.title.large_expanded`

**Body（本文）**

- `sd.system.typography.body.extraSmall_compact`
- `sd.system.typography.body.small_compact`
- `sd.system.typography.body.medium_compact`
- `sd.system.typography.body.large_compact`
- `sd.system.typography.body.extraSmall_expanded`
- `sd.system.typography.body.small_expanded`
- `sd.system.typography.body.medium_expanded`
- `sd.system.typography.body.large_expanded`

**Label（ラベル）**

- `sd.system.typography.label.small_compact`
- `sd.system.typography.label.medium_compact`
- `sd.system.typography.label.large_compact`
- `sd.system.typography.label.extraLarge_compact`
- `sd.system.typography.label.small_expanded`
- `sd.system.typography.label.medium_expanded`
- `sd.system.typography.label.large_expanded`
- `sd.system.typography.label.extraLarge_expanded`

### CSS Variables 使用例

```css
@import "@serendie/design-token/tokens.css";

h1 {
  font-size: var(--sd-system-typography-headline-large-expanded);
  color: var(--sd-system-color-impression-primary);
}

.button-primary {
  background-color: var(--sd-system-color-impression-primaryContainer);
  color: var(--sd-system-color-impression-onPrimaryContainer);
}
```

## 開発ガイドライン

### PandaCSS 使用時の注意点

1. **型安全性**: PandaCSS の型定義を活用し、存在しないプロパティの使用を避ける
2. **パフォーマンス**: ビルド時に CSS が生成されるため、動的なスタイル変更は最小限に
3. **パターン活用**: 基本的なレイアウトは PandaCSS のパターンを積極的に使用
4. **JSX vs Function**: コンポーネント内では型安全性のため JSX 形式を推奨

### Serendie Design System 使用時の注意点

1. **コンポーネント優先**: カスタム UI よりも Serendie コンポーネントを優先
2. **システムトークン使用**: 直接の値指定よりもシステムトークンを使用
3. **テーマ対応**: 5 つのカラーテーマに対応したコンポーネント設計
4. **アクセシビリティ**: Serendie コンポーネントの標準的なアクセシビリティ機能を活用
5. **Compact/Expanded**: レスポンシブデザインでタイポグラフィトークンを使い分け

### 命名規則（デザイントークン）

- 先頭小文字のキャメルケース（camelCase）
- 頭文字にアラビア数字を避ける（`2extraSmall` → `twoExtraSmall`）
- 省略記法を避ける（`xs` → `extraSmall`）
- デバイス種別より画面幅に着目（`mobile` → `compact`）
- プラットフォーム非依存の用語選択

### 推奨する使用パターン

```tsx
// PandaCSSパターンとSerendieコンポーネントの組み合わせ
import { VStack, HStack, Container } from "../styled-system/jsx";
import { Button, TextField, Banner } from "@serendie/ui";
import { CheckIcon } from "@serendie/symbols";

function UserRegistrationForm() {
  return (
    <Container maxW="md">
      <VStack gap="6" p="8">
        <Banner variant="positive" icon={<CheckIcon />}>
          アカウント作成が完了しました
        </Banner>

        <VStack gap="4" w="full">
          <TextField label="メールアドレス" type="email" required />
          <TextField label="パスワード" type="password" required />
        </VStack>

        <HStack gap="3" justify="end" w="full">
          <Button variant="outline">キャンセル</Button>
          <Button variant="primary">登録</Button>
        </HStack>
      </VStack>
    </Container>
  );
}
```

### コンテナクエリとレスポンシブ設計

```tsx
import { CQ } from "../styled-system/jsx";
import { css } from "../styled-system/css";

function ResponsiveCard() {
  return (
    <CQ name="card">
      <div
        className={css({
          padding: { base: "4", "@card/md": "6" },
          fontSize: {
            base: "var(--sd-system-typography-body-medium-compact)",
            "@card/lg": "var(--sd-system-typography-body-medium-expanded)",
          },
        })}
      >
        Content adapts to container size
      </div>
    </CQ>
  );
}
```
