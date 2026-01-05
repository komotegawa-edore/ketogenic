# CLAUDE.md

このリポジトリでClaude（および他のLLM支援ツール）に作業してもらうためのガイドです。
目的は「**Ketolier（ケトリエ）** - Next.js + microCMS のケトジェニック特化SEOメディア（将来は管理アプリへ送客）」を最速で品質高く伸ばすこと。

## サービス名
- **Ketolier（ケトリエ）**
- コンセプト: Keto + Atelier（アトリエ）= ケトジェニックの工房
- トーン: 温かみ、親しみやすさ、ライフスタイル寄り

---

## 1. プロジェクト概要

### プロダクトの目的
- **長期：SEO / LLM検索で上位表示されるケトジェニック特化メディア**を構築する
- **短期：TikTok流入**を受け止める導線（記事・計算機・チェックリスト）を作る
- **最終：ケト管理Webアプリへ送客**（会員化/サブスクは後で）

### MVPの最優先
1) 記事一覧・記事詳細（microCMS連携）
2) SEO基盤（metadata / canonical / sitemap / robots / OG）
3) 記事テンプレ（FAQ / 参考情報 / 免責 / CTA）
4) 記事内ツール（まずは「ネットカーボ計算機」推奨）

### いまはやらない（非目標）
- ネイティブアプリ（iOS/Android）
- 重い食品DBの構築（最初は不要）
- サプリ・医療的な断定（YMYLリスクを増やさない）

---

## 2. 技術スタック（前提）
- Next.js（App Router） + TypeScript
- Tailwind CSS（必要に応じて shadcn/ui）
- microCMS（記事・カテゴリ・著者・FAQ）
- Vercel Deploy
- 追加予定：PWA / Web Push / Supabase（会員化する段階で）

---

## 3. ディレクトリ構成（想定）

- `app/`
  - `(site)/` … 公開サイト（ブログ、ツール、LP）
  - `blog/` … 記事一覧
  - `blog/[slug]/` … 記事詳細
  - `tools/` … 計算機など
- `components/` … UI部品（記事テンプレ、CTA、FAQなど）
- `lib/`
  - `microcms.ts` … APIクライアント
  - `seo.ts` … metadata生成
- `content/` … 静的ページ（免責、プライバシーなど）
- `public/` … OG画像テンプレ等
- `scripts/` … sitemap生成など（必要なら）

※ 実際の構成が異なる場合は、現状に合わせてこのガイドも更新すること。

---

## 4. 環境変数（例）
`.env.local` に設定する。

- `MICROCMS_SERVICE_DOMAIN=xxxx`
- `MICROCMS_API_KEY=xxxx`
- `SITE_URL=https://example.com`

注意：
- APIキーは **絶対にコミットしない**
- サーバーサイド専用のキーは `NEXT_PUBLIC_` を付けない

---

## 5. microCMS モデル（推奨）

### `posts`
- `title`（string）
- `slug`（string / unique）
- `summary`（string）※meta description用
- `body`（richtext or markdown）
- `category`（reference: categories）
- `tags`（multi select）
- `eyecatch`（image）
- `faq`（repeat: { question, answer }）
- `author`（reference: authors）
- `publishedAt` / `updatedAt`

### `categories`
- `name`
- `slug`

### `authors`
- `name`
- `bio`
- `credentials`（筋トレ歴・減量経験など、誇張しない）
- `disclaimer`（医療ではない旨）

---

## 6. SEO & LLM検索 対応（必須ルール）

### ページごとのSEO必須
- `metadata`（title / description / openGraph / twitter / alternates canonical）
- canonicalは常に正規URLへ
- noindexは原則使わない（必要時は理由を明記）

### 必須生成物
- `sitemap.xml`（記事追加で自動更新される仕組み）
- `robots.txt`
- RSS（余裕があれば）

### 構造化データ（優先度高）
- Article schema（著者、更新日）
- Breadcrumb schema
- FAQ schema（`faq` がある記事のみ）

### “LLMに引用されやすい” 記事構造（テンプレ）
- 結論（1〜3行）
- 数値目安（例：ネットカーボ上限、タンパク質目安）
- 理由（短く）
- 具体例（食事例 / 外食例）
- よくある失敗
- FAQ（短く断定しすぎず明確に）
- CTA（計算機/チェックリスト/関連記事）

---

## 7. YMYL配慮（健康系コンテンツの注意）
- 医療行為の断定や治療を促す表現は避ける
- 可能なら一次情報（論文、公的機関）を参照し、引用は短く
- すべての健康系記事に免責（例：医療的助言ではない/体調不良は受診）
- サプリの過度な推奨はしない（広告臭・信頼低下リスク）

---

## 8. UI/UX ルール
- まずは **速度**：LCP/CLSを崩さない
- 画像は `next/image` を優先
- モバイルを最優先（TikTok流入前提）
- CTAは “迷わせない”：
  - 記事末尾：1つ
  - 記事途中：最大1つ（計2つまで）

---

## 9. コーディング規約（LLM作業ルール）
- 既存の型・命名に合わせる（勝手な新規ルールを作らない）
- 変更は小さく、意図が分かる単位でコミットできるように
- `any` は原則禁止。microCMSレスポンスは型定義する
- fetchはサーバーサイド中心（APIキー露出を防ぐ）
- SEOに関係する変更（metadata / sitemap / canonical）は必ず動作確認

---

## 10. 代表的タスクの進め方

### A) 新しい記事機能を追加する
1. microCMSモデル確認
2. 型追加（`types/` or `lib/`）
3. 取得関数追加（`lib/microcms.ts`）
4. 表示コンポーネント実装
5. metadata・構造化データを対応
6. ルーティング・ビルド確認

### B) 記事内ツール（計算機）を追加する
- 入力項目は最小化し、結果を即表示
- 結果の根拠（数値の意味）を短く併記
- 記事からツールへ内部リンクを貼る（CTA）

---

## 11. テスト/品質チェック（最低限）
- `pnpm lint` / `npm run lint` 相当が通る
- ビルドが通る（`next build`）
- 主要ページ（/ /blog /blog/[slug] /tools）が崩れてない
- モバイル表示を優先で確認
- title/description/canonical/OGが入っている

※ コマンドは実際のpackage.jsonに合わせて更新すること。

---

## 12. PR/コミット方針（推奨）
- 1 PR = 1テーマ
- PR説明に以下を書く：
  - 何を変えたか
  - なぜ必要か（SEO/UX/運用）
  - 動作確認したページURL/手順
- 破壊的変更は避ける。必要なら移行手順をREADMEに追記

---

## 13. 今後のロードマップ（ざっくり）
- Phase1：SEOメディア（microCMS）完成 + ツール1つ
- Phase2：記事テンプレ強化（FAQ/用語辞典/内部リンク）
- Phase3：会員化（Supabase）→ ケト管理アプリ（記録・目標・推移）
- Phase4：サブスク/分析/通知

### 将来の機能アイデア（検討中）
- **パーソナライズ診断メール送信**
  - 入力：身長、体重、目標などの最低限の健康情報 + メールアドレス
  - 出力：その人向けのおすすめの痩せ方・食事例をメールで送信
  - 目的：リード獲得 + 価値提供

---

## 14. Claudeへの依頼のコツ（このRepo向け）
- まず「MVPに必要か？」で判断して提案する
- 変更の影響範囲（SEO、URL、内部リンク）を必ず列挙する
- 記事/SEOの仕様はこのCLAUDE.mdのテンプレを優先する
- 不確かな健康情報は断定しない。根拠・注意書きを入れる

---

最終ゴール：
「ケトで悩んだらこのサイト（＋ツール）が出てくる」状態を作り、
TikTokからの短期流入も逃さず、アプリへ自然に送客する。
