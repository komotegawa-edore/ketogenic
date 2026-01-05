"use client";

import { useState, useMemo } from "react";
import type { Metadata } from "next";

// Note: metadata は Server Component でないと使えないため、別ファイルで定義

export default function NetCarbCalculatorPage() {
  const [totalCarbs, setTotalCarbs] = useState<string>("");
  const [fiber, setFiber] = useState<string>("");
  const [sugarAlcohol, setSugarAlcohol] = useState<string>("");

  const netCarbs = useMemo(() => {
    const carbs = parseFloat(totalCarbs) || 0;
    const fiberVal = parseFloat(fiber) || 0;
    const alcoholVal = parseFloat(sugarAlcohol) || 0;
    const result = carbs - fiberVal - alcoholVal;
    return Math.max(0, result);
  }, [totalCarbs, fiber, sugarAlcohol]);

  const hasInput = totalCarbs !== "" || fiber !== "" || sugarAlcohol !== "";

  const handleReset = () => {
    setTotalCarbs("");
    setFiber("");
    setSugarAlcohol("");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
      <header className="mb-8">
        <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
          ネットカーボ計算機
        </h1>
        <p className="text-muted-foreground">
          食品の正味糖質量（ネットカーボ）を計算します
        </p>
      </header>

      {/* 計算フォーム */}
      <div className="mb-8 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="totalCarbs"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              総炭水化物 (g)
            </label>
            <input
              id="totalCarbs"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={totalCarbs}
              onChange={(e) => setTotalCarbs(e.target.value)}
              placeholder="0"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="fiber"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              食物繊維 (g)
            </label>
            <input
              id="fiber"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={fiber}
              onChange={(e) => setFiber(e.target.value)}
              placeholder="0"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="sugarAlcohol"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              糖アルコール (g)
              <span className="ml-2 text-xs font-normal text-muted-foreground">
                任意
              </span>
            </label>
            <input
              id="sugarAlcohol"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={sugarAlcohol}
              onChange={(e) => setSugarAlcohol(e.target.value)}
              placeholder="0"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* 結果表示 */}
        <div className="mt-6 rounded-lg bg-primary/10 p-4">
          <div className="text-sm text-muted-foreground">ネットカーボ</div>
          <div className="mt-1 text-3xl font-bold text-primary sm:text-4xl">
            {netCarbs.toFixed(1)}
            <span className="ml-1 text-lg font-normal">g</span>
          </div>
        </div>

        {/* 計算式表示 */}
        {hasInput && (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            {parseFloat(totalCarbs) || 0}g - {parseFloat(fiber) || 0}g
            {(parseFloat(sugarAlcohol) || 0) > 0 &&
              ` - ${parseFloat(sugarAlcohol)}g`}{" "}
            = {netCarbs.toFixed(1)}g
          </div>
        )}

        {hasInput && (
          <button
            onClick={handleReset}
            className="mt-4 w-full rounded-lg border border-border bg-background py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
          >
            リセット
          </button>
        )}
      </div>

      {/* 解説セクション */}
      <section className="space-y-6">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            ネットカーボとは？
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            ネットカーボ（正味糖質）は、体内で血糖値に影響を与える糖質量の目安です。
            食物繊維や糖アルコールは消化されにくく、血糖値への影響が少ないため、
            総炭水化物から差し引いて計算します。
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            計算式
          </h2>
          <div className="rounded-lg bg-muted/50 p-4">
            <code className="text-sm text-foreground">
              ネットカーボ = 総炭水化物 − 食物繊維 − 糖アルコール
            </code>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            ケトジェニックの目安
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>
                1日のネットカーボ摂取量は<strong className="text-foreground">20〜50g以下</strong>が目安
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>個人差があるため、体調を見ながら調整してください</span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
          <p className="text-xs leading-relaxed text-muted-foreground">
            ※ この計算機は一般的な情報提供を目的としています。
            医療的なアドバイスではありません。
            健康上の懸念がある場合は、医師や栄養士にご相談ください。
          </p>
        </div>
      </section>
    </div>
  );
}
