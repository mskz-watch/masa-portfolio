# コーディング規約

## TypeScript
- `interface` を優先（`type` は Union型など必要な場面のみ）
- `any` 禁止。型がわからないときは `unknown` を使え
- named export を使え。default export は Next.js の page/layout のみ
- `async/await` を使え。`.then()` チェーンは書くな

## コンポーネント設計
- 関数コンポーネントのみ。クラスコンポーネント禁止
- Props の型は同ファイル内で定義
- 150行を超えたらコンポーネントを分割しろ
- `'use client'` は必要な最小限のコンポーネントだけに付ける

## ファイル構成
- `src/app/` — Next.js App Router のルート
- `src/components/` — 共通UIコンポーネント
- `src/lib/` — ユーティリティ関数・定数
- `src/types/` — 型定義

## Tailwind CSS
- クラスの順序: レイアウト → サイジング → スペーシング → 色 → タイポ → アニメ
- 長いクラス列は `cn()` ユーティリティでまとめる
- マジックナンバー（`w-[347px]` 等）は避けてデザイントークンを使え

## Framer Motion
- `motion` コンポーネントは Client Component 内でのみ使う
- アニメーション定数は `variants` で定義して再利用しろ
