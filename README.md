# DragridTimeliner

![npm version](https://img.shields.io/npm/v/draglid-timeliner)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

---

## 概要

`DragridTimeliner`は視覚的な数直線区間選択コンポーネントを提供するライブラリです。
タイムライン上でマウスドラッグを行うことで、簡単に区間を選択することができます。

## 使用例

### 基本的な使い方

```ts
import { Timeline } from "dragrid-timeliner";

function MyApp() {
  const [timeRanges, setTimeRanges] = useState([]);

  return (
    <div>
      <Timeline
        scale={
          min: 0,
          max: 100,
          grid: 1
        }
        onChange={setTimeRanges}
        value={timeRanges} />
    </div>
  );
}
```

### 午後の 15 分刻みタイムライン

フォーマットを指定して、自由にラベルを設定することもできます。

```ts
import { Timeline } from "dragrid-timeliner";

function MyApp() {
  const [timeRanges, setTimeRanges] = useState([]);
  const hmFormat = (t: number) => {
    const h = Math.floor(t / 60);
    const m = v % 60;
    const zeroPad = (s) => s.toString().padStart(2, "0");

    return `${zeroPad(h)}:${zeroPad(m)}`
  }

  return (
    <div>
      <Timeline
        scale={
          min: 12 * 60,
          max: 24 * 60,
          grid: 15,
          labelGap: 60,
          formatter: hmFormat
        }
        onChange={setTimeRanges}
        value={timeRange} />
    </div>
  );
}
```

## Props

| Prop 名   | 型                                   | 概要                   |
| --------- | ------------------------------------ | ---------------------- |
| scale     | DragridScale                         | 数直線のスケール設定   |
| value     | DragridTimeRange[]                   | 選択された時間区間     |
| onChange? | (ranges: DragridTimeRange[]) => void | value 変更時に走る関数 |
| style?    | DragridCSSProperties                 | カスタムスタイル       |

## 独自型

### DragridScale

| プロパティ名 | 型                      | 概要                         |
| ------------ | ----------------------- | ---------------------------- |
| min          | number                  | 数直線の始点となる数値       |
| max          | number                  | 数直線の終点となる数値       |
| grid         | number                  | ドラッグした際のグリッド単位 |
| labelGap?    | number                  | ラベルの間隔                 |
| formatter?   | (value: number)=>string | ラベルのフォーマット文字列   |

### DragridTimeRange

| プロパティ名 | 型     | 概要                 |
| ------------ | ------ | -------------------- |
| start        | number | 区間の始点となる数値 |
| end          | number | 区間の終点となる数値 |
| name         | string | 区間の名前           |
| color        | string | 選択区間の色         |

### DragridCSSProperties

React.CSSProperties の交差型で、一部の CSS 変数を変数名とその値による`Record<string, string>`で書き換えることができます。

## CSS 変数

| 変数名       | 概要       |
| ------------ | ---------- |
| --tick-color | 目盛りの色 |
| --tick-width | 目盛りの幅 |

## テスト

このライブラリは**Vitest**と**React Testing Library**を利用し、テスト駆動開発(TDD)に基づいて開発されています。

```bash
pnpm test # テストを実行する
pnpm test -- --coverage # カバレッジレポートの生成
```

## ドキュメント

- 📘[仕様書](./doc/SPEC.md)
- 🔍[テスト方針](./doc/TDD_PLAN.md)

## License

This project is licensed under the **MIT License**.

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, under the conditions of the license.

See the [LICENSE](./LICENSE) file for full license text.

© 2025 qwertyhoge

このプロジェクトは[Mit License](./LICENSE)で公開されています。
