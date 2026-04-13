# CLAUDE.md — masa-portfolio

## About Me
- 日本語で対話する（コード・ファイル名・変数名は英語）
- テンポ重視。前置き・お世辞・「いい質問ですね」は全部省け
- わからないことは「わからない」と言え。推測で埋めるな
- 結論から先に言え

## Project Overview
服部優一のポートフォリオサイト。越境型サービスデザイナーとしての実績を見せるサイト。
キャッチコピー：「生活者の解像度で、サービスを設計する。」

## Environment
- OS: macOS
- Package Manager: pnpm
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS v3
- Animation: Framer Motion
- Hosting: Vercel
- Repo: github.com/mskz-watch/masa-portfolio

## Site Structure
- `/` — Hero（キャッチコピー + CTA）
- `/about` — About（自己紹介・経歴）
- `/skills` — Skills（スキルセット）
- `/works` — Works一覧（リード: Karappo）
- `/works/[slug]` — Works詳細
- `/contact` — Contact

## Work Rules
- 成果物は必ずファイルに保存しろ。チャットに出力して終わりは禁止
- 1つの変更につき1コミット。まとめてコミットするな
- 既存ファイルを編集する前に必ず現在の内容を確認しろ
- 外部ライブラリのAPIを使う前に、型定義かドキュメントを確認しろ
- `npm install` は使うな。`pnpm` を使え
