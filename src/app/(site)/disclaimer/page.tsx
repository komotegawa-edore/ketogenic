import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免責事項",
  description: "Ketolierの免責事項",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
        免責事項
      </h1>

      <div className="prose prose-sm max-w-none text-muted-foreground">
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            1. 情報の正確性について
          </h2>
          <p>
            当サイトに掲載されている情報は、正確性を期しておりますが、
            その内容の正確性、完全性、有用性を保証するものではありません。
            情報は予告なく変更される場合があります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            2. 医療情報について
          </h2>
          <div className="rounded-lg bg-destructive/10 p-4 text-foreground">
            <p className="font-medium">重要</p>
            <p className="mt-2 text-sm">
              当サイトの情報は一般的な情報提供を目的としており、
              <strong>医療的なアドバイスではありません</strong>。
              健康上の問題がある場合は、必ず医師や専門家にご相談ください。
            </p>
          </div>
          <p className="mt-4">
            ケトジェニックダイエットを含む食事法は、個人の体質や健康状態によって
            効果や影響が異なります。持病がある方、妊娠中・授乳中の方、
            服薬中の方は、開始前に必ず医師にご相談ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            3. 損害の責任
          </h2>
          <p>
            当サイトの情報を利用したことによって生じた損害について、
            当サイトは一切の責任を負いません。
            情報の利用は自己責任でお願いいたします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            4. 外部リンクについて
          </h2>
          <p>
            当サイトからリンクされている外部サイトの内容については、
            当サイトは責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            5. 著作権について
          </h2>
          <p>
            当サイトに掲載されているコンテンツ（文章、画像、デザイン等）の
            著作権は当サイトまたは原著作者に帰属します。
            無断での複製・転載はご遠慮ください。
          </p>
        </section>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        制定日：2025年1月
      </div>
    </div>
  );
}
