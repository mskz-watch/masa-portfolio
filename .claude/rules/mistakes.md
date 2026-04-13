# やらかしログ

ミスが起きたらその場で追記する。
フォーマット: 状況 → 対策

---

## Case 1: pnpm を使わず npm を使った
状況: `npm install` でパッケージを追加してしまい、package-lock.json が生成された。
→ 対策: このプロジェクトは pnpm を使う。`npm` コマンドは使うな。`pnpm add` を使え。

## Case 2: 'use client' を付け忘れた
状況: Framer Motion の `motion` コンポーネントをServer Componentで使おうとしてエラー。
→ 対策: `motion.*` や React hooks (`useState`, `useEffect` 等) を使うコンポーネントには必ず `'use client'` を付けろ。

## Case 3: pnpm を使わず npm を使った（再発）
状況: `npm install lucide-react` を実行してしまい、package-lock.json が生成されて pnpm の依存関係が壊れた。node_modules と .next の削除＋再インストールが必要になった。
→ 対策: `pnpm` が見つからなくても `npx pnpm add <package>` で使える。`npm install` は絶対に使うな。

<!-- ミスが起きたらここに追記 -->
