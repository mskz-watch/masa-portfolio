# Git運用ルール

## コミットメッセージ
- 日本語で書く
- prefix必須: `feat` / `fix` / `refactor` / `style` / `docs` / `chore`
- 例: `feat: Worksページのカードコンポーネント追加`
- 例: `fix: モバイルでヘッダーが崩れる問題を修正`
- 1コミット1変更。複数の変更をまとめるな

## ブランチ運用
- `main` への直接pushは禁止
- `feature/〇〇` でブランチを切る
- `fix/〇〇` はバグ修正用
- Vercelのプレビューデプロイを確認してからmerge

## やってはいけないこと
- `git push --force` 禁止（denyに設定済み）
- `.env.local` をコミットするな（.gitignoreに含まれているはずだが都度確認）
- node_modules をコミットするな
