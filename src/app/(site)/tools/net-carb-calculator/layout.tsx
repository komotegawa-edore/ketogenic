import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ネットカーボ計算機",
  description:
    "食品のネットカーボ（正味糖質量）を簡単に計算。ケトジェニックダイエットに必須の糖質管理ツール。総炭水化物から食物繊維と糖アルコールを引いて正味糖質を算出します。",
  openGraph: {
    title: "ネットカーボ計算機 | Ketolier",
    description:
      "食品のネットカーボ（正味糖質量）を簡単に計算。ケトジェニックダイエットの糖質管理に。",
  },
};

export default function NetCarbCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
