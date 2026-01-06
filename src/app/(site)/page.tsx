import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* 左側：食事画像 */}
            <div className="hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/hero-keto-meal.png"
                  alt="ケトジェニック食事例：サーモン、アボカド、卵"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* 中央：テキスト */}
            <div className="flex flex-col items-center text-center lg:col-span-1">
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground/80">
                糖質制限で理想の体へ
              </span>
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                ケトジェニックを
                <br />
                <span className="text-primary">もっと身近に</span>
              </h1>
              <p className="mb-8 max-w-md text-base text-muted-foreground sm:text-lg">
                科学的根拠に基づいた糖質制限の知識と、
                実践で使える食事例を紹介します。
              </p>
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                記事を読む
              </Link>

              {/* モバイル用：画像を下に表示 */}
              <div className="mt-10 grid grid-cols-2 gap-4 lg:hidden">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-md">
                  <Image
                    src="/hero-keto-meal.png"
                    alt="ケトジェニック食事例"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-md">
                  <Image
                    src="/hero-waist.png"
                    alt="ダイエット成功イメージ"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* 右側：ウエスト画像 */}
            <div className="hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/hero-waist.png"
                  alt="ダイエット成功イメージ：引き締まったウエスト"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: 普段の体 */}
      <section className="border-t border-border/60 bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <div className="mb-4 text-center text-sm font-medium text-primary">
            STEP 1
          </div>
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            普段の体：糖を燃やすモード
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
            まず、普通の食事をしているときの体の仕組みを理解しましょう。
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-xl border border-border/60 bg-muted/30 p-4">
              <Image
                src="/step1-carbs-insulin.png"
                alt="糖質を食べる→血糖値上昇→インスリン分泌の流れ"
                width={600}
                height={300}
                className="h-auto w-full"
              />
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-border/60 bg-card p-4">
                <div className="mb-2 font-semibold text-foreground">
                  1. 糖質を食べる
                </div>
                <p className="text-sm text-muted-foreground">
                  ごはん、パン、麺、甘い飲み物などを食べると、消化されて
                  <strong className="text-foreground">血糖（グルコース）</strong>が増えます。
                </p>
              </div>

              <div className="rounded-lg border border-border/60 bg-card p-4">
                <div className="mb-2 font-semibold text-foreground">
                  2. インスリンが出る
                </div>
                <p className="text-sm text-muted-foreground">
                  血糖を処理するために<strong className="text-foreground">インスリン</strong>
                  というホルモンが分泌されます。
                </p>
              </div>

              <div className="rounded-lg border border-border/60 bg-card p-4">
                <div className="mb-2 font-semibold text-foreground">
                  3. エネルギーとして使う or 貯蔵
                </div>
                <p className="text-sm text-muted-foreground">
                  細胞は血糖をエネルギーに変換。余った分は
                  <strong className="text-foreground">グリコーゲン</strong>として貯蔵され、
                  さらに余ると<strong className="text-foreground">脂肪</strong>になります。
                </p>
              </div>
            </div>
          </div>

          {/* 具体例 */}
          <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
            <div className="mb-2 text-sm font-medium text-primary">具体例</div>
            <p className="text-foreground">
              <strong>昼に牛丼＋ジュース</strong>を食べると…
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              → 血糖が上がる → インスリンが多く出る → その日の活動エネルギーは主に糖でまかなう
              → 余った分は脂肪として貯蔵されやすい
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 糖質を減らすと */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <div className="mb-4 text-center text-sm font-medium text-primary">
            STEP 2
          </div>
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            糖質を減らすと何が起きる？
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
            糖質を1日20〜50g以下に制限すると、体の中で変化が始まります。
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg border border-border/60 bg-card p-4">
                <div className="mb-2 font-semibold text-foreground">
                  1. 血糖が上がりにくくなる
                </div>
                <p className="text-sm text-muted-foreground">
                  糖質の摂取が減るので、血糖値の急上昇が起きにくくなります。
                </p>
              </div>

              <div className="rounded-lg border border-border/60 bg-card p-4">
                <div className="mb-2 font-semibold text-foreground">
                  2. インスリンが下がる
                </div>
                <p className="text-sm text-muted-foreground">
                  血糖が低いのでインスリンの分泌も減ります。
                  これが脂肪燃焼モードへの切り替えスイッチになります。
                </p>
              </div>

              <div className="rounded-lg border border-border/60 bg-card p-4">
                <div className="mb-2 font-semibold text-foreground">
                  3. 貯蔵糖（グリコーゲン）を使い始める
                </div>
                <p className="text-sm text-muted-foreground">
                  体は肝臓や筋肉に貯めていたグリコーゲンを使い始めます。
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-xl border border-border/60 bg-muted/30 p-4">
              <Image
                src="/step2-glycogen-water.png"
                alt="グリコーゲンと水分が抜けて体重が減る"
                width={600}
                height={300}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* 重要ポイント */}
          <div className="mt-8 rounded-xl border border-accent/30 bg-accent/10 p-6">
            <div className="mb-2 text-sm font-medium text-accent-foreground">重要ポイント</div>
            <p className="font-medium text-foreground">
              グリコーゲンは水とセットで貯蔵されています
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              だから最初の数日で体重がストンと落ちることがありますが、
              <strong className="text-foreground">脂肪が一気に減ったというより、水分も抜けている</strong>
              ことが多いです。ケト開始2〜3日で-1.5kgは珍しくありません。
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: ケトーシス */}
      <section className="border-t border-border/60 bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <div className="mb-4 text-center text-sm font-medium text-primary">
            STEP 3
          </div>
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            ケトーシス：脂肪をエネルギーに変える
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
            糖質制限が続くと、体は脂肪を分解してエネルギーを作り始めます。
          </p>

          <div className="mb-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-card p-6 text-center">
              <div className="mx-auto mb-3 h-16 w-16">
                <Image
                  src="/icon-fat-breakdown.png"
                  alt="脂肪を分解"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mb-1 font-semibold text-foreground">脂肪を分解</div>
              <p className="text-sm text-muted-foreground">
                体脂肪＋食事脂肪を分解して脂肪酸を作る
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-6 text-center">
              <div className="mx-auto mb-3 h-16 w-16">
                <Image
                  src="/icon-ketone-generation.png"
                  alt="ケトン体を生成"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mb-1 font-semibold text-foreground">ケトン体を生成</div>
              <p className="text-sm text-muted-foreground">
                肝臓が脂肪酸からケトン体（β-ヒドロキシ酪酸など）を作る
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-6 text-center">
              <div className="mx-auto mb-3 h-16 w-16">
                <Image
                  src="/icon-energy-use.png"
                  alt="エネルギーとして使う"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mb-1 font-semibold text-foreground">エネルギーとして使う</div>
              <p className="text-sm text-muted-foreground">
                脳や筋肉がケトン体や脂肪酸をエネルギーとして利用
              </p>
            </div>
          </div>

          {/* イメージ */}
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <div className="mb-3 font-semibold text-foreground">イメージで理解する</div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-muted/50 p-4">
                <div className="mb-1 text-sm font-medium text-muted-foreground">通常モード</div>
                <p className="text-foreground">
                  ガソリン（糖）中心で走る車
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <div className="mb-1 text-sm font-medium text-primary">ケトモード</div>
                <p className="text-foreground">
                  電気（脂肪）＋予備燃料（ケトン）で走れるハイブリッド車
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: なぜ痩せやすい？ */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            なぜケトで痩せやすくなる？
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
            痩せやすくなる理由は1つではなく、複数の要因が組み合わさっています。
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                A
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                インスリンが下がりやすい
              </h3>
              <p className="text-sm text-muted-foreground">
                インスリンは「貯蔵モード」を強めるホルモン。
                糖質が少ないと脂肪を貯める方向に引っ張られにくくなります。
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                B
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                食欲が落ちやすい
              </h3>
              <p className="text-sm text-muted-foreground">
                ケトン体が出る＋血糖の乱高下が減る＋タンパク質が増える。
                「間食したい」「甘いの欲しい」が減る人が多いです。
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                C
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                食事がシンプルになる
              </h3>
              <p className="text-sm text-muted-foreground">
                自然と加工食品（パン・お菓子・ジュース）が減り、
                タンパク質・脂質中心に。結果、摂取カロリーが下がることが多いです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 具体的な食事例 */}
      <section className="border-t border-border/60 bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            同じ満足感でも体の反応が違う
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
            具体的な食事例で比較してみましょう。
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 普通の食事 */}
            <div className="rounded-xl border border-border/60 bg-card overflow-hidden">
              <div className="bg-muted/50 px-6 py-3">
                <div className="font-semibold text-foreground">普通の昼食</div>
              </div>
              <div className="p-6">
                <div className="mb-4 text-lg font-medium text-foreground">
                  おにぎり2個 + 唐揚げ
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>→ 糖が多め</li>
                  <li>→ インスリンが上がる</li>
                  <li>→ 午後に眠くなる人も</li>
                  <li>→ 2-3時間後にお腹が減りやすい</li>
                </ul>
              </div>
            </div>

            {/* ケトの食事 */}
            <div className="rounded-xl border border-primary/40 bg-card overflow-hidden">
              <div className="bg-primary/10 px-6 py-3">
                <div className="font-semibold text-primary">ケトの昼食</div>
              </div>
              <div className="p-6">
                <div className="mb-4 text-lg font-medium text-foreground">
                  ステーキ200g + サラダ + チーズ
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>→ 糖が少ない</li>
                  <li>→ 脂肪酸＋ケトンが回る</li>
                  <li>→ 血糖値が安定</li>
                  <li>→ 腹持ちが長い人が多い</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 飲み物の例 */}
          <div className="mt-8 rounded-xl border border-border/60 bg-card p-6">
            <div className="mb-4 font-semibold text-foreground">飲み物も重要</div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg bg-destructive/10 p-3">
                <span className="text-destructive">×</span>
                <div>
                  <div className="text-sm font-medium text-foreground">砂糖入りカフェラテ</div>
                  <div className="text-xs text-muted-foreground">糖質が多く、ケトを邪魔しやすい</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-accent/10 p-3">
                <span className="text-primary">○</span>
                <div>
                  <div className="text-sm font-medium text-foreground">無糖コーヒー / お茶</div>
                  <div className="text-xs text-muted-foreground">糖質ほぼゼロ、ケトを邪魔しない</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: ケトフルー */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            ケト開始直後に起きやすいこと
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
            最初の数日〜1週間は「ケトフルー」と呼ばれる症状が出ることがあります。
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 症状 */}
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">よくある症状</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  <span>だるい、疲れやすい</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  <span>頭がぼんやりする</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  <span>筋トレで力が出ない</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                  <span>頭痛がする</span>
                </li>
              </ul>
              <div className="mt-4 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
                原因：糖が減った＋水分と一緒に塩分（電解質）も抜けやすい
              </div>
            </div>

            {/* 対策 */}
            <div className="rounded-xl border border-primary/40 bg-primary/5 p-6">
              <h3 className="mb-4 font-semibold text-foreground">対策</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-primary">○</span>
                  <span><strong>水分</strong>をしっかり摂る（1日2L以上）</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-primary">○</span>
                  <span><strong>塩分</strong>を意識して摂る（味噌汁、塩など）</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-primary">○</span>
                  <span><strong>カリウム</strong>（アボカド、ほうれん草）</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-primary">○</span>
                  <span><strong>マグネシウム</strong>（ナッツ、海藻）</span>
                </li>
              </ul>
              <div className="mt-4 rounded-lg bg-card p-3 text-sm text-muted-foreground">
                通常1〜2週間で体が慣れて楽になります
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: 食べていいもの・避けるもの */}
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

          {/* 注意点 */}
          <div className="mt-8 rounded-xl border border-accent/30 bg-accent/10 p-6">
            <div className="mb-2 font-semibold text-foreground">糖質が紛れやすい罠</div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">調味料：</strong>ケチャップ、ソース、みりん
              </div>
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">加工肉：</strong>ウインナー、ハム（つなぎに注意）
              </div>
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">ナッツ：</strong>食べすぎると糖質も増える
              </div>
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">野菜：</strong>玉ねぎ、ネギは糖質高め
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: PFCバランス */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            ケトジェニックのPFCバランス
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
            一般的な目安です。個人差があるので体調を見ながら調整してください。
          </p>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <div className="mb-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">70-75%</div>
                  <div className="text-sm text-muted-foreground">脂質</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">20-25%</div>
                  <div className="text-sm text-muted-foreground">タンパク質</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">5-10%</div>
                  <div className="text-sm text-muted-foreground">糖質</div>
                </div>
              </div>

              <div className="rounded-lg bg-muted/50 p-4">
                <div className="mb-2 text-sm font-medium text-foreground">1日の糖質目安</div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">20〜50g以下</strong>が標準的な目安。
                  厳格なケトは20g以下、ゆるめなら50g程度。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="border-t border-border/60 bg-card/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">
            参考文献
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-muted-foreground">
            ケトジェニックダイエットに関する日本語の研究論文
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
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <div className="rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 p-6 text-center sm:p-8 md:p-12">
            <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              もっと詳しく知りたい方へ
            </h2>
            <p className="mb-6 text-muted-foreground">
              ケトジェニックの実践的なノウハウを記事で解説しています
            </p>
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              記事一覧を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

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
