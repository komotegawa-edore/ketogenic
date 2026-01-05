import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Ketolierのプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
        プライバシーポリシー
      </h1>

      <div className="prose prose-sm max-w-none text-muted-foreground">
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            1. 個人情報の取得
          </h2>
          <p>
            当サイトでは、お問い合わせやサービス利用時に、メールアドレス等の個人情報を取得することがあります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            2. 個人情報の利用目的
          </h2>
          <p>取得した個人情報は、以下の目的で利用します。</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>お問い合わせへの対応</li>
            <li>サービスの提供・改善</li>
            <li>重要なお知らせの送信</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            3. 個人情報の第三者提供
          </h2>
          <p>
            法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            4. Cookieの使用
          </h2>
          <p>
            当サイトでは、サービス向上のためCookieを使用することがあります。
            ブラウザの設定でCookieを無効にすることも可能です。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            5. アクセス解析
          </h2>
          <p>
            当サイトでは、Googleアナリティクス等のアクセス解析ツールを使用することがあります。
            これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は収集しません。
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            6. お問い合わせ
          </h2>
          <p>
            プライバシーポリシーに関するお問い合わせは、お問い合わせページよりご連絡ください。
          </p>
        </section>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        制定日：2025年1月
      </div>
    </div>
  );
}
