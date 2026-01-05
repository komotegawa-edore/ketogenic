import type { Metadata } from "next";
import Link from "next/link";
import { Mail, AlertCircle, FileText, Bug } from "lucide-react";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "Ketolierへのお問い合わせ",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
        お問い合わせ
      </h1>

      <div className="rounded-xl border border-border/60 bg-card p-6 sm:p-8">
        <p className="mb-6 text-muted-foreground">
          Ketolierへのお問い合わせは、以下の方法でご連絡ください。
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
              <Mail className="h-5 w-5 text-primary" />
              メールでのお問い合わせ
            </h2>
            <p className="text-muted-foreground">
              <a
                href="mailto:contact@ketolier.com"
                className="text-primary hover:underline"
              >
                contact@ketolier.com
              </a>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              通常3営業日以内に返信いたします。
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <h2 className="mb-2 font-semibold text-foreground">
              お問い合わせの前に
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Bug className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>
                  サイトの不具合やエラーについては、具体的な状況をお知らせください
                </span>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>
                  健康に関するご質問には医療専門家ではないためお答えできません
                </span>
              </li>
              <li className="flex gap-3">
                <FileText className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>
                  <Link href="/disclaimer" className="text-primary hover:underline">
                    免責事項
                  </Link>
                  をご確認の上、お問い合わせください
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
