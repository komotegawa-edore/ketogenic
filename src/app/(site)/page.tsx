import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-32">
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground/80">
              糖質制限で理想の体へ
            </span>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              ケトジェニックを
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="text-primary">もっと身近に</span>
            </h1>
            <p className="mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
              科学的根拠に基づいた糖質制限の知識と、
              実践で使える食事例・便利ツールを提供します。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                記事を読む
              </Link>
              <Link
                href="/tools"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-8 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-accent"
              >
                ツールを使う
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/60 bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:mb-12 md:text-3xl">
            ケトジェニックで得られること
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <div className="rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 p-6 text-center sm:p-8 md:p-12">
            <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              まずはネットカーボを計算してみよう
            </h2>
            <p className="mb-6 text-muted-foreground">
              1日に摂取できる糖質量の目安を簡単に計算できます
            </p>
            <Link
              href="/tools/net-carb-calculator"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              計算機を使う
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "体脂肪の効率的な燃焼",
    description:
      "糖質を制限することで体がケトン体をエネルギー源として使い始め、脂肪燃焼が促進されます。",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "安定したエネルギー",
    description:
      "血糖値の急激な変動がなくなり、1日を通して安定したエネルギーレベルを維持できます。",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "食欲のコントロール",
    description:
      "脂質とタンパク質中心の食事は満腹感が持続し、自然と食べ過ぎを防ぐことができます。",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];
