import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ツール",
  description:
    "ケトジェニックダイエットに役立つ計算機・チェックリストなどの便利ツール。",
};

const tools = [
  {
    title: "ネットカーボ計算機",
    description: "食品のネットカーボ（正味糖質量）を計算します",
    href: "/tools/net-carb-calculator",
    status: "available" as const,
  },
  {
    title: "PFCバランス計算機",
    description: "目標に合わせた脂質・タンパク質・糖質の摂取量を算出",
    href: "/tools/pfc-calculator",
    status: "coming-soon" as const,
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
      <header className="mb-8 sm:mb-12">
        <h1 className="mb-3 text-2xl font-bold text-foreground sm:mb-4 sm:text-3xl md:text-4xl">
          ツール
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          ケトジェニックダイエットに役立つ計算機
        </p>
      </header>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {tools.map((tool) => (
          <div
            key={tool.href}
            className="rounded-xl border border-border/60 bg-card p-6 shadow-sm"
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                {tool.title}
              </h2>
              {tool.status === "coming-soon" && (
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  準備中
                </span>
              )}
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {tool.description}
            </p>
            {tool.status === "coming-soon" ? (
              <span className="inline-flex h-10 cursor-not-allowed items-center justify-center rounded-lg bg-muted px-4 text-sm font-medium text-muted-foreground">
                近日公開
              </span>
            ) : (
              <Link
                href={tool.href}
                className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                使ってみる
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
