Directory structure:
└── serendie-serendie/
├── README.md
├── eslint.config.js
├── figma.config.json
├── LICENSE
├── package.json
├── panda.config.ts
├── postcss.config.cjs
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .env.example
├── .npmrc.example
├── .prettierignore
├── .prettierrc.json
├── .release-it.json
├── src/
│ ├── index.ts
│ ├── preset.ts
│ ├── styles.css
│ ├── vite-env.d.ts
│ ├── assets/
│ │ └── icons/
│ │ └── outline/
│ ├── components/
│ │ ├── Accordion/
│ │ │ ├── Accordion.stories.tsx
│ │ │ ├── Accordion.tsx
│ │ │ ├── AccordionGroup.tsx
│ │ │ └── index.ts
│ │ ├── Avatar/
│ │ │ ├── Avatar.stories.tsx
│ │ │ ├── Avatar.tsx
│ │ │ └── index.ts
│ │ ├── Badge/
│ │ │ ├── Badge.stories.tsx
│ │ │ ├── Badge.tsx
│ │ │ └── index.ts
│ │ ├── Banner/
│ │ │ ├── Banner.stories.tsx
│ │ │ ├── Banner.tsx
│ │ │ └── index.ts
│ │ ├── BottomNavigation/
│ │ │ ├── BottomNavigation.stories.tsx
│ │ │ ├── BottomNavigation.tsx
│ │ │ ├── BottomNavigationItem.tsx
│ │ │ └── index.ts
│ │ ├── Button/
│ │ │ ├── Button.stories.tsx
│ │ │ ├── Button.tsx
│ │ │ └── index.ts
│ │ ├── CheckBox/
│ │ │ ├── CheckBox.stories.tsx
│ │ │ ├── CheckBox.tsx
│ │ │ └── index.ts
│ │ ├── ChoiceBox/
│ │ │ ├── ChoiceBox.stories.tsx
│ │ │ ├── ChoiceBox.tsx
│ │ │ └── index.ts
│ │ ├── DashboardWidget/
│ │ │ ├── DashboardWidget.stories.tsx
│ │ │ ├── DashboardWidget.tsx
│ │ │ └── index.ts
│ │ ├── Divider/
│ │ │ ├── Divider.stories.tsx
│ │ │ ├── Divider.tsx
│ │ │ └── index.ts
│ │ ├── Drawer/
│ │ │ ├── Drawer.stories.tsx
│ │ │ ├── Drawer.tsx
│ │ │ └── index.ts
│ │ ├── DropdownMenu/
│ │ │ ├── DropdownMenu.stories.tsx
│ │ │ ├── DropdownMenu.tsx
│ │ │ └── index.ts
│ │ ├── IconButton/
│ │ │ ├── IconButton.stories.tsx
│ │ │ ├── IconButton.tsx
│ │ │ └── index.ts
│ │ ├── List/
│ │ │ ├── index.ts
│ │ │ ├── List.stories.tsx
│ │ │ ├── List.tsx
│ │ │ └── ListItem.tsx
│ │ ├── ModalDialog/
│ │ │ ├── index.ts
│ │ │ ├── ModalDialog.stories.tsx
│ │ │ └── ModalDialog.tsx
│ │ ├── NotificationBadge/
│ │ │ ├── index.ts
│ │ │ ├── NotificationBadge.stories.tsx
│ │ │ └── NotificationBadge.tsx
│ │ ├── Pagination/
│ │ │ ├── index.ts
│ │ │ ├── Pagination.stories.tsx
│ │ │ └── Pagination.tsx
│ │ ├── PasswordField/
│ │ │ ├── index.ts
│ │ │ ├── PasswordField.stories.tsx
│ │ │ └── PasswordField.tsx
│ │ ├── ProgressIndicator/
│ │ │ ├── index.ts
│ │ │ ├── ProgressIndicator.stories.tsx
│ │ │ └── ProgressIndicator.tsx
│ │ ├── RadioButton/
│ │ │ ├── index.ts
│ │ │ ├── RadioButton.stories.tsx
│ │ │ ├── RadioButton.tsx
│ │ │ └── RadioGroup.tsx
│ │ ├── Search/
│ │ │ ├── index.ts
│ │ │ ├── Search.stories.tsx
│ │ │ └── Search.tsx
│ │ ├── Select/
│ │ │ ├── index.ts
│ │ │ ├── Select.stories.tsx
│ │ │ └── Select.tsx
│ │ ├── Switch/
│ │ │ ├── index.ts
│ │ │ ├── Switch.stories.tsx
│ │ │ └── Switch.tsx
│ │ ├── Tabs/
│ │ │ ├── index.ts
│ │ │ ├── TabItem.tsx
│ │ │ ├── Tabs.stories.tsx
│ │ │ └── Tabs.tsx
│ │ ├── TextArea/
│ │ │ ├── index.ts
│ │ │ ├── TextArea.stories.tsx
│ │ │ └── TextArea.tsx
│ │ ├── TextField/
│ │ │ ├── index.ts
│ │ │ ├── TextField.stories.tsx
│ │ │ └── TextField.tsx
│ │ ├── Toast/
│ │ │ ├── index.ts
│ │ │ ├── Toast.stories.tsx
│ │ │ └── Toast.tsx
│ │ └── TopAppBar/
│ │ ├── index.ts
│ │ ├── TopAppBar.stories.tsx
│ │ └── TopAppBar.tsx
│ ├── recipes/
│ │ └── index.ts
│ └── tokens/
│ ├── getToken.ts
│ ├── index.ts
│ └── keyframes/
│ └── index.ts
├── .github/
│ ├── dependabot.yml
│ ├── templates/
│ │ └── git-pr-release.erb
│ └── workflows/
│ ├── chromatic.yml
│ ├── comment-for-ui-checking.yml
│ ├── package.yml
│ ├── publish-code-connect.yml
│ └── release-pull-request.yml
├── .husky/
│ └── pre-commit
└── .storybook/
├── FullscreenLayout.tsx
├── main.ts
├── modes.ts
└── preview.ts

Files Content:

================================================
FILE: README.md
================================================

<h1 align='center'>
  <picture>
    <source srcset='https://github.com/user-attachments/assets/afa39feb-f100-43f4-9f08-d11c81208dc8' media="(prefers-color-scheme: dark)" width='400px'/>
    <img src='https://github.com/user-attachments/assets/a6e4b78e-a50c-4c6b-b04a-bb159a826b65' alt="Serendie Design System" title="Serendie Design System" width='400px'/>
  </picture>
</h1>

<div align="center">

[![GitHub](https://img.shields.io/github/license/serendie/serendie?style=flat)](https://github.com/serendie/serendie/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/%40serendie%2Fui)](https://www.npmjs.com/package/@serendie/ui)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://storybook.serendie.design/)
[![X](https://img.shields.io/twitter/follow/SerendieDesign)](https://x.com/SerendieDesign/)

</div>
<br/>

[Serendie Design System](https://serendie.design/)は、多様な事業と人々をつなぎ、新たな価値を生み出すための三菱電機によるオープンなデザインシステムです。<br/>
[デザイントークン](https://github.com/serendie/design-token)や[Serendie Symbols](https://github.com/serendie/serendie-symbols)など複数のリポジトリから構成され、本リポジトリは Serendie UI を扱います。

# Serendie UI

[Serendie UI Kit (Figma)](https://www.figma.com/community/file/1433690846108785966)と対となる React ベースの UI コンポーネント集です。Figma Code Connect にも対応しており、Storybook と同等の内容が[Figma Dev モードでも確認](https://serendie.design/get-started/dev/#section-1)できます。

## 使い方

### インストール

[デザイントークン](https://github.com/serendie/design-token)も同梱されます。

```
npm install @serendie/ui
```

### プロジェクトへの導入

root の CSS に対して下記を指定してください。1 行目は、Serendie UI に対して、スタイルを適切に当てるためにカスケードレイヤーの指定をするもの、2 行目は同梱のデザイントークンやデフォルトスタイルを読み込むものです。

```css
@layer reset, base, tokens, recipes, utilities;
@import "@serendie/ui/styles.css";
```

### コンポーネントを使う

各 Component の props については、[ドキュメント](https://serendie.design/components/button/)や、[Storybook](https://storybook.serendie.design/?path=/story/components-button--medium)、Figma Code Connect を参照してください。

```js
import { Button } from "@serendie/ui";

<Button size="medium">Login</Button>;
```

### テーマ切り替え

Serendie Design System には 5 つのカラーテーマがあり、デザイントークンもそれに対応します。html タグなどに、`data-panda-theme`属性 (`konjo`, `asagi`, `sumire`, `tsutusji`, `kurikawa`)を付与することでカラーテーマを切り替えることができます。
各テーマについては[こちら](https://serendie.design/foundations/theming/)を参照してください。

```html
<html data-panda-theme="asagi"></html>
```

## スタイリングライブラリと併用する

マージンを微修正したいなど、Serendie UI のスタイルをカスタムしたいシーンでは、プロジェクト側にスタイリングライブラリ(CSS-in-JS など)を導入してください。どのスタイリングライブラリでも併用は可能ですが、ここでは Serendie UI の内部でも使用している[Panda CSS](https://panda-css.com/)の例を紹介します。

### SerendiePreset の追加

Panda CSS 導入後に生成される`panda.config.ts`に下記を追記することで、Panda CSS の[Preset](https://panda-css.com/docs/customization/presets)と Serendie Design System のデザイントークンを繋ぎこみます。

```
+import { SerendiePreset } from "@serendie/ui";

export default defineConfig({
+  jsxFramework: "react",
+  presets: [SerendiePreset],
});
```

より実践的な例は、こちらの[サンプルプロジェクト](https://github.com/serendie/bootcamp?tab=readme-ov-file#%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%A8%E4%BD%B5%E7%94%A8%E3%81%99%E3%82%8B)を参考にしてください。

## API を詳しく知る

Serendie UI はヘッドレス UI として、[Ark UI](https://ark-ui.com/)を内部的に利用しており、各コンポーネントの API は Ark UI を継承します。Select コンポーネントなどインタラクションが複雑なコンポーネントは、Ark UI の[API リファレンス](https://ark-ui.com/react/docs/components/select#api-reference)を合わせて参照してください。

## Serendie UI の開発

Serendie UI に新しくコンポーネントを追加する場合は、Ark UI をベースにしてください。

```
npm run dev
npm run build
```

### Figma Code Connect

Serendie UI では、Figma Code Connect を Storybook と繋ぎこむ形で導入しています。下記のコマンドで各コンポーネント毎の stories ファイルの内容を、Figma に publish します。

```
npm run connect:publish
```

stories ファイルに変更が入ると上記が[GitHub Actions](https://github.com/serendie/serendie/blob/main/.github/workflows/publish-code-connect.yml)によって実行されます。

## Resources

Serendie Design System は、Serendie UI (本リポジトリ) のほか以下の関連リポジトリから構成されています。

| Package name                          | Location                                                                                     | Description                                                                                                                                                 |
| ------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@serendie/design-token`              | [serendie/design-token](https://github.com/serendie/design-token)                            | [W3C Design Token Format Module](https://serendie.design/foundations/design-tokens/#section-6)の仕様で定義された Serendie UI のベースとなるデザイントークン |
| `@serendie/symbols`                   | [serendie/symbols](https://github.com/serendie/serendie-symbols)                             | Serendie らしい 300 種類以上の SVG アイコン集                                                                                                               |
| `@serendie/figma-utils`               | [serendie/figma-utils](https://github.com/serendie/figma-utils)                              | Figma REST API を用いて、`@serendie/design-token`と Figma Variables の同期を行うためのユーティリティー集                                                    |
| `@serendie/style-dictonary-formatter` | [serendie/style-dictonary-formatter](https://github.com/serendie/style-dictionary-formatter) | デザイントークンを各プラットフォームに展開するための[amzn/style-dictonary](https://github.com/amzn/style-dictionary)のフォーマッタ                          |

### Examples

主要パッケージの導入サンプルとして、[serendie/bootcamp](https://github.com/serendie/bootcamp)を用意しています。また三菱電機内ではハンズオン形式で使い方を紹介するブートキャンプを開催しています。

### サブブランド対応

Serendie Design System は[三菱電機の有する多様な事業に適応](https://serendie.design/about/#section-3)することがコンセプトの一つです。

`@serendie/desigon-token`および`@serendie/ui`は、デフォルトで Serendie の Visual Identity (VI)を継承しますが、各事業ブランドの VI に合わせてテーミングできるよう社内向けに[serendie/subbrands-template](https://github.com/serendie/subbrands-template)を整備しています。

詳しくは Serendie Design System チームまでお問い合わせください。

## License

各パッケージは MIT ライセンスの下で配布されています。 詳しくは[LICENSE](/LICENSE)を参照してください。

================================================
FILE: eslint.config.js
================================================
import reactHooks from "eslint-plugin-react-hooks";
import pandaCss from "@pandacss/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import eslint from "@eslint/js";
import tsESLint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default tsESLint.config(
...compat.extends("plugin:storybook/recommended"),
{
plugins: {
"react-refresh": reactRefresh,
"@pandacss": pandaCss,
"react-hooks": reactHooks,
},
rules: {
...pandaCss.configs.recommended.rules,
"@pandacss/file-not-included": "off",
"react-refresh/only-export-components": [
"warn",
{ allowConstantExport: true },
],
"@typescript-eslint/no-unused-vars": [
"warn",
{
argsIgnorePattern: "^_",
varsIgnorePattern: "^_",
caughtErrorsIgnorePattern: "^_",
destructuredArrayIgnorePattern: "^_",
},
],
},
},
eslint.configs.recommended,
...tsESLint.configs.recommended,
prettierRecommended,
{
ignores: [
"**/dist/",
"**/styled-system/",
"**/*.cjs",
"**/public/storybook/",
"**/.astro/",
"**/.storybook/",
"**/env.d.ts",
],
}
);

================================================
FILE: figma.config.json
================================================
{
"codeConnect": {
"include": ["src/components/**/*.tsx"],
"parser": "react"
}
}

================================================
FILE: LICENSE
================================================
MIT License

Copyright © 2025 Mitsubishi Electric Corporation, supported by Takram Japan Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

================================================
FILE: package.json
================================================
{
"name": "@serendie/ui",
"description": "Adaptive UI component library as part of Serendie Design System by Mitsubishi Electric",
"license": "MIT",
"version": "1.0.1",
"type": "module",
"types": "./dist/index.d.ts",
"scripts": {
"prepare": "husky",
"dev": "npm run storybook",
"build:panda": "panda codegen",
"build:components": "vite build",
"build": "npm run build:panda && npm run build:components",
"lint": "eslint . --report-unused-disable-directives --max-warnings 0",
"lint:fix": "eslint . --fix",
"format": "prettier --write .",
"storybook": "storybook dev -p 6006",
"build:storybook": "npm run build && storybook build",
"test": "test-storybook",
"panda": "panda",
"connect:publish": "npx figma connect publish",
"connect:unpublish": "npx figma connect unpublish",
"chromatic": "chromatic --only-changed --exit-zero-on-changes --build-script-name=build:storybook",
"release": "release-it --config ./.release-it.json"
},
"peerDependencies": {
"@ark-ui/react": "^3.5.0",
"react": ">=18.3.1",
"react-dom": ">=18.3.1"
},
"dependencies": {
"@ark-ui/react": "^3.5.0",
"@pandacss/dev": "^0.53.0",
"@serendie/symbols": "^1.0.1",
"@swc/core": "^1.10.0",
"@swc/jest": "^0.2.37",
"merge-refs": "^1.3.0"
},
"devDependencies": {
"@chromatic-com/storybook": "^1.6.1",
"@eslint/eslintrc": "^3.1.0",
"@eslint/js": "^9.8.0",
"@figma/code-connect": "^1.2.1",
"@pandacss/eslint-plugin": "^0.1.1",
"@serendie/design-token": "^1.1.0",
"@storybook/addon-designs": "^8.0.3",
"@storybook/addon-essentials": "^8.2.4",
"@storybook/addon-interactions": "^8.2.4",
"@storybook/addon-links": "^8.2.4",
"@storybook/addon-onboarding": "^8.2.4",
"@storybook/addon-themes": "^8.2.8",
"@storybook/blocks": "^8.2.4",
"@storybook/react": "^8.2.4",
"@storybook/react-vite": "^8.3.1",
"@storybook/test": "^8.2.4",
"@storybook/test-runner": "^0.19.1",
"@types/eslint\_\_js": "^8.42.3",
"@types/react": "^18.3.1",
"@types/react-dom": "^18.3.0",
"@vitejs/plugin-react": "^4.3.1",
"chromatic": "^11.20.2",
"deepmerge": "^4.3.1",
"eslint": "^8.57.0",
"eslint-config-prettier": "^9.1.0",
"eslint-plugin-prettier": "^5.2.1",
"eslint-plugin-react-hooks": "^4.6.2",
"eslint-plugin-react-refresh": "^0.4.8",
"eslint-plugin-storybook": "^0.8.0",
"globby": "14.1.0",
"lint-staged": "^15.2.8",
"husky": "^9.1.4",
"prettier": "^3.3.3",
"release-it": "^17.11.0",
"storybook": "^8.2.4",
"typescript": "^5.5.3",
"typescript-eslint": "^8.0.0",
"vite": "^5.3.3",
"vite-plugin-dts": "^4.2.1",
"vite-plugin-svgr": "^4.2.0"
},
"main": "./dist/index.cjs",
"module": "./dist/index.js",
"exports": {
".": {
"import": "./dist/index.js",
"require": "./dist/index.cjs",
"types": "./dist/index.d.ts"
},
"./_": {
"import": "./dist/components/_/index.js",
"require": "./dist/components/_/index.cjs",
"types": "./dist/components/_/index.d.ts"
},
"./css": {
"types": "./styled-system/css/index.d.ts",
"require": "./styled-system/css/index.js",
"import": "./styled-system/css/index.js"
},
"./tokens": {
"types": "./styled-system/tokens/index.d.ts",
"require": "./styled-system/tokens/index.js",
"import": "./styled-system/tokens/index.js"
},
"./types": {
"types": "./styled-system/types/index.d.ts",
"require": "./styled-system/types/index.js",
"import": "./styled-system/types/index.js"
},
"./patterns": {
"types": "./styled-system/patterns/index.d.ts",
"require": "./styled-system/patterns/index.js",
"import": "./styled-system/patterns/index.js"
},
"./jsx": {
"types": "./styled-system/jsx/index.d.ts",
"require": "./styled-system/jsx/index.js",
"import": "./styled-system/jsx/index.js"
},
"./styles.css": "./dist/styles.css"
},
"files": [
"dist",
"styled-system"
],
"lint-staged": {
"\*.{ts,tsx}": [
"eslint --fix",
"prettier --write"
]
},
"optionalDependencies": {
"@rollup/rollup-linux-x64-gnu": "^4.14.3"
}
}

================================================
FILE: panda.config.ts
================================================
import { SerendiePreset, themeNames, themes } from "./src/preset";

import { defineConfig } from "@pandacss/dev";

export default defineConfig({
// Whether to use css reset
preflight: true,

// Where to look for your css declarations
include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

// Files to exclude
exclude: [],

// The output directory for your css system
outdir: "styled-system",
outExtension: "js",
jsxFramework: "react",
presets: [
SerendiePreset,
{
themes,
},
],
staticCss: {
// theme needs static css
themes: themeNames,
},
});

================================================
FILE: postcss.config.cjs
================================================
module.exports = {
plugins: {
"@pandacss/dev/postcss": {},
},
};

================================================
FILE: tsconfig.json
================================================
{
"compilerOptions": {
"target": "ES2020",
"useDefineForClassFields": true,
"lib": ["ES2020", "DOM", "DOM.Iterable"],
"module": "ESNext",
"skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true

},
"include": ["src", "styled-system"],
"references": [{ "path": "./tsconfig.node.json" }]
}

================================================
FILE: tsconfig.node.json
================================================
{
"compilerOptions": {
"composite": true,
"skipLibCheck": true,
"module": "ESNext",
"moduleResolution": "bundler",
"allowSyntheticDefaultImports": true
},
"include": ["vite.config.ts"]
}

================================================
FILE: vite.config.ts
================================================
import react from "@vitejs/plugin-react";
import { globbySync } from "globby";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
plugins: [
react(),
svgr(),
dts({
exclude: ["**/*.stories.tsx"],
}),
],
build: {
lib: {
entry: globbySync(["src/styles.css", "src/**/index.ts"]),
name: "Serendie",
formats: ["es"],
},
rollupOptions: {
external: [
"react",
"react-dom",
"react/jsx-runtime",
"@serendie/symbols",
],
output: {
preserveModules: true,
preserveModulesRoot: "src",
},
},
cssCodeSplit: true,
},
});

================================================
FILE: .env.example
================================================
FIGMA_ACCESS_TOKEN="YOUR_TOKEN_WITH_CODECONNECT_SCOPE"
CHROMATIC_PROJECT_TOKEN=""

================================================
FILE: .npmrc.example
================================================
//registry.npmjs.org/:\_authToken=${NPM_TOKEN}

================================================
FILE: .prettierignore
================================================
node_modules
build
dist

================================================
FILE: .prettierrc.json
================================================
{
"semi": true,
"trailingComma": "es5",
"singleQuote": false,
"tabWidth": 2,
"arrowParens": "always",
"bracketSpacing": true
}

================================================
FILE: .release-it.json
================================================
{
"$schema": "https://unpkg.com/release-it/schema/release-it.json",
  "git": {
    "commitMessage": "release v${version}",
"tagName": "${npm.name}@${version}"
},
"github": {
"release": true,
"releaseName": "${npm.name}@${version}",
"autoGenerate": true
},
"hooks": {
"after:bump": "npm run build"
}
}

================================================
FILE: src/index.ts
================================================
export { SerendiePreset } from "./preset";

export _ from "./components/Accordion/index.ts";
export _ from "./components/Avatar/index.ts";
export _ from "./components/Badge/index.ts";
export _ from "./components/Banner/index.ts";
export _ from "./components/BottomNavigation/index.ts";
export _ from "./components/Button/index.ts";
export _ from "./components/CheckBox/index.ts";
export _ from "./components/ChoiceBox/index.ts";
export _ from "./components/DashboardWidget/index.ts";
export _ from "./components/Divider/index.ts";
export _ from "./components/Drawer/index.ts";
export _ from "./components/DropdownMenu/index.ts";
export _ from "./components/IconButton/index.ts";
export _ from "./components/List/index.ts";
export _ from "./components/ModalDialog/index.ts";
export _ from "./components/NotificationBadge/index.ts";
export _ from "./components/Pagination/index.ts";
export _ from "./components/PasswordField/index.ts";
export _ from "./components/ProgressIndicator/index.ts";
export _ from "./components/RadioButton/index.ts";
export _ from "./components/Search/index.ts";
export _ from "./components/Select/index.ts";
export _ from "./components/Switch/index.ts";
export _ from "./components/Tabs/index.ts";
export _ from "./components/TextArea/index.ts";
export _ from "./components/TextField/index.ts";
export _ from "./components/Toast/index.ts";
export _ from "./components/TopAppBar/index.ts";

================================================
FILE: src/preset.ts
================================================
import { SerendieRecipes } from "./recipes";
import { SerendieTokens, SerendieTypography } from "./tokens";
import { getToken } from "./tokens/getToken";
import { SerendieKeyframes } from "./tokens/keyframes";

const { sd } = getToken();

const { themes, ...defaultTokens } = SerendieTokens;

export { themes };

export const themeNames = Object.keys(themes);

export const SerendiePreset = {
name: "serendie",
theme: {
extend: {
breakpoints: {
expanded: sd.system.dimension.breakpoint.expanded,
},
recipes: SerendieRecipes,
tokens: {
...defaultTokens,
},
textStyles: {
...SerendieTypography,
},
keyframes: {
...SerendieKeyframes,
},
},
},
};

================================================
FILE: src/styles.css
================================================
@layer reset, base, tokens, recipes, utilities;

@layer base {
:root {
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+Mono:wght@100..900&family=Roboto:wght@100;400;700&display=swap");
--global-font-body: "Roboto", "Noto Sans JP", sans-serif;
--global-font-mono: "Noto Sans Mono", monospace;
font-optical-sizing: auto;
text-rendering: optimizeLegibility;
font-feature-settings: "palt";
letter-spacing: 0.03em;
}
}

================================================
FILE: src/vite-env.d.ts
================================================
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

================================================
FILE: src/components/Accordion/Accordion.stories.tsx
================================================
import figma from "@figma/code-connect";
import { Meta, StoryObj } from "@storybook/react";
import { AccordionGroup } from "./AccordionGroup";
import { Accordion, AccordionProps } from "./Accordion";

const meta: Meta<typeof Accordion> = {
component: Accordion,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=4728-44779",
props: {
title: figma.string("Title"),
description: figma.enum("State", {
Expanded: figma.string("Description"),
}),
isIconLeft: figma.enum("Icon", { Left: true }),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
},
},
argTypes: {
title: {
control: { type: "text" },
defaultValue: "タイトル",
},
isLeftIcon: {
control: { type: "boolean" },
defaultValue: false,
},
description: {
control: { type: "text" },
defaultValue: "詳細内容テキストがはいります",
},
},
};

function FigmaExample(props: AccordionProps) {
return (
<AccordionGroup>
<Accordion {...props} />
</AccordionGroup>
);
}

export default meta;
type Story = StoryObj<typeof Accordion>;

const Template = (args: AccordionProps) => (
<AccordionGroup>
<Accordion {...args} title="ヘルプ 1" />
<Accordion {...args} title="ヘルプ 2" />
<Accordion {...args} title="ヘルプ 3" />
</AccordionGroup>
);

export const Default: Story = {
render: Template,
args: {
description:
"詳細内容テキストがはいります詳細内容テキストがはいります詳細内容テキストがはいります詳細内容テキストがはいります詳細内容テキストがはいります",
},
};

export const IsLeftIcon: Story = {
render: Template,
args: {
description:
"詳細内容テキストがはいります詳細内容テキストがはいります詳細内容テキストがはいります詳細内容テキストがはいります詳細内容テキストがはいります",
isLeftIcon: true,
},
};

================================================
FILE: src/components/Accordion/Accordion.tsx
================================================
import { AccordionItemProps, Accordion as ArkAccordion } from "@ark-ui/react";
import { SerendieSymbolChevronDown } from "@serendie/symbols";
import { sva } from "../../../styled-system/css";
import { RecipeVariantProps } from "../../../styled-system/types";

const AccordionStyle = sva({
slots: ["item", "title", "itemIndicator", "icon", "description"],
base: {
item: {
display: "flex",
width: "100%",
gap: "sd.system.dimension.spacing.extraSmall",
paddingX: "sd.system.dimension.spacing.medium",
paddingY: "sd.system.dimension.spacing.small",
\_hover: {
bg: "color-mix(in srgb, {colors.sd.system.color.component.surface}, {colors.sd.system.color.interaction.hoveredVariant})",
},
cursor: "pointer",
},
title: {
flex: 1,
textAlign: "left",
color: "sd.system.color.component.onSurface",
textStyle: "sd.system.typography.body.medium_compact",
\_expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
},
itemIndicator: {
flex: "0 0 24px",
transition: "transform 0.2s",
\_open: {
transform: "rotate(180deg)",
},
},
icon: {
color: "sd.system.color.component.onSurface",
},
description: {
paddingX: "sd.system.dimension.spacing.medium",
paddingTop: "sd.system.dimension.spacing.small",
paddingBottom: "sd.system.dimension.spacing.medium",
textStyle: "sd.system.typography.body.medium_compact",
\_expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
},
},
variants: {
isLeftIcon: {
true: {
item: {
flexDirection: "row-reverse",
},
itemIndicator: {
transform: "rotate(-90deg)",
\_open: {
transform: "rotate(0deg)",
},
},
},
},
},
});

export type AccordionProps = {
title: string;
description: string;
} & RecipeVariantProps<typeof AccordionStyle> &
AccordionItemProps;

export const Accordion: React.FC<AccordionProps> = ({
title,
value,
description,
...props
}) => {
const [variantProps, elementProps] = AccordionStyle.splitVariantProps(props);
const styles = AccordionStyle(variantProps);

return (
<ArkAccordion.Item key={title} value={title || value} {...elementProps}>
<ArkAccordion.ItemTrigger className={styles.item}>
<span className={styles.title}>{title}</span>
<ArkAccordion.ItemIndicator className={styles.itemIndicator}>
<SerendieSymbolChevronDown className={styles.icon} />
</ArkAccordion.ItemIndicator>
</ArkAccordion.ItemTrigger>
<ArkAccordion.ItemContent className={styles.description}>
{description}
</ArkAccordion.ItemContent>
</ArkAccordion.Item>
);
};

================================================
FILE: src/components/Accordion/AccordionGroup.tsx
================================================
import { Accordion } from "@ark-ui/react";
import { styled } from "../../../styled-system/jsx";

export const AccordionGroup = styled(Accordion.Root, {
base: {
display: "flex",
flexDirection: "column",
},
});

================================================
FILE: src/components/Accordion/index.ts
================================================
export _ from "./Accordion.tsx";
export _ from "./AccordionGroup.tsx";

================================================
FILE: src/components/Avatar/Avatar.stories.tsx
================================================
import figma from "@figma/code-connect";
import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
component: Avatar,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3661-24552",
props: {
size: figma.enum("Size", {
Small: "small",
Medium: "medium",
Large: "large",
}),
src: figma.enum("Type", { Image: "https://i.pravatar.cc/300" }),
placeholder: figma.enum("Type", {
Image: "filled",
Icon: "outlined",
}),
text: figma.enum("Type", { Text: figma.string("Text") }),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
},
},
argTypes: {
size: {
options: ["small", "medium", "large"],
control: { type: "radio" },
defaultValue: "medium",
},
text: {
control: { type: "text" },
defaultValue: "",
},
},
};

function FigmaExample(props: React.ComponentProps<typeof Avatar>) {
return <Avatar {...props} />;
}

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Image: Story = {
args: {
size: "medium",
src: "https://i.pravatar.cc/300?img=1",
text: "AB",
},
};

export const Text: Story = {
args: {
size: "medium",
text: "AB",
},
};

export const PlaceholderFilled: Story = {
args: {
size: "medium",
},
};

export const PlaceholderOutlined: Story = {
args: {
size: "medium",
placeholder: "outlined",
},
};

================================================
FILE: src/components/Avatar/Avatar.tsx
================================================
import { Avatar as ArkAvatar, AvatarRootProps } from "@ark-ui/react";
import { SerendieSymbolUserCircle } from "@serendie/symbols";
import { cx, RecipeVariantProps, sva } from "../../../styled-system/css";

export const AvatarStyle = sva({
slots: ["root", "fallback", "image"],
base: {
root: {
borderRadius: "50%",
},
fallback: {
display: "flex",
alignItems: "center",
justifyContent: "center",
width: "100%",
height: "100%",
borderRadius: "50%",
color: "sd.system.color.component.onSurface",
backgroundColor: "sd.reference.color.scale.blue.200",
textStyle: "sd.system.typography.label.extraLarge_compact",
},
image: {
width: "100%",
height: "100%",
borderRadius: "50%",
},
},
variants: {
size: {
small: {
root: {
width: 24,
height: 24,
},
fallback: {
fontSize: 11,
},
},
medium: {
root: {
width: 40,
height: 40,
},
fallback: {
fontSize: 19,
},
},
large: {
root: {
width: 80,
height: 80,
},
fallback: {
fontSize: 37,
},
},
},
},
defaultVariants: {
size: "medium",
},
});

export type AvatarProps = {
src?: string;
alt?: string;
text?: string;
placeholder?: "filled" | "outlined";
} & RecipeVariantProps<typeof AvatarStyle> &
AvatarRootProps;

export const Avatar: React.FC<AvatarProps> = ({
src,
alt,
text,
placeholder = "filled",
className,
...props
}) => {
const [variantProps, elementProps] = AvatarStyle.splitVariantProps(props);
const { size } = variantProps;
const styles = AvatarStyle({ size, ...variantProps });
const iconSize = size === "small" ? 24 : size === "large" ? 80 : 40;

return (
<ArkAvatar.Root className={cx(styles.root, className)} {...elementProps}>
{src ? (
<ArkAvatar.Image className={styles.image} src={src} alt={alt} />
) : text ? (
<ArkAvatar.Fallback className={styles.fallback}>
{text.slice(0, 2)}
</ArkAvatar.Fallback>
) : placeholder === "outlined" ? (
<SerendieSymbolUserCircle width={iconSize} height={iconSize} />
) : (
<FallbackIllustration />
)}
</ArkAvatar.Root>
);
};

const FallbackIllustration: React.FC = () => (
<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3661_24550)">
<rect width="80" height="80" rx="40" fill="#EFF2FC" />
<g
style={{
          mixBlendMode: "multiply",
        }} >
<path
          d="M42.783 26.208L13.5059 26.208L34.4075 63.9769L63.6846 63.9769L42.783 26.208Z"
          fill="#0A69CF"
        />
</g>
<g
style={{
          mixBlendMode: "multiply",
        }} >
<path
          d="M14.5894 51.3908C14.5894 52.5565 16.3965 53.3535 16.8169 54.369C17.2373 55.3845 16.5548 57.2598 17.3465 58.0515C18.1381 58.8431 19.978 58.147 21.0289 58.5811C22.0799 59.0151 22.8415 60.8085 24.0071 60.8085C25.1727 60.8085 25.9698 59.0014 26.9853 58.5811C28.0008 58.1607 29.8761 58.8431 30.6677 58.0515C31.4594 57.2598 30.7633 55.42 31.1973 54.369C31.6313 53.3181 33.4248 52.5565 33.4248 51.3908C33.4248 50.2252 31.6177 49.4281 31.1973 48.4127C30.7769 47.3972 31.4594 45.5218 30.6677 44.7302C29.8761 43.9386 28.0362 44.6347 26.9853 44.2006C25.9343 43.7666 25.1727 41.9731 24.0071 41.9731C22.8415 41.9731 22.0444 43.7803 21.0289 44.2006C20.0135 44.621 18.1381 43.9386 17.3465 44.7302C16.5548 45.5218 17.2509 47.3617 16.8169 48.4127C16.3829 49.4636 14.5894 50.2252 14.5894 51.3908Z"
          fill="#8FAEFE"
        />
</g>
<g
style={{
          mixBlendMode: "multiply",
        }} >
<path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48.5175 28.506C51.5824 31.5709 56.5515 31.5709 59.6164 28.506L64.373 33.2627C58.6812 38.9546 49.4528 38.9546 43.7609 33.2627C38.069 27.5708 38.069 18.3424 43.7609 12.6505L48.5175 17.4072C45.4527 20.472 45.4527 25.4412 48.5175 28.506Z"
          fill="#F84258"
        />
</g>
</g>
<defs>
<clipPath id="clip0_3661_24550">
<rect width="80" height="80" fill="white" />
</clipPath>
</defs>
</svg>
);

================================================
FILE: src/components/Avatar/index.ts
================================================
export \* from "./Avatar.tsx";

================================================
FILE: src/components/Badge/Badge.stories.tsx
================================================
import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeCloseButton, BadgeStyle } from "./Badge";
import figma from "@figma/code-connect";

const meta: Meta<typeof Badge> = {
component: Badge,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3285-27625",
props: {
label: figma.string("Label"),
size: figma.enum("Size", {
Small: "small",
Medium: "medium",
Large: "large",
}),
styleColor: figma.enum("Color", {
Gray: "gray",
"Gray-subtle": "gray-subtle",
Blue: "blue",
"Blue-subtle": "blue-subtle",
Green: "green",
"Green-subtle": "green-subtle",
Yellow: "yellow",
"Yellow-subtle": "yellow-subtle",
Chestnut: "chestnut",
"Chestnut-subtle": "chestnut-subtle",
Red: "red",
"Red-subtle": "red-subtle",
}),
closeButton: figma.boolean("ShowCloseButton", {
true: figma.children("\_icon"),
false: undefined,
}),
},
examples: [FigmaExample],
},
controls: { expanded: true },
},
argTypes: {
size: {
options: BadgeStyle.variantMap.size,
control: { type: "select" },
defaultValue: "medium",
},
styleColor: {
options: BadgeStyle.variantMap.styleColor,
control: { type: "select" },
defaultValue: "gray",
},
},
args: {
children: "Badge",
styleColor: "gray",
},
};

function FigmaExample(props: React.ComponentProps<typeof Badge>) {
return <Badge {...props} />;
}

export default meta;
type Story = StoryObj<typeof Badge>;

export const Small: Story = {
args: {
size: "small",
},
};

export const Medium: Story = {
args: {
size: "medium",
},
};

export const Large: Story = {
args: {
size: "large",
},
};

export const Chip: Story = {
args: {
size: "medium",
closeButton: <BadgeCloseButton />,
},
};

================================================
FILE: src/components/Badge/Badge.tsx
================================================
import { SerendieSymbolClose } from "@serendie/symbols";
import { ComponentProps } from "react";
import { cva, cx } from "../../../styled-system/css";
import { RecipeVariantProps } from "../../../styled-system/types";

export const BadgeStyle = cva({
base: {
display: "inline-flex",
alignItems: "center",
gap: "2px",
borderRadius: "sd.system.dimension.radius.extraLarge",
bg: "sd.system.color.interaction.hoveredVariant",
},
variants: {
size: {
small: {
height: "16px",
pr: "sd.system.dimension.spacing.twoExtraSmall",
pl: "sd.system.dimension.spacing.twoExtraSmall",
textStyle: "sd.system.typography.label.small_compact",
expanded: {
textStyle: "sd.system.typography.label.small_expanded",
},
},
medium: {
height: "24px",
pr: "sd.system.dimension.spacing.extraSmall",
pl: "sd.system.dimension.spacing.extraSmall",
textStyle: "sd.system.typography.label.medium_compact",
expanded: {
textStyle: "sd.system.typography.label.medium_expanded",
},
},
large: {
height: "32px",
pr: "sd.system.dimension.spacing.medium",
pl: "sd.system.dimension.spacing.medium",
textStyle: "sd.system.typography.label.large_compact",
expanded: {
textStyle: "sd.system.typography.label.large_expanded",
},
},
},
styleColor: {
gray: {
bg: "sd.reference.color.scale.gray.600",
color: "sd.system.color.component.inverseOnSurface",
},
blue: {
bg: "sd.reference.color.scale.blue.600",
color: "sd.system.color.component.inverseOnSurface",
},
green: {
bg: "sd.reference.color.scale.green.600",
color: "sd.system.color.component.inverseOnSurface",
},
yellow: {
bg: "sd.reference.color.scale.yellow.600",
color: "sd.system.color.component.inverseOnSurface",
},
chestnut: {
bg: "sd.reference.color.scale.chestnut.600",
color: "sd.system.color.component.inverseOnSurface",
},
red: {
bg: "sd.reference.color.scale.red.600",
color: "sd.system.color.component.inverseOnSurface",
},
"gray-subtle": {
bg: "sd.reference.color.scale.gray.100",
color: "sd.reference.color.scale.gray.800",
},
"blue-subtle": {
bg: "sd.reference.color.scale.blue.100",
color: "sd.reference.color.scale.blue.800",
},
"green-subtle": {
bg: "sd.reference.color.scale.green.100",
color: "sd.reference.color.scale.green.800",
},
"yellow-subtle": {
bg: "sd.reference.color.scale.yellow.100",
color: "sd.reference.color.scale.yellow.800",
},
"chestnut-subtle": {
bg: "sd.reference.color.scale.chestnut.100",
color: "sd.reference.color.scale.chestnut.800",
},
"red-subtle": {
bg: "sd.reference.color.scale.red.100",
color: "sd.reference.color.scale.red.800",
},
},
},
defaultVariants: {
size: "medium",
styleColor: "gray",
},
});

type BadgeProps = ComponentProps<"span"> &
RecipeVariantProps<typeof BadgeStyle> & {
closeButton?: React.ReactElement<BadgeCloseButtonProps>;
};

export const Badge: React.FC<BadgeProps> = ({
children,
closeButton,
...props
}) => {
const [variantProps, { className, ...restProps }] =
BadgeStyle.splitVariantProps(props);
const styles = BadgeStyle(variantProps);

return (
<span className={cx(styles, className)} {...restProps}>
{children}
{closeButton}
</span>
);
};

type BadgeCloseButtonProps = React.FC<ComponentProps<"button">>;

const BadgeCloseButtonStyle = cva({
base: {
cursor: "pointer",
},
});

export const BadgeCloseButton: React.FC<ComponentProps<"button">> = (props) => {
const styles = BadgeCloseButtonStyle();
return (
<button {...props} className={styles}>
<SerendieSymbolClose width={12} height={12} />
</button>
);
};

================================================
FILE: src/components/Badge/index.ts
================================================
export \* from "./Badge.tsx";

================================================
FILE: src/components/Banner/Banner.stories.tsx
================================================
import { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";
import figma from "@figma/code-connect";

const meta: Meta<typeof Banner> = {
component: Banner,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=4546-10391",
props: {
title: figma.string("Title"),
description: figma.string("Description"),
type: figma.enum("Type", {
Information: "information",
Error: "error",
Warning: "warning",
}),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
},
},
argTypes: {
icon: {
control: { type: "text" },
},
title: {
control: { type: "text" },
},
description: {
control: { type: "text" },
},
type: {
options: ["information", "error", "warning"],
control: { type: "radio" },
defaultValue: "information",
},
},
args: {
title: "タイトルテキスト",
description: "補足テキスト",
},
};

function FigmaExample(props: React.ComponentProps<typeof Banner>) {
return <Banner {...props} />;
}

export default meta;
type Story = StoryObj<typeof Banner>;

export const Information: Story = {
args: {
type: "information",
},
};

export const Error: Story = {
args: {
type: "error",
},
};

export const Warning: Story = {
args: {
type: "warning",
},
};

================================================
FILE: src/components/Banner/Banner.tsx
================================================
import {
SerendieSymbolAlertCircleFilled,
SerendieSymbolAlertCircle,
} from "@serendie/symbols";
import { ComponentProps } from "react";
import { RecipeVariantProps, cx, sva } from "../../../styled-system/css";

const BannerStyle = sva({
slots: ["container", "icon", "title", "description"],
base: {
container: {
display: "grid",
gridTemplateColumns: "24px 1fr",
columnGap: "sd.system.dimension.spacing.twoExtraSmall",
rowGap: "sd.system.dimension.spacing.extraSmall",
p: "sd.system.dimension.spacing.small",
borderRadius: "sd.system.dimension.radius.medium",
},
title: {
textStyle: "sd.system.typography.body.medium_compact",
expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
},
description: {
gridArea: "2 / 2 / 3 / 3",
textStyle: "sd.system.typography.body.medium_compact",
expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
},
},
variants: {
type: {
information: {
container: {
bg: "sd.system.color.component.surface",
color: "sd.system.color.component.onSurface",
borderWidth: "sd.system.dimension.border.medium",
borderStyle: "solid",
borderColor: "sd.system.color.component.outline",
},
},
error: {
container: {
bg: "sd.system.color.impression.negativeContainer",
color: "sd.system.color.impression.onNegativeContainer",
borderWidth: "sd.system.dimension.border.medium",
borderStyle: "solid",
borderColor: "sd.system.color.impression.negativeContainer",
},
icon: {
color: "sd.system.color.impression.negative",
},
},
warning: {
container: {
bg: "sd.system.color.impression.noticeContainer",
color: "sd.system.color.impression.onNoticeContainer",
borderWidth: "sd.system.dimension.border.medium",
borderStyle: "solid",
borderColor: "sd.system.color.impression.noticeContainer",
},
},
},
},
defaultVariants: {
type: "information",
},
});

type BannerProps = {
title: string;
description: string;
icon?: React.ReactElement;
} & ComponentProps<"div">;

export const Banner: React.FC<
BannerProps & RecipeVariantProps<typeof BannerStyle>

> = (props) => {
> const [variantProps, { title, icon, description, className, ...restProps }] =

    BannerStyle.splitVariantProps(props);

const styles = BannerStyle(variantProps);

const variantType = variantProps.type || "alert-circle";

return (
<div className={cx(styles.container, className)} {...restProps}>
<div className={styles.icon}>
{icon ? (
icon
) : variantType === "error" || variantType === "warning" ? (
<SerendieSymbolAlertCircleFilled />
) : (
<SerendieSymbolAlertCircle />
)}
</div>
<h2 className={styles.title}>{title}</h2>
<p className={styles.description}>{description}</p>
</div>
);
};

================================================
FILE: src/components/Banner/index.ts
================================================
export \* from "./Banner.tsx";

================================================
FILE: src/components/BottomNavigation/BottomNavigation.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { BottomNavigation } from "./BottomNavigation";
import {
BottomNavigationItem,
BottomNavigationItemProps,
} from "./BottomNavigationItem";
import figma from "@figma/code-connect";
import { SerendieSymbolMagnifyingGlass } from "@serendie/symbols";

const meta: Meta<typeof BottomNavigationItem> = {
component: BottomNavigationItem,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=1001-20737",
props: {
label: figma.string("Label"),
icon: figma.instance("IconInstance"),
dot: figma.enum("Type", { Badge: true }),
count: figma.enum("Type", {
"Badge with number": 12,
}),
},
examples: [FigmaExample],
},
},
};

function FigmaExample(props: BottomNavigationItemProps) {
return <BottomNavigation {...props} />;
}

export default meta;
type Story = StoryObj<typeof BottomNavigationItem>;

export const Default: Story = {
render: (args: BottomNavigationItemProps) => (
<BottomNavigation>
<BottomNavigationItem {...args} />
<BottomNavigationItem
icon={<SerendieSymbolMagnifyingGlass />}
label="検索"
/>
<BottomNavigationItem
icon={<SerendieSymbolMagnifyingGlass />}
label="トーク"
dot
/>
<BottomNavigationItem
icon={<SerendieSymbolMagnifyingGlass />}
label="カレンダー"
count={3}
/>
<BottomNavigationItem
icon={<SerendieSymbolMagnifyingGlass />}
label="アカウント"
count={100}
/>
</BottomNavigation>
),
args: {
label: "ホーム",
icon: <SerendieSymbolMagnifyingGlass />,
isActive: true,
},
};

================================================
FILE: src/components/BottomNavigation/BottomNavigation.tsx
================================================
import { ComponentProps } from "react";
import { css, cx } from "../../../styled-system/css";

export const BottomNavigation = ({
children,
className,
...props
}: ComponentProps<"nav">) => {
return (
<nav
className={cx(
css({
display: "flex",
alignItems: "center",
justifyContent: "space-around",
height: 64,
paddingX: "sd.system.dimension.spacing.medium",
borderTop: "1px solid",
borderTopColor: "sd.system.color.component.outline",
}),
className
)}
{...props} >
{children}
</nav>
);
};

================================================
FILE: src/components/BottomNavigation/BottomNavigationItem.tsx
================================================
import { ComponentProps } from "react";
import { RecipeVariantProps, cx, sva } from "../../../styled-system/css";
import { NotificationBadge } from "../NotificationBadge";

export const BottomNavigationItemStyle = sva({
slots: ["root", "iconGroup", "icon", "label", "badge"],
base: {
root: {
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
gap: "sd.system.dimension.spacing.twoExtraSmall",
height: 64,
flex: 1,
cursor: "pointer",
},
iconGroup: {
position: "relative",
},
label: {
color: "sd.system.color.component.onSurface",
textStyle: "sd.system.typography.label.small_compact",
expanded: {
textStyle: "sd.system.typography.label.small_compact",
},
},
icon: {
color: "sd.system.color.component.onSurface",
"& svg": {
width: "sd.reference.dimension.scale.8",
height: "sd.reference.dimension.scale.8",
},
},
badge: {
position: "absolute",
top: "-6px",
right: "4px",
},
},
variants: {
isActive: {
true: {
label: {
color: "sd.system.color.impression.primary",
},
icon: {
color: "sd.system.color.impression.primary",
},
},
},
dot: {
true: {
badge: {
top: "-2.5px",
right: "4px",
},
},
},
},
defaultVariants: {
isActive: false,
},
});

type Props = {
icon: React.ReactNode;
label: string;
count?: number;
};

export type BottomNavigationItemProps = Props &
ComponentProps<"button"> &
RecipeVariantProps<typeof BottomNavigationItemStyle>;

export const BottomNavigationItem: React.FC<BottomNavigationItemProps> = ({
icon,
label,
count,
className,
...props
}) => {
const [variantProps, elementProps] =
BottomNavigationItemStyle.splitVariantProps(props);
const styles = BottomNavigationItemStyle(variantProps);

return (
<button className={cx(styles.root, className)} {...elementProps}>
<div className={styles.iconGroup}>
<div className={styles.badge}>
<NotificationBadge
count={count || 0}
noNumber={variantProps.dot}
size="small"
/>
</div>
<div className={styles.icon}>{icon}</div>
</div>
<span className={styles.label}>{label}</span>
</button>
);
};

================================================
FILE: src/components/BottomNavigation/index.ts
================================================
export _ from "./BottomNavigation.tsx";
export _ from "./BottomNavigationItem.tsx";

================================================
FILE: src/components/Button/Button.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonStyle } from "./Button";
import figma from "@figma/code-connect";
import {
SerendieSymbolChevronLeft,
SerendieSymbolChevronRight,
} from "@serendie/symbols";

const meta: Meta<typeof Button> = {
component: Button,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3066-14086",
props: {
styleType: figma.enum("Type", {
Filled: "filled",
Outlined: "outlined",
Ghost: "ghost",
Rectangle: "rectangle",
}),
size: figma.enum("Size", {
Medium: "medium",
Small: "small",
}),
disabled: figma.enum("State", { Disabled: true }),
isLoading: figma.enum("State", { Loading: true }),
children: figma.string("Label"),
leftIcon: figma.enum("Icon", { Left: figma.instance("IconInstance") }),
rightIcon: figma.enum("Icon", {
Right: figma.instance("IconInstance"),
}),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
include: ["children", "styleType", "size", "disabled", "isLoading"],
},
},
argTypes: {
disabled: {
control: { type: "boolean" },
defaultValue: false,
},
styleType: {
options: ButtonStyle.variantMap.styleType,
control: { type: "radio" },
defaultValue: "filled",
},
size: {
options: ButtonStyle.variantMap.size,
control: { type: "radio" },
defaultValue: "medium",
},
isLoading: {
control: { type: "boolean" },
defaultValue: false,
},
},
};

function FigmaExample(props: React.ComponentProps<typeof Button>) {
return <Button {...props} />;
}

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Medium: Story = {
args: {
children: "Button",
size: "medium",
disabled: false,
isLoading: false,
},
};

export const Small: Story = {
args: {
children: "Button",
size: "small",
},
};

export const Outlined: Story = {
args: {
children: "Outlined Button",
styleType: "outlined",
},
};

export const Ghost: Story = {
args: {
children: "Ghost Button",
styleType: "ghost",
},
};

export const Rectangle: Story = {
args: {
children: "Rectangle Button",
styleType: "rectangle",
},
};

export const WithLeftIcon: Story = {
args: {
children: "Button",
leftIcon: <SerendieSymbolChevronLeft />,
},
};

export const WithRightIcon: Story = {
args: {
children: "Button",
rightIcon: <SerendieSymbolChevronRight />,
},
};

================================================
FILE: src/components/Button/Button.tsx
================================================
import React, { ComponentProps } from "react";
import { ProgressIndicator } from "../ProgressIndicator";
import { css, cva, cx } from "../../../styled-system/css";
import { styled } from "../../../styled-system/jsx";
import { RecipeVariantProps } from "../../../styled-system/types";

//Note: Filled がデフォルト
//type にルックを定義、size には余白やフォントのサイズを定義するイメージ

// outline と rectangle は角 R のみ違うので共通部を切り出している
const outlineCss = {
color: "sd.system.color.component.onSurface",
outlineWidth: "sd.system.dimension.border.medium",
outlineStyle: "solid",
outlineColor: "sd.system.color.component.outline",
bgColor: "sd.system.color.component.surface",
\_enabled: {
\_hover: {
bgColor: "sd.system.color.interaction.hoveredVariant",
},
\_focusVisible: {
outlineColor: "sd.system.color.component.outlineVariant",
bgColor: "sd.system.color.interaction.hoveredVariant",
},
},
\_disabled: {
bgColor: "sd.system.color.interaction.disabled",
color: "sd.system.color.interaction.disabledOnSurface",
outline: "none",
},
};

export const ButtonStyle = cva({
base: {
borderRadius: "sd.system.dimension.radius.full",
position: "relative",
display: "inline-flex",
gap: "sd.system.dimension.spacing.twoExtraSmall",
alignItems: "center",
justifyContent: "center",
overflow: "hidden",
cursor: "pointer",
\_disabled: {
cursor: "not-allowed",
},
},
variants: {
styleType: {
filled: {
bg: "sd.system.color.impression.primaryContainer",
color: "sd.system.color.impression.onPrimaryContainer",
\_enabled: {
\_hover: {
\_after: {
content: "''",
position: "absolute",
inset: "0",
bg: "sd.system.color.interaction.hovered",
},
},
\_focusVisible: {
outlineWidth: "sd.system.dimension.border.medium",
outlineStyle: "solid",
outlineColor: "sd.system.color.interaction.hovered",
\_after: {
content: "''",
position: "absolute",
inset: "0",
bg: "sd.system.color.interaction.hovered",
},
},
},
\_disabled: {
bg: "sd.system.color.interaction.disabled",
color: "sd.system.color.interaction.disabledOnSurface",
},
},
ghost: {
color: "sd.system.color.impression.primary",
\_enabled: {
\_hover: {
bgColor: "sd.system.color.interaction.hoveredVariant",
},
\_focusVisible: {
bgColor: "sd.system.color.interaction.hoveredVariant",
outlineWidth: "sd.system.dimension.border.medium",
outlineStyle: "solid",
outlineColor: "sd.system.color.component.outlineVariant",
},
},
\_disabled: {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
outlined: outlineCss,
rectangle: {
...outlineCss,
borderRadius: "sd.system.dimension.radius.medium",
},
},
size: {
medium: {
height: 48,
px: "sd.system.dimension.spacing.extraLarge",
py: "sd.system.dimension.spacing.small",
textStyle: "sd.system.typography.label.large_compact",
expanded: {
textStyle: "sd.system.typography.label.large_expanded",
},
},
small: {
height: 32,
px: "sd.system.dimension.spacing.small",
py: "sd.system.dimension.spacing.twoExtraSmall",
textStyle: "sd.system.typography.label.medium_compact",
expanded: {
textStyle: "sd.system.typography.label.medium_expanded",
},
},
},
},
defaultVariants: {
styleType: "filled",
size: "medium",
},
});

// leftIcon と rightIcon を両方指定できないようにする
type ExclusiveIconProps =
| ({ leftIcon?: React.ReactElement } & { rightIcon?: never })
| ({ leftIcon?: never } & { rightIcon?: React.ReactElement });

type ButtonLoadingProps = {
isLoading?: boolean;
};
type ButtonProps = ComponentProps<"button"> &
RecipeVariantProps<typeof ButtonStyle> &
ExclusiveIconProps &
ButtonLoadingProps;

const Span = styled("span", {
base: {
position: "relative",
zIndex: "sd.system.elevation.zIndex.base",
},
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
(props, ref) => {
const [
variantProps,
{ children, leftIcon, rightIcon, isLoading, className, ...restProps },
] = ButtonStyle.splitVariantProps(props);
const style = ButtonStyle(variantProps);

    const iconPaddingCss = css(
      leftIcon || rightIcon
        ? props.size === "medium"
          ? {
              //アイコンがある側 `spacing.medium`、無い側は`spacing.extraLarge`
              paddingLeft: leftIcon
                ? "sd.system.dimension.spacing.medium"
                : "sd.system.dimension.spacing.extraLarge",
              paddingRight: rightIcon
                ? "sd.system.dimension.spacing.medium"
                : "sd.system.dimension.spacing.extraLarge",
            }
          : {
              //アイコンがある側 `spacing.extraSmall`、無い側は`spacing.medium`
              paddingLeft: leftIcon
                ? "sd.system.dimension.spacing.extraSmall"
                : "sd.system.dimension.spacing.medium",
              paddingRight: rightIcon
                ? "sd.system.dimension.spacing.extraSmall"
                : "sd.system.dimension.spacing.medium",
            }
        : {}
    );

    return (
      <button
        ref={ref}
        className={cx(style, iconPaddingCss, className)}
        {...restProps}
      >
        {isLoading && (
          <ProgressIndicator
            size={variantProps.size}
            color={
              props.styleType === undefined || props.styleType === "filled"
                ? "white"
                : "gray"
            }
          />
        )}
        {!isLoading && leftIcon && <Span p={"2px"}>{leftIcon}</Span>}
        <Span>{children}</Span>
        {!isLoading && rightIcon && <Span p={"2px"}>{rightIcon}</Span>}
      </button>
    );

}
);

================================================
FILE: src/components/Button/index.ts
================================================
export \* from "./Button.tsx";

================================================
FILE: src/components/CheckBox/CheckBox.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox, CheckBoxProps } from "./CheckBox";
import figma from "@figma/code-connect";

const meta: Meta<typeof CheckBox> = {
component: CheckBox,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=5129-40889",
props: {
label: figma.string("Label"),
helperText: figma.enum("Lines", {
"Multiple Lines": figma.string("HelperText"),
}),
},
examples: [FigmaExample],
},
},
decorators: [(Story) => <Story />],
argTypes: {
helperText: {
control: { type: "text" },
defaultValue: "",
},
},
};

function FigmaExample(props: React.ComponentProps<typeof CheckBox>) {
return <CheckBox {...props} value="item" />;
}

export default meta;
type Story = StoryObj<typeof CheckBox>;

const Template = (args: CheckBoxProps) => (
<>
<CheckBox
{...args}
label="タイトルタイトル 1"
value="itemA"
helperText={args.helperText}
/>
<CheckBox
{...args}
label="タイトルタイトル 2"
value="itemB"
helperText={args.helperText}
/>
<CheckBox
{...args}
label="タイトルタイトル 3"
value="itemC"
disabled={true}
/>
<CheckBox
{...args}
label="タイトルタイトル 4"
value="itemD"
helperText={args.helperText}
/>
</>
);

export const Default: Story = {
render: Template,
};

export const WithHelperText: Story = {
render: Template,
args: {
helperText:
"補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト",
},
};

export const Disabled: Story = {
render: (args: CheckBoxProps) => (
<>
<CheckBox
{...args}
label="タイトルタイトル 2"
value="itemB"
helperText={args.helperText}
defaultChecked
disabled
/>
<CheckBox {...args} label="タイトルタイトル 3" value="itemC" disabled />
</>
),
args: {
helperText:
"補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト",
},
};

================================================
FILE: src/components/CheckBox/CheckBox.tsx
================================================
import { Checkbox as ArkCheckbox, CheckboxRootProps } from "@ark-ui/react";
import { RecipeVariantProps, css, cx, sva } from "../../../styled-system/css";
import CheckboxCheckedIcon from "../../assets/checkboxChecked.svg?react";
import CheckboxUncheckedIcon from "../../assets/checkboxUnchecked.svg?react";

export const checkboxIconCss = {
flexShrink: 0,
cursor: "pointer",
".group:has(:focus-visible) &": {
outlineStyle: "solid",
outlineOffset: "-2px",
outlineWidth: "1.5px",
outlineColor: "sd.system.color.impression.primary",
borderRadius: "sd.system.dimension.radius.small",
},
\_disabled: {
\_checked: {
"& svg": {
color:
"color-mix(in srgb, {colors.sd.system.color.impression.primary}, {colors.sd.system.color.interaction.hoveredOnPrimary});",
},
"& .checkmark": {
color:
"color-mix(in srgb, {colors.sd.system.color.interaction.disabled}, {colors.sd.system.color.impression.onPrimaryContainer});",
},
},
},
};

export const checkboxCheckedIconCss = {
width: 24,
height: 24,
color: "sd.system.color.impression.primary",
"& .checkmark": {
color: "sd.system.color.impression.onPrimaryContainer",
},
};

export const checkboxUncheckedIconCss = {
width: 24,
height: 24,
color: "sd.system.color.component.outline",
\_disabled: {
color:
"color-mix(in srgb, {colors.sd.system.color.component.outline}, {colors.sd.system.color.interaction.hoveredOnPrimary});",
},
};

export const CheckBoxStyle = sva({
slots: [
"root",
"itemControl",
"checkedIcon",
"uncheckedIcon",
"itemTextGroup",
"itemText",
"helperText",
],
base: {
root: {
display: "flex",
alignItems: "center",
gap: "sd.system.dimension.spacing.medium",
paddingY: "sd.system.dimension.spacing.small",
paddingX: "sd.system.dimension.spacing.medium",
cursor: "pointer",
},
itemControl: checkboxIconCss,
checkedIcon: checkboxCheckedIconCss,
uncheckedIcon: checkboxUncheckedIconCss,
itemTextGroup: {
display: "flex",
flexFlow: "column",
},
itemText: {
color: "sd.system.color.component.onSurface",
textStyle: "sd.system.typography.body.medium_compact",
\_expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
\_disabled: {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
helperText: {
color: "sd.system.color.component.onSurfaceVariant",
marginTop: "sd.system.dimension.spacing.twoExtraSmall",
textStyle: "sd.system.typography.body.extraSmall_compact",
\_expanded: {
textStyle: "sd.system.typography.body.extraSmall_expanded",
},
\_disabled: {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
},
});

type CheckBoxItemProps = {
label: string;
helperText?: string;
};

export type CheckBoxProps = CheckboxRootProps &
RecipeVariantProps<typeof CheckBoxStyle> &
CheckBoxItemProps;

export const CheckBox: React.FC<CheckBoxProps> = ({
value,
label,
helperText,
className,
...props
}) => {
const [variantProps, elementProps] = CheckBoxStyle.splitVariantProps(props);
const styles = CheckBoxStyle(variantProps);
const rootStyle = cx(
styles.root,
helperText && css({ alignItems: "flex-start" })
);

return (
<ArkCheckbox.Root
value={value}
className={cx("group", rootStyle, className)}
{...elementProps} >
<ArkCheckbox.Context>
{(checkbox) => (
<ArkCheckbox.Control className={styles.itemControl}>
{checkbox.checked ? (
<CheckboxCheckedIcon className={styles.checkedIcon} />
) : (
<CheckboxUncheckedIcon className={styles.uncheckedIcon} />
)}
</ArkCheckbox.Control>
)}
</ArkCheckbox.Context>
<div className={styles.itemTextGroup}>
<ArkCheckbox.Label className={styles.itemText}>
{label}
</ArkCheckbox.Label>
{helperText && (
<ArkCheckbox.Label className={styles.helperText}>
{helperText}
</ArkCheckbox.Label>
)}
</div>
<ArkCheckbox.HiddenInput />
</ArkCheckbox.Root>
);
};

================================================
FILE: src/components/CheckBox/index.ts
================================================
export \* from "./CheckBox.tsx";

================================================
FILE: src/components/ChoiceBox/ChoiceBox.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceBox } from "./ChoiceBox";
import { RadioGroup } from "../RadioButton";
import figma from "@figma/code-connect";

const meta: Meta<typeof ChoiceBox> = {
component: ChoiceBox,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=6816-45671",
props: {
type: figma.enum("Type", {
Radio: "radio",
Checkbox: "checkbox",
}),
checked: figma.enum("State", { Selected: true }),
disabled: figma.enum("State", {
"Disabled-Enabled": true,
"Disabled-Selected": true,
}),
},
examples: [FigmaExample],
},
},
decorators: [(Story) => <Story />],
};

function FigmaExample(props: React.ComponentProps<typeof ChoiceBox>) {
return (
<RadioGroup>
<ChoiceBox {...props} value="itemA" />
</RadioGroup>
);
}

export default meta;
type Story = StoryObj<typeof ChoiceBox>;

export const Radio: Story = {
render: () => (
<RadioGroup>
<ChoiceBox value="itemA" type="radio" />
</RadioGroup>
),
};

export const Checkbox: Story = {
args: {
value: "itemA",
type: "checkbox",
},
};

export const Indeterminate: Story = {
args: {
value: "itemA",
type: "checkbox",
indeterminate: true,
},
};

================================================
FILE: src/components/ChoiceBox/ChoiceBox.tsx
================================================
import {
Checkbox as ArkCheckbox,
CheckboxRootProps,
RadioGroup,
RadioGroupItemProps,
} from "@ark-ui/react";
import { cx, sva } from "../../../styled-system/css";
import CheckboxCheckedIcon from "../../assets/checkboxChecked.svg?react";
import CheckboxUncheckedIcon from "../../assets/checkboxUnchecked.svg?react";
import CheckboxIndeterminateIcon from "../../assets/checkboxIndeterminate.svg?react";
import RadioChecked from "../../assets/radioChecked.svg?react";
import RadioUnChecked from "../../assets/radioUnchecked.svg?react";
import {
checkboxCheckedIconCss,
checkboxIconCss,
checkboxUncheckedIconCss,
} from "../CheckBox";
import {
radioCheckedIconCss,
radioIconCss,
radioUncheckedIconCss,
} from "../RadioButton";
import { useEffect, useRef } from "react";

export const ChoiceBoxStyle = sva({
slots: [
"root",
"radioItem",
"radioCheckedIcon",
"radioUncheckedIcon",
"checkboxItem",
"checkboxCheckedIcon",
"checkboxUncheckedIcon",
],
base: {
root: {
display: "flex",
},
radioItem: radioIconCss,
radioCheckedIcon: radioCheckedIconCss,
radioUncheckedIcon: radioUncheckedIconCss,
checkboxItem: checkboxIconCss,
checkboxCheckedIcon: checkboxCheckedIconCss,
checkboxUncheckedIcon: checkboxUncheckedIconCss,
},
});

type ChoiceBoxBaseProps = {
type: "radio" | "checkbox";
};

export type ChoiceBoxProps = ChoiceBoxBaseProps &
RadioGroupItemProps &
CheckboxRootProps & {
indeterminate?: boolean;
};

export const ChoiceBox: React.FC<ChoiceBoxProps> = ({
type,
value,
indeterminate,
className,
...props
}) => {
const [variantProps, elementProps] = ChoiceBoxStyle.splitVariantProps(props);
const styles = ChoiceBoxStyle(variantProps);

if (type === "radio") {
return (
<RadioGroup.Item
value={value}
className={cx("group", styles.root, className)}
{...elementProps} >
<RadioGroup.ItemContext>
{(radio) => (
<RadioGroup.ItemControl className={styles.radioItem} asChild>
{radio.checked ? (
<RadioChecked className={styles.radioCheckedIcon} />
) : (
<RadioUnChecked className={styles.radioUncheckedIcon} />
)}
</RadioGroup.ItemControl>
)}
</RadioGroup.ItemContext>
<RadioGroup.ItemHiddenInput />
</RadioGroup.Item>
);
}

if (type === "checkbox") {
const inputRef = useRef<HTMLInputElement>(null);
useEffect(() => {
if (inputRef.current) {
inputRef.current.indeterminate = !!indeterminate;
}
}, [indeterminate]);

    return (
      <ArkCheckbox.Root
        value={value}
        className={cx("group", styles.root, className)}
        {...elementProps}
        onClick={(e) => {
          if (indeterminate) {
            e.preventDefault();
            if (typeof props.onClick === "function") {
              props.onClick(e);
            }
            return;
          }
          if (typeof props.onClick === "function") {
            props.onClick(e);
          }
        }}
      >
        <ArkCheckbox.Context>
          {(checkbox) => (
            <ArkCheckbox.Control className={styles.checkboxItem}>
              {checkbox.checked ? (
                <CheckboxCheckedIcon className={styles.checkboxCheckedIcon} />
              ) : indeterminate ? (
                <CheckboxIndeterminateIcon
                  className={styles.checkboxCheckedIcon}
                />
              ) : (
                <CheckboxUncheckedIcon
                  className={styles.checkboxUncheckedIcon}
                />
              )}
            </ArkCheckbox.Control>
          )}
        </ArkCheckbox.Context>
        <ArkCheckbox.HiddenInput ref={inputRef} />
      </ArkCheckbox.Root>
    );

}
};

================================================
FILE: src/components/ChoiceBox/index.ts
================================================
export \* from "./ChoiceBox.tsx";

================================================
FILE: src/components/DashboardWidget/DashboardWidget.stories.tsx
================================================
import figma from "@figma/code-connect";
import { Meta, StoryObj } from "@storybook/react";
import { css } from "../../../styled-system/css";
import { DashboardWidget } from "./DashboardWidget";

const meta: Meta<typeof DashboardWidget> = {
component: DashboardWidget,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3359-9200",
props: {
title: figma.string("Title"),
label: figma.string("SubTitle"),
},
examples: [FigmaExample],
},
},
};

function FigmaExample(props: React.ComponentProps<typeof DashboardWidget>) {
return (
<DashboardWidget
{...props}
values={[{ label: "Label", value: 100, unit: "unit" }]}
/>
);
}

export default meta;
type Story = StoryObj<typeof DashboardWidget>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any) => (
<DashboardWidget {...args}>
<DashboardPlaceholder />
</DashboardWidget>
);

export const NoValue: Story = {
render: Template,
};

export const SingleValue: Story = {
args: {
values: [
{
label: "Label",
value: 100,
unit: "unit",
},
],
},
render: Template,
};

export const DoubleValue: Story = {
args: {
values: [
{
label: "Label",
value: 100,
unit: "unit",
},
{
label: "Label",
value: 100,
unit: "unit",
},
],
},
render: Template,
};

const DashboardPlaceholder: React.FC = () => (

  <div
    className={css({
      width: "100%",
      height: "100%",
      minHeight: "160px",
      bgColor: "sd.reference.color.scale.gray.200",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "sd.system.dimension.radius.medium",
    })}
  >
    GraphArea
  </div>
);

================================================
FILE: src/components/DashboardWidget/DashboardWidget.tsx
================================================
import { SerendieSymbolChevronRight } from "@serendie/symbols";
import { ComponentProps } from "react";
import { cx, sva } from "../../../styled-system/css";

const DashboardWidgetStyle = sva({
slots: [
"root",
"labelContainer",
"label",
"labelTitle",
"labelText",
"area",
"areaContainer",
"areaValue",
"areaValueLabel",
"areaValueContainer",
"areaValueNumber",
"areaValueNumberUnit",
],
base: {
root: {
display: "flex",
flexDirection: "column",
gap: "sd.system.dimension.spacing.medium",
py: "sd.system.dimension.spacing.small",
px: "sd.system.dimension.spacing.medium",

      width: "100%",
      bgColor: "sd.system.color.component.surface",
      borderRadius: "sd.system.dimension.radius.medium",
    },
    labelContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      cursor: "pointer",
    },
    label: {
      display: "flex",
      alignItems: "center",
      gap: "sd.system.dimension.spacing.medium",
      width: "100%",
    },
    labelTitle: {
      textStyle: "sd.system.typography.label.extraLarge_compact",
      _expanded: {
        textStyle: "sd.system.typography.label.extraLarge_expanded",
      },
    },
    labelText: {
      textStyle: "sd.system.typography.label.small_compact",
      color: "sd.system.color.component.onSurfaceVariant",
      _expanded: {
        textStyle: "sd.system.typography.label.small_expanded",
      },
    },
    area: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "sd.system.dimension.spacing.medium",
    },
    areaContainer: {},
    areaValue: {
      display: "flex",
      flexDirection: "column",
      alignSelf: "flex-end",
    },
    areaValueLabel: {
      color: "sd.system.color.component.onSurfaceVariant",
      textStyle: "sd.system.typography.label.small_compact",
      _expanded: {
        textStyle: "sd.system.typography.label.small_expanded",
      },
    },
    areaValueContainer: {
      display: "flex",
      alignItems: "baseline",
      gap: "sd.system.dimension.spacing.twoExtraSmall",
    },
    areaValueNumber: {
      textStyle: "sd.system.typography.title.large_compact",
      _expanded: {
        textStyle: "sd.system.typography.title.large_expanded",
      },
    },
    areaValueNumberUnit: {
      color: "sd.system.color.component.onSurfaceVariant",
      textStyle: "sd.system.typography.label.small_compact",
      _expanded: {
        textStyle: "sd.system.typography.label.small_expanded",
      },
    },

},
variants: {
values: {
noValue: {
area: {
gridTemplateColumns: "1fr",
},
},
singleValue: {
area: {
gridTemplateColumns: "auto 1fr",
gap: "sd.system.dimension.spacing.twoExtraLarge",
},
},
doubleValue: {
areaContainer: {
gridColumn: "span 2",
order: -1,
},
area: {
gridTemplateColumns: "1fr 1fr",
},
},
},
},
defaultVariants: {
values: "singleValue",
},
});

type AreaValueProps = {
label: string;
value: number;
unit: string;
};

type DashboardWidgetProps = {
values?: [AreaValueProps, AreaValueProps] | [AreaValueProps] | undefined;
linkTo?: string;
children?: React.ReactNode;
} & ComponentProps<"div">;

export const DashboardWidget: React.FC<DashboardWidgetProps> = ({
values,
children,
linkTo,
className,
...restProps
}) => {
// Variant はコンポーネント内部でのみ使用
const style = DashboardWidgetStyle({
values:
values === undefined
? "noValue"
: values.length === 1
? "singleValue"
: "doubleValue",
});

const AreaValue: React.FC<AreaValueProps> = ({ label, value, unit }) => {
return (
<div className={style.areaValue}>
<h3 className={style.areaValueLabel}>{label}</h3>
<div className={style.areaValueContainer}>
<p className={style.areaValueNumber}>{value}</p>
<p className={style.areaValueNumberUnit}>{unit}</p>
</div>
</div>
);
};

return (
<div className={cx(style.root, className)} {...restProps}>
<a href={linkTo} className={style.labelContainer}>
<div className={style.label}>
<h2 className={style.labelTitle}>title</h2>
<p className={style.labelText}>icon</p>
</div>
<SerendieSymbolChevronRight />
</a>

      <div className={style.area}>
        {values?.map((value, index) => <AreaValue key={index} {...value} />)}
        <div className={style.areaContainer}>{children}</div>
      </div>
    </div>

);
};

================================================
FILE: src/components/DashboardWidget/index.ts
================================================
export \* from "./DashboardWidget.tsx";

================================================
FILE: src/components/Divider/Divider.stories.tsx
================================================
import { Meta, StoryObj } from "@storybook/react";
import { Divider, DividerStyle } from "./Divider";
import figma from "@figma/code-connect";

const meta: Meta<typeof Divider> = {
component: Divider,
parameters: {
controls: { expanded: true },
},
argTypes: {
color: {
options: DividerStyle.variantMap.color,
control: { type: "select" },
defaultValue: "normal",
},
type: {
options: DividerStyle.variantMap.type,
control: { type: "select" },
defaultValue: "horizontal",
},
},
args: {
color: "normal",
},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
args: {
type: "horizontal",
},
};

export const Vertical: Story = {
args: {
type: "vertical",
},
};

// Horizontal/Vertical が Figma 上では別コンポーネント、React では共通コンポーネントのため、例外的に figma.connect()を利用
figma.connect(
Divider,
"https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3122-30116",
{
props: {
color: figma.enum("Color", {
Light: "light",
Normal: "normal",
Dark: "dark",
}),
},
example: ({ color }) => <Divider color={color} type="horizontal" />,
}
);
figma.connect(
Divider,
"https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3122-30141",
{
props: {
color: figma.enum("Color", {
Light: "light",
Normal: "normal",
Dark: "dark",
}),
},
example: ({ color }) => <Divider color={color} type="vertical" />,
}
);

================================================
FILE: src/components/Divider/Divider.tsx
================================================
import { ComponentProps } from "react";
import { cva, cx, RecipeVariantProps } from "../../../styled-system/css";

export const DividerStyle = cva({
base: {
border: "none",
},
variants: {
color: {
light: {
borderColor: "sd.reference.color.scale.gray.200",
},
normal: {
borderColor: "sd.reference.color.scale.gray.300",
},
dark: {
borderColor: "sd.system.color.component.outlineVariant",
},
},
type: {
horizontal: {
width: "100%",
height: "sd.reference.dimension.scale.1",
borderBottomStyle: "solid",
borderWidth: "sd.system.dimension.border.medium",
},
vertical: {
borderLeftStyle: "solid",
width: "sd.reference.dimension.scale.1",
borderWidth: "sd.system.dimension.border.medium",
height: "100%",
minHeight: "10px",
},
},
},
defaultVariants: {
color: "normal",
type: "horizontal",
},
});

type DividerProps = ComponentProps<"hr"> &
RecipeVariantProps<typeof DividerStyle>;

export const Divider = (props: DividerProps) => {
const [variantProps, elementProps] = DividerStyle.splitVariantProps(props);
const { className, ...restProps } = elementProps;
return (
<hr className={cx(DividerStyle(variantProps), className)} {...restProps} />
);
};

================================================
FILE: src/components/Divider/index.ts
================================================
export \* from "./Divider.tsx";

================================================
FILE: src/components/Drawer/Drawer.stories.tsx
================================================
import { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerProps } from "./Drawer";
import { useState } from "react";
import { IconButton } from "../IconButton";
import figma from "@figma/code-connect";
import { SerendieSymbolMenu } from "@serendie/symbols";
import { userEvent, within } from "@storybook/test";
import { FullscreenLayout } from "../../../.storybook/FullscreenLayout";

const meta: Meta<typeof Drawer> = {
component: Drawer,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3223-28928",
props: {
type: figma.enum("Type", {
Full: "full",
Right: "right",
Left: "left",
}),
},
examples: [FigmaExample],
},
},
decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

function FigmaExample(props: React.ComponentProps<typeof Drawer>) {
return <Drawer {...props} />;
}

const DrawerOpenTemplate = (args: DrawerProps) => {
const [isOpen, setIsOpen] = useState(false);
return (
<>
<IconButton
shape="rectangle"
icon={<SerendieSymbolMenu />}
styleType="outlined"
onClick={() => setIsOpen(true)}
/>
<Drawer
{...args}
isOpen={isOpen}
onOpenChange={(e) => setIsOpen(e.open)}
/>
</>
);
};

export const Left: Story = {
render: DrawerOpenTemplate,
args: {
type: "left",
},
};

export const Right: Story = {
render: DrawerOpenTemplate,
args: {
type: "right",
},
};

export const Full: Story = {
render: DrawerOpenTemplate,
args: {
type: "full",
},
};

export const PlayClickedButton: Story = {
parameters: {
layout: "fullscreen",
},
render: (args) => {
return (
<FullscreenLayout>
<DrawerOpenTemplate {...args} />
</FullscreenLayout>
);
},
args: {
type: "left",
},
play: async ({ canvasElement }) => {
const canvas = within(canvasElement);

    const button = canvas.getByRole("button");

    await userEvent.click(button);

},
};

================================================
FILE: src/components/Drawer/Drawer.tsx
================================================
import { Dialog, DialogRootProps, Portal } from "@ark-ui/react";
import { SerendieSymbolClose } from "@serendie/symbols";
import { cx, RecipeVariantProps, sva } from "../../../styled-system/css";
import { IconButton } from "../IconButton";

const DrawerStyle = sva({
slots: ["backdrop", "content", "contentInner", "closeTrigger"],
base: {
backdrop: {
background: "sd.system.color.component.scrim",
position: "fixed",
inset: 0,
zIndex: "sd.system.elevation.zIndex.modal",
},
content: {
position: "fixed",
top: "0",
width: "calc(100% - {spacing.sd.system.dimension.spacing.extraLarge})",
maxWidth: "375px",
height: "100vh",
gap: "sd.system.dimension.spacing.twoExtraLarge",
backgroundColor: "sd.system.color.component.surface",
boxShadow: "sd.system.elevation.shadow.level5",
zIndex: "sd.system.elevation.zIndex.modal",
},
contentInner: {
display: "grid",
gap: "sd.system.dimension.spacing.medium",
},
closeTrigger: {
display: "flex",
alignItems: "flex-start",
padding: "sd.system.dimension.spacing.twoExtraSmall",
},
},
variants: {
type: {
left: {
content: {
left: "0",
justifyContent: "flex-start",
},
},
full: {
content: {
left: "0",
width: "100%",
minWidth: "100%",
maxWidth: "100%",
},
},
right: {
content: {
right: "0",
},
closeTrigger: {
justifyContent: "flex-end",
},
},
},
},
defaultVariants: {
type: "right",
},
});

type Props = {
isOpen: boolean;
children: React.ReactNode;
contentClassName?: string;
backdropClassName?: string;
onOpenChange: (e: { open: boolean }) => void;
};

export type DrawerProps = Props &
DialogRootProps &
RecipeVariantProps<typeof DrawerStyle>;

export const Drawer: React.FC<DrawerProps> = ({
isOpen,
children,
contentClassName,
backdropClassName,
...props
}) => {
const [variantProps, elementProps] = DrawerStyle.splitVariantProps(props);
const styles = DrawerStyle(variantProps);

return (
<Dialog.Root open={isOpen} {...elementProps}>
<Portal>
<Dialog.Backdrop className={cx(styles.backdrop, backdropClassName)} />
<Dialog.Positioner>
<Dialog.Content className={cx(styles.content, contentClassName)}>
<header className={styles.closeTrigger}>
<Dialog.CloseTrigger asChild>
<IconButton
icon={<SerendieSymbolClose />}
shape="rectangle"
styleType="ghost"
/>
</Dialog.CloseTrigger>
</header>
{children}
</Dialog.Content>
</Dialog.Positioner>
</Portal>
</Dialog.Root>
);
};

================================================
FILE: src/components/Drawer/index.ts
================================================
export \* from "./Drawer.tsx";

================================================
FILE: src/components/DropdownMenu/DropdownMenu.stories.tsx
================================================
import figma from "@figma/code-connect";
import {
SerendieSymbolMenu,
SerendieSymbolPlaceholder,
} from "@serendie/symbols";
import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu, DropdownMenuProps, MenuItemProps } from "./DropdownMenu";

const meta: Meta<typeof DropdownMenu> = {
component: DropdownMenu,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=6375-6010",
props: {
title: figma.string("Title"),
disabled: figma.enum("State", { Disabled: true }),
isIconMenu: figma.enum("Type", { IconButton: true }),
},
examples: [FigmaExample],
},
},
decorators: [(Story) => <Story />],
argTypes: {
title: {
control: { type: "text" },
defaultValue: "メニュータイトル",
},
disabled: {
control: { type: "boolean" },
defaultValue: false,
},
styleType: {
control: { type: "inline-radio", options: ["default", "iconButton"] },
defaultValue: "default",
},
},
};

function FigmaExample(props: DropdownMenuProps) {
return (
<DropdownMenu
{...props}
items={[
{
label: "list title",
value: "value1",
icon: <SerendieSymbolPlaceholder />,
},
]}
/>
);
}

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

const sampleItems: MenuItemProps[] = [
{
label: "リストタイトル",
value: "value1",
icon: <SerendieSymbolPlaceholder />,
},
{
label: "リストタイトル",
value: "value2",
icon: <SerendieSymbolPlaceholder />,
},
{
label: "リストタイトル",
value: "value3",
icon: <SerendieSymbolPlaceholder />,
},
{
label: "リストタイトル",
value: "value4",
icon: <SerendieSymbolPlaceholder />,
},
{
label: "リストタイトル",
value: "value5",
icon: <SerendieSymbolPlaceholder />,
},
];

const Template = (args: DropdownMenuProps) => (
<DropdownMenu {...args} items={sampleItems} />
);

export const Default: Story = {
render: Template,
args: {
title: "メニュータイトル",
},
};

export const Icon: Story = {
render: Template,
args: {
title: "メニュータイトル",
styleType: "iconButton",
icon: <SerendieSymbolMenu />,
},
};

================================================
FILE: src/components/DropdownMenu/DropdownMenu.tsx
================================================
import { Menu as ArkMenu, MenuRootProps, Portal } from "@ark-ui/react";
import {
SerendieSymbolChevronDown,
SerendieSymbolMenu,
} from "@serendie/symbols";
import { sva } from "../../../styled-system/css";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

export const DropdownMenuStyle = sva({
slots: ["content", "itemGroup", "item", "itemIcon", "button", "buttonIcon"],
base: {
content: {
bgColor: "sd.system.color.component.surface",
borderRadius: "sd.system.dimension.radius.medium",
bg: "sd.system.color.component.surface",
boxShadow: "sd.system.elevation.shadow.level1",
outline: "none",
},
itemGroup: {
width: 240,
},
item: {
display: "flex",
height: "48px",
alignItems: "center",
gap: "sd.system.dimension.spacing.small",
paddingX: "sd.system.dimension.spacing.medium",
paddingY: "sd.system.dimension.spacing.extraSmall",
cursor: "pointer",
textStyle: "sd.system.typography.body.medium_compact",
expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
\_hover: {
bgColor: "sd.system.color.interaction.hoveredVariant",
},
\_highlighted: {
bgColor: "sd.system.color.interaction.hoveredVariant",
},
},
itemIcon: {
"& svg": {
width: "sd.reference.dimension.scale.8",
height: "sd.reference.dimension.scale.8",
},
},
button: {
paddingY: "sd.system.dimension.spacing.small",
paddingInlineStart: "sd.system.dimension.spacing.medium",
paddingRight: "sd.system.dimension.spacing.small",
color: "sd.system.color.component.onSurfaceVariant",
gap: "sd.system.dimension.spacing.extraSmall",
textStyle: "sd.system.typography.body.medium_compact",
expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
\_disabled: {
outline: "solid",
outlineOffset: "0px",
outlineColor: "sd.system.color.component.outline",
outlineWidth: "sd.system.dimension.border.medium",
},
\_expanded: {
textStyle: "sd.system.typography.body.medium_compact",
expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
// Note: leftIcon が \_open を受け取れないため button 側で制御
"& svg": {
transform: "rotate(180deg)",
},
},
},
buttonIcon: {
color: "sd.system.color.component.onSurface",
marginLeft: "2px",
transition: "transform 0.2s",
},
},
});

export type MenuItemProps = {
value: string;
label: string;
icon?: React.ReactElement;
};

export type DropdownMenuProps = {
styleType?: "default" | "iconButton";
title: string;
items: MenuItemProps[];
disabled?: boolean;
icon?: React.ReactElement;
};

export const DropdownMenu: React.FC<DropdownMenuProps & MenuRootProps> = ({
styleType = "default",
title,
items,
disabled,
icon,
...restProps
}) => {
/_ variant なし _/
const styles = DropdownMenuStyle();

return (
<ArkMenu.Root
positioning={{
        offset: {
          mainAxis: 1,
          crossAxis: 0,
        },
      }}
{...restProps} >
<ArkMenu.Trigger asChild>
{styleType === "iconButton" ? (
<IconButton
icon={icon || <SerendieSymbolMenu className={styles.buttonIcon} />}
shape="rectangle"
disabled={disabled}
styleType="outlined"
title={title}
/>
) : (
<Button
styleType="rectangle"
size="medium"
disabled={disabled}
rightIcon={
<SerendieSymbolChevronDown className={styles.buttonIcon} />
}
className={styles.button} >
{title}
</Button>
)}
</ArkMenu.Trigger>
<Portal>
<ArkMenu.Positioner>
<ArkMenu.Content className={styles.content}>
<ArkMenu.ItemGroup className={styles.itemGroup}>
{items.map((item) => (
<ArkMenu.Item
key={item.value}
value={item.value}
className={styles.item} >
{item.icon && (
<div className={styles.itemIcon}>{item.icon}</div>
)}
{item.label}
</ArkMenu.Item>
))}
</ArkMenu.ItemGroup>
</ArkMenu.Content>
</ArkMenu.Positioner>
</Portal>
</ArkMenu.Root>
);
};

================================================
FILE: src/components/DropdownMenu/index.ts
================================================
export \* from "./DropdownMenu.tsx";

================================================
FILE: src/components/IconButton/IconButton.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton, IconButtonStyle } from "./IconButton";
import figma from "@figma/code-connect";
import { SerendieSymbolPlus } from "@serendie/symbols";

const meta: Meta<typeof IconButton> = {
component: IconButton,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3107-13402",
props: {
shape: figma.enum("Shape", {
Circle: "circle",
Rectangle: "rectangle",
}),
size: figma.enum("Size", {
Large: "large",
Medium: "medium",
Small: "small",
}),
styleType: figma.enum("Type", {
Filled: "filled",
Outlined: "outlined",
Ghost: "ghost",
}),
disabled: figma.enum("State", { Disabled: true }),
icon: figma.instance("IconInstance"),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
include: ["shape", "styleType", "size", "disabled"],
},
},
argTypes: {
disabled: {
control: { type: "boolean" },
defaultValue: false,
},
shape: {
options: IconButtonStyle.variantMap.shape,
control: { type: "radio" },
defaultValue: "circle",
},
styleType: {
options: IconButtonStyle.variantMap.styleType,
control: { type: "radio" },
defaultValue: "filled",
},
size: {
options: IconButtonStyle.variantMap.size,
control: { type: "radio" },
defaultValue: "medium",
},
icon: {
control: { type: "object" },
defaultValue: <SerendieSymbolPlus />,
},
},
};

function FigmaExample(props: React.ComponentProps<typeof IconButton>) {
return <IconButton {...props} />;
}

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Rectangle: Story = {
args: {
shape: "rectangle",
icon: <SerendieSymbolPlus />,
size: "medium",
disabled: false,
},
render: (props) => <IconButton {...props} />,
};

export const Circle: Story = {
args: {
shape: "circle",
icon: <SerendieSymbolPlus />,
size: "medium",
disabled: false,
},
};

export const Small: Story = {
args: {
shape: "circle",
icon: <SerendieSymbolPlus />,
size: "small",
disabled: false,
},
};

export const Medium: Story = {
args: {
shape: "circle",
icon: <SerendieSymbolPlus />,
size: "medium",
disabled: false,
},
};

export const Large: Story = {
args: {
shape: "circle",
icon: <SerendieSymbolPlus />,
size: "large",
disabled: false,
},
};

export const Filled: Story = {
args: {
shape: "circle",
icon: <SerendieSymbolPlus />,
size: "medium",
styleType: "filled",
disabled: false,
},
};

export const Outlined: Story = {
args: {
shape: "circle",
icon: <SerendieSymbolPlus />,
size: "medium",
styleType: "outlined",
disabled: false,
},
};

export const Ghost: Story = {
args: {
shape: "circle",
icon: <SerendieSymbolPlus />,
size: "medium",
styleType: "ghost",
disabled: false,
},
};

================================================
FILE: src/components/IconButton/IconButton.tsx
================================================
import React, { ComponentProps } from "react";
import { cva, cx } from "../../../styled-system/css";
import { RecipeVariantProps } from "../../../styled-system/types";

export const IconButtonStyle = cva({
base: {
position: "relative",
display: "inline-flex",
alignItems: "center",
justifyContent: "center",
overflow: "hidden",
color: "sd.system.color.component.onSurface",
outlineWidth: "sd.system.dimension.border.medium",
outlineStyle: "solid",
cursor: "pointer",
"& svg": {
width: "sd.reference.dimension.scale.8",
height: "sd.reference.dimension.scale.8",
},
\_disabled: {
color: "sd.system.color.interaction.disabledOnSurface",
cursor: "not-allowed",
outlineColor: "transparent",
bg: "sd.system.color.interaction.disabled",
},
},
variants: {
shape: {
rectangle: {
borderRadius: "sd.system.dimension.radius.medium",
},
circle: {
borderRadius: "sd.system.dimension.radius.full",
},
},
styleType: {
filled: {
color: "sd.system.color.impression.onPrimaryContainer",
bgColor: "sd.system.color.impression.primaryContainer",
\_enabled: {
\_hover: {
backgroundImage:
"linear-gradient(0deg, {colors.sd.system.color.interaction.hovered} 0%, {colors.sd.system.color.interaction.hovered} 100%)",
},
\_focusVisible: {
outlineWidth: "sd.system.dimension.border.medium",
outlineStyle: "solid",
outlineColor: "sd.system.color.interaction.hovered",
outlineOffset: "-1px",
backgroundImage:
"linear-gradient(0deg, {colors.sd.system.color.interaction.hovered} 0%, {colors.sd.system.color.interaction.hovered} 100%)",
},
},
},
outlined: {
outlineColor: "sd.system.color.component.outline",
bgColor: "sd.system.color.component.surface",
\_enabled: {
\_hover: {
bgColor: "sd.system.color.interaction.hoveredVariant",
},
\_focusVisible: {
outlineColor: "sd.system.color.component.outlineVariant",
bgColor: "sd.system.color.interaction.hoveredVariant",
},
},
},
ghost: {
outlineColor: "transparent",
\_enabled: {
\_hover: {
bgColor: "sd.system.color.interaction.hoveredVariant",
},
\_focusVisible: {
bgColor: "sd.system.color.interaction.hoveredVariant",
outlineColor: "sd.system.color.component.outlineVariant",
},
},
\_disabled: {
bg: "transparent",
},
},
},
size: {
large: {
w: "{spacing.sd.reference.dimension.scale.17}",
h: "{spacing.sd.reference.dimension.scale.17}",
"& svg": {
width: "sd.reference.dimension.scale.12",
height: "sd.reference.dimension.scale.12",
},
},
medium: {
w: "{spacing.sd.reference.dimension.scale.13}",
h: "{spacing.sd.reference.dimension.scale.13}",
},
small: {
w: "{spacing.sd.reference.dimension.scale.10}",
h: "{spacing.sd.reference.dimension.scale.10}",
},
},
},
defaultVariants: {
shape: "circle",
styleType: "filled",
size: "medium",
},
});

type StyleType = "filled" | "outlined" | "ghost";
type Size = "large" | "medium" | "small";

type ButtonPropsBase = RecipeVariantProps<typeof IconButtonStyle> &
ComponentProps<"button"> & {
icon: React.ReactElement;
};

type RectangleProps = {
shape: "rectangle";
size?: Exclude<Size, "large">;
};

type CircleProps = {
shape: "circle";
size?: Exclude<Size, "large">;
styleType?: StyleType;
};

type CircleLargeProps = {
shape: "circle";
size: "large";
styleType?: Exclude<StyleType, "ghost">;
};

type ButtonProps = ButtonPropsBase &
(RectangleProps | CircleProps | CircleLargeProps);

export const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
({ icon, className, ...props }, ref) => {
const [variantProps, elementProps] =
IconButtonStyle.splitVariantProps(props);
const style = IconButtonStyle(variantProps);
return (
<button ref={ref} className={cx(style, className)} {...elementProps}>
{icon}
</button>
);
}
);

================================================
FILE: src/components/IconButton/index.ts
================================================
export \* from "./IconButton.tsx";

================================================
FILE: src/components/List/index.ts
================================================
export _ from "./List.tsx";
export _ from "./ListItem.tsx";

================================================
FILE: src/components/List/List.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./ListItem";
import { List } from "./List";
import figma from "@figma/code-connect";
import {
SerendieSymbolChevronRight,
SerendieSymbolPlaceholder,
} from "@serendie/symbols";

const meta: Meta<typeof ListItem> = {
component: ListItem,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3442-9387",
props: {
disabled: figma.enum("State", { Disabled: true }),
selected: figma.enum("State", { Selected: true }),
focusVisible: figma.enum("State", { Focused: true }),
title: figma.string("Title"),
description: figma.enum("Lines", {
"Multiple Lines": figma.string("Description"),
}),
children: figma.enum("Lines", {
"Multiple Lines": figma.string("SubDescription"),
}),
leftIcon: figma.enum("Heading Elements", {
IconMedium: figma.instance("LeftIconInstance"),
IconLarge: figma.instance("LeftLargeIconInstance"),
}),
isLargeLeftIcon: figma.enum("Heading Elements", { IconLarge: true }),
rightIcon: figma.enum("Trailing Elements", {
Icon: figma.instance("RightIconInstance"),
}),
badge: figma.enum("Trailing Elements", {
Badge: 5,
}),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
include: [
"title",
"description",
"rightIcon",
"leftIcon",
"badge",
"disabled",
"selected",
"isLargeLeftIcon",
],
},
},
decorators: [
(ListItem) => (
<List style={{ width: 375 }}>
<ListItem />
<ListItem />
<ListItem />
</List>
),
],
argTypes: {
badge: {
control: { type: "number" },
defaultValue: 0,
},
disabled: {
control: { type: "boolean" },
defaultValue: false,
},
selected: {
control: { type: "boolean" },
defaultValue: false,
},
leftIcon: {
control: { type: "text" },
},
rightIcon: {
control: { type: "text" },
},
title: {
control: { type: "text" },
},
description: {
control: { type: "text" },
},
},
};

function FigmaExample(props: React.ComponentProps<typeof ListItem>) {
return (
<List>
<ListItem {...props} />
</List>
);
}

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Basic: Story = {
args: {
leftIcon: <SerendieSymbolPlaceholder />,
title: "リストスタイル",
},
};

export const Description: Story = {
args: {
leftIcon: <SerendieSymbolPlaceholder />,
title: "リストスタイル",
description: "補足テキスト補足テキスト",
},
};

export const RightIcon: Story = {
args: {
rightIcon: <SerendieSymbolChevronRight />,
title: "リストスタイル",
},
};

export const Badge: Story = {
args: {
leftIcon: <SerendieSymbolPlaceholder />,
title: "リストスタイル 1",
description: "補足テキスト補足テキスト 10 分前",
badge: 100,
},
};

================================================
FILE: src/components/List/List.tsx
================================================
import { ComponentProps } from "react";

export const List = ({ children, ...props }: ComponentProps<"ul">) => {
return <ul {...props}>{children}</ul>;
};

================================================
FILE: src/components/List/ListItem.tsx
================================================
import { ComponentProps } from "react";
import { css, cx, sva } from "../../../styled-system/css";
import { NotificationBadge } from "../NotificationBadge";

export const ListItemStyle = sva({
slots: [
"root",
"wrapper",
"textGroup",
"title",
"description",
"rightIcon",
"leftIcon",
"badge",
],
base: {
root: {
position: "relative",
},
wrapper: {
minH: 48,
display: "flex",
alignItems: "center",
paddingX: "sd.system.dimension.spacing.medium",
paddingY: "sd.system.dimension.spacing.extraSmall",
gap: "sd.system.dimension.spacing.small",
cursor: "pointer",
\_hover: {
background:
"color-mix(in srgb, {colors.sd.system.color.interaction.hoveredVariant}, {colors.sd.system.color.component.surface});",
},
\_focusVisible: {
outline: "1px solid",
outlineColor: "sd.system.color.component.outline",
},
\_selected: {
background: "sd.system.color.interaction.selectedSurface",
\_hover: {
background: "sd.system.color.interaction.selectedSurface",
},
},
\_disabled: {
opacity: 0.3,
cursor: "not-allowed",
\_selected: {
background: "transparent",
},
},
},
textGroup: {
display: "flex",
flexDirection: "column",
flexGrow: 1,
},
title: {
py: "sd.system.dimension.spacing.twoExtraSmall",
textStyle: "sd.system.typography.label.extraLarge_compact",
color: "sd.system.color.component.onSurface",
\_expanded: {
textStyle: "sd.system.typography.label.extraLarge_expanded",
},
\_disabled: {
opacity: 0.3,
},
},
description: {
display: "flex",
flexDirection: "column",
textStyle: "sd.system.typography.body.extraSmall_compact",
color: "sd.system.color.component.onSurfaceVariant",
\_expanded: {
textStyle: "sd.system.typography.body.extraSmall_expanded",
},
\_disabled: {
opacity: 0.3,
},
},
leftIcon: {
flexShrink: 0,
"& svg": {
display: "block",
maxHeight: "100%",
maxWidth: "100%",
width: "24px",
height: "24px",
},
\_disabled: {
opacity: 0.3,
},
},
rightIcon: {
flexShrink: 0,
"& svg": {
width: "24px",
height: "24px",
},
\_disabled: {
opacity: 0.3,
},
},
badge: {
position: "absolute",
right: "sd.system.dimension.spacing.medium",
top: "sd.system.dimension.spacing.extraSmall",
height: 24,
minW: 24,
},
},
variants: {
isLargeLeftIcon: {
true: {
leftIcon: {
"& svg": {
width: "40px",
height: "40px",
},
},
},
false: {},
},
size: {
small: {
wrapper: {
minH: 38,
},
},
},
},
});

type ListItemBaseProps = {
title: string;
description?: string;
rightIcon?: React.ReactElement;
leftIcon?: React.ReactElement;
isLargeLeftIcon?: boolean;
badge?: number;
children?: React.ReactNode;
disabled?: boolean;
selected?: boolean;
focusVisible?: boolean;
size?: "small";
};

type ExclusiveRightItemProps =
| ({ badge?: number } & { rightIcon?: never })
| ({ badge?: never } & { rightIcon?: React.ReactElement });

type ListItemProps = ComponentProps<"li"> &
ListItemBaseProps &
ExclusiveRightItemProps;

export const ListItem: React.FC<ListItemProps> = ({
leftIcon,
rightIcon,
title,
description,
badge,
children,
disabled,
selected,
focusVisible,
className,
...props
}) => {
const [variantProps, elementProps] = ListItemStyle.splitVariantProps(props);
const styles = ListItemStyle(variantProps);

return (
<li className={cx(styles.root, className)} {...elementProps}>
<div
tabIndex={1}
className={cx(
styles.wrapper,
description && css({ alignItems: "flex-start" })
)}
data-disabled={disabled ? true : undefined}
data-selected={selected ? true : undefined}
data-focus-visible={focusVisible ? true : undefined} >
{leftIcon && (
<div
className={styles.leftIcon}
style={
props.isLargeLeftIcon
? { padding: "0", width: "40px", height: "40px" }
: { padding: "0", width: "24px", height: "24px" }
} >
{leftIcon}
</div>
)}
<div
className={cx(
styles.textGroup,
(!!description || !!children) && css({ alignItems: "flex-start" })
)} >
<span className={styles.title}>{title}</span>
<div className={styles.description}>
{description}
{children}
</div>
</div>
{rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
</div>
{badge && (
<div className={styles.badge}>
<NotificationBadge count={badge} variant="secondary" />
</div>
)}
</li>
);
};

================================================
FILE: src/components/ModalDialog/index.ts
================================================
export \* from "./ModalDialog.tsx";

================================================
FILE: src/components/ModalDialog/ModalDialog.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { ModalDialog, ModalDialogProps } from "./ModalDialog";
import { useState } from "react";
import { Button } from "../Button";
import figma from "@figma/code-connect";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { allModes } from "../../../.storybook/modes";
import { FullscreenLayout } from "../../../.storybook/FullscreenLayout";

const meta: Meta<typeof ModalDialog> = {
component: ModalDialog,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3311-28000",
props: {
title: figma.string("Title"),
description: figma.string("Description"),
submitButtonProps: figma.nestedProps("PrimaryButton", {
label: figma.string("Label"),
}),
cancelButtonProps: figma.nestedProps("SecondaryButton", {
label: figma.string("Label"),
}),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
},
},
args: {
title: "Dialog Title",
cancelButtonLabel: "Close",
submitButtonLabel: "Button",
children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam",
},
decorators: [(Story) => <Story />],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FigmaExample({ cancelButtonProps, submitButtonProps, ...props }: any) {
return (
<ModalDialog
{...props}
submitButtonLabel={submitButtonProps.label}
cancelButtonLabel={cancelButtonProps.label}
/>
);
}

export default meta;
type Story = StoryObj<typeof ModalDialog>;

const DialogOpenTemplate = (args: ModalDialogProps) => {
const [isOpen, setIsOpen] = useState(false);
return (
<>
<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
<ModalDialog
{...args}
isOpen={isOpen}
onOpenChange={(e) => setIsOpen(e.open)}
onButtonClick={() => {
alert("Button clicked");
setIsOpen(false);
}}
/>
</>
);
};

export const Basic: Story = {
render: DialogOpenTemplate,
};

export const PlayClickedButton: Story = {
render: (args) => {
return (
<FullscreenLayout>
<DialogOpenTemplate {...args} />
</FullscreenLayout>
);
},
parameters: {
chromatic: {
modes: {
small: allModes["small"],
large: allModes["large"],
},
},
layout: "fullscreen",
},
play: async ({ canvasElement }) => {
const canvas = within(canvasElement);
if (canvasElement.parentElement === null) {
return;
}
const root = within(canvasElement.parentElement);

    const button = canvas.getByRole("button");

    await userEvent.click(button);

    await waitFor(async () => {
      const modalHeading = await root.findByText("Dialog Title");
      expect(modalHeading).toBeInTheDocument();
    });

},
};

================================================
FILE: src/components/ModalDialog/ModalDialog.tsx
================================================
// https://ark-ui.com/docs/react/components/dialog

import { Dialog, DialogRootProps, Portal } from "@ark-ui/react";
import { cx, RecipeVariantProps, sva } from "../../../styled-system/css";
import { Button } from "../Button";

const ModalDialogStyle = sva({
slots: [
"backdrop",
"content",
"contentInner",
"title",
"description",
"buttonWrapper",
"closeTrigger",
],
base: {
backdrop: {
background: "sd.system.color.component.scrim",
position: "fixed",
inset: 0,
zIndex: "sd.system.elevation.zIndex.modal",
},
content: {
position: "fixed",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
width: "calc(100% - {spacing.sd.system.dimension.spacing.large} \* 2)",
maxWidth: "408px",
display: "grid",
gap: "sd.system.dimension.spacing.twoExtraLarge",
paddingTop: {
base: "sd.system.dimension.spacing.extraLarge",
expanded: "sd.system.dimension.spacing.large",
},
paddingRight: "sd.system.dimension.spacing.extraLarge",
paddingBottom: "sd.system.dimension.spacing.large",
paddingLeft: "sd.system.dimension.spacing.extraLarge",
backgroundColor: "sd.system.color.component.surface",
boxShadow: "sd.system.elevation.shadow.level5",
borderRadius: "sd.system.dimension.radius.medium",
zIndex: "sd.system.elevation.zIndex.modal",
},
contentInner: {
display: "grid",
gap: "sd.system.dimension.spacing.medium",
},
title: {
textStyle: {
base: "sd.system.typography.title.small_compact",
expanded: "sd.system.typography.title.small_expanded",
},
},
description: {
textStyle: {
base: "sd.system.typography.body.medium_compact",
expanded: "sd.system.typography.body.medium_expanded",
},
},
buttonWrapper: {
display: "flex",
alignItems: "center",
gap: "sd.system.dimension.spacing.medium",
expanded: {
flexDirection: "row-reverse",
justifyContent: "end",
},
},
},
});

type Props = {
isOpen: boolean;
title: string;
children: React.ReactNode;
className?: string;
cancelButtonLabel?: string;
submitButtonLabel: string;
onButtonClick: () => void;
};

export type ModalDialogProps = Props &
DialogRootProps &
RecipeVariantProps<typeof ModalDialogStyle>;

export const ModalDialog: React.FC<ModalDialogProps> = ({
isOpen,
title,
cancelButtonLabel,
submitButtonLabel,
onButtonClick,
children,
className,
...rest
}) => {
const styles = ModalDialogStyle(rest);
return (
<Dialog.Root open={isOpen} {...rest}>
<Portal>
<Dialog.Backdrop className={styles.backdrop} />
<Dialog.Positioner>
<Dialog.Content className={cx(styles.content, className)}>
<div className={styles.contentInner}>
<Dialog.Title className={styles.title}>{title}</Dialog.Title>
<Dialog.Description className={styles.description}>
{children}
</Dialog.Description>
</div>
<div className={styles.buttonWrapper}>
<Button onClick={onButtonClick}>{submitButtonLabel}</Button>
<Dialog.CloseTrigger asChild>
<Button styleType="ghost">
{cancelButtonLabel || "閉じる"}
</Button>
</Dialog.CloseTrigger>
</div>
</Dialog.Content>
</Dialog.Positioner>
</Portal>
</Dialog.Root>
);
};

================================================
FILE: src/components/NotificationBadge/index.ts
================================================
export \* from "./NotificationBadge.tsx";

================================================
FILE: src/components/NotificationBadge/NotificationBadge.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBadge } from "./NotificationBadge";
import figma from "@figma/code-connect";

const meta: Meta<typeof NotificationBadge> = {
component: NotificationBadge,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=1262-28909",
props: {
variant: figma.enum("Color", {
Primary: "primary",
Secondary: "secondary",
}),
size: figma.enum("Size", {
Small: "small",
Medium: "medium",
}),
noNumber: figma.enum("Type", { "Non-number": true }),
count: figma.enum("Type", { "With-number": figma.string("Count") }),
},
examples: [FigmaExample],
},
},
decorators: [(Story) => <Story />],
argTypes: {
variant: {
control: { type: "radio" },
options: ["primary", "secondary"],
defaultValue: "primary",
},
count: {
control: { type: "number" },
defaultValue: 1,
},
noNumber: {
control: { type: "boolean" },
defaultValue: false,
},
},
};

function FigmaExample(props: React.ComponentProps<typeof NotificationBadge>) {
return <NotificationBadge {...props} />;
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
render: (args) => (
<div style={{ position: "relative" }}>
<NotificationBadge variant="secondary" {...args} />
</div>
),
args: {
count: 1,
variant: "primary",
noNumber: false,
},
};

export const NoNumber: Story = {
render: (args) => (
<div style={{ position: "relative" }}>
<NotificationBadge noNumber {...args} />
</div>
),
args: {
count: 1,
variant: "primary",
noNumber: true,
},
};

================================================
FILE: src/components/NotificationBadge/NotificationBadge.tsx
================================================
import { ComponentProps } from "react";
import { RecipeVariantProps, cx, sva } from "../../../styled-system/css";

const NotificationBadgeStyle = sva({
slots: ["root", "text"],
base: {
root: {
position: "absolute",
display: "flex",
alignItems: "center",
justifyContent: "center",
height: 24,
minWidth: 24,
color: "sd.system.color.impression.onNegative",
borderRadius: "sd.system.dimension.radius.full",
paddingX: "sd.system.dimension.spacing.twoExtraSmall",
textStyle: "sd.system.typography.label.small_compact",
\_expanded: {
textStyle: "sd.system.typography.label.small_expanded",
},
},
text: {
height: 24,
lineHeight: "24px",
},
},
variants: {
size: {
small: {
root: {
height: 16,
minWidth: 16,
paddingX: "sd.system.dimension.spacing.twoExtraSmall",
},
},
medium: {
root: {
height: 24,
minWidth: 24,
paddingX: "sd.system.dimension.spacing.extraSmall",
},
},
},
variant: {
primary: {
root: {
backgroundColor: "sd.system.color.impression.negative",
},
},
secondary: {
root: {
backgroundColor: "sd.system.color.impression.primary",
},
},
},
noNumber: {
true: {
root: {
height: 8,
paddingX: 0,
minWidth: 8,
},
},
},
position: {
relative: {
root: {
position: "relative",
},
},
},
},
defaultVariants: {
variant: "primary",
size: "medium",
},
});

type BadgeProps = {
count?: number;
};

export type NotificationBadgeProps = BadgeProps &
ComponentProps<"div"> &
RecipeVariantProps<typeof NotificationBadgeStyle>;

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
count,
noNumber,
className,
...props
}) => {
const [variantProps, elementProps] =
NotificationBadgeStyle.splitVariantProps(props);
const styles = NotificationBadgeStyle({ noNumber, ...variantProps });

if (noNumber) {
return <div className={cx(styles.root, className)} {...elementProps}></div>;
}

if (!count || count < 1) {
return null;
}

return (
<div className={cx(styles.root, className)} {...elementProps}>
<span className={styles.text}>{count > 99 ? "99+" : count}</span>
</div>
);
};

================================================
FILE: src/components/Pagination/index.ts
================================================
export \* from "./Pagination.tsx";

================================================
FILE: src/components/Pagination/Pagination.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
component: Pagination,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/%F0%9F%9B%A0%EF%B8%8F-Serendie-UI-Kit?node-id=17965-15475&m=dev",
examples: [FigmaExample],
},
controls: {
expanded: true,
},
},
argTypes: {
count: {
control: { type: "number" },
},
page: {
control: { type: "number" },
defaultValue: 3,
},
},
};

function FigmaExample(props: React.ComponentProps<typeof Pagination>) {
return <Pagination {...props} count={99} page={1} />;
}

export default meta;
type Story = StoryObj<typeof Pagination>;

// 基本的なページネーション
export const Basic: Story = {
args: {
count: 10,
},
};

// 少ないページ数
export const FewPages: Story = {
args: {
count: 5,
},
};

// 多くのページ数
export const ManyPages: Story = {
args: {
count: 100,
},
};

// 両側に表示するページ数を増やす
export const WithMoreSiblings: Story = {
args: {
count: 100,
siblingCount: 4,
},
};

================================================
FILE: src/components/Pagination/Pagination.tsx
================================================
import { Pagination as ArkPagination } from "@ark-ui/react/pagination";
import {
SerendieSymbolChevronLeft,
SerendieSymbolChevronRight,
} from "@serendie/symbols";
import React, { ComponentProps, useState } from "react";
import { IconButton } from "../IconButton";
import { cx, RecipeVariantProps, sva } from "../../../styled-system/css";

export const PaginationStyle = sva({
slots: ["root", "item", "ellipsis", "prevTrigger", "nextTrigger"],
base: {
root: {
display: "flex",
alignItems: "center",
gap: "sd.system.dimension.spacing.none",
},
item: {
height: 32,
minWidth: 32,
margin: 0,
"& button": {
color: "sd.system.color.impression.primary",
},
"&[data-selected]": {
"& button": {
color: "sd.system.color.interaction.disabledOnSurface",
fontWeight: "bold",
},
},
},
ellipsis: {
display: "flex",
alignItems: "center",
justifyContent: "center",
height: 32,
width: 32,
textStyle: "sd.system.typography.body.medium_compact",
\_expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
},
prevTrigger: {
display: "flex",
alignItems: "center",
justifyContent: "center",
\_disabled: {
"& svg": {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
},
nextTrigger: {
display: "flex",
alignItems: "center",
justifyContent: "center",
\_disabled: {
"& svg": {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
},
},
variants: {
size: {
medium: {
root: {
gap: "sd.system.dimension.spacing.none",
},
item: {
height: 32,
minWidth: 32,
},
ellipsis: {
height: 32,
width: 32,
},
},
},
},
defaultVariants: {
size: "medium",
},
});

export type PaginationProps = ComponentProps<"div"> &
RecipeVariantProps<typeof PaginationStyle> & {
count: number;
pageSize?: number;
page?: number;
onPageChange?: (details: { page: number }) => void;
siblingCount?: number;
className?: string;
};

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
(
{
count,
pageSize = 1,
page,
onPageChange,
siblingCount = 2,
className,
size = "medium",
...props
},
ref
) => {
const [currentPage, setCurrentPage] = useState(1);
const styles = PaginationStyle({ size });

    const handlePageChange = (details: { page: number }) => {
      if (!page) {
        setCurrentPage(details.page);
      }
      onPageChange?.(details);
    };

    const paginationProps = {
      count,
      pageSize,
      siblingCount,
      ...(page ? { page } : { page: currentPage }),
      onPageChange: handlePageChange,
    };

    return (
      <ArkPagination.Root
        ref={ref}
        className={cx(styles.root, className)}
        {...paginationProps}
        {...props}
      >
        <ArkPagination.Context>
          {(ctx) => {
            const isFirstPage = ctx.page <= 1;
            const lastPage = Math.ceil(count / pageSize);
            const isLastPage = ctx.page >= lastPage;

            return (
              <>
                <ArkPagination.PrevTrigger
                  className={styles.prevTrigger}
                  disabled={isFirstPage}
                >
                  <IconButton
                    icon={<SerendieSymbolChevronLeft />}
                    shape="rectangle"
                    styleType="ghost"
                    size="small"
                    aria-label={
                      isFirstPage ? "最初のページです" : "前のページへ"
                    }
                    disabled={isFirstPage}
                    title={isFirstPage ? "最初のページです" : "前のページへ"}
                  />
                </ArkPagination.PrevTrigger>

                {ctx.pages.map((page, index) =>
                  page.type === "page" ? (
                    <ArkPagination.Item
                      key={index}
                      {...page}
                      className={styles.item}
                    >
                      <IconButton
                        icon={<>{page.value}</>}
                        shape="rectangle"
                        styleType="ghost"
                        size="small"
                        aria-label={`ページ${page.value}へ移動`}
                        title={`ページ${page.value}へ移動`}
                      />
                    </ArkPagination.Item>
                  ) : (
                    <ArkPagination.Ellipsis
                      key={index}
                      index={index}
                      className={styles.ellipsis}
                    >
                      &#8230;
                    </ArkPagination.Ellipsis>
                  )
                )}

                <ArkPagination.NextTrigger
                  className={styles.nextTrigger}
                  disabled={isLastPage}
                >
                  <IconButton
                    icon={<SerendieSymbolChevronRight />}
                    shape="rectangle"
                    styleType="ghost"
                    size="small"
                    aria-label={
                      isLastPage ? "最後のページです" : "次のページへ"
                    }
                    disabled={isLastPage}
                    title={isLastPage ? "最後のページです" : "次のページへ"}
                  />
                </ArkPagination.NextTrigger>
              </>
            );
          }}
        </ArkPagination.Context>
      </ArkPagination.Root>
    );

}
);

================================================
FILE: src/components/PasswordField/index.ts
================================================
export \* from "./PasswordField.tsx";

================================================
FILE: src/components/PasswordField/PasswordField.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { PasswordField } from "./PasswordField";
import figma from "@figma/code-connect";
import { TextField } from "../TextField";

const meta: Meta<typeof PasswordField> = {
component: PasswordField,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/%F0%9F%9B%A0%EF%B8%8F-Serendie-UI-Kit?node-id=17427-3758&t=RkaxamT0s6oqwyiL-4",
props: {
textField: figma.nestedProps("TextField", {
label: figma.string("Label"),
disabled: figma.enum("State", { Disabled: true }),
invalid: figma.enum("State", { Error: true }),
invalidMessage: figma.string("InvalidMessage"),
description: figma.string("Description"),
placeholder: figma.string("Placeholder"),
required: figma.boolean("Required"),
}),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
},
},
args: {
required: true,
disabled: false,
invalid: false,
label: "パスワード",
placeholder: "パスワードを入力",
invalidMessage: "パスワードは 8 文字以上必要です",
description:
"大文字、小文字、数字を含む 8 文字以上のパスワードを設定してください",
disableToggle: false,
},
};

function FigmaExample(
props: React.ComponentProps<typeof PasswordField> & {
textField: React.ComponentProps<typeof TextField>;
}
) {
return (
<PasswordField
label={props.textField.label}
disabled={props.textField.disabled}
invalid={props.textField.invalid}
invalidMessage={props.textField.invalidMessage}
description={props.textField.description}
placeholder={props.textField.placeholder}
required={props.textField.required}
{...props}
/>
);
}

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const Basic: Story = {};

export const DisabledToggle: Story = {
args: {
disableToggle: true,
},
};

export const Disabled: Story = {
args: {
disabled: true,
},
};

export const HasError: Story = {
args: {
invalid: true,
},
};

export const WithoutLabel: Story = {
args: {
label: undefined,
},
};

================================================
FILE: src/components/PasswordField/PasswordField.tsx
================================================
import React, { forwardRef, useState } from "react";
import { TextField } from "../TextField";
import { SerendieSymbolEye, SerendieSymbolEyeHidden } from "@serendie/symbols";
import { IconButton } from "../IconButton";

type PasswordFieldProps = Omit<
React.ComponentProps<typeof TextField>,
"type" | "rightContent"

> & {
> /\*\*

- パスワードの表示/非表示切り替えを無効にする
  \*/
  disableToggle?: boolean;
  };

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
({ disableToggle = false, disabled, ...props }, ref) => {
const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const toggleButton = !disableToggle ? (
      <IconButton
        type="button"
        onClick={togglePasswordVisibility}
        styleType="ghost"
        size="small"
        shape="circle"
        aria-label={showPassword ? "パスワードを隠す" : "パスワードを表示"}
        disabled={disabled}
        icon={
          showPassword ? <SerendieSymbolEyeHidden /> : <SerendieSymbolEye />
        }
      />
    ) : undefined;

    return (
      <TextField
        type={showPassword ? "text" : "password"}
        rightContent={toggleButton}
        disabled={disabled}
        {...props}
        ref={ref}
      />
    );

}
);

PasswordField.displayName = "PasswordField";

================================================
FILE: src/components/ProgressIndicator/index.ts
================================================
export \* from "./ProgressIndicator.tsx";

================================================
FILE: src/components/ProgressIndicator/ProgressIndicator.stories.tsx
================================================
import { Meta, StoryObj } from "@storybook/react";
import { ProgressIndicator } from "./ProgressIndicator";
import figma from "@figma/code-connect";

const meta: Meta<typeof ProgressIndicator> = {
component: ProgressIndicator,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=1322-31566",
props: {
size: figma.enum("Size", {
Small: "small",
Medium: "medium",
Large: "large",
}),
},
examples: [FigmaExample],
},
},
argTypes: {
size: {
control: {
type: "select",
options: ["small", "medium", "large"],
},
},
},
};

function FigmaExample(props: React.ComponentProps<typeof ProgressIndicator>) {
return <ProgressIndicator {...props} />;
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
args: {
size: "small",
},
};

export const Medium: Story = {
args: {
size: "medium",
},
};

export const Large: Story = {
args: {
size: "large",
},
};

================================================
FILE: src/components/ProgressIndicator/ProgressIndicator.tsx
================================================
import { ComponentProps } from "react";
import { RecipeVariantProps, cva, cx } from "../../../styled-system/css";

export const ProgressIndicatorStyle = cva({
base: {
animation: "1s linear infinite spin",
stroke: "sd.reference.color.scale.gray.400",
},
variants: {
size: {
small: {
width: "16px",
height: "16px",
},
medium: {
width: "24px",
height: "24px",
},
large: {
width: "96px",
height: "96px",
},
},
color: {
gray: {
stroke: "sd.reference.color.scale.gray.400",
},
white: {
stroke: "sd.reference.color.scale.white.1000",
},
},
},
defaultVariants: {
size: "medium",
color: "gray",
},
});

type ProgressIndicatorProps = ComponentProps<"svg"> &
RecipeVariantProps<typeof ProgressIndicatorStyle>;

export const ProgressIndicator = ({
className,
...props
}: ProgressIndicatorProps) => {
const [variantProps, elementProps] =
ProgressIndicatorStyle.splitVariantProps(props);
const style = ProgressIndicatorStyle(variantProps);

return (
<svg
width="48"
height="48"
viewBox="0 0 48 48"
fill="none"
xmlns="http://www.w3.org/2000/svg"
className={cx(style, className)}
{...elementProps} >
<path
        d="M24 44C27.9556 44 31.8224 42.827 35.1114 40.6294C38.4004 38.4318 40.9638 35.3082 42.4776 31.6537C43.9913 27.9992 44.3874 23.9778 43.6157 20.0982C42.844 16.2186 40.9392 12.6549 38.1421 9.85786C35.3451 7.06082 31.7814 5.156 27.9018 4.38429C24.0222 3.61259 20.0008 4.00866 16.3463 5.52241C12.6918 7.03616 9.56821 9.59962 7.37059 12.8886C5.17297 16.1776 3.99998 20.0444 3.99998 24"
        strokeWidth="4"
      />
</svg>
);
};

================================================
FILE: src/components/RadioButton/index.ts
================================================
export _ from "./RadioButton.tsx";
export _ from "./RadioGroup.tsx";

================================================
FILE: src/components/RadioButton/RadioButton.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton, RadioButtonProps } from "./RadioButton";
import { RadioGroup } from "./RadioGroup";
import figma from "@figma/code-connect";

const meta: Meta<typeof RadioButton> = {
component: RadioButton,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3354-7943",
props: {
label: figma.string("Label"),
helperText: figma.enum("Lines", {
"Multiple Lines": figma.string("HelperText"),
}),
disabled: figma.enum("State", {
"Disabled-Enabled": true,
"Disabled-Selected": true,
}),
},
examples: [FigmaExample],
},
},
decorators: [(Story) => <Story />],
argTypes: {
helperText: {
control: { type: "text" },
defaultValue: "",
},
},
};

function FigmaExample(props: React.ComponentProps<typeof RadioButton>) {
return (
<RadioGroup>
<RadioButton {...props} value="item" />
</RadioGroup>
);
}

export default meta;
type Story = StoryObj<typeof RadioButton>;

const Template = (args: RadioButtonProps) => (
<RadioGroup onValueChange={(e) => console.log(e.value)}>
<RadioButton
{...args}
label="タイトルタイトル 1"
value="itemA"
helperText={args.helperText}
/>
<RadioButton
{...args}
label="タイトルタイトル 2"
value="itemB"
helperText={args.helperText}
/>
<RadioButton
{...args}
label="タイトルタイトル 3"
value="itemC"
disabled={true}
/>
<RadioButton
{...args}
label="タイトルタイトル 4"
value="itemD"
helperText={args.helperText}
/>
</RadioGroup>
);

export const Default: Story = {
render: Template,
};

export const NoLabel: Story = {
render: () => (
<RadioGroup onValueChange={(e) => console.log(e.value)}>
<RadioButton value="itemA" />
<RadioButton value="itemB" />
<RadioButton value="itemC" />
</RadioGroup>
),
};

export const WithHelperText: Story = {
render: Template,
args: {
helperText:
"補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト",
},
};

export const Disabled: Story = {
render: (args: RadioButtonProps) => (
<RadioGroup
onValueChange={(e) => console.log(e.value)}
defaultValue="itemE" >
<RadioButton
{...args}
label="タイトルタイトル 1"
value="itemE"
helperText={args.helperText}
disabled
/>
<RadioButton
{...args}
label="タイトルタイトル 2"
value="itemF"
helperText={args.helperText}
disabled
/>
</RadioGroup>
),
args: {
helperText:
"補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト",
},
};

================================================
FILE: src/components/RadioButton/RadioButton.tsx
================================================
import { RadioGroup, RadioGroupItemProps } from "@ark-ui/react";
import { RecipeVariantProps, css, cx, sva } from "../../../styled-system/css";
import RadioChecked from "../../assets/radioChecked.svg?react";
import RadioUnChecked from "../../assets/radioUnchecked.svg?react";

export const radioIconCss = {
flexShrink: 0,
cursor: "pointer",
".group:has(:focus-visible) &": {
backgroundColor: "sd.system.color.interaction.selectedSurface",
borderRadius: "sd.system.dimension.radius.full",
},
};

export const radioCheckedIconCss = {
color: "sd.system.color.impression.primary",
\_disabled: {
color:
"color-mix(in srgb, {colors.sd.system.color.impression.primary}, {colors.sd.system.color.interaction.hoveredOnPrimary});",
},
};

export const radioUncheckedIconCss = {
color: "sd.system.color.component.outlineVariant",
\_disabled: {
color:
"color-mix(in srgb, {colors.sd.system.color.component.outlineVariant}, {colors.sd.system.color.interaction.hoveredOnPrimary});",
},
};

export const RadioButtonStyle = sva({
slots: [
"item",
"itemControl",
"checkedIcon",
"unCheckedIcon",
"itemTextGroup",
"itemText",
"helperText",
],
base: {
item: {
display: "flex",
alignItems: "center",
gap: "sd.system.dimension.spacing.medium",
paddingY: "sd.system.dimension.spacing.small",
paddingX: "sd.system.dimension.spacing.medium",
cursor: "pointer",
},
itemControl: radioIconCss,
checkedIcon: radioCheckedIconCss,
unCheckedIcon: radioUncheckedIconCss,
itemTextGroup: {
display: "flex",
flexFlow: "column",
},
itemText: {
color: "sd.system.color.component.onSurface",
textStyle: "sd.system.typography.body.medium_compact",
\_expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
\_disabled: {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
helperText: {
color: "sd.system.color.component.onSurfaceVariant",
marginTop: "sd.system.dimension.spacing.twoExtraSmall",
textStyle: "sd.system.typography.body.extraSmall_compact",
\_expanded: {
textStyle: "sd.system.typography.body.extraSmall_expanded",
},
\_disabled: {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
},
});

type RadioButtonItemProps = {
label?: string;
helperText?: string;
};

export type RadioButtonProps = RadioGroupItemProps &
RecipeVariantProps<typeof RadioButtonStyle> &
RadioButtonItemProps;

export const RadioButton: React.FC<RadioButtonProps> = ({
value,
label,
helperText,
className,
...props
}) => {
const [variantProps, elementProps] =
RadioButtonStyle.splitVariantProps(props);
const styles = RadioButtonStyle(variantProps);
const itemStyle = cx(
styles.item,
helperText && css({ alignItems: "flex-start" })
);

return (
<RadioGroup.Item
value={value}
className={cx("group", itemStyle, className)}
{...elementProps} >
<RadioGroup.ItemContext>
{(radio) => (
<RadioGroup.ItemControl className={styles.itemControl} asChild>
{radio.checked ? (
<RadioChecked className={styles.checkedIcon} />
) : (
<RadioUnChecked className={styles.unCheckedIcon} />
)}
</RadioGroup.ItemControl>
)}
</RadioGroup.ItemContext>
<div className={styles.itemTextGroup}>
{label && (
<RadioGroup.ItemText className={styles.itemText}>
{label}
</RadioGroup.ItemText>
)}
{helperText && (
<RadioGroup.ItemText className={styles.helperText}>
{helperText}
</RadioGroup.ItemText>
)}
</div>
<RadioGroup.ItemHiddenInput />
</RadioGroup.Item>
);
};

================================================
FILE: src/components/RadioButton/RadioGroup.tsx
================================================
import {
RadioGroup as ArkRadioGroup,
RadioGroupRootProps,
} from "@ark-ui/react";

export const RadioGroup: React.FC<RadioGroupRootProps> = ({
children,
...props
}) => {
return <ArkRadioGroup.Root {...props}>{children}</ArkRadioGroup.Root>;
};

================================================
FILE: src/components/Search/index.ts
================================================
export \* from "./Search.tsx";

================================================
FILE: src/components/Search/Search.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./Search";
import figma from "@figma/code-connect";
import { userEvent, within } from "@storybook/test";
import { FullscreenLayout } from "../../../.storybook/FullscreenLayout";

const items = [
"React",
"Vue",
"Angular",
"Svelte",
"Ember",
"jQuery",
"Vanilla",
];

const meta: Meta<typeof Search> = {
component: Search,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3311-28188",
props: {
placeholder: figma.string("Placeholder"),
size: figma.enum("Size", { Small: "small", Medium: "medium" }),
disabled: figma.enum("State", { Disabled: true }),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
},
},
argTypes: {
disabled: {
control: { type: "boolean" },
defaultValue: false,
},
},
};

function FigmaExample(props: React.ComponentProps<typeof Search>) {
return <Search {...props} items={["ItemLabel"]} />;
}

export default meta;
type Story = StoryObj<typeof Search>;

export const Basic: Story = {
args: {
onInputValueChange: (v) => console.log(v),
disabled: false,
placeholder: "デバイス ID などを検索",
items,
},
};

export const Small: Story = {
args: {
onInputValueChange: (v) => console.log(v),
disabled: false,
placeholder: "デバイス ID などを検索",
size: "small",
items,
},
};

export const Disabled: Story = {
args: {
onInputValueChange: (v) => console.log(v),
disabled: true,
placeholder: "デバイス ID などを検索",
items,
},
};

export const PlayDisplayMenu: Story = {
parameters: {
layout: "fullscreen",
},
args: {
onInputValueChange: (v) => console.log(v),
disabled: false,
placeholder: "デバイス ID などを検索",
items,
},
render: (args) => {
return (
<FullscreenLayout>
<Search {...args} />
</FullscreenLayout>
);
},
play: async ({ canvasElement }) => {
const canvas = within(canvasElement);

    const button = canvas.getByRole("button");

    await userEvent.type(button, "a");

    await userEvent.click(button);

},
};

================================================
FILE: src/components/Search/Search.tsx
================================================
import { Combobox, ComboboxRootProps, Portal } from "@ark-ui/react";
import {
SerendieSymbolMagnifyingGlass,
SerendieSymbolClose,
} from "@serendie/symbols";
import { cx, RecipeVariantProps, sva } from "../../../styled-system/css";
import { Box } from "../../../styled-system/jsx";

/\*

- 検索候補を出すことができるサーチコンボボックス
- https://ark-ui.com/docs/components/combobox
- 候補のリストを受け取っていない時には通常の検索窓として使える
- items: 検索候補のリスト、Easy さを優先しているので型は string のみ
  \*/

export const SearchStyle = sva({
slots: [
"input",
"control",
"combobox",
"comboboxItem",
"iconBox",
"icon",
"closeIcon",
],
base: {
control: {
display: "inline-grid",
// 後から指定した CSS から width が上書きできないため、@layer components を指定
"@layer components": {
width: "min(100%, 300px)",
},
lineHeight: "1",
gridTemplateColumns: "auto 1fr auto",
alignItems: "center",
borderRadius: "sd.system.dimension.radius.medium",
outlineStyle: "solid",
outlineWidth: "sd.system.dimension.border.medium",
outlineColor: "sd.system.color.component.outline",
bg: "sd.system.color.component.surface",
\_focus: {
outlineWidth: "sd.system.dimension.border.thick",
outlineColor: "sd.system.color.impression.primary",
},
\_disabled: {
bgColor: "sd.system.color.interaction.disabled",
cursor: "not-allowed",
},
},
input: {
outline: "none",
width: "100%",
textOverflow: "ellipsis",
\_placeholder: {
color: "sd.system.color.component.onSurfaceVariant",
},
\_disabled: {
color: "sd.system.color.interaction.disabledOnSurface",
\_placeholder: {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
},
combobox: {
bgColor: "sd.system.color.component.surface",
borderRadius: "sd.system.dimension.radius.medium",
boxShadow: "sd.system.elevation.shadow.level1",
zIndex: "sd.system.elevation.zIndex.dropdown",
width: "100%",
},
comboboxItem: {
display: "flex",
gap: "sd.system.dimension.spacing.small",
cursor: "pointer",
\_highlighted: {
backgroundColor: "sd.system.color.interaction.hoveredVariant",
},
},
iconBox: {
display: "flex",
justifyContent: "center",
"[data-disabled] &": {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
icon: {
width: "sd.system.dimension.spacing.large",
},
closeIcon: {
opacity: 0,
"[data-state=open] &": {
opacity: 1,
},
},
},
variants: {
size: {
medium: {
iconBox: {
w: "40px",
},
control: {
height: 48,
gap: "sd.system.dimension.spacing.extraSmall",
textStyle: "sd.system.typography.body.medium_compact",
paddingTop: "sd.system.dimension.spacing.small",
paddingRight: "sd.system.dimension.spacing.extraSmall",
paddingBottom: "sd.system.dimension.spacing.small",
paddingLeft: "sd.system.dimension.spacing.twoExtraSmall",
},
comboboxItem: {
paddingRight: "sd.system.dimension.spacing.medium",
paddingLeft: "sd.system.dimension.spacing.medium",
paddingBottom: "sd.system.dimension.spacing.extraSmall",
paddingTop: "sd.system.dimension.spacing.extraSmall",
},
},
small: {
iconBox: {
w: "20px",
},
control: {
height: 32,
gap: "sd.system.dimension.spacing.twoExtraSmall",
textStyle: "sd.system.typography.body.small_compact",
paddingTop: "sd.system.dimension.spacing.twoExtraSmall",
paddingLeft: "sd.system.dimension.spacing.extraSmall",
paddingRight: "sd.system.dimension.spacing.extraSmall",
paddingBottom: "sd.system.dimension.spacing.twoExtraSmall",
scrollPaddingLeft: "sd.system.dimension.spacing.twoExtraSmall",
},
comboboxItem: {
gap: "sd.system.dimension.spacing.twoExtraSmall",
paddingTop: "sd.system.dimension.spacing.extraSmall",
paddingRight: "sd.system.dimension.spacing.extraSmall",
paddingBottom: "sd.system.dimension.spacing.extraSmall",
paddingLeft: "sd.system.dimension.spacing.extraSmall",
},
},
},
},
defaultVariants: {
size: "medium",
},
});

type SearchStyleProps = ComboboxRootProps<string> &
RecipeVariantProps<typeof SearchStyle>;

export const Search: React.FC<SearchStyleProps> = ({
items = [],
...props
}) => {
const [variantProps, elementProps] = SearchStyle.splitVariantProps(props);
const styles = SearchStyle(variantProps);

return (
<Combobox.Root
items={items}
lazyMount
unmountOnExit
positioning={{
        offset: {
          mainAxis: 2,
          crossAxis: 0,
        },
      }}
{...elementProps} >
<Combobox.Control className={cx(styles.control, elementProps.className)}>
<div className={styles.iconBox}>
<SerendieSymbolMagnifyingGlass className={styles.icon} />
</div>
<Combobox.Input className={styles.input} />
{/_ ARK UI では Open のトリガーも用意されているがデザインではナシ _/}
{items.length > 0 && (
<Combobox.Trigger>
<div className={styles.closeIcon}>
<SerendieSymbolClose className={styles.icon} />
</div>
</Combobox.Trigger>
)}
</Combobox.Control>
{items.length > 0 && (
<Portal>
<Combobox.Positioner>
<Combobox.Content className={styles.combobox}>
<Combobox.ItemGroup id="framework">
{items.map((item, i) => (
<Combobox.Item
key={i}
item={item}
className={styles.comboboxItem} >
<Box
                      w="sd.system.dimension.spacing.large"
                      h="sd.system.dimension.spacing.large"
                    />
<Combobox.ItemText>{item}</Combobox.ItemText>
</Combobox.Item>
))}
</Combobox.ItemGroup>
</Combobox.Content>
</Combobox.Positioner>
</Portal>
)}
</Combobox.Root>
);
};

================================================
FILE: src/components/Select/index.ts
================================================
export \* from "./Select.tsx";

================================================
FILE: src/components/Select/Select.stories.tsx
================================================
import figma from "@figma/code-connect";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { FullscreenLayout } from "../../../.storybook/FullscreenLayout";
import { allModes } from "../../../.storybook/modes";
import { Select } from "./Select";

const items = [
{ label: "React", value: "React" },
{ label: "Vue", value: "Vue" },
{ label: "Angular", value: "Angular" },
{ label: "Svelte", value: "Svelte" },
{ label: "Ember", value: "Ember" },
];

const meta: Meta<typeof Select> = {
component: Select,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3154-26212",
props: {
label: figma.string("Label"),
placeholder: figma.string("Placeholder"),
disabled: figma.enum("State", { Disabled: true }),
invalid: figma.enum("State", { Error: true }),
invalidMessage: figma.string("InvalidMessage"),
size: figma.enum("Size", { Small: "small", Medium: "medium" }),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
},
},
args: {
onValueChange: (v) => console.log(v),
label: "ラベル",
required: true,
disabled: false,
invalid: false,
invalidMessage: "",
placeholder: "選択してください",
items,
},
};

function FigmaExample(props: React.ComponentProps<typeof Select>) {
return (
<Select
{...props}
items={[{ label: "SelectItem", value: "select-item" }]}
/>
);
}

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {};

export const Small: Story = {
args: {
size: "small",
},
};

export const Disabled: Story = {
args: {
disabled: true,
},
};

export const HasError: Story = {
args: {
onValueChange: (v) => console.log(v),
invalid: true,
invalidMessage: "エラーメッセージ",
},
};

export const PlayClickedSelect: Story = {
parameters: {
layout: "fullscreen",
viewport: {
defaultViewport: "large",
},
chromatic: {
modes: {
small: allModes["small"],
},
},
},
render: (args) => {
return (
<FullscreenLayout>
<Select {...args} />
</FullscreenLayout>
);
},
play: async ({ canvasElement }) => {
const canvas = within(canvasElement);

    const select = canvas.getByRole("combobox");

    await userEvent.click(select);

},
};

================================================
FILE: src/components/Select/Select.tsx
================================================
import { Select as ArkSelect, Portal, SelectRootProps } from "@ark-ui/react";
import { SerendieSymbolChevronDown } from "@serendie/symbols";
import { useId } from "react";
import { RecipeVariantProps, css, cx, sva } from "../../../styled-system/css";
import { List, ListItem } from "../List";

export const SelectStyle = sva({
slots: ["root", "valueText", "trigger", "content", "item", "iconBox"],
base: {
root: {
display: "inline-grid",
"@layer components": {
width: "min(100%, 300px)",
},
rowGap: "sd.system.dimension.spacing.extraSmall",
},
trigger: {
width: "100%",
textAlign: "left",
display: "grid",
gridTemplateColumns: "1fr auto",
paddingTop: "sd.system.dimension.spacing.small",
paddingRight: "sd.system.dimension.spacing.extraSmall",
paddingBottom: "sd.system.dimension.spacing.small",
paddingLeft: "sd.system.dimension.spacing.medium",
alignItems: "center",
borderRadius: "sd.system.dimension.radius.medium",
outlineStyle: "solid",
outlineWidth: "sd.system.dimension.border.medium",
outlineColor: "sd.system.color.component.outline",
bg: "sd.system.color.component.surface",
cursor: "pointer",
\_enabled: {
\_focusVisible: {
outlineWidth: "sd.system.dimension.border.thick",
outlineColor: "sd.system.color.impression.primary",
},
\_hover: {
outlineColor: "sd.system.color.interaction.hovered",
bg: "color-mix(in srgb, {colors.sd.system.color.component.surface}, {colors.sd.system.color.interaction.hoveredVariant})",
},
},
\_disabled: {
bgColor: "sd.system.color.interaction.disabled",
color: "sd.system.color.interaction.disabledOnSurface",
cursor: "not-allowed",
},
\_invalid: {
outlineColor: "sd.system.color.impression.negative",
},
},
valueText: {
outline: "none",
width: "100%",
whiteSpace: "nowrap",
overflow: "hidden",
textOverflow: "ellipsis",
textStyle: {
base: "sd.system.typography.body.medium_compact",
expanded: "sd.system.typography.body.medium_expanded",
},
"[data-placeholder-shown] &": {
color: "sd.system.color.component.onSurfaceVariant",
},
\_disabled: {
"[data-placeholder-shown] &": {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
},
content: {
bgColor: "sd.system.color.component.surface",
borderRadius: "sd.system.dimension.radius.medium",
boxShadow: "sd.system.elevation.shadow.level1",
zIndex: "sd.system.elevation.zIndex.dropdown",
width: "100%",
cursor: "pointer",
},
item: {
width: "100%",
},
iconBox: {
w: "40px",
display: "flex",
justifyContent: "center",
"[data-disabled] &": {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
},
variants: {
size: {
medium: {
root: {
textStyle: {
base: "sd.system.typography.body.medium_compact",
expanded: "sd.system.typography.body.medium_expanded",
},
},
valueText: {
textStyle: {
base: "sd.system.typography.body.medium_compact",
expanded: "sd.system.typography.body.medium_expanded",
},
},
trigger: {
height: 48,
},
item: {},
},
small: {
root: {
"@layer components": {
width: "min(100%, 150px)",
},
textStyle: {
base: "sd.system.typography.body.small_compact",
},
},
valueText: {
textStyle: {
base: "sd.system.typography.body.small_compact",
expanded: "sd.system.typography.body.small_expanded",
},
},
trigger: {
height: 32,
paddingTop: "sd.system.dimension.spacing.twoExtraSmall",
paddingRight: "sd.system.dimension.spacing.extraSmall",
paddingBottom: "sd.system.dimension.spacing.twoExtraSmall",
paddingLeft: "sd.system.dimension.spacing.extraSmall",
borderRadius: "sd.system.dimension.radius.small",
},
content: {
borderRadius: "sd.system.dimension.radius.small",
},
item: {},
},
},
},
defaultVariants: {
size: "medium",
},
});

type Props = {
placeholder?: string;
label?: string;
required?: boolean;
invalidMessage?: string;
};

type selectItem = {
label: string;
value: string;
};

type SelectStyleProps = Props &
SelectRootProps<selectItem> &
RecipeVariantProps<typeof SelectStyle>;

export const Select: React.FC<SelectStyleProps> = ({
placeholder = "",
label,
required,
invalid,
invalidMessage,
className,
...props
}) => {
const [variantProps, elementProps] = SelectStyle.splitVariantProps(props);
const styles = SelectStyle(variantProps);
const id = useId(); // TODO: https://github.com/serendie/serendie/issues/409 Ark UI 3 へのアップデート

return (
<ArkSelect.Root
{...elementProps}
invalid={invalid}
className={cx(styles.root, className)}
positioning={{
        sameWidth: true,
        offset: {
          mainAxis: 1,
          crossAxis: 0,
        },
      }} >
{label && variantProps.size != "small" && (
// small の場合はラベルを表示しない
<ArkSelect.Label
className={css({
textStyle: {
base: "sd.system.typography.label.medium_compact",
expanded: "sd.system.typography.label.medium_expanded",
},
})} >
{label}
{required && (
// とりあえず必須メッセージはハードコード
<span
className={css({
pl: "sd.system.dimension.spacing.extraSmall",
color: "sd.system.color.impression.negative",
})} >
必須
</span>
)}
</ArkSelect.Label>
)}
<ArkSelect.Control>
<ArkSelect.Trigger className={styles.trigger}>
<ArkSelect.ValueText
placeholder={placeholder}
className={styles.valueText}
/>
<SerendieSymbolChevronDown className={styles.iconBox} />
</ArkSelect.Trigger>
</ArkSelect.Control>
{invalid && invalidMessage && (
<div
className={css({
textStyle: {
base: "sd.system.typography.body.extraSmall_compact",
expanded: "sd.system.typography.body.extraSmall_expanded",
},
color: "sd.system.color.impression.negative",
})} >
{invalidMessage}
</div>
)}
<Portal>
<ArkSelect.Positioner>
<ArkSelect.Content className={styles.content}>
<List id={id}>
{props.items.map((item: selectItem, i: number) => (
<ArkSelect.Item key={i} item={item}>
<ListItem
title={item.label}
value={item.value}
className={styles.item}
size={variantProps.size == "small" ? "small" : undefined}
/>
</ArkSelect.Item>
))}
</List>
</ArkSelect.Content>
</ArkSelect.Positioner>
</Portal>
</ArkSelect.Root>
);
};

================================================
FILE: src/components/Switch/index.ts
================================================
export \* from "./Switch.tsx";

================================================
FILE: src/components/Switch/Switch.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { Switch, SwitchProps } from "./Switch";
import figma from "@figma/code-connect";

const meta: Meta<typeof Switch> = {
component: Switch,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3311-28493",
props: {
label: figma.string("Label"),
helperText: figma.enum("Line", {
Multiple: figma.string("HelperText"),
}),
disabled: figma.enum("State", {
Disabled: true,
"Disabled-Selected": true,
}),
checked: figma.enum("State", {
Selected: true,
"Disabled-Selected": true,
}),
},
examples: [FigmaExample],
},
},
decorators: [(Story) => <Story />],
argTypes: {
helperText: {
control: { type: "text" },
defaultValue: "",
},
},
};

function FigmaExample(props: React.ComponentProps<typeof Switch>) {
return <Switch {...props} />;
}

export default meta;
type Story = StoryObj<typeof Switch>;

const Template = (args: SwitchProps) => (
<Switch {...args} label="タイトルタイトル 1" helperText={args.helperText} />
);

export const Default: Story = {
render: Template,
};

export const WithHelperText: Story = {
render: Template,
args: {
helperText:
"補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト",
},
};

export const Disabled: Story = {
render: (args: SwitchProps) => (
<>
<Switch
{...args}
label="タイトルタイトル 1"
helperText={args.helperText}
checked
disabled
/>
<Switch
{...args}
label="タイトルタイトル 1"
helperText={args.helperText}
disabled
/>
</>
),
args: {
helperText:
"補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト補足テキスト",
},
};

================================================
FILE: src/components/Switch/Switch.tsx
================================================
import { Switch as ArkSwitch, SwitchRootProps } from "@ark-ui/react";
import { forwardRef } from "react";
import { RecipeVariantProps, css, cx, sva } from "../../../styled-system/css";

export const SwitchStyle = sva({
slots: ["root", "control", "thumb", "label", "textGroup", "helperText"],
base: {
root: {
display: "flex",
alignItems: "center",
gap: "sd.system.dimension.spacing.medium",
paddingY: "sd.system.dimension.spacing.small",
paddingX: "sd.system.dimension.spacing.medium",
'&[data-focus="true"] .control': {
borderColor: "sd.system.color.impression.primary",
},
},
control: {
cursor: "pointer",
width: 52,
height: 32,
flexShrink: 0,
backgroundColor: "sd.system.color.interaction.disabled",
borderRadius: "sd.system.dimension.radius.full",
borderWidth: 1,
borderColor: "sd.system.color.component.outline",
transitionDuration: ".2s",
transitionProperty: "background, borderColor",
transitionTimingFunction: "cubic-bezier(.2, 0, 0, 1)",
\_checked: {
backgroundColor: "sd.system.color.impression.primary",
borderColor: "sd.system.color.impression.primary",
\_disabled: {
backgroundColor:
"color-mix(in srgb, {colors.sd.system.color.impression.primary}, {colors.sd.system.color.interaction.hoveredOnPrimary});",
borderColor: "transparent",
},
},
\_disabled: {
cursor: "default",
background: "sd.system.color.interaction.disabled",
},
".group:has(:focus-visible) &": {
borderColor: "sd.system.color.impression.primary",
},
},
thumb: {
display: "block",
width: 20,
height: 20,
marginY: 5,
marginX: 6,
background: "sd.system.color.component.surface",
borderRadius: "sd.system.dimension.radius.full",
borderColor: "sd.system.color.component.outline",
borderWidth: 1,
transitionDuration: ".3s",
transitionProperty: "transform, borderColor",
transitionTimingFunction: "cubic-bezier(.2, 0, 0, 1)",
\_checked: {
transform: "translateX(19px)",
borderColor: "sd.system.color.component.surface",
},
},
label: {
color: "sd.system.color.component.onSurface",
textStyle: "sd.system.typography.body.medium_compact",
\_expanded: {
textStyle: "sd.system.typography.body.medium_expanded",
},
\_disabled: {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
textGroup: {
display: "flex",
flexFlow: "column",
width: 160,
},
helperText: {
color: "sd.system.color.component.onSurfaceVariant",
marginTop: "sd.system.dimension.spacing.twoExtraSmall",
lineHeight: "sd.reference.typography.lineHeight.tight",
textStyle: "sd.system.typography.body.extraSmall_compact",
\_expanded: {
textStyle: "sd.system.typography.body.extraSmall_expanded",
},
\_disabled: {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
},
});

type SwitchItemProps = {
label: string;
helperText?: string;
};

export type SwitchProps = SwitchRootProps &
RecipeVariantProps<typeof SwitchStyle> &
SwitchItemProps;

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
({ label, helperText, className, ...props }, ref) => {
const [variantProps, elementProps] = SwitchStyle.splitVariantProps(props);
const styles = SwitchStyle(variantProps);

    return (
      <ArkSwitch.Root
        ref={ref}
        className={cx(
          "group",
          styles.root,
          helperText && css({ alignItems: "flex-start" }),
          className
        )}
        {...elementProps}
      >
        <div className={styles.textGroup}>
          <ArkSwitch.Label className={styles.label}>{label}</ArkSwitch.Label>
          {helperText && (
            <ArkSwitch.Label className={styles.helperText}>
              {helperText}
            </ArkSwitch.Label>
          )}
        </div>
        <ArkSwitch.Control className={cx("control", styles.control)}>
          <ArkSwitch.Thumb className={styles.thumb} />
        </ArkSwitch.Control>
        <ArkSwitch.HiddenInput />
      </ArkSwitch.Root>
    );

}
);

================================================
FILE: src/components/Tabs/index.ts
================================================
export _ from "./Tabs.tsx";
export _ from "./TabItem.tsx";

================================================
FILE: src/components/Tabs/TabItem.tsx
================================================
import { Tabs as ArkTabs } from "@ark-ui/react";
import { cx, RecipeVariantProps, sva } from "../../../styled-system/css";
import { NotificationBadge } from "../NotificationBadge";

export const TabItemStyle = sva({
slots: ["trigger", "dot", "badgeBox", "badge"],
base: {
trigger: {
display: "flex",
justifyContent: "center",
flex: 1,
gap: "sd.system.dimension.spacing.twoExtraSmall",
alignItems: "center",
height: 44,
cursor: "pointer",
color: "sd.system.color.component.onSurface",
transitionDuration: ".2s",
transitionProperty: "color, border-color",
transitionTimingFunction: "cubic-bezier(.2, 0, 0, 1)",
borderBottom: "2px solid",
borderBottomColor: "transparent",
textStyle: "sd.system.typography.label.large_compact",
\_expanded: {
textStyle: "sd.system.typography.label.large_expanded",
},
\_selected: {
color: "sd.system.color.impression.primary",
fontWeight: "bold",
borderBottomColor: "sd.system.color.impression.primary",
},
\_disabled: {
cursor: "default",
color: "sd.system.color.interaction.disabledOnSurface",
},
\_hover: {
color: "sd.system.color.impression.primary",
\_disabled: {
color: "sd.system.color.interaction.disabledOnSurface",
},
},
\_focusVisible: {
outlineWidth: "1px",
outlineStyle: "solid",
outlineColor: "sd.system.color.component.outline",
outlineOffset: "-1px",
},
},
dot: {
height: 8,
width: 8,
},
badgeBox: {
height: 16,
width: 16,
},
badge: {
backgroundColor:
"color-mix(in srgb, {colors.sd.system.color.interaction.hoveredOnPrimary}, {colors.sd.system.color.impression.negativeContainer});",
},
},
});

type TabItemBaseProps = {
title: string;
value: string;
dot?: boolean;
disabled?: boolean;
badge?: number;
};

type ExclusiveBadgeProps =
| ({ badge?: number } & { dot?: never })
| ({ badge?: never } & { dot?: boolean });

export type TabItemProps = TabItemBaseProps &
RecipeVariantProps<typeof TabItemStyle> &
ArkTabs.TriggerProps &
ExclusiveBadgeProps;

export const TabItem = ({
title,
value,
disabled,
dot,
badge,
className,
...props
}: TabItemProps) => {
const [variantProps, elementProps] = TabItemStyle.splitVariantProps(props);
const styles = TabItemStyle(variantProps);
const badgeStyle = disabled ? styles.badge : "";

return (
<ArkTabs.Trigger
value={value}
className={cx(styles.trigger, className)}
disabled={disabled}
{...elementProps} >
<span>{title}</span>
{dot && (
<div className={styles.dot}>
<NotificationBadge noNumber className={badgeStyle} />
</div>
)}
{badge && (
<div className={styles.badgeBox}>
<NotificationBadge
            count={badge}
            size="small"
            className={badgeStyle}
          />
</div>
)}
</ArkTabs.Trigger>
);
};

================================================
FILE: src/components/Tabs/Tabs.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { TabItem, TabItemProps } from "./TabItem";
import figma from "@figma/code-connect";

const meta: Meta<typeof TabItem> = {
component: TabItem,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3430-26917",
props: {
title: figma.string("Title"),
disabled: figma.enum("State", { Disabled: true }),
dot: figma.enum("Notification", { Dot: true }),
badge: figma.enum("Notification", {
Number: 5,
}),
},
examples: [FigmaExample],
},
},
argTypes: {
title: {
control: { type: "text" },
defaultValue: "連絡先",
},
value: {
control: { type: "text" },
defaultValue: "1",
},
disabled: {
control: { type: "boolean" },
defaultValue: false,
},
dot: {
control: { type: "boolean" },
defaultValue: false,
},
badge: {
control: { type: "number" },
defaultValue: 0,
},
},
};

// Tabs は Storybook に乗せていないので fimga.connect のみ対応
figma.connect(
Tabs,
"https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-Design-System?node-id=3430-27569",
{
props: {
children: figma.children("TabItem\*"),
},
imports: ["import { Tabs, TabItem } from '@serendie/ui'"], // サンプル表示用
example: (props) => <Tabs defaultValue="1">{props.children}</Tabs>,
}
);

function FigmaExample(props: React.ComponentProps<typeof TabItem>) {
return <TabItem {...props} value="1" />;
}

export default meta;
type Story = StoryObj<typeof TabItem>;

export const Default: Story = {
render: (args: TabItemProps) => (
<Tabs defaultValue="2">
<TabItem {...args} />
<TabItem title="トーク" value="2" />
<TabItem title="売上履歴" value="3" disabled dot />
<TabItem title="入出金" value="4" badge={3} />
</Tabs>
),
args: {
title: "連絡先",
value: "1",
},
};

================================================
FILE: src/components/Tabs/Tabs.tsx
================================================
import { Tabs as ArkTabs } from "@ark-ui/react";
import { cx, sva } from "../../../styled-system/css";

export const TabsStyle = sva({
slots: ["root", "list"],
base: {
root: {
display: "flex",
paddingX: "sd.system.dimension.spacing.medium",
},
list: {
display: "flex",
flex: 1,
alignItems: "center",
justifyContent: "space-around",
},
},
});

export const Tabs = ({ children, className, ...props }: ArkTabs.RootProps) => {
const [variantProps, elementProps] = TabsStyle.splitVariantProps(props);
const styles = TabsStyle(variantProps);

return (
<ArkTabs.Root className={cx(styles.root, className)} {...elementProps}>
<ArkTabs.List className={styles.list}>{children}</ArkTabs.List>
</ArkTabs.Root>
);
};

================================================
FILE: src/components/TextArea/index.ts
================================================
export \* from "./TextArea.tsx";

================================================
FILE: src/components/TextArea/TextArea.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";
import figma from "@figma/code-connect";

const meta: Meta<typeof TextArea> = {
component: TextArea,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=1406-17592",
props: {
label: figma.string("Label"),
placeholder: figma.string("Placeholder"),
description: figma.string("Description"),
disabled: figma.enum("State", { Disabled: true }),
invalid: figma.enum("State", { Error: true }),
invalidMessage: figma.string("InvalidMessage"),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
},
},
args: {
label: "ラベル",
required: true,
disabled: false,
invalid: false,
invalidMessage: "入力の誤りに関するテキスト",
description: "入力方法などに関するヘルプテキスト",
placeholder: "プレースホルダー",
},
};

function FigmaExample(props: React.ComponentProps<typeof TextArea>) {
return <TextArea {...props} />;
}

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {};

export const Disabled: Story = {
args: {
disabled: true,
},
};

export const HasError: Story = {
args: {
invalid: true,
},
};

export const AutoAdjustHeight: Story = {
args: {
autoAdjustHeight: true,
},
};

================================================
FILE: src/components/TextArea/TextArea.tsx
================================================
import mergeRefs from "merge-refs";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { cx, sva } from "../../../styled-system/css";

const TextAreaStyle = sva({
slots: [
"root",
"label",
"required",
"wrapper",
"textarea",
"messageField",
"description",
"invalidMessage",
],
base: {
root: {
display: "inline-grid",
// 後から指定した CSS から width が上書きできないため、@layer components を指定
"@layer components": {
width: "min(100%, 300px)",
},
gridTemplateColumns: "auto",
rowGap: "sd.system.dimension.spacing.extraSmall",
textStyle: {
base: "sd.system.typography.body.medium_compact",
expanded: "sd.system.typography.body.medium_expanded",
},
},
label: {
textStyle: {
base: "sd.system.typography.label.medium_compact",
expanded: "sd.system.typography.label.medium_expanded",
},
},
wrapper: {
display: "grid",
gridTemplateColumns: "1fr auto",
alignItems: "center",
outlineStyle: "solid",
outlineWidth: "sd.system.dimension.border.medium",
outlineColor: "sd.system.color.component.outline",
borderRadius: "sd.system.dimension.radius.medium",
backgroundColor: "sd.system.color.component.surface",
\_focusWithin: {
outlineWidth: "sd.system.dimension.border.thick",
outlineColor: "sd.system.color.impression.primary",
},
\_disabled: {
backgroundColor: "sd.system.color.interaction.disabled",
},
\_invalid: {
outlineColor: "sd.system.color.impression.negative",
},
'&:has([data-focus="true"])': {
outlineWidth: "sd.system.dimension.border.thick",
outlineColor: "sd.system.color.impression.primary",
},
},
textarea: {
outline: "none",
marginTop: "sd.system.dimension.spacing.extraSmall",
// NOTE: Figma の値と違うがリサイズハンドルを考慮して小さくしている
marginRight: "sd.system.dimension.spacing.twoExtraSmall",
marginBottom: "sd.system.dimension.spacing.twoExtraSmall",
marginLeft: "sd.system.dimension.spacing.small",
\_disabled: {
cursor: "not-allowed",
},
},
required: {
pl: "sd.system.dimension.spacing.extraSmall",
color: "sd.system.color.impression.negative",
},
messageField: {
textAlign: "right",
color: "sd.system.color.component.onSurfaceVariant",
textStyle: {
base: "sd.system.typography.body.extraSmall_compact",
expanded: "sd.system.typography.body.extraSmall_expanded",
},
},
invalidMessage: {
color: "sd.system.color.impression.negative",
},
},
variants: {
autoAdjustHeight: {
true: {
textarea: {
fieldSizing: "content",
minHeight: "2lh",
},
},
},
},
});

type Props = {
label?: string;
description?: string;
invalid?: boolean;
invalidMessage?: string;
autoAdjustHeight?: boolean;
} & ComponentPropsWithoutRef<"textarea">;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
(
{
placeholder,
label,
description,
required,
invalidMessage,
invalid,
disabled,
className,
...props
},
ref
) => {
const inputRef = React.useRef<HTMLTextAreaElement>(null);
const mergedRef = mergeRefs(inputRef, ref);
const [variantProps, elementProps] = TextAreaStyle.splitVariantProps(props);
const styles = TextAreaStyle(variantProps);
const showMessageField = description || (invalid && invalidMessage);
const inputId = props.id || React.useId();

    return (
      <div className={cx(styles.root, className)}>
        {label ? (
          <label className={styles.label} htmlFor={inputId}>
            {label}
            {required && <span className={styles.required}>必須</span>}
          </label>
        ) : null}
        <div
          className={styles.wrapper}
          data-invalid={invalid ? true : undefined}
          data-disabled={disabled ? true : undefined}
        >
          <textarea
            ref={mergedRef}
            id={inputId}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={styles.textarea}
            {...elementProps}
          />
        </div>
        {showMessageField && (
          <div className={styles.messageField}>
            {description && <p className={styles.description}>{description}</p>}
            {invalid && invalidMessage && (
              <p className={styles.invalidMessage}>{invalidMessage}</p>
            )}
          </div>
        )}
      </div>
    );

}
);

================================================
FILE: src/components/TextField/index.ts
================================================
export \* from "./TextField.tsx";

================================================
FILE: src/components/TextField/TextField.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";
import figma from "@figma/code-connect";
import {
SerendieSymbolInformation,
SerendieSymbolMail,
SerendieSymbolMagnifyingGlass,
} from "@serendie/symbols";
import { Box } from "../../../styled-system/jsx";

const meta: Meta<typeof TextField> = {
component: TextField,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=5113-4273",
props: {
label: figma.string("Label"),
disabled: figma.enum("State", { Disabled: true }),
invalid: figma.enum("State", { Error: true }),
invalidMessage: figma.string("InvalidMessage"),
description: figma.string("Description"),
placeholder: figma.string("Placeholder"),
required: figma.boolean("Required"),
},
examples: [FigmaExample],
},
controls: {
expanded: true,
},
},
args: {
label: "ラベル",
required: true,
disabled: false,
invalid: false,
invalidMessage: "入力の誤りに関するテキスト",
description: "入力方法などに関するヘルプテキスト",
placeholder: "プレースホルダー",
onChange: (e) => {
console.log(e);
},
},
};

function FigmaExample(props: React.ComponentProps<typeof TextField>) {
return <TextField {...props} />;
}

export default meta;
type Story = StoryObj<typeof TextField>;

export const Basic: Story = {};

export const Disabled: Story = {
args: {
disabled: true,
},
};

export const HasError: Story = {
args: {
invalid: true,
},
};

export const WithleftContent: Story = {
args: {
leftContent: <SerendieSymbolMagnifyingGlass width={20} height={20} />,
placeholder: "検索キーワードを入力",
},
};

export const WithrightContent: Story = {
args: {
rightContent: <SerendieSymbolInformation width={20} height={20} />,
placeholder: "情報を入力",
},
};

export const WithBothContents: Story = {
args: {
leftContent: <SerendieSymbolMail width={20} height={20} />,
rightContent: <SerendieSymbolInformation width={20} height={20} />,
placeholder: "メールアドレスを入力",
},
};

export const WithText: Story = {
args: {
leftContent: (
<Box
textStyle="sd.system.typography.label.medium_compact"
color={"sd.system.color.component.onSurfaceVariant"} >
serendie.design/
</Box>
),
placeholder: "URL を入力",
label: "URL",
},
};

================================================
FILE: src/components/TextField/TextField.tsx
================================================
import {
SerendieSymbolAlertCircle,
SerendieSymbolClose,
} from "@serendie/symbols";
import mergeRefs from "merge-refs";
import React, { forwardRef } from "react";
import { css, cx, sva } from "../../../styled-system/css";

const TextFieldStyle = sva({
slots: [
"root",
"label",
"required",
"inputWrapper",
"leftContent",
"rightContent",
"input",
"icon",
"messageField",
"description",
"invalidMessage",
],
base: {
root: {
display: "inline-grid",
// 後から指定した CSS から width が上書きできないため、@layer components を指定
"@layer components": {
width: "min(100%, 300px)",
},
gridTemplateColumns: "auto",
rowGap: "sd.system.dimension.spacing.extraSmall",
textStyle: {
base: "sd.system.typography.body.medium_compact",
expanded: "sd.system.typography.body.medium_expanded",
},
},
label: {
textStyle: {
base: "sd.system.typography.label.medium_compact",
expanded: "sd.system.typography.label.medium_expanded",
},
},
inputWrapper: {
height: 48,
display: "grid",
gridTemplateColumns: "auto 1fr auto auto",
alignItems: "center",
outlineStyle: "solid",
outlineWidth: "sd.system.dimension.border.medium",
outlineColor: "sd.system.color.component.outline",
borderRadius: "sd.system.dimension.radius.medium",
backgroundColor: "sd.system.color.component.surface",
'&:has([data-focus="true"])': {
outlineWidth: "sd.system.dimension.border.thick",
outlineColor: "sd.system.color.impression.primary",
},
\_focusWithin: {
outlineWidth: "sd.system.dimension.border.thick",
outlineColor: "sd.system.color.impression.primary",
},
\_disabled: {
backgroundColor: "sd.system.color.interaction.disabled",
cursor: "not-allowed",
},
\_invalid: {
outlineColor: "sd.system.color.impression.negative",
},
},
leftContent: {
paddingLeft: "sd.system.dimension.spacing.medium",
},
rightContent: {
paddingRight: "sd.system.dimension.spacing.medium",
},
input: {
outline: "none",
paddingTop: "sd.system.dimension.spacing.extraSmall",
paddingRight: "sd.system.dimension.spacing.twoExtraSmall",
paddingBottom: "sd.system.dimension.spacing.extraSmall",
paddingLeft: "sd.system.dimension.spacing.medium",
},
icon: {
display: "grid",
placeItems: "center",
w: "48px",
h: "48px",
expanded: {
w: "44px",
h: "44px",
},
},
required: {
pl: "sd.system.dimension.spacing.extraSmall",
color: "sd.system.color.impression.negative",
},
messageField: {
textStyle: {
base: "sd.system.typography.body.extraSmall_compact",
expanded: "sd.system.typography.body.extraSmall_expanded",
},
},
invalidMessage: {
color: "sd.system.color.impression.negative",
},
},
});

type Props = {
label?: string;
description?: string;
invalid?: boolean;
invalidMessage?: string;
leftContent?: React.ReactNode;
rightContent?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"input">;

export const TextField = forwardRef<HTMLInputElement, Props>(
(
{
placeholder,
label,
description,
required,
invalidMessage,
invalid,
type = "text",
disabled,
onChange,
value,
className,
leftContent,
rightContent,
...props
},
ref
) => {
const inputRef = React.useRef<HTMLInputElement>(null);
const mergedRef = mergeRefs(inputRef, ref);
const [variantProps, elementProps] =
TextFieldStyle.splitVariantProps(props);
const styles = TextFieldStyle(variantProps);
const showMessageField = description || (invalid && invalidMessage);
const [_value, setValue] = React.useState(props.defaultValue || value);
const inputId = props.id || React.useId();

    const resetValue = () => {
      const e = {
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>;

      onValueChange(e);
      props.onReset?.(e);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    };

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className={cx(styles.root, className)}>
        {label ? (
          <label className={styles.label} htmlFor={inputId}>
            {label}
            {required && <span className={styles.required}>必須</span>}
          </label>
        ) : null}
        <div
          className={styles.inputWrapper}
          data-invalid={invalid ? true : undefined}
          data-disabled={disabled ? true : undefined}
        >
          {leftContent ? (
            <div className={styles.leftContent}>{leftContent}</div>
          ) : (
            <div></div>
          )}
          <input
            ref={mergedRef}
            id={inputId}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            value={value}
            type={type}
            className={styles.input}
            onChange={onValueChange}
            {...elementProps}
          />
          {rightContent ? (
            <div className={styles.rightContent}>{rightContent}</div>
          ) : (
            <div className={styles.icon}>
              {!disabled &&
                /* disabledの場合はアイコンを表示しない */
                (invalid ? (
                  <span
                    className={css({
                      color: "sd.system.color.impression.negative",
                    })}
                  >
                    <SerendieSymbolAlertCircle width={20} height={20} />
                  </span>
                ) : _value ? (
                  <button
                    className={css({ cursor: "pointer" })}
                    onClick={resetValue}
                    aria-label="値をクリア"
                  >
                    <SerendieSymbolClose width={20} height={20} />
                  </button>
                ) : null)}
            </div>
          )}
        </div>
        {showMessageField && (
          <div className={styles.messageField}>
            {description && <p className={styles.description}>{description}</p>}
            {invalid && invalidMessage && (
              <p className={styles.invalidMessage}>{invalidMessage}</p>
            )}
          </div>
        )}
      </div>
    );

}
);

================================================
FILE: src/components/Toast/index.ts
================================================
export \* from "./Toast.tsx";

================================================
FILE: src/components/Toast/Toast.stories.tsx
================================================
import type { Meta, StoryObj } from "@storybook/react";
import { Toast, toaster } from "./Toast";
import { Button } from "../Button";
import { Stack } from "../../../styled-system/jsx";
import figma from "@figma/code-connect";
import { userEvent, within } from "@storybook/test";
import { FullscreenLayout } from "../../../.storybook/FullscreenLayout";

const meta: Meta<typeof Toast> = {
component: Toast,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=3256-16094",
props: {
title: figma.string("Title"),
type: figma.enum("Type", {
Default: "default",
Success: "success",
Error: "error",
}),
},
examples: [FigmaExample],
import: "import { Toast, toaster } from 'path/to/Toast';",
},
},
decorators: [(Story) => <Story />],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FigmaExample(props: any) {
return (
<>
<Button
onClick={() =>
toaster.create({
duration: 3000,
type: props.type,
title: props.title,
})
} >
Show Toast
</Button>
<Toast toaster={toaster} />
</>
);
}

type Story = StoryObj<typeof Toast>;
export default meta;

export const Default: Story = {
render: () => {
return (
<div>
<Button
size="medium"
onClick={() =>
toaster.create({
title: "通知メッセージ",
duration: 3000,
})
} >
Show Toast
</Button>
<Toast toaster={toaster} />
</div>
);
},
};

export const Success: Story = {
render: () => {
return (
<div>
<Stack direction="row">
<Button
size="medium"
onClick={() =>
toaster.create({
title: "成功メッセージ",
duration: 3000,
type: "success",
})
} >
Show Toast
</Button>
</Stack>

        <Toast toaster={toaster} />
      </div>
    );

},
};

export const Error: Story = {
render: () => {
return (
<div>
<Button
size="medium"
onClick={() =>
toaster.create({
title: "エラーメッセージ",
duration: 3000,
type: "error",
})
} >
Show Toast
</Button>
<Toast toaster={toaster} />
</div>
);
},
};

export const PlayClickedSelect: Story = {
parameters: {
layout: "fullscreen",
},
render: () => {
return (
<FullscreenLayout>
<Button
size="medium"
onClick={() =>
toaster.create({
title: "通知メッセージ",
duration: 3000,
})
} >
Show Toast
</Button>
<Toast toaster={toaster} />
</FullscreenLayout>
);
},
play: async ({ canvasElement }) => {
const canvas = within(canvasElement);

    const select = canvas.getByRole("button");

    await userEvent.click(select);

},
};

================================================
FILE: src/components/Toast/Toast.tsx
================================================
import {
Toast as ArkToast,
Toaster as ArkToaster,
createToaster,
} from "@ark-ui/react";
import {
SerendieSymbolAlertCircleFilled,
SerendieSymbolCheckCircleFilled,
} from "@serendie/symbols";
import { sva } from "../../../styled-system/css";

export const ToastStyle = sva({
slots: ["root", "textGroup", "text", "icon"],
base: {
root: {
display: "flex",
alignItems: "center",
paddingX: "sd.system.dimension.spacing.extraLarge",
borderRadius: "sd.system.dimension.radius.medium",
boxShadow: "sd.system.elevation.shadow.level3",
height: 40,
},
textGroup: {
display: "flex",
alignItems: "center",
gap: "sd.system.dimension.spacing.twoExtraSmall",
},
text: {
textStyle: "sd.system.typography.body.small_compact",
\_expanded: {
textStyle: "sd.system.typography.body.small_expanded",
},
},
icon: {
color: "sd.system.color.component.inverseOnSurface",
},
},
variants: {
variant: {
default: {
root: {
background: "sd.system.color.component.inverseSurface",
},
text: {
color: "sd.system.color.component.inverseOnSurface",
},
icon: {
color: "sd.system.color.impression.positive",
},
},
error: {
root: {
background: "sd.system.color.impression.negativeContainer",
borderColor: "sd.system.color.impression.negative",
borderWidth: 1,
},
text: {
color: "sd.system.color.impression.negative",
},
icon: {
color: "sd.system.color.impression.negative",
},
},
},
},
defaultVariants: {
variant: "default",
},
});

const toaster: ReturnType<typeof createToaster> = createToaster({
placement: "bottom",
});

type ToastProps = {
toaster: typeof toaster;
};

const Toast: React.FC<ToastProps> = ({ toaster }) => {
return (
<ArkToaster toaster={toaster}>
{(toast) => {
const type = toast.type === "error" ? "error" : "default";
const styles = ToastStyle({ variant: type });

        const Icon =
          type === "error" ? (
            <SerendieSymbolAlertCircleFilled className={styles.icon} />
          ) : (
            <SerendieSymbolCheckCircleFilled className={styles.icon} />
          );

        return (
          <ArkToast.Root key={toast.id} className={styles.root}>
            <div className={styles.textGroup}>
              {Icon}
              <ArkToast.Title className={styles.text}>
                {toast.title}
              </ArkToast.Title>
            </div>
          </ArkToast.Root>
        );
      }}
    </ArkToaster>

);
};

// eslint-disable-next-line react-refresh/only-export-components
export { Toast, toaster };

================================================
FILE: src/components/TopAppBar/index.ts
================================================
export \* from "./TopAppBar.tsx";

================================================
FILE: src/components/TopAppBar/TopAppBar.stories.tsx
================================================
import { Meta, StoryObj } from "@storybook/react";
import { TopAppBar } from "./TopAppBar";
import { IconButton } from "../IconButton";
import figma from "@figma/code-connect";
import React from "react";
import {
SerendieSymbolMagnifyingGlass,
SerendieSymbolMenu,
SerendieSymbolPlus,
SerendieSymbolInformation,
SerendieSymbolChevronLeft,
} from "@serendie/symbols";

const meta: Meta<typeof TopAppBar> = {
component: TopAppBar,
parameters: {
design: {
type: "figma",
url: "https://www.figma.com/design/8oZpZ2xolRhCUPDGSlWXr0/Serendie-UI-Kit?node-id=1353-14085",
props: {
title: figma.string("Title"),
type: figma.enum("Navbar", { True: "navbar", False: "titleBar" }),
badge: figma.boolean("ShowNotificationBadge", {
true: 5,
false: undefined,
}),
headingIconButton: figma.children("HeadingIconButton"),
trailingIconButtons: figma.children("TrailingIconButton"),
},
// TopAppBar を再帰的に組み合わせる構造が Code Connect では完全再現しづらいため、一部疑似サンプル
examples: [
{
example: FigmaExample,
},
{
example: FigmaExample2,
variant: { Navbar: "True", Type: "TitleOnly" },
},
{
example: FigmaExample3,
variant: { Navbar: "True", Type: "TitleWithIcons" },
},
],
},
controls: {
expanded: true,
},
},
};

function FigmaExample(props: React.ComponentProps<typeof TopAppBar>) {
return <TopAppBar {...props} />;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function FigmaExample2({ type, title, ...props }: any) {
return (
<>
<TopAppBar type="navbar" {...props} />
<TopAppBar type="titleBar" title={title} />
</>
);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function FigmaExample3({ type, title, ...props }: any) {
return (
<>
<TopAppBar type="navbar" {...props} />
<TopAppBar type="titleBar" title={title} {...props} />
</>
);
}

type Story = StoryObj<typeof TopAppBar>;
export default meta;

export const All: StoryObj<typeof AllTemplate> = {
args: {
arg1: {
type: "navbar",
headingIconButton: (
<>
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolMenu />}
/>
</>
),
trailingIconButtons: (
<>
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolMagnifyingGlass />}
/>
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolPlus />}
/>
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolInformation />}
/>
</>
),
},
arg2: {
type: "titleBar",
title: "Title Bar",
headingIconButton: (
<>
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolChevronLeft />}
/>
</>
),
trailingIconButtons: (
<>
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolPlus />}
/>
</>
),
},
},
render: (args) => {
return <AllTemplate {...args} />;
},
};

type AllTemplateProps = {
arg1: {
type: "navbar";
headingIconButton: React.ReactElement;
trailingIconButtons: React.ReactElement;
};
arg2: {
type: "titleBar";
title: string;
headingIconButton: React.ReactElement;
trailingIconButtons: React.ReactElement;
};
};

const AllTemplate: React.FC<AllTemplateProps> = ({ arg1, arg2 }) => {
return (
<>
<TopAppBar {...arg1} />
<TopAppBar {...arg2} />
</>
);
};

export const Navbar: Story = {
args: {
type: "navbar",
headingIconButton: (
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolMenu />}
/>
),
trailingIconButtons: (
<>
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolMagnifyingGlass />}
/>
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolPlus />}
/>
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolInformation />}
/>
</>
),
},
render: (args) => {
return <TopAppBar {...args} />;
},
};

export const Title: Story = {
args: {
type: "titleBar",
title: "Title Bar",
headingIconButton: (
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolChevronLeft />}
/>
),
trailingIconButtons: (
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolPlus />}
/>
),
},
render: (args) => {
return <TopAppBar {...args} />;
},
};

export const NotificationBadgeExample: Story = {
args: {
type: "titleBar",
title: "Title Bar",
headingIconButton: (
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolChevronLeft />}
/>
),
trailingIconButtons: (
<IconButton
shape="rectangle"
styleType="ghost"
icon={<SerendieSymbolPlus />}
/>
),
badge: 3,
},
render: (args) => {
return <TopAppBar {...args} />;
},
};

================================================
FILE: src/components/TopAppBar/TopAppBar.tsx
================================================
import { ComponentProps } from "react";
import { RecipeVariantProps, cx, sva } from "../../../styled-system/css";
import {
NotificationBadge,
NotificationBadgeProps,
} from "../NotificationBadge";

const topAppBarStyle = sva({
slots: ["root", "container", "left", "buttonContainer", "title"],
base: {
root: {
width: "100%",
backgroundColor: "sd.system.color.component.surface",
},
container: {
height: "48px",
display: "flex",
justifyContent: "space-between",
gap: "8px",
alignItems: "center",
},
left: {
display: "flex",
alignItems: "center",
gap: "8px",
width: "100%",
},
buttonContainer: {
display: "flex",
alignItems: "center",
gap: "8px",
},
title: {
textStyle: "sd.system.typography.title.medium_compact",
maxW: "100%",
\_expanded: {
textStyle: "sd.system.typography.title.medium_expanded",
},
},
},
variants: {
type: {
navbar: {},
titleBar: {},
titleBarTitleOnly: {
root: {
\_lastOfType: {
paddingBottom: "8px",
},
\_firstOfType: {
paddingBottom: "0px",
},
},
},
},
},
defaultVariants: {
type: "navbar",
},
});

type VariantProps = Omit<RecipeVariantProps<typeof topAppBarStyle>, "type">;

type BaseProps = {
headingIconButton?: React.ReactElement;
trailingIconButtons?: React.ReactElement;
badge?: NotificationBadgeProps["count"];
title?: string;
} & VariantProps &
ComponentProps<"nav">;

type NavbarProps = BaseProps & { type: "navbar"; title?: string };
type TitleBarProps = BaseProps & { type: "titleBar"; title: string };

type Props = React.FC<NavbarProps | TitleBarProps>;

export const TopAppBar: Props = ({
headingIconButton,
trailingIconButtons,
badge,
title,
...props
}) => {
const [variantProps, { className, ...elementProps }] =
topAppBarStyle.splitVariantProps(props);
const styles = topAppBarStyle(variantProps);

return (
<nav className={cx(styles.root, className)} {...elementProps}>
<div className={styles.container}>
<div className={styles.left}>
<div className={styles.buttonContainer}>{headingIconButton}</div>
<h1 className={styles.title}>{title}</h1>
{badge && <NotificationBadge count={badge} position="relative" />}
</div>
<div className={styles.buttonContainer}>{trailingIconButtons}</div>
</div>
</nav>
);
};

================================================
FILE: src/recipes/index.ts
================================================
import { RecipeVariantRecord } from "@pandacss/dev";

export const SerendieRecipes: RecipeVariantRecord = {};

================================================
FILE: src/tokens/getToken.ts
================================================
import token from "@serendie/design-token";

export function getToken() {
return token;
}

================================================
FILE: src/tokens/index.ts
================================================
import serendieTokens from "@serendie/design-token/panda";
import merge from "deepmerge";

// PandaCSS の tokens と textStyles が混在しているので分離する
const { textStyles, ...tokens } = serendieTokens;

// tokens の中から spacing を取り出して sizes として定義する

const sizes = merge(tokens.sizes, tokens.spacing);

export const SerendieTokens = {
...tokens,
sizes,
};

export const SerendieTypography = textStyles;

================================================
FILE: src/tokens/keyframes/index.ts
================================================
export const SerendieKeyframes = {
spin: {
"0%": { transform: "rotate(0deg)" },
"100%": { transform: "rotate(360deg)" },
},
};

================================================
FILE: .github/dependabot.yml
================================================
version: 2
updates:

- package-ecosystem: "npm"
  directory: "/"
  schedule:
  interval: "daily"
  allow:
  - dependency-name: "@serendie/\*"

================================================
FILE: .github/templates/git-pr-release.erb
================================================
Release <%= Time.now %>
<% pull_requests.each do |pr| -%>
<%= pr.to_checklist_item %>
<% end -%>

以下のラベルを付与すると自動的に package release 処理が実行されます。

- `release[patch]` : patch バージョンのアップデート
- `release[minor]` : minor バージョンのアップデート
- `release[major]` : major バージョンのアップデート

================================================
FILE: .github/workflows/chromatic.yml
================================================
name: Deploy to chromatic

on:
push:
branches: - main
pull_request:
branches: - main

jobs:
deploy:
runs-on: ubuntu-latest
permissions:
contents: read
steps: - uses: actions/checkout@v4
with:
fetch-depth: 0 - run: npm ci - uses: chromaui/action@latest
with:
projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
onlyChanged: true
buildScriptName: "build:storybook"

================================================
FILE: .github/workflows/comment-for-ui-checking.yml
================================================
name: Comment for ui checking

on:
pull_request:
types: - opened
branches: - main

jobs:
comment:
runs-on: ubuntu-latest
permissions:
contents: read
pull-requests: write
issues: write
steps: - uses: actions/github-script@v7
with:
github-token: ${{ secrets.GITHUB_TOKEN }}
script: |
await github.rest.issues.createComment({
owner: context.repo.owner,
repo: context.repo.repo,
issue_number: context.payload.pull_request.number,
body: "- [ ] ドキュメントサイトの Component プレビュー内容は適切ですか\n- [ ] ドキュメントサイトの Component サンプルコードは適切ですか\n- [ ] ドキュメントサイトから Storybook へのリンクは適切ですか\n- [ ] Storybook 上の表示は適切ですか\n- [ ] CodeConnect の表示は適切ですか"
})

================================================
FILE: .github/workflows/package.yml
================================================
name: Package

on:
pull_request:
types: - labeled

permissions:
contents: write
packages: write
pull-requests: write

jobs:
release-by-labeled:
uses: serendie/.github/.github/workflows/package.yml@main
secrets: inherit

================================================
FILE: .github/workflows/publish-code-connect.yml
================================================
name: Figma Code Connect

on:
pull_request_review:
types: [submitted]
branches: - main
paths: - "src/**/\*.stories.tsx" - ".github/workflows/publish-code-connect.yml"
pull_request:
types: [closed]
branches: - main
paths: - "src/**/\*.stories.tsx" - ".github/workflows/publish-code-connect.yml"

jobs:
publish-code-connect:
runs-on: ubuntu-latest
if: (github.event.review.state == 'approved') || (github.event.pull_request.merged == true)
steps: - name: Install Node.js
uses: actions/setup-node@v4
with:
node-version: "20"

      - name: Set NPM version
        run: npm install -g npm@latest

      - name: Clone repo
        uses: actions/checkout@v4

      - name: Cache Dependency
        uses: actions/cache@v4
        id: cache_dependency
        env:
          cache-name: cache-dependency
        with:
          path: "**/node_modules"
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('package-lock.json') }}

      - name: Install dependencies
        if: ${{ steps.cache_dependency.outputs.cache-hit != 'true' }}
        run: npm install

      - name: Publish Code Connect
        run: npm run connect:publish
        env:
          FIGMA_ACCESS_TOKEN: ${{ secrets.SYNC_FIGMA_PERSONAL_ACCESS_TOKEN }}

================================================
FILE: .github/workflows/release-pull-request.yml
================================================
name: Release Pull Request

on:
push:
branches: [main]

permissions:
contents: read
pull-requests: write

jobs:
create:
uses: serendie/.github/.github/workflows/release-pull-request.yml@main
secrets: inherit

================================================
FILE: .husky/pre-commit
================================================
npx lint-staged

================================================
FILE: .storybook/FullscreenLayout.tsx
================================================
import React from "react";

export const FullscreenLayout: React.FC<{
children: React.ReactNode;
}> = ({ children }) => {
return (
<div
style={{
        width: "100vw",
        height: "100vh",
        padding: "1rem",
      }} >
{children}
</div>
);
};

================================================
FILE: .storybook/main.ts
================================================
import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";

/\*\*

- This function is used to resolve the absolute path of a package.
- It is needed in projects that use Yarn PnP or are set up within a monorepo.
  _/
  function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
  }
  const config: StorybookConfig = {
  stories: ["../src/\*\*/_.mdx", "../src/\*_/_.stories.@(js|jsx|mjs|ts|tsx)"],

addons: [
getAbsolutePath("@storybook/addon-links"),
getAbsolutePath("@storybook/addon-essentials"),
//getAbsolutePath("@storybook/addon-onboarding"),
getAbsolutePath("@storybook/addon-interactions"),
"@chromatic-com/storybook",
getAbsolutePath("@storybook/addon-designs"),
getAbsolutePath("@storybook/addon-themes"),
],

framework: {
name: getAbsolutePath("@storybook/react-vite"),
options: {},
},

docs: {},

typescript: {
reactDocgen: "react-docgen-typescript",
},
};

export default config;

================================================
FILE: .storybook/modes.ts
================================================
import tokens from "@serendie/design-token";

const breakpoints = tokens.sd.reference.dimension.breakpoint;

type ViewportMode = {
name: string;
styles: {
width: string;
height: string;
};
};

type AllModes = Record<string, ViewportMode>;

export const viewports = Object.entries(breakpoints).reduce<AllModes>(
(acc, [key, value]) => {
acc[key] = {
name: key,
styles: { width: value, height: "900px" },
};
return acc;
},
{}
);

export const allModes = Object.entries(breakpoints).reduce<{
[key: string]: {
viewport: string;
};
}>((acc, [key]) => {
acc[key] = {
viewport: key,
};
return acc;
}, {});

================================================
FILE: .storybook/preview.ts
================================================
import "../src/styles.css";

import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { themeNames } from "../src/preset";
import { viewports } from "./modes";

const preview: Preview = {
parameters: {
viewport: {
viewports: viewports,
},
controls: {
matchers: {
color: /(background|color)$/i,
        date: /Date$/i,
},
},
},
decorators: [
withThemeByDataAttribute<ReactRenderer>({
themes: {
...themeNames.reduce((acc, name) => {
acc[name] = name;
return acc;
}, {}),
},
defaultTheme: "konjo",
attributeName: "data-panda-theme",
}),
],
tags: ["autodocs"],
};

export default preview;
