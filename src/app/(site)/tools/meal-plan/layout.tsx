import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ケト食事プラン",
  description:
    "あなたの体型と目標に合わせた1週間分のケトジェニック食事プランを自動作成。朝食・昼食・夕食・間食の具体的なメニューとカロリー・PFCバランスを提案します。",
  openGraph: {
    title: "ケト食事プラン | Ketolier",
    description:
      "あなたに合った1週間分のケトジェニック食事プランを自動作成。",
  },
};

export default function MealPlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
