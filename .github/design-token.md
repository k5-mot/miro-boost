Directory structure:
└── serendie-design-token/
├── README.md
├── buildTokens.ts
├── LICENSE
├── package.json
├── tsconfig.json
├── .env.example
├── .npmrc.example
├── .release-it.json
├── tokens/
│ ├── reference/
│ │ ├── color.default.json
│ │ ├── dimension.default.json
│ │ ├── elevation.default.json
│ │ └── typography.default.json
│ └── system/
│ ├── color.asagi.json
│ ├── color.konjo.json
│ ├── color.kurikawa.json
│ ├── color.sumire.json
│ ├── color.tsutsuji.json
│ ├── dimension.default.json
│ ├── elevation.default.json
│ ├── typography.compact.json
│ └── typography.expanded.json
└── .github/
├── dependabot.yml
├── templates/
│ └── git-pr-release.erb
└── workflows/
├── build-tokens.yml
├── package.yml
├── release-pull-request.yml
└── sync-tokens-to-figma.yml

Files Content:

================================================
FILE: README.md
================================================

# Serendie Design Token

[![GitHub](https://img.shields.io/github/license/serendie/design-token?style=flat)](https://github.com/serendie/design-token/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/%40serendie%2Fdesign-token)](https://www.npmjs.com/package/@serendie/design-token)

[デザイントークン](https://serendie.design/foundations/design-tokens/)は Serendie Design System を構成する最小単位です。コードベースとデザイン(Figma)でデザイントークンを共有することで、**Single Source of Truth**を実現することを念頭において設計されています。

## 使い方

デザイントークン(`@serendie/design-token`)は、[Serendie UI](https://github.com/serendie/serendie)(`@serendie/ui`)に同梱されますが、単独で使用することもできます。単独で使用する場合は、HTML/CSS 環境など React 以外でも使用できます。
最もシンプルな使い方を紹介します。

### インストール

```
npm install @serendie/design-token
```

### CSS Variables として使う

```css
@import "@serendie/design-token/tokens.css";

h1 {
  font-size: var(--sd-reference-typography-scale-expanded-large);
  color: var(--sd-system-color-impression-primary);
}
```

### テーマ切り替え

Serendie Design System には 5 つのカラーテーマがあり、デザイントークンもそれに対応します。html タグなどに、`data-panda-theme`属性 (`konjo`, `asagi`, `sumire`, `tsutusji`, `kurikawa`)を付与することで、CSS 環境であってもテーマを切り替えることができます。
各テーマについては[こちら](https://serendie.design/foundations/theming/)を参照してください。

```html
<html data-panda-theme="asagi"></html>
```

## ドキュメント

デザイントークンの設計思想は[ドキュメントサイト](https://serendie.design/foundations/design-tokens/)を参照してください。提供するリファレンストークンおよびシステムトークンの[一覧](https://serendie.design/foundations/design-tokens/reference-tokens/)もあります。

また[カラーロール](https://serendie.design/foundations/color/role/)や[タイポグラフィロール](https://serendie.design/foundations/typography/#section-4)といった、デザイントークンの役割についても解説しています。デザイントークンをベースに独自の UI コンポーネントを作る際に参照してください。

## 仕様

デザイントークンはリファレンストークンとシステムトークンの 2 種類で構成され、[W3C Design Token Format Module](https://design-tokens.github.io/community-group/format/)の仕様に沿って JSON 形式で定義します。`/tokens`に置かれた JSON ファイルをビルドした後、Serendie UI や Figma Variables に展開します。

> [!IMPORTANT]
> W3C Design Token Format Module ではテーマの扱いがまだ定まっていません。そのため次のような独自の命名規則を採用し、Figma Variables との整合性を考慮しています。
> ここでテーマとは、カラーテーマの変化や、ブラウザ幅によるフォントサイズの変化など、コンテキスト毎のデザイントークンセットを指します。
> また Figma Variables ではテーマを、Varialbe モードと呼びます。

**命名規則**

- `typography.compact.json`や`color.konjo.json`のように 2 重拡張子でテーマ名を表現する
  - 単一テーマの場合は、`.default.json`とする
- 1 つの JSON ファイルが、Figma Variables 上で 1 つの Variable モードとして展開される
  - `.default.json`は、Figma Variables のデフォルトモードとして扱う

## ビルド

[`@serendie/style-dictionary-formatter`](https://github.com/serendie/style-dictionary-formatter/tree/main)によってデザイントークンの JSON ファイルを各プラットフォームに合わせて加工します。成果物は `/dist` に配置され、Serendie UI から利用されます。

```
npm run build
```

## Figma Variables との同期

[`@serendie/figma-utils`](https://github.com/serendie/figma-utils)によって、デザイントークン JSON ファイルを Figma Vairables に同期します。

```
npm run sync-json-to-figma
```

なお、`/tokens`に変更が入ると GitHub Actions にて[自動で実行](https://github.com/serendie/design-token/blob/main/.github/workflows/sync-tokens-to-figma.yml)されます。

> [!WARNING]
> この仕組みは三菱電機社内向けです。Figma REST API を利用しており、Figma のエンタープライズプラン契約が必要になります。

================================================
FILE: buildTokens.ts
================================================
import StyleDictionary from "style-dictionary-utils";
import {
registerAll,
customFileHeader,
} from "@serendie/style-dictionary-formatter";

registerAll(StyleDictionary);

StyleDictionary.extend({
source: ["tokens/**/*.json"],
platforms: {
css: {
buildPath: "dist/",
transforms: [
"attribute/cti",
"name/cti/kebab",
"color/css",
"serendie/cssShadow",
"serendie/cssTypography",
"serendie/robotoToInherit",
],
options: {
fileHeader: customFileHeader,
},
files: [
{
destination: "tokens.css",
format: "serendie/cssWithTheme",
},
],
},
js: {
buildPath: "dist/",
options: {
fileHeader: customFileHeader,
},
transforms: [
"attribute/cti",
"name/cti/camel",
"time/seconds",
"content/icon",
"color/css",
"serendie/robotoToInherit",
],
files: [
{
destination: "tokens.js",
format: "serendie/jsModule",
},
{
destination: "tokens.d.ts",
format: "serendie/jsModuleDeclarations",
},
{
destination: "panda-tokens.js",
format: "serendie/pandaToken",
},
{
destination: "panda-tokens.d.ts",
format: "serendie/pandaTokenDeclarations",
},
{
destination: "token-list.js",
format: "serendie/tokenList",
},
{
destination: "token-list.d.ts",
format: "serendie/tokenListDeclarations",
},
],
},
},
}).buildAllPlatforms();

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
"name": "@serendie/design-token",
"description": "Design tokens as part of Serendie Design System by Mitsubishi Electric",
"license": "MIT",
"version": "1.1.1",
"type": "module",
"scripts": {
"build": "tsx buildTokens.ts",
"sync-json-to-figma": "sync-to-figma",
"ci:sync-json-to-figma": "sync-to-figma --silent",
"release": "release-it"
},
"devDependencies": {
"@serendie/style-dictionary-formatter": "^1.0.0",
"release-it": "^17.11.0",
"style-dictionary": "^3.9.2",
"style-dictionary-utils": "^2.0.7"
},
"dependencies": {
"@serendie/figma-utils": "^0.0.3",
"tsx": "^4.7.2",
"typescript": "^5.5.3"
},
"exports": {
".": {
"import": "./dist/tokens.js",
"types": "./dist/tokens.d.ts"
},
"./panda": {
"import": "./dist/panda-tokens.js",
"types": "./dist/panda-tokens.d.ts"
},
"./token-list": {
"import": "./dist/token-list.js",
"types": "./dist/token-list.d.ts"
},
"./tokens.css": "./dist/tokens.css"
},
"files": [
"dist"
]
}

================================================
FILE: tsconfig.json
================================================
{
"compilerOptions": {
"module": "ESNext",
"target": "ES2020",
"sourceMap": true,
"moduleResolution": "bundler",
"forceConsistentCasingInFileNames": true,
"noImplicitReturns": true,
"noUnusedLocals": true,
"strict": true,
"noFallthroughCasesInSwitch": true,
"allowSyntheticDefaultImports": true,
"esModuleInterop": true,
"noUnusedParameters": true,
"noEmitOnError": true,
"removeComments": true,
"skipLibCheck": true
},
"exclude": ["node_modules"]
}

================================================
FILE: .env.example
================================================
PERSONAL_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxx
FILE_KEY=xxxxxxxxxxxxxxxxxxx

================================================
FILE: .npmrc.example
================================================
//registry.npmjs.org/:\_authToken=${NPM_TOKEN}

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
FILE: tokens/reference/color.default.json
================================================
{
"sd": {
"reference": {
"color": {
"scale": {
"white": {
"1000": {
"$value": "#FFFFFF",
              "$type": "color"
}
},
"black": {
"1000": {
"$value": "#000000",
              "$type": "color"
}
},
"transparency": {
"bl2": {
"$value": "#00000005",
              "$type": "color"
},
"bl5": {
"$value": "#0000000D",
              "$type": "color"
},
"bl20": {
"$value": "#00000033",
              "$type": "color"
},
"wh60": {
"$value": "#FFFFFF99",
              "$type": "color"
}
},
"gray": {
"100": {
"$value": "#EFEEEB",
              "$type": "color"
},
"200": {
"$value": "#D9D8D3",
              "$type": "color"
},
"300": {
"$value": "#C8C7C2",
              "$type": "color"
},
"400": {
"$value": "#AFAEAA",
              "$type": "color"
},
"500": {
"$value": "#8C8B87",
              "$type": "color"
},
"600": {
"$value": "#696966",
              "$type": "color"
},
"700": {
"$value": "#525250",
              "$type": "color"
},
"800": {
"$value": "#3F3F3D",
              "$type": "color"
},
"900": {
"$value": "#31312F",
              "$type": "color"
},
"1000": {
"$value": "#232322",
              "$type": "color"
}
},
"red": {
"100": {
"$value": "#FCEBEA",
              "$type": "color"
},
"200": {
"$value": "#FCD6D3",
              "$type": "color"
},
"300": {
"$value": "#FDB9B4",
              "$type": "color"
},
"400": {
"$value": "#FF8F8F",
              "$type": "color"
},
"500": {
"$value": "#F84258",
              "$type": "color"
},
"600": {
"$value": "#CE0037",
              "$type": "color"
},
"700": {
"$value": "#A4002A",
              "$type": "color"
},
"800": {
"$value": "#81001F",
              "$type": "color"
},
"900": {
"$value": "#650417",
              "$type": "color"
},
"1000": {
"$value": "#49060E",
              "$type": "color"
}
},
"chestnut": {
"100": {
"$value": "#FAECE6",
              "$type": "color"
},
"200": {
"$value": "#F7D8C9",
              "$type": "color"
},
"300": {
"$value": "#F7C6B0",
              "$type": "color"
},
"400": {
"$value": "#F49567",
              "$type": "color"
},
"500": {
"$value": "#E26324",
              "$type": "color"
},
"600": {
"$value": "#AB4919",
              "$type": "color"
},
"700": {
"$value": "#803510",
              "$type": "color"
},
"800": {
"$value": "#692C0D",
              "$type": "color"
},
"900": {
"$value": "#50230D",
              "$type": "color"
},
"1000": {
"$value": "#371B0B",
              "$type": "color"
}
},
"beige": {
"100": {
"$value": "#F7EDE2",
              "$type": "color"
},
"200": {
"$value": "#F2DBC0",
              "$type": "color"
},
"300": {
"$value": "#EDC18A",
              "$type": "color"
},
"400": {
"$value": "#DAA358",
              "$type": "color"
},
"500": {
"$value": "#AF8245",
              "$type": "color"
},
"600": {
"$value": "#846132",
              "$type": "color"
},
"700": {
"$value": "#684C26",
              "$type": "color"
},
"800": {
"$value": "#503A1C",
              "$type": "color"
},
"900": {
"$value": "#3E2D17",
              "$type": "color"
},
"1000": {
"$value": "#2B2013",
              "$type": "color"
}
},
"yellow": {
"100": {
"$value": "#FEEDBE",
              "$type": "color"
},
"200": {
"$value": "#FFE885",
              "$type": "color"
},
"300": {
"$value": "#EFD616",
              "$type": "color"
},
"400": {
"$value": "#D8BF00",
              "$type": "color"
},
"500": {
"$value": "#AC9301",
              "$type": "color"
},
"600": {
"$value": "#857100",
              "$type": "color"
},
"700": {
"$value": "#5F5100",
              "$type": "color"
},
"800": {
"$value": "#4A3E00",
              "$type": "color"
},
"900": {
"$value": "#3A3000",
              "$type": "color"
},
"1000": {
"$value": "#292200",
              "$type": "color"
}
},
"green": {
"100": {
"$value": "#CAF9E6",
              "$type": "color"
},
"200": {
"$value": "#B1EAD7",
              "$type": "color"
},
"300": {
"$value": "#98E1C8",
              "$type": "color"
},
"400": {
"$value": "#6ED0AE",
              "$type": "color"
},
"500": {
"$value": "#40A683",
              "$type": "color"
},
"600": {
"$value": "#2C755C",
              "$type": "color"
},
"700": {
"$value": "#266751",
              "$type": "color"
},
"800": {
"$value": "#184737",
              "$type": "color"
},
"900": {
"$value": "#12372B",
              "$type": "color"
},
"1000": {
"$value": "#0D271E",
              "$type": "color"
}
},
"skyBlue": {
"100": {
"$value": "#D9F6FC",
              "$type": "color"
},
"200": {
"$value": "#C3EFF4",
              "$type": "color"
},
"300": {
"$value": "#9CE6EC",
              "$type": "color"
},
"400": {
"$value": "#64CCD3",
              "$type": "color"
},
"500": {
"$value": "#00A3AF",
              "$type": "color"
},
"600": {
"$value": "#00757E",
              "$type": "color"
},
"700": {
"$value": "#015C63",
              "$type": "color"
},
"800": {
"$value": "#01474C",
              "$type": "color"
},
"900": {
"$value": "#02373C",
              "$type": "color"
},
"1000": {
"$value": "#04272A",
              "$type": "color"
}
},
"blue": {
"100": {
"$value": "#EFF2FC",
              "$type": "color"
},
"200": {
"$value": "#D7DEFB",
              "$type": "color"
},
"300": {
"$value": "#BFCEFC",
              "$type": "color"
},
"400": {
"$value": "#8FAEFE",
              "$type": "color"
},
"500": {
"$value": "#428CFE",
              "$type": "color"
},
"600": {
"$value": "#0A69CF",
              "$type": "color"
},
"700": {
"$value": "#0650A0",
              "$type": "color"
},
"800": {
"$value": "#043F81",
              "$type": "color"
},
"900": {
"$value": "#073165",
              "$type": "color"
},
"1000": {
"$value": "#081E3F",
              "$type": "color"
}
},
"purple": {
"100": {
"$value": "#F4ECF6",
              "$type": "color"
},
"200": {
"$value": "#EADAEE",
              "$type": "color"
},
"300": {
"$value": "#DCBDE4",
              "$type": "color"
},
"400": {
"$value": "#CC9FD9",
              "$type": "color"
},
"500": {
"$value": "#AA61C2",
              "$type": "color"
},
"600": {
"$value": "#914DA9",
              "$type": "color"
},
"700": {
"$value": "#733B85",
              "$type": "color"
},
"800": {
"$value": "#592D68",
              "$type": "color"
},
"900": {
"$value": "#462352",
              "$type": "color"
},
"1000": {
"$value": "#32183A",
              "$type": "color"
}
},
"pink": {
"100": {
"$value": "#F9EBF0",
              "$type": "color"
},
"200": {
"$value": "#F6D7E0",
              "$type": "color"
},
"300": {
"$value": "#F5C1D1",
              "$type": "color"
},
"400": {
"$value": "#F190B4",
              "$type": "color"
},
"500": {
"$value": "#EB4F8E",
              "$type": "color"
},
"600": {
"$value": "#B9336B",
              "$type": "color"
},
"700": {
"$value": "#932653",
              "$type": "color"
},
"800": {
"$value": "#711D41",
              "$type": "color"
},
"900": {
"$value": "#591734",
              "$type": "color"
},
"1000": {
"$value": "#401026",
              "$type": "color"
}
}
}
}
}
}
}

================================================
FILE: tokens/reference/dimension.default.json
================================================
{
"sd": {
"reference": {
"dimension": {
"scale": {
"0": {
"$value": "0px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          },
          "1": {
            "$value": "1px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"2": {
"$value": "2px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          },
          "3": {
            "$value": "4px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"4": {
"$value": "8px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          },
          "5": {
            "$value": "12px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"6": {
"$value": "16px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          },
          "7": {
            "$value": "20px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"8": {
"$value": "24px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          },
          "9": {
            "$value": "28px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"10": {
"$value": "32px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          },
          "11": {
            "$value": "36px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"12": {
"$value": "40px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          },
          "13": {
            "$value": "48px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"14": {
"$value": "56px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          },
          "15": {
            "$value": "64px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"16": {
"$value": "72px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          },
          "17": {
            "$value": "80px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"18": {
"$value": "96px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          }
        },
        "breakpoint": {
          "small": {
            "$value": "640px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"medium": {
"$value": "768px",
            "$type": "dimension",
"$extensions": {
              "com.figma": {
                "scopes": []
              }
            }
          },
          "large": {
            "$value": "1024px",
"$type": "dimension",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"extraLarge": {
"$value": "1280px",
            "$type": "dimension",
"$extensions": {
"com.figma": {
"scopes": []
}
}
}
}
}
}
}
}

================================================
FILE: tokens/reference/elevation.default.json
================================================
{
"sd": {
"reference": {
"elevation": {
"opacity": {
"scale": {
"0": {
"$value": 0,
              "$type": "number"
},
"1": {
"$value": 0.1,
              "$type": "number"
},
"2": {
"$value": 0.2,
              "$type": "number"
},
"3": {
"$value": 0.3,
              "$type": "number"
},
"4": {
"$value": 0.4,
              "$type": "number"
},
"5": {
"$value": 0.5,
              "$type": "number"
},
"6": {
"$value": 0.6,
              "$type": "number"
},
"7": {
"$value": 0.7,
              "$type": "number"
},
"8": {
"$value": 0.8,
              "$type": "number"
},
"9": {
"$value": 0.9,
              "$type": "number"
},
"10": {
"$value": 1.0,
              "$type": "number"
}
}
}
}
}
}
}

================================================
FILE: tokens/reference/typography.default.json
================================================
{
"sd": {
"reference": {
"typography": {
"fontFamily": {
"primary": {
"$value": "Roboto",
            "$type": "fontFamily",
"$description": "Serendieは和文Noto Sans JP、欧文Robotoを採用しています。Figmaは和欧混植に対応していないため、Robotoのみ指定することで、和文はFigmaのフォントフォールバックによりNoto Sans JPが自動適用されることを意図しています。これにより実質的な混植を行います。CSSでは一般的なfont-family指定により混植します。",
            "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_FAMILY"]
}
}
},
"monospace": {
"$value": "Noto Sans Mono",
            "$type": "fontFamily",
"$extensions": {
              "com.figma": {
                "hiddenFromPublishing": true,
                "scopes": ["FONT_FAMILY"]
              }
            }
          }
        },
        "fontWeight": {
          "regular": {
            "$value": 400,
"$type": "fontWeight",
            "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_WEIGHT"]
}
}
},
"bold": {
"$value": 700,
            "$type": "fontWeight",
"$extensions": {
              "com.figma": {
                "hiddenFromPublishing": true,
                "scopes": ["FONT_WEIGHT"]
              }
            }
          }
        },
        "lineHeight": {
          "none": {
            "$value": 1,
"$type": "number",
            "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["LINE_HEIGHT"]
}
}
},
"tight": {
"$value": 1.4,
            "$type": "number",
"$extensions": {
              "com.figma": {
                "hiddenFromPublishing": true,
                "scopes": ["LINE_HEIGHT"]
              }
            }
          },
          "normal": {
            "$value": 1.6,
"$type": "number",
            "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["LINE_HEIGHT"]
}
}
},
"relaxed": {
"$value": 1.8,
            "$type": "number",
"$extensions": {
              "com.figma": {
                "hiddenFromPublishing": true,
                "scopes": ["LINE_HEIGHT"]
              }
            }
          }
        },
        "scale": {
          "expanded": {
            "fourExtraSmall": {
              "$value": "10px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"threeExtraSmall": {
"$value": "11px",
              "$type": "dimension",
"$extensions": {
                "com.figma": {
                  "hiddenFromPublishing": true,
                  "scopes": ["FONT_SIZE"]
                }
              }
            },
            "twoExtraSmall": {
              "$value": "12px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"extraSmall": {
"$value": "13px",
              "$type": "dimension",
"$extensions": {
                "com.figma": {
                  "hiddenFromPublishing": true,
                  "scopes": ["FONT_SIZE"]
                }
              }
            },
            "small": {
              "$value": "14px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"medium": {
"$value": "16px",
              "$type": "dimension",
"$extensions": {
                "com.figma": {
                  "hiddenFromPublishing": true,
                  "scopes": ["FONT_SIZE"]
                }
              }
            },
            "large": {
              "$value": "18px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"extraLarge": {
"$value": "21px",
              "$type": "dimension",
"$extensions": {
                "com.figma": {
                  "hiddenFromPublishing": true,
                  "scopes": ["FONT_SIZE"]
                }
              }
            },
            "twoExtraLarge": {
              "$value": "26px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"threeExtraLarge": {
"$value": "32px",
              "$type": "dimension",
"$extensions": {
                "com.figma": {
                  "hiddenFromPublishing": true,
                  "scopes": ["FONT_SIZE"]
                }
              }
            },
            "fourExtraLarge": {
              "$value": "43px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"fiveExtraLarge": {
"$value": "64px",
              "$type": "dimension",
"$extensions": {
                "com.figma": {
                  "hiddenFromPublishing": true,
                  "scopes": ["FONT_SIZE"]
                }
              }
            }
          },
          "compact": {
            "twoExtraSmall": {
              "$value": "10px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"extraSmall": {
"$value": "11px",
              "$type": "dimension",
"$extensions": {
                "com.figma": {
                  "hiddenFromPublishing": true,
                  "scopes": ["FONT_SIZE"]
                }
              }
            },
            "small": {
              "$value": "12px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"medium": {
"$value": "14px",
              "$type": "dimension",
"$extensions": {
                "com.figma": {
                  "hiddenFromPublishing": true,
                  "scopes": ["FONT_SIZE"]
                }
              }
            },
            "large": {
              "$value": "16px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"extraLarge": {
"$value": "19px",
              "$type": "dimension",
"$extensions": {
                "com.figma": {
                  "hiddenFromPublishing": true,
                  "scopes": ["FONT_SIZE"]
                }
              }
            },
            "twoExtraLarge": {
              "$value": "22px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"threeExtraLarge": {
"$value": "28px",
              "$type": "dimension",
"$extensions": {
                "com.figma": {
                  "hiddenFromPublishing": true,
                  "scopes": ["FONT_SIZE"]
                }
              }
            },
            "fourExtraLarge": {
              "$value": "37px",
"$type": "dimension",
              "$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
},
"fiveExtraLarge": {
"$value": "56px",
              "$type": "dimension",
"$extensions": {
"com.figma": {
"hiddenFromPublishing": true,
"scopes": ["FONT_SIZE"]
}
}
}
}
}
}
}
}
}

================================================
FILE: tokens/system/color.asagi.json
================================================
{
"sd": {
"system": {
"color": {
"impression": {
"primary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.skyBlue.600}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.primary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onPrimary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPrimary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"primaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.skyBlue.600}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.primaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPrimaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPrimaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"secondary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.200}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.secondary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onSecondary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onSecondary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"secondaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.200}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.secondaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onSecondaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onSecondaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"tertiary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.tertiary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onTertiary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onTertiary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"tertiaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.tertiaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onTertiaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onTertiaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"notice": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.notice'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onNotice": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNotice'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"noticeContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.noticeContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNoticeContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNoticeContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"noticeContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.noticeContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNoticeContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNoticeContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"negative": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.600}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negative'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onNegative": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegative'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"negativeContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.200}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negativeContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNegativeContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegativeContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"negativeContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negativeContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNegativeContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.red.600}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegativeContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"positive": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positive'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onPositive": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositive'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"positiveContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positiveContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPositiveContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositiveContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"positiveContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positiveContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPositiveContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositiveContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
}
},
"component": {
"surface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.white.1000}",
"$description": "bodyの背景色などサイトのベースカラー",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.surface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"onSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.black.1000}",
"$description": "surface色を地にしたオブジェクト色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.onSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"onSurfaceVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.600}",
"$description": "プレイスホルダーやサブテキストなどonSurfaceに強弱をつける際に利用",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.onSurfaceVariant'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"inverseSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.1000}",
"$description": "toastやtooltipなどに使用するsurfaceの反対色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inverseSurface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"inverseOnSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.white.1000}",
"$description": "surfaceの反対色を地にしたオブジェクト色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inverseOnSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"inversePrimary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.skyBlue.100}",
"$description": "inverseSurface上でのtint colorとして使う",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inversePrimary'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"outline": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.300}",
"$description": "ボタンやフォームなどのアウトライン色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.outline'"
},
"scopes": ["STROKE_COLOR"]
}
}
},
"outlineVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.component.outlineVariant'"
                },
                "scopes": ["STROKE_COLOR"]
              }
            }
          },
          "scrim": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl20}",
            "$description": "modal や drawer の背景色として使用する色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.component.scrim'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          }
        },
        "interaction": {
          "disabled": {
            "$type": "color",
"$value": "{sd.reference.color.scale.gray.100}",
            "$description": "disabled 状態のオブジェクト色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.disabled'"
                },
                "scopes": ["ALL_FILLS"]
              }
            }
          },
          "disabledOnSurface": {
            "$type": "color",
"$value": "{sd.reference.color.scale.gray.400}",
            "$description": "onSurface 色を disabled 状態にするときに使用",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.disabledOnSurface'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "selected": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl2}",
            "$description": "オブジェクトに重ね合わせて selected 状態にする",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.selected'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "selectedSurface": {
            "$type": "color",
"$value": "{sd.reference.color.scale.green.200}",
            "$description": "surface 色を selected 状態にするときに使用 (ListItem など)",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.selectedSurface'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "hovered": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl20}",
            "$description": "hover 状態のオブジェクトに重ねわせる半透明色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.hovered'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "hoveredVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl5}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.interaction.hoveredVariant'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"hoveredOnPrimary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.transparency.wh60}",
"$description": "primaryなど有彩色を使用したhover状態のオブジェクトに重ね合わせる半透明色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.interaction.hoveredOnPrimary'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"chart": {
"mark": {
"primary": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.skyBlue.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.skyBlue.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.skyBlue.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.skyBlue.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.skyBlue.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.skyBlue.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"positive": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"negative": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"notice": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"multi": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.blue.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.400}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.purple.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.chestnut.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.skyBlue.400}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"07": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.07'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "08": {
                "$type": "color",
"$value": "{sd.reference.color.scale.chestnut.600}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.08'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"09": {
"$type": "color",
                "$value": "{sd.reference.color.scale.pink.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.09'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "10": {
                "$type": "color",
"$value": "{sd.reference.color.scale.beige.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.10'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
}
},
"component": {
"onMarkLabel": {
"$type": "color",
              "$value": "{sd.reference.color.scale.black.1000}",
"$description": "mark上に重ね合わせる値のテキスト色。ガイドラインを参照しつつinverseOnMarkLabelと使い分ける",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.onMarkLabel'"
},
"scopes": ["TEXT_FILL"]
}
}
},
"inverseOnMarkLabel": {
"$type": "color",
              "$value": "{sd.reference.color.scale.white.1000}",
"$description": "mark上に重ね合わせる値のテキスト色。ガイドラインを参照しつつonMarkLabelと使い分ける",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.inverseOnMarkLabel'"
},
"scopes": ["TEXT_FILL"]
}
}
},
"scalemark": {
"$type": "color",
              "$value": "{sd.reference.color.scale.gray.200}",
"$description": "チャートの目盛り罫線に使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.scalemark'"
},
"scopes": ["STROKE_COLOR"]
}
}
},
"threshold": {
"$type": "color",
              "$value": "{sd.reference.color.scale.skyBlue.500}",
"$description": "目標値や閾値を示す罫線やラベルに使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.threshold'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"chartSurface": {
"$type": "color",
              "$value": "{sd.reference.color.scale.white.1000}",
"$description": "チャートの背景色",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.chartSurface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"onChartSurface": {
"$type": "color",
              "$value": "{sd.reference.color.scale.gray.600}",
"$description": "チャート上のテキスト色。凡例や軸ラベルなどに使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.onChartSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
}
}
}
}
}
}
}

================================================
FILE: tokens/system/color.konjo.json
================================================
{
"sd": {
"system": {
"color": {
"impression": {
"primary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.blue.700}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.primary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onPrimary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPrimary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"primaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.blue.700}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.primaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPrimaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPrimaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"secondary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.blue.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.secondary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onSecondary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onSecondary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"secondaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.blue.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.secondaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onSecondaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onSecondaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"tertiary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.blue.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.tertiary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onTertiary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onTertiary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"tertiaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.blue.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.tertiaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onTertiaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onTertiaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"notice": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.notice'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onNotice": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNotice'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"noticeContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.noticeContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNoticeContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNoticeContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"noticeContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.noticeContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNoticeContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNoticeContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"negative": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.600}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negative'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onNegative": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegative'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"negativeContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.200}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negativeContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNegativeContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegativeContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"negativeContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negativeContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNegativeContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.red.600}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegativeContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"positive": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positive'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onPositive": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositive'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"positiveContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positiveContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPositiveContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositiveContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"positiveContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positiveContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPositiveContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositiveContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
}
},
"component": {
"surface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.white.1000}",
"$description": "bodyの背景色などサイトのベースカラー",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.surface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"onSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.black.1000}",
"$description": "surface色を地にしたオブジェクト色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.onSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"onSurfaceVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.600}",
"$description": "プレイスホルダーやサブテキストなどonSurfaceに強弱をつける際に利用",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.onSurfaceVariant'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"inverseSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.1000}",
"$description": "toastやtooltipなどに使用するsurfaceの反対色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inverseSurface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"inverseOnSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.white.1000}",
"$description": "surfaceの反対色を地にしたオブジェクト色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inverseOnSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"inversePrimary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.blue.100}",
"$description": "inverseSurface上でのtint colorとして使う",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inversePrimary'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"outline": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.300}",
"$description": "ボタンやフォームなどのアウトライン色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.outline'"
},
"scopes": ["STROKE_COLOR"]
}
}
},
"outlineVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.component.outlineVariant'"
                },
                "scopes": ["STROKE_COLOR"]
              }
            }
          },
          "scrim": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl20}",
            "$description": "modal や drawer の背景色として使用する色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.component.scrim'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          }
        },
        "interaction": {
          "disabled": {
            "$type": "color",
"$value": "{sd.reference.color.scale.gray.100}",
            "$description": "disabled 状態のオブジェクト色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.disabled'"
                },
                "scopes": ["ALL_FILLS"]
              }
            }
          },
          "disabledOnSurface": {
            "$type": "color",
"$value": "{sd.reference.color.scale.gray.400}",
            "$description": "onSurface 色を disabled 状態にするときに使用",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.disabledOnSurface'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "selected": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl2}",
            "$description": "オブジェクトに重ね合わせて selected 状態にする",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.selected'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "selectedSurface": {
            "$type": "color",
"$value": "{sd.reference.color.scale.blue.300}",
            "$description": "surface 色を selected 状態にするときに使用 (ListItem など)",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.selectedSurface'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "hovered": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl20}",
            "$description": "hover 状態のオブジェクトに重ねわせる半透明色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.hovered'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "hoveredVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl5}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.interaction.hoveredVariant'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"hoveredOnPrimary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.transparency.wh60}",
"$description": "primaryなど有彩色を使用したhover状態のオブジェクトに重ね合わせる半透明色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.interaction.hoveredOnPrimary'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"chart": {
"mark": {
"primary": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.blue.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.blue.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.blue.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.blue.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.blue.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.blue.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"positive": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"negative": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"notice": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"multi": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.blue.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.400}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.purple.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.chestnut.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.skyBlue.400}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"07": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.07'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "08": {
                "$type": "color",
"$value": "{sd.reference.color.scale.chestnut.600}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.08'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"09": {
"$type": "color",
                "$value": "{sd.reference.color.scale.pink.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.09'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "10": {
                "$type": "color",
"$value": "{sd.reference.color.scale.beige.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.10'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
}
},
"component": {
"onMarkLabel": {
"$type": "color",
              "$value": "{sd.reference.color.scale.black.1000}",
"$description": "mark上に重ね合わせる値のテキスト色。ガイドラインを参照しつつinverseOnMarkLabelと使い分ける",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.onMarkLabel'"
},
"scopes": ["TEXT_FILL"]
}
}
},
"inverseOnMarkLabel": {
"$type": "color",
              "$value": "{sd.reference.color.scale.white.1000}",
"$description": "mark上に重ね合わせる値のテキスト色。ガイドラインを参照しつつonMarkLabelと使い分ける",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.inverseOnMarkLabel'"
},
"scopes": ["TEXT_FILL"]
}
}
},
"scalemark": {
"$type": "color",
              "$value": "{sd.reference.color.scale.gray.200}",
"$description": "チャートの目盛り罫線に使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.scalemark'"
},
"scopes": ["STROKE_COLOR"]
}
}
},
"threshold": {
"$type": "color",
              "$value": "{sd.reference.color.scale.blue.500}",
"$description": "目標値や閾値を示す罫線やラベルに使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.threshold'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"chartSurface": {
"$type": "color",
              "$value": "{sd.reference.color.scale.white.1000}",
"$description": "チャートの背景色",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.chartSurface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"onChartSurface": {
"$type": "color",
              "$value": "{sd.reference.color.scale.gray.600}",
"$description": "チャート上のテキスト色。凡例や軸ラベルなどに使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.onChartSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
}
}
}
}
}
}
}

================================================
FILE: tokens/system/color.kurikawa.json
================================================
{
"sd": {
"system": {
"color": {
"impression": {
"primary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.chestnut.700}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.primary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onPrimary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPrimary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"primaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.chestnut.700}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.primaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPrimaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPrimaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"secondary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.chestnut.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.secondary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onSecondary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onSecondary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"secondaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.chestnut.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.secondaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onSecondaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onSecondaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"tertiary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.beige.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.tertiary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onTertiary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onTertiary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"tertiaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.beige.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.tertiaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onTertiaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onTertiaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"notice": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.notice'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onNotice": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNotice'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"noticeContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.noticeContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNoticeContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNoticeContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"noticeContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.noticeContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNoticeContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNoticeContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"negative": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.600}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negative'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onNegative": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegative'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"negativeContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.200}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negativeContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNegativeContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegativeContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"negativeContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negativeContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNegativeContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.red.600}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegativeContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"positive": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positive'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onPositive": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositive'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"positiveContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positiveContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPositiveContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositiveContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"positiveContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positiveContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPositiveContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositiveContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
}
},
"component": {
"surface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.white.1000}",
"$description": "bodyの背景色などサイトのベースカラー",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.surface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"onSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.black.1000}",
"$description": "surface色を地にしたオブジェクト色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.onSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"onSurfaceVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.600}",
"$description": "プレイスホルダーやサブテキストなどonSurfaceに強弱をつける際に利用",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.onSurfaceVariant'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"inverseSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.1000}",
"$description": "toastやtooltipなどに使用するsurfaceの反対色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inverseSurface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"inverseOnSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.white.1000}",
"$description": "surfaceの反対色を地にしたオブジェクト色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inverseOnSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"inversePrimary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.chestnut.100}",
"$description": "inverseSurface上でのtint colorとして使う",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inversePrimary'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"outline": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.300}",
"$description": "ボタンやフォームなどのアウトライン色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.outline'"
},
"scopes": ["STROKE_COLOR"]
}
}
},
"outlineVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.component.outlineVariant'"
                },
                "scopes": ["STROKE_COLOR"]
              }
            }
          },
          "scrim": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl20}",
            "$description": "modal や drawer の背景色として使用する色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.component.scrim'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          }
        },
        "interaction": {
          "disabled": {
            "$type": "color",
"$value": "{sd.reference.color.scale.gray.100}",
            "$description": "disabled 状態のオブジェクト色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.disabled'"
                },
                "scopes": ["ALL_FILLS"]
              }
            }
          },
          "disabledOnSurface": {
            "$type": "color",
"$value": "{sd.reference.color.scale.gray.400}",
            "$description": "onSurface 色を disabled 状態にするときに使用",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.disabledOnSurface'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "selected": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl2}",
            "$description": "オブジェクトに重ね合わせて selected 状態にする",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.selected'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "selectedSurface": {
            "$type": "color",
"$value": "{sd.reference.color.scale.chestnut.300}",
            "$description": "surface 色を selected 状態にするときに使用 (ListItem など)",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.selectedSurface'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "hovered": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl20}",
            "$description": "hover 状態のオブジェクトに重ねわせる半透明色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.hovered'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "hoveredVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl5}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.interaction.hoveredVariant'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"hoveredOnPrimary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.transparency.wh60}",
"$description": "primaryなど有彩色を使用したhover状態のオブジェクトに重ね合わせる半透明色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.interaction.hoveredOnPrimary'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"chart": {
"mark": {
"primary": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.chestnut.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.chestnut.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.chestnut.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.chestnut.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.chestnut.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.chestnut.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"positive": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"negative": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"notice": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"multi": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.blue.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.400}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.purple.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.chestnut.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.skyBlue.400}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"07": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.07'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "08": {
                "$type": "color",
"$value": "{sd.reference.color.scale.chestnut.600}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.08'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"09": {
"$type": "color",
                "$value": "{sd.reference.color.scale.pink.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.09'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "10": {
                "$type": "color",
"$value": "{sd.reference.color.scale.beige.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.10'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
}
},
"component": {
"onMarkLabel": {
"$type": "color",
              "$value": "{sd.reference.color.scale.black.1000}",
"$description": "mark上に重ね合わせる値のテキスト色。ガイドラインを参照しつつinverseOnMarkLabelと使い分ける",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.onMarkLabel'"
},
"scopes": ["TEXT_FILL"]
}
}
},
"inverseOnMarkLabel": {
"$type": "color",
              "$value": "{sd.reference.color.scale.white.1000}",
"$description": "mark上に重ね合わせる値のテキスト色。ガイドラインを参照しつつonMarkLabelと使い分ける",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.inverseOnMarkLabel'"
},
"scopes": ["TEXT_FILL"]
}
}
},
"scalemark": {
"$type": "color",
              "$value": "{sd.reference.color.scale.gray.200}",
"$description": "チャートの目盛り罫線に使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.scalemark'"
},
"scopes": ["STROKE_COLOR"]
}
}
},
"threshold": {
"$type": "color",
              "$value": "{sd.reference.color.scale.chestnut.500}",
"$description": "目標値や閾値を示す罫線やラベルに使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.threshold'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"chartSurface": {
"$type": "color",
              "$value": "{sd.reference.color.scale.white.1000}",
"$description": "チャートの背景色",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.chartSurface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"onChartSurface": {
"$type": "color",
              "$value": "{sd.reference.color.scale.gray.600}",
"$description": "チャート上のテキスト色。凡例や軸ラベルなどに使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.onChartSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
}
}
}
}
}
}
}

================================================
FILE: tokens/system/color.sumire.json
================================================
{
"sd": {
"system": {
"color": {
"impression": {
"primary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.purple.700}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.primary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onPrimary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPrimary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"primaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.purple.700}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.primaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPrimaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPrimaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"secondary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.purple.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.secondary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onSecondary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onSecondary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"secondaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.purple.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.secondaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onSecondaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onSecondaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"tertiary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.blue.900}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.tertiary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onTertiary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onTertiary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"tertiaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.blue.900}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.tertiaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onTertiaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onTertiaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"notice": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.notice'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onNotice": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNotice'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"noticeContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.noticeContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNoticeContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNoticeContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"noticeContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.noticeContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNoticeContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNoticeContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"negative": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.600}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negative'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onNegative": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegative'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"negativeContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.200}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negativeContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNegativeContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegativeContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"negativeContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negativeContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNegativeContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.red.600}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegativeContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"positive": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positive'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onPositive": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositive'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"positiveContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positiveContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPositiveContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositiveContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"positiveContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positiveContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPositiveContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositiveContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
}
},
"component": {
"surface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.white.1000}",
"$description": "bodyの背景色などサイトのベースカラー",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.surface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"onSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.black.1000}",
"$description": "surface色を地にしたオブジェクト色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.onSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"onSurfaceVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.600}",
"$description": "プレイスホルダーやサブテキストなどonSurfaceに強弱をつける際に利用",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.onSurfaceVariant'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"inverseSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.1000}",
"$description": "toastやtooltipなどに使用するsurfaceの反対色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inverseSurface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"inverseOnSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.white.1000}",
"$description": "surfaceの反対色を地にしたオブジェクト色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inverseOnSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"inversePrimary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.purple.100}",
"$description": "inverseSurface上でのtint colorとして使う",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inversePrimary'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"outline": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.300}",
"$description": "ボタンやフォームなどのアウトライン色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.outline'"
},
"scopes": ["STROKE_COLOR"]
}
}
},
"outlineVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.component.outlineVariant'"
                },
                "scopes": ["STROKE_COLOR"]
              }
            }
          },
          "scrim": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl20}",
            "$description": "modal や drawer の背景色として使用する色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.component.scrim'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          }
        },
        "interaction": {
          "disabled": {
            "$type": "color",
"$value": "{sd.reference.color.scale.gray.100}",
            "$description": "disabled 状態のオブジェクト色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.disabled'"
                },
                "scopes": ["ALL_FILLS"]
              }
            }
          },
          "disabledOnSurface": {
            "$type": "color",
"$value": "{sd.reference.color.scale.gray.400}",
            "$description": "onSurface 色を disabled 状態にするときに使用",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.disabledOnSurface'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "selected": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl2}",
            "$description": "オブジェクトに重ね合わせて selected 状態にする",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.selected'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "selectedSurface": {
            "$type": "color",
"$value": "{sd.reference.color.scale.purple.300}",
            "$description": "surface 色を selected 状態にするときに使用 (ListItem など)",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.selectedSurface'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "hovered": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl20}",
            "$description": "hover 状態のオブジェクトに重ねわせる半透明色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.hovered'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "hoveredVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl5}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.interaction.hoveredVariant'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"hoveredOnPrimary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.transparency.wh60}",
"$description": "primaryなど有彩色を使用したhover状態のオブジェクトに重ね合わせる半透明色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.interaction.hoveredOnPrimary'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"chart": {
"mark": {
"primary": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.purple.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.purple.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.purple.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.purple.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.purple.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.purple.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"positive": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"negative": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"notice": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"multi": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.blue.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.400}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.purple.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.chestnut.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.skyBlue.400}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"07": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.07'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "08": {
                "$type": "color",
"$value": "{sd.reference.color.scale.chestnut.600}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.08'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"09": {
"$type": "color",
                "$value": "{sd.reference.color.scale.pink.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.09'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "10": {
                "$type": "color",
"$value": "{sd.reference.color.scale.beige.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.10'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
}
},
"component": {
"onMarkLabel": {
"$type": "color",
              "$value": "{sd.reference.color.scale.black.1000}",
"$description": "mark上に重ね合わせる値のテキスト色。ガイドラインを参照しつつinverseOnMarkLabelと使い分ける",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.onMarkLabel'"
},
"scopes": ["TEXT_FILL"]
}
}
},
"inverseOnMarkLabel": {
"$type": "color",
              "$value": "{sd.reference.color.scale.white.1000}",
"$description": "mark上に重ね合わせる値のテキスト色。ガイドラインを参照しつつonMarkLabelと使い分ける",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.inverseOnMarkLabel'"
},
"scopes": ["TEXT_FILL"]
}
}
},
"scalemark": {
"$type": "color",
              "$value": "{sd.reference.color.scale.gray.200}",
"$description": "チャートの目盛り罫線に使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.scalemark'"
},
"scopes": ["STROKE_COLOR"]
}
}
},
"threshold": {
"$type": "color",
              "$value": "{sd.reference.color.scale.purple.500}",
"$description": "目標値や閾値を示す罫線やラベルに使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.threshold'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"chartSurface": {
"$type": "color",
              "$value": "{sd.reference.color.scale.white.1000}",
"$description": "チャートの背景色",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.chartSurface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"onChartSurface": {
"$type": "color",
              "$value": "{sd.reference.color.scale.gray.600}",
"$description": "チャート上のテキスト色。凡例や軸ラベルなどに使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.onChartSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
}
}
}
}
}
}
}

================================================
FILE: tokens/system/color.tsutsuji.json
================================================
{
"sd": {
"system": {
"color": {
"impression": {
"primary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.pink.600}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.primary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onPrimary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPrimary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"primaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.pink.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.primaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPrimaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPrimaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"secondary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.pink.200}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.secondary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onSecondary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onSecondary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"secondaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.pink.200}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.secondaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onSecondaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onSecondaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"tertiary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.pink.1000}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.tertiary'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onTertiary": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onTertiary'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"tertiaryContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.pink.1000}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.tertiaryContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onTertiaryContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onTertiaryContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"notice": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.notice'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onNotice": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNotice'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"noticeContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.300}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.noticeContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNoticeContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNoticeContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"noticeContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.yellow.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.noticeContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNoticeContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNoticeContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"negative": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.600}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negative'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onNegative": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegative'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"negativeContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.200}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negativeContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNegativeContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegativeContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"negativeContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.red.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.negativeContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onNegativeContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.red.600}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onNegativeContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"positive": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positive'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "onPositive": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositive'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"positiveContainer": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positiveContainer'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPositiveContainer": {
            "$type": "color",
"$value": "{sd.reference.color.scale.white.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositiveContainer'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"positiveContainerVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.green.100}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.impression.positiveContainerVariant'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          },
          "onPositiveContainerVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.black.1000}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.impression.onPositiveContainerVariant'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
}
},
"component": {
"surface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.white.1000}",
"$description": "bodyの背景色などサイトのベースカラー",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.surface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"onSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.black.1000}",
"$description": "surface色を地にしたオブジェクト色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.onSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"onSurfaceVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.600}",
"$description": "プレイスホルダーやサブテキストなどonSurfaceに強弱をつける際に利用",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.onSurfaceVariant'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"inverseSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.1000}",
"$description": "toastやtooltipなどに使用するsurfaceの反対色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inverseSurface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"inverseOnSurface": {
"$type": "color",
            "$value": "{sd.reference.color.scale.white.1000}",
"$description": "surfaceの反対色を地にしたオブジェクト色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inverseOnSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
},
"inversePrimary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.pink.100}",
"$description": "inverseSurface上でのtint colorとして使う",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.inversePrimary'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"outline": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.300}",
"$description": "ボタンやフォームなどのアウトライン色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.component.outline'"
},
"scopes": ["STROKE_COLOR"]
}
}
},
"outlineVariant": {
"$type": "color",
            "$value": "{sd.reference.color.scale.gray.500}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.component.outlineVariant'"
                },
                "scopes": ["STROKE_COLOR"]
              }
            }
          },
          "scrim": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl20}",
            "$description": "modal や drawer の背景色として使用する色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.component.scrim'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL"]
              }
            }
          }
        },
        "interaction": {
          "disabled": {
            "$type": "color",
"$value": "{sd.reference.color.scale.gray.100}",
            "$description": "disabled 状態のオブジェクト色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.disabled'"
                },
                "scopes": ["ALL_FILLS"]
              }
            }
          },
          "disabledOnSurface": {
            "$type": "color",
"$value": "{sd.reference.color.scale.gray.400}",
            "$description": "onSurface 色を disabled 状態にするときに使用",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.disabledOnSurface'"
                },
                "scopes": ["ALL_FILLS", "STROKE_COLOR"]
              }
            }
          },
          "selected": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl2}",
            "$description": "オブジェクトに重ね合わせて selected 状態にする",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.selected'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "selectedSurface": {
            "$type": "color",
"$value": "{sd.reference.color.scale.pink.100}",
            "$description": "surface 色を selected 状態にするときに使用 (ListItem など)",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.selectedSurface'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "hovered": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl20}",
            "$description": "hover 状態のオブジェクトに重ねわせる半透明色",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.color.interaction.hovered'"
                },
                "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
              }
            }
          },
          "hoveredVariant": {
            "$type": "color",
"$value": "{sd.reference.color.scale.transparency.bl5}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.interaction.hoveredVariant'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"hoveredOnPrimary": {
"$type": "color",
            "$value": "{sd.reference.color.scale.transparency.wh60}",
"$description": "primaryなど有彩色を使用したhover状態のオブジェクトに重ね合わせる半透明色",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.interaction.hoveredOnPrimary'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"chart": {
"mark": {
"primary": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.pink.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.pink.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.pink.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.pink.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.pink.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.primary.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.pink.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.primary.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"positive": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.green.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.positive.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.positive.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"negative": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.negative.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.red.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.negative.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"notice": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.300}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.notice.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.yellow.900}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.notice.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
},
"multi": {
"01": {
"$type": "color",
                "$value": "{sd.reference.color.scale.blue.600}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.01'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "02": {
                "$type": "color",
"$value": "{sd.reference.color.scale.green.400}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.02'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"03": {
"$type": "color",
                "$value": "{sd.reference.color.scale.red.400}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.03'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "04": {
                "$type": "color",
"$value": "{sd.reference.color.scale.purple.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.04'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"05": {
"$type": "color",
                "$value": "{sd.reference.color.scale.chestnut.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.05'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "06": {
                "$type": "color",
"$value": "{sd.reference.color.scale.skyBlue.400}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.06'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"07": {
"$type": "color",
                "$value": "{sd.reference.color.scale.yellow.200}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.07'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "08": {
                "$type": "color",
"$value": "{sd.reference.color.scale.chestnut.600}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.08'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
},
"09": {
"$type": "color",
                "$value": "{sd.reference.color.scale.pink.700}",
"$extensions": {
                  "com.figma": {
                    "codeSyntax": {
                      "WEB": "'sd.system.color.chart.mark.multi.09'"
                    },
                    "scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
                  }
                }
              },
              "10": {
                "$type": "color",
"$value": "{sd.reference.color.scale.beige.500}",
                "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.mark.multi.10'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"]
}
}
}
}
},
"component": {
"onMarkLabel": {
"$type": "color",
              "$value": "{sd.reference.color.scale.black.1000}",
"$description": "mark上に重ね合わせる値のテキスト色。ガイドラインを参照しつつinverseOnMarkLabelと使い分ける",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.onMarkLabel'"
},
"scopes": ["TEXT_FILL"]
}
}
},
"inverseOnMarkLabel": {
"$type": "color",
              "$value": "{sd.reference.color.scale.white.1000}",
"$description": "mark上に重ね合わせる値のテキスト色。ガイドラインを参照しつつonMarkLabelと使い分ける",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.inverseOnMarkLabel'"
},
"scopes": ["TEXT_FILL"]
}
}
},
"scalemark": {
"$type": "color",
              "$value": "{sd.reference.color.scale.gray.200}",
"$description": "チャートの目盛り罫線に使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.scalemark'"
},
"scopes": ["STROKE_COLOR"]
}
}
},
"threshold": {
"$type": "color",
              "$value": "{sd.reference.color.scale.pink.500}",
"$description": "目標値や閾値を示す罫線やラベルに使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.threshold'"
},
"scopes": ["ALL_FILLS", "STROKE_COLOR"]
}
}
},
"chartSurface": {
"$type": "color",
              "$value": "{sd.reference.color.scale.white.1000}",
"$description": "チャートの背景色",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.chartSurface'"
},
"scopes": ["FRAME_FILL", "SHAPE_FILL"]
}
}
},
"onChartSurface": {
"$type": "color",
              "$value": "{sd.reference.color.scale.gray.600}",
"$description": "チャート上のテキスト色。凡例や軸ラベルなどに使用",
              "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.color.chart.component.onChartSurface'"
},
"scopes": ["SHAPE_FILL", "TEXT_FILL", "STROKE_COLOR"]
}
}
}
}
}
}
}
}
}

================================================
FILE: tokens/system/dimension.default.json
================================================
{
"sd": {
"system": {
"dimension": {
"spacing": {
"none": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.scale.0}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.spacing.none'"
                },
                "scopes": ["GAP"]
              }
            }
          },
          "twoExtraSmall": {
            "$type": "dimension",
"$value": "{sd.reference.dimension.scale.3}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.dimension.spacing.twoExtraSmall'"
},
"scopes": ["GAP"]
}
}
},
"extraSmall": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.scale.4}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.spacing.extraSmall'"
                },
                "scopes": ["GAP"]
              }
            }
          },
          "small": {
            "$type": "dimension",
"$value": "{sd.reference.dimension.scale.5}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.dimension.spacing.small'"
},
"scopes": ["GAP"]
}
}
},
"medium": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.scale.6}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.spacing.medium'"
                },
                "scopes": ["GAP"]
              }
            }
          },
          "large": {
            "$type": "dimension",
"$value": "{sd.reference.dimension.scale.7}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.dimension.spacing.large'"
},
"scopes": ["GAP"]
}
}
},
"extraLarge": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.scale.8}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.spacing.extraLarge'"
                },
                "scopes": ["GAP"]
              }
            }
          },
          "twoExtraLarge": {
            "$type": "dimension",
"$value": "{sd.reference.dimension.scale.10}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.dimension.spacing.twoExtraLarge'"
},
"scopes": ["GAP"]
}
}
},
"threeExtraLarge": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.scale.12}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.spacing.threeExtraLarge'"
                },
                "scopes": ["GAP"]
              }
            }
          },
          "fourExtraLarge": {
            "$type": "dimension",
"$value": "{sd.reference.dimension.scale.13}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.dimension.spacing.fourExtraLarge'"
},
"scopes": ["GAP"]
}
}
},
"fiveExtraLarge": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.scale.15}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.spacing.fiveExtraLarge'"
                },
                "scopes": ["GAP"]
              }
            }
          },
          "sixExtraLarge": {
            "$type": "dimension",
"$value": "{sd.reference.dimension.scale.17}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.dimension.spacing.sixExtraLarge'"
},
"scopes": ["GAP"]
}
}
}
},
"border": {
"medium": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.scale.1}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.border.medium'"
                },
                "scopes": ["STROKE_FLOAT"]
              }
            }
          },
          "thick": {
            "$type": "dimension",
"$value": "{sd.reference.dimension.scale.2}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.dimension.border.thick'"
},
"scopes": ["STROKE_FLOAT"]
}
}
},
"extraThick": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.scale.3}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.border.extraThick'"
                },
                "scopes": ["STROKE_FLOAT"]
              }
            }
          }
        },
        "radius": {
          "extraSmall": {
            "$type": "dimension",
"$value": "{sd.reference.dimension.scale.2}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.dimension.radius.extraSmall'"
},
"scopes": ["CORNER_RADIUS"]
}
}
},
"small": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.scale.3}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.radius.small'"
                },
                "scopes": ["CORNER_RADIUS"]
              }
            }
          },
          "medium": {
            "$type": "dimension",
"$value": "{sd.reference.dimension.scale.4}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.dimension.radius.medium'"
},
"scopes": ["CORNER_RADIUS"]
}
}
},
"large": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.scale.5}",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.radius.large'"
                },
                "scopes": ["CORNER_RADIUS"]
              }
            }
          },
          "extraLarge": {
            "$type": "dimension",
"$value": "{sd.reference.dimension.scale.6}",
            "$extensions": {
"com.figma": {
"codeSyntax": {
"WEB": "'sd.system.dimension.radius.extraLarge'"
},
"scopes": ["CORNER_RADIUS"]
}
}
},
"full": {
"$type": "dimension",
            "$value": "9999px",
"$extensions": {
              "com.figma": {
                "codeSyntax": {
                  "WEB": "'sd.system.dimension.radius.full'"
                },
                "scopes": ["CORNER_RADIUS"]
              }
            }
          }
        },
        "breakpoint": {
          "compact": {
            "$type": "dimension",
"$value": "0px",
            "$extensions": {
"com.figma": {
"scopes": []
}
}
},
"expanded": {
"$type": "dimension",
            "$value": "{sd.reference.dimension.breakpoint.medium}",
"$extensions": {
"com.figma": {
"scopes": []
}
}
}
}
}
}
}
}

================================================
FILE: tokens/system/elevation.default.json
================================================
{
"sd": {
"system": {
"elevation": {
"shadow": {
"level1": {
"$type": "shadow",
            "$value": {
"color": "#0000004D",
"offsetX": "0px",
"offsetY": "1px",
"blur": "2px",
"spread": "0px"
}
},
"level2": {
"$type": "shadow",
            "$value": {
"color": "#00000033",
"offsetX": "0px",
"offsetY": "1px",
"blur": "4px",
"spread": "0px"
}
},
"level3": {
"$type": "shadow",
            "$value": {
"color": "#00000033",
"offsetX": "0px",
"offsetY": "2px",
"blur": "8px",
"spread": "0px"
}
},
"level4": {
"$type": "shadow",
            "$value": {
"color": "#00000033",
"offsetX": "0px",
"offsetY": "4px",
"blur": "12px",
"spread": "0px"
}
},
"level5": {
"$type": "shadow",
            "$value": {
"color": "#00000033",
"offsetX": "0px",
"offsetY": "8px",
"blur": "24px",
"spread": "0px"
}
}
},
"zIndex": {
"deepDive": {
"$type": "number",
            "$value": -1000
},
"base": {
"$type": "number",
            "$value": 0
},
"docked": {
"$type": "number",
            "$value": 10
},
"dropdown": {
"$type": "number",
            "$value": 500
},
"modal": {
"$type": "number",
            "$value": 1000
},
"toast": {
"$type": "number",
            "$value": 2000
}
}
}
}
}
}

================================================
FILE: tokens/system/typography.compact.json
================================================
{
"sd": {
"system": {
"typography": {
"display": {
"small": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.fourExtraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"medium": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.fiveExtraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
}
},
"headline": {
"small": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.threeExtraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"medium": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.fourExtraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"large": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.fiveExtraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
}
},
"title": {
"small": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.large}",
"fontWeight": "{sd.reference.typography.fontWeight.bold}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"medium": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.extraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.bold}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"large": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.twoExtraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.bold}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
}
},
"body": {
"extraSmall": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.small}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.tight}"
}
},
"small": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.medium}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"medium": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.large}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"large": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.extraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
}
},
"label": {
"small": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.extraSmall}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.none}"
}
},
"medium": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.small}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.none}"
}
},
"large": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.medium}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.none}"
}
},
"extraLarge": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.compact.large}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.none}"
}
}
}
}
}
}
}

================================================
FILE: tokens/system/typography.expanded.json
================================================
{
"sd": {
"system": {
"typography": {
"display": {
"small": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.fourExtraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"medium": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.fiveExtraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
}
},
"headline": {
"small": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.extraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"medium": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.twoExtraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"large": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.threeExtraLarge}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
}
},
"title": {
"small": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.small}",
"fontWeight": "{sd.reference.typography.fontWeight.bold}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"medium": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.medium}",
"fontWeight": "{sd.reference.typography.fontWeight.bold}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"large": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.large}",
"fontWeight": "{sd.reference.typography.fontWeight.bold}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
}
},
"body": {
"extraSmall": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.twoExtraSmall}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.tight}"
}
},
"small": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.extraSmall}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"medium": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.small}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
},
"large": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.medium}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.normal}"
}
}
},
"label": {
"small": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.threeExtraSmall}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.none}"
}
},
"medium": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.twoExtraSmall}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.none}"
}
},
"large": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.extraSmall}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.none}"
}
},
"extraLarge": {
"$type": "typography",
            "$value": {
"fontSize": "{sd.reference.typography.scale.expanded.small}",
"fontWeight": "{sd.reference.typography.fontWeight.regular}",
"fontFamily": "{sd.reference.typography.fontFamily.primary}",
"lineHeight": "{sd.reference.typography.lineHeight.none}"
}
}
}
}
}
}
}

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
FILE: .github/workflows/build-tokens.yml
================================================
name: Build Design Tokens

on:
pull_request:
types: [opened, synchronize]
branches: - main
paths: - "tokens/\*\*" - ".github/workflows/build-tokens.yml"

jobs:
run-style-dictonary:
runs-on: ubuntu-latest
permissions:
contents: write
pull-requests: write
steps: - name: Install Node.js
uses: actions/setup-node@v4
with:
node-version: "20"

      - name: Set NPM version
        run: npm install -g npm@latest

      - name: Clone repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          ref: ${{ github.head_ref }}

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
        run: npm ci

      - name: Run Style Dictionary
        run: npm run build

      - name: Check for changes
        id: git-check
        run: |
          git diff --exit-code || echo "changes=true" >> $GITHUB_OUTPUT

      - name: Commit changes
        if: steps.git-check.outputs.changes == 'true'
        run: |
          git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git config --local user.name "GitHub Action"
          git add design-tokens/dist
          git commit -m "Build tokens by StyleDictionary"

      - name: Push changes
        if: steps.git-check.outputs.changes == 'true'
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          branch: ${{ github.head_ref }}

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
FILE: .github/workflows/sync-tokens-to-figma.yml
================================================
name: Design Tokens to Figma

on:
push:
branches: [main]
paths: - "tokens/**" - ".github/workflows/sync-tokens-to-figma.yml"
pull_request:
types: [closed]
branches: [main]
paths: - "tokens/**" - ".github/workflows/sync-tokens-to-figma.yml"

jobs:
sync-figma-variables:
runs-on: ubuntu-latest
if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.pull_request.merged == true)
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

      - name: Sync json to Figma file
        run: npm run ci:sync-json-to-figma
        env:
          FILE_KEY: ${{ secrets.SYNC_FIGMA_FILE_KEY }}
          PERSONAL_ACCESS_TOKEN: ${{ secrets.SYNC_FIGMA_PERSONAL_ACCESS_TOKEN }}
