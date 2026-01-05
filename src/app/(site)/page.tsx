import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-28">
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
                href="/tools/meal-plan"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                食事プランを作る
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-8 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-accent"
              >
                記事を読む
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Keto Section */}
      <section className="border-t border-border/60 bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            ケトジェニックダイエットとは
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
            糖質を極端に制限し、脂質をエネルギー源とする食事法です。
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                基本の仕組み
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                通常、体は糖質（グルコース）をエネルギー源として使います。
                しかし糖質を1日20〜50g以下に制限すると、体は脂肪を分解して
                <strong className="text-foreground">ケトン体</strong>
                を生成し、これをエネルギーとして使い始めます。
                この状態を「ケトーシス」と呼びます。
              </p>
              <div className="rounded-lg bg-muted/50 p-4">
                <div className="mb-2 text-sm font-medium text-foreground">
                  標準的なPFCバランス
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>脂質</span>
                    <span className="font-medium text-foreground">70〜75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>タンパク質</span>
                    <span className="font-medium text-foreground">20〜25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>糖質</span>
                    <span className="font-medium text-foreground">5〜10%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                科学的な背景
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                ケトジェニックダイエットは1920年代にてんかん治療として開発されました。
                近年は体重管理や代謝改善への効果が研究されています。
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    インスリン分泌が抑えられ、脂肪の蓄積が減少
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    血糖値の急激な変動がなくなり、空腹感が安定
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    脂質とタンパク質は消化に時間がかかり、満腹感が持続
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            期待できる効果
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
            正しく実践することで、以下の効果が報告されています。
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foods Section */}
      <section className="border-t border-border/60 bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            食べていいもの・避けるもの
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
            ケトジェニックでは食材選びが重要です。
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">
                積極的に食べたいもの
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">○</span>
                  <span><strong className="text-foreground">肉類：</strong>牛肉、豚肉、鶏肉、ラム肉</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">○</span>
                  <span><strong className="text-foreground">魚介類：</strong>サーモン、サバ、マグロ、エビ</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">○</span>
                  <span><strong className="text-foreground">卵：</strong>全卵、調理法問わず</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">○</span>
                  <span><strong className="text-foreground">乳製品：</strong>チーズ、バター、生クリーム</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">○</span>
                  <span><strong className="text-foreground">油脂：</strong>オリーブオイル、MCTオイル、ココナッツオイル</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">○</span>
                  <span><strong className="text-foreground">野菜：</strong>葉物野菜、ブロッコリー、アボカド</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">○</span>
                  <span><strong className="text-foreground">ナッツ：</strong>アーモンド、くるみ、マカダミア</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">
                避けるべきもの
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  <span><strong className="text-foreground">穀物：</strong>米、パン、パスタ、うどん</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  <span><strong className="text-foreground">砂糖：</strong>砂糖、はちみつ、シロップ</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  <span><strong className="text-foreground">果物：</strong>バナナ、りんご、ぶどう（少量なら可）</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  <span><strong className="text-foreground">根菜：</strong>じゃがいも、にんじん、かぼちゃ</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  <span><strong className="text-foreground">豆類：</strong>大豆以外の豆、レンズ豆</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  <span><strong className="text-foreground">清涼飲料：</strong>ジュース、スポーツドリンク</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">×</span>
                  <span><strong className="text-foreground">加工食品：</strong>菓子パン、スナック菓子</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            参考文献
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-muted-foreground">
            ケトジェニックダイエットに関する主要な研究論文
          </p>

          <div className="mx-auto max-w-3xl space-y-4">
            {references.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-border/60 bg-card p-4 transition-colors hover:border-primary/40 hover:bg-card/80"
              >
                <div className="text-sm font-medium text-foreground">
                  {ref.title}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {ref.authors} ({ref.year})
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {ref.journal}
                </div>
              </a>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-muted-foreground">
            ※ これらの研究は参考情報です。個人の体質や健康状態により効果は異なります。
            医療的な判断は必ず専門家にご相談ください。
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/60 bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <div className="rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 p-6 text-center sm:p-8 md:p-12">
            <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              あなた専用の食事プランを作成
            </h2>
            <p className="mb-6 text-muted-foreground">
              体重・目標に合わせた1週間分の食事例を提案します
            </p>
            <Link
              href="/tools/meal-plan"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              食事プランを作る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const benefits = [
  {
    title: "体脂肪の効率的な燃焼",
    description:
      "糖質を制限することで体がケトン体をエネルギー源として使い始め、脂肪燃焼が促進されます。",
  },
  {
    title: "安定したエネルギー",
    description:
      "血糖値の急激な変動がなくなり、1日を通して安定したエネルギーレベルを維持できます。",
  },
  {
    title: "食欲のコントロール",
    description:
      "脂質とタンパク質中心の食事は満腹感が持続し、自然と食べ過ぎを防ぐことができます。",
  },
  {
    title: "集中力の向上",
    description:
      "ケトン体は脳のエネルギー源としても使われ、血糖値が安定することで集中力が維持されやすくなります。",
  },
  {
    title: "むくみの軽減",
    description:
      "糖質制限により体内の水分貯留が減少し、むくみが軽減されることがあります。",
  },
  {
    title: "中性脂肪の改善",
    description:
      "複数の研究で、ケトジェニックダイエットが中性脂肪値の改善に寄与する可能性が示されています。",
  },
];

const references = [
  {
    title: "ケトジェニックダイエットの分子基盤",
    authors: "日本生化学会",
    year: "2022",
    journal: "生化学 第94巻 第5号",
    url: "https://seikagaku.jbsoc.or.jp/10.14952/SEIKAGAKU.2022.940730/data/index.html",
  },
  {
    title: "ケトジェニックダイエットがヒトの健康に及ぼす影響について",
    authors: "日本農芸化学会",
    year: "2016",
    journal: "化学と生物 Vol.54, No.9",
    url: "https://katosei.jsbba.or.jp/view_html.php?aid=650",
  },
  {
    title: "ケトジェニックダイエットが生体に及ぼす影響",
    authors: "山本 祐司",
    year: "2016",
    journal: "CiNii Research",
    url: "https://cir.nii.ac.jp/crid/1390282679178159360",
  },
  {
    title: "糖質制限食の科学的根拠",
    authors: "日本糖尿病学会",
    year: "2019",
    journal: "糖尿病診療ガイドライン",
    url: "https://www.jstage.jst.go.jp/article/kagakutoseibutsu/54/9/54_650/_pdf",
  },
];
