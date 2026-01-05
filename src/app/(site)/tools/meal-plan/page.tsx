"use client";

import { useState } from "react";

type Gender = "male" | "female";
type ActivityLevel = "sedentary" | "light" | "moderate" | "active";

interface UserInput {
  gender: Gender;
  age: string;
  height: string;
  weight: string;
  goalWeight: string;
  activityLevel: ActivityLevel;
}

interface MacroTargets {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

interface Meal {
  name: string;
  description: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

interface DayPlan {
  day: string;
  meals: {
    breakfast: Meal;
    lunch: Meal;
    dinner: Meal;
    snack: Meal;
  };
}

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
};

const activityLabels: Record<ActivityLevel, string> = {
  sedentary: "ほぼ運動しない",
  light: "週1-2回軽い運動",
  moderate: "週3-5回運動",
  active: "毎日運動",
};

// ケト向け食事例データ
const mealOptions = {
  breakfast: [
    { name: "卵とベーコン", description: "スクランブルエッグ3個、ベーコン3枚、アボカド半分", calories: 550, protein: 28, fat: 45, carbs: 4 },
    { name: "チーズオムレツ", description: "卵3個のオムレツ、チーズたっぷり、バター焼きほうれん草", calories: 520, protein: 30, fat: 42, carbs: 3 },
    { name: "サーモンとクリームチーズ", description: "スモークサーモン、クリームチーズ、きゅうり", calories: 450, protein: 25, fat: 36, carbs: 3 },
    { name: "目玉焼きとソーセージ", description: "目玉焼き2個、ソーセージ2本、トマト", calories: 480, protein: 24, fat: 40, carbs: 5 },
    { name: "アボカドエッグボート", description: "アボカドに卵を落として焼く、ベーコンビッツ", calories: 500, protein: 22, fat: 43, carbs: 6 },
    { name: "ギリシャヨーグルト", description: "無糖ギリシャヨーグルト、くるみ、MCTオイル", calories: 380, protein: 20, fat: 30, carbs: 6 },
    { name: "ベーコンエッグマフィン", description: "卵2個、ベーコン、チーズ（パンなし）", calories: 460, protein: 26, fat: 38, carbs: 2 },
  ],
  lunch: [
    { name: "チキンサラダ", description: "鶏もも肉150g、葉野菜、オリーブオイルドレッシング、チーズ", calories: 600, protein: 40, fat: 45, carbs: 6 },
    { name: "豚バラ肉の炒め物", description: "豚バラ150g、もやし、ニラ、卵", calories: 650, protein: 35, fat: 52, carbs: 5 },
    { name: "サバの塩焼き定食", description: "サバ1切れ、ほうれん草のおひたし、味噌汁（具だくさん）", calories: 550, protein: 32, fat: 42, carbs: 6 },
    { name: "牛肉とブロッコリー", description: "牛肉150g、ブロッコリー、バター", calories: 580, protein: 38, fat: 44, carbs: 5 },
    { name: "ツナとアボカドボウル", description: "ツナ缶、アボカド、マヨネーズ、レタス", calories: 520, protein: 30, fat: 42, carbs: 6 },
    { name: "鶏むね肉のチーズ焼き", description: "鶏むね150g、チーズ、アスパラガス", calories: 500, protein: 45, fat: 32, carbs: 4 },
    { name: "豚しゃぶサラダ", description: "豚ロース150g、レタス、きゅうり、ごまドレッシング", calories: 550, protein: 35, fat: 42, carbs: 5 },
  ],
  dinner: [
    { name: "ステーキ", description: "牛ステーキ200g、バター、付け合わせサラダ", calories: 700, protein: 50, fat: 52, carbs: 3 },
    { name: "鶏もも肉のグリル", description: "鶏もも肉200g、皮パリパリ、蒸し野菜", calories: 620, protein: 45, fat: 46, carbs: 5 },
    { name: "サーモンのムニエル", description: "サーモン200g、バター、アスパラガス", calories: 650, protein: 42, fat: 50, carbs: 4 },
    { name: "豚の生姜焼き", description: "豚ロース200g、キャベツの千切り（少量）", calories: 600, protein: 40, fat: 45, carbs: 6 },
    { name: "手羽先の唐揚げ", description: "手羽先6本、マヨネーズ、レタス", calories: 680, protein: 38, fat: 55, carbs: 4 },
    { name: "ラム肉のソテー", description: "ラム肉200g、ローズマリー、オリーブオイル", calories: 650, protein: 45, fat: 50, carbs: 2 },
    { name: "鯖の味噌煮", description: "鯖1切れ（味噌少なめ）、小松菜、卵焼き", calories: 580, protein: 35, fat: 44, carbs: 6 },
  ],
  snack: [
    { name: "チーズ", description: "プロセスチーズ2個", calories: 150, protein: 8, fat: 12, carbs: 1 },
    { name: "ナッツミックス", description: "アーモンド、くるみ 30g", calories: 180, protein: 5, fat: 16, carbs: 3 },
    { name: "ゆで卵", description: "ゆで卵2個、塩", calories: 140, protein: 12, fat: 10, carbs: 1 },
    { name: "アボカド", description: "アボカド半分、塩とオリーブオイル", calories: 160, protein: 2, fat: 15, carbs: 4 },
    { name: "サラミ", description: "サラミスライス 30g", calories: 130, protein: 7, fat: 11, carbs: 1 },
    { name: "クリームチーズ", description: "クリームチーズ 30g、セロリスティック", calories: 120, protein: 3, fat: 11, carbs: 2 },
    { name: "するめ", description: "するめ 20g", calories: 70, protein: 14, fat: 1, carbs: 0 },
  ],
};

function calculateBMR(gender: Gender, weight: number, height: number, age: number): number {
  // Mifflin-St Jeor formula
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

function calculateTargets(input: UserInput): MacroTargets | null {
  const weight = parseFloat(input.weight);
  const height = parseFloat(input.height);
  const age = parseInt(input.age);
  const goalWeight = parseFloat(input.goalWeight);

  if (!weight || !height || !age || !goalWeight) return null;

  const bmr = calculateBMR(input.gender, weight, height, age);
  const tdee = bmr * activityMultipliers[input.activityLevel];

  // カロリー設定（減量の場合は-500kcal、維持・増量の場合は調整）
  let targetCalories: number;
  if (goalWeight < weight) {
    targetCalories = Math.max(tdee - 500, input.gender === "male" ? 1500 : 1200);
  } else if (goalWeight > weight) {
    targetCalories = tdee + 300;
  } else {
    targetCalories = tdee;
  }

  // ケトジェニックマクロ: 脂質70%, タンパク質25%, 糖質5%
  const fatCalories = targetCalories * 0.70;
  const proteinCalories = targetCalories * 0.25;
  const carbCalories = targetCalories * 0.05;

  return {
    calories: Math.round(targetCalories),
    fat: Math.round(fatCalories / 9), // 脂質1g = 9kcal
    protein: Math.round(proteinCalories / 4), // タンパク質1g = 4kcal
    carbs: Math.round(carbCalories / 4), // 糖質1g = 4kcal
  };
}

function generateWeekPlan(targets: MacroTargets): DayPlan[] {
  const days = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", "日曜日"];
  const plan: DayPlan[] = [];

  for (let i = 0; i < 7; i++) {
    plan.push({
      day: days[i],
      meals: {
        breakfast: mealOptions.breakfast[i % mealOptions.breakfast.length],
        lunch: mealOptions.lunch[i % mealOptions.lunch.length],
        dinner: mealOptions.dinner[i % mealOptions.dinner.length],
        snack: mealOptions.snack[i % mealOptions.snack.length],
      },
    });
  }

  return plan;
}

function MealCard({ meal, label }: { meal: Meal; label: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background p-3">
      <div className="mb-1 text-xs text-muted-foreground">{label}</div>
      <div className="font-medium text-foreground">{meal.name}</div>
      <div className="mt-1 text-sm text-muted-foreground">{meal.description}</div>
      <div className="mt-2 flex gap-3 text-xs text-muted-foreground">
        <span>{meal.calories}kcal</span>
        <span>P:{meal.protein}g</span>
        <span>F:{meal.fat}g</span>
        <span>C:{meal.carbs}g</span>
      </div>
    </div>
  );
}

export default function MealPlanPage() {
  const [input, setInput] = useState<UserInput>({
    gender: "male",
    age: "",
    height: "",
    weight: "",
    goalWeight: "",
    activityLevel: "sedentary",
  });
  const [targets, setTargets] = useState<MacroTargets | null>(null);
  const [weekPlan, setWeekPlan] = useState<DayPlan[] | null>(null);
  const [selectedDay, setSelectedDay] = useState(0);

  const handleCalculate = () => {
    const calculated = calculateTargets(input);
    if (calculated) {
      setTargets(calculated);
      setWeekPlan(generateWeekPlan(calculated));
      setSelectedDay(0);
    }
  };

  const handleReset = () => {
    setInput({
      gender: "male",
      age: "",
      height: "",
      weight: "",
      goalWeight: "",
      activityLevel: "sedentary",
    });
    setTargets(null);
    setWeekPlan(null);
  };

  const handlePrint = () => {
    if (!targets || !weekPlan) return;

    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>ケト食事プラン - Ketolier</title>
        <style>
          body { font-family: sans-serif; padding: 20px; color: #333; }
          h1 { text-align: center; margin-bottom: 5px; }
          .subtitle { text-align: center; color: #666; margin-bottom: 20px; }
          .section { border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 15px; }
          .section h2 { margin: 0 0 10px 0; font-size: 16px; }
          .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
          .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; text-align: center; }
          .day { border: 1px solid #eee; border-radius: 6px; padding: 10px; margin-bottom: 10px; }
          .day h3 { margin: 0 0 8px 0; font-size: 14px; }
          .meal { font-size: 12px; margin-bottom: 4px; }
          .meal-label { color: #666; }
          .kcal { color: #888; font-size: 11px; }
          .stat-value { font-size: 24px; font-weight: bold; }
          .stat-label { font-size: 11px; color: #666; }
          .footer { margin-top: 20px; font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 10px; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <h1>ケト食事プラン</h1>
        <p class="subtitle">Ketolier</p>

        <div class="section">
          <h2>あなたの情報</h2>
          <div class="grid">
            <div>性別: ${input.gender === "male" ? "男性" : "女性"}</div>
            <div>年齢: ${input.age}歳</div>
            <div>身長: ${input.height}cm</div>
            <div>現在体重: ${input.weight}kg</div>
            <div>目標体重: ${input.goalWeight}kg</div>
            <div>運動量: ${activityLabels[input.activityLevel]}</div>
          </div>
        </div>

        <div class="section">
          <h2>1日の目標</h2>
          <div class="grid-4">
            <div>
              <div class="stat-value">${targets.calories}</div>
              <div class="stat-label">kcal</div>
            </div>
            <div>
              <div class="stat-value">${targets.protein}g</div>
              <div class="stat-label">タンパク質</div>
            </div>
            <div>
              <div class="stat-value">${targets.fat}g</div>
              <div class="stat-label">脂質</div>
            </div>
            <div>
              <div class="stat-value">${targets.carbs}g</div>
              <div class="stat-label">糖質</div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>1週間の食事プラン</h2>
          ${weekPlan.map(day => `
            <div class="day">
              <h3>${day.day}</h3>
              <div class="meal"><span class="meal-label">朝食:</span> ${day.meals.breakfast.name} <span class="kcal">(${day.meals.breakfast.calories}kcal)</span></div>
              <div class="meal"><span class="meal-label">昼食:</span> ${day.meals.lunch.name} <span class="kcal">(${day.meals.lunch.calories}kcal)</span></div>
              <div class="meal"><span class="meal-label">夕食:</span> ${day.meals.dinner.name} <span class="kcal">(${day.meals.dinner.calories}kcal)</span></div>
              <div class="meal"><span class="meal-label">間食:</span> ${day.meals.snack.name} <span class="kcal">(${day.meals.snack.calories}kcal)</span></div>
            </div>
          `).join('')}
        </div>

        <div class="footer">
          <p>※ この食事プランは一般的な目安です。医療的なアドバイスではありません。</p>
          <p>作成日: ${new Date().toLocaleDateString("ja-JP")}</p>
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const isValid = input.age && input.height && input.weight && input.goalWeight;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
      <header className="mb-8">
        <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
          ケト食事プラン
        </h1>
        <p className="text-muted-foreground">
          あなたに合った1週間の食事例を提案します
        </p>
      </header>

      {!targets ? (
        /* 入力フォーム */
        <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
          <div className="space-y-4">
            {/* 性別 */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                性別
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setInput({ ...input, gender: "male" })}
                  className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                    input.gender === "male"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-muted-foreground hover:bg-muted"
                  }`}
                >
                  男性
                </button>
                <button
                  type="button"
                  onClick={() => setInput({ ...input, gender: "female" })}
                  className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                    input.gender === "female"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-muted-foreground hover:bg-muted"
                  }`}
                >
                  女性
                </button>
              </div>
            </div>

            {/* 年齢 */}
            <div>
              <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-foreground">
                年齢
              </label>
              <div className="relative">
                <input
                  id="age"
                  type="number"
                  inputMode="numeric"
                  min="15"
                  max="100"
                  value={input.age}
                  onChange={(e) => setInput({ ...input, age: e.target.value })}
                  placeholder="30"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 pr-12 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">歳</span>
              </div>
            </div>

            {/* 身長 */}
            <div>
              <label htmlFor="height" className="mb-1.5 block text-sm font-medium text-foreground">
                身長
              </label>
              <div className="relative">
                <input
                  id="height"
                  type="number"
                  inputMode="decimal"
                  min="100"
                  max="250"
                  step="0.1"
                  value={input.height}
                  onChange={(e) => setInput({ ...input, height: e.target.value })}
                  placeholder="170"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 pr-12 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">cm</span>
              </div>
            </div>

            {/* 現在の体重 */}
            <div>
              <label htmlFor="weight" className="mb-1.5 block text-sm font-medium text-foreground">
                現在の体重
              </label>
              <div className="relative">
                <input
                  id="weight"
                  type="number"
                  inputMode="decimal"
                  min="30"
                  max="200"
                  step="0.1"
                  value={input.weight}
                  onChange={(e) => setInput({ ...input, weight: e.target.value })}
                  placeholder="70"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 pr-12 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">kg</span>
              </div>
            </div>

            {/* 目標体重 */}
            <div>
              <label htmlFor="goalWeight" className="mb-1.5 block text-sm font-medium text-foreground">
                目標体重
              </label>
              <div className="relative">
                <input
                  id="goalWeight"
                  type="number"
                  inputMode="decimal"
                  min="30"
                  max="200"
                  step="0.1"
                  value={input.goalWeight}
                  onChange={(e) => setInput({ ...input, goalWeight: e.target.value })}
                  placeholder="65"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 pr-12 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">kg</span>
              </div>
            </div>

            {/* 活動レベル */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                普段の運動量
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(activityLabels) as ActivityLevel[]).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setInput({ ...input, activityLevel: level })}
                    className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                      input.activityLevel === level
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {activityLabels[level]}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleCalculate}
              disabled={!isValid}
              className="mt-2 w-full rounded-lg bg-primary py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              食事プランを作成
            </button>
          </div>
        </div>
      ) : (
        /* 結果表示 */
        <div className="space-y-6">
          {/* 目標値サマリー */}
          <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              あなたの1日の目標
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{targets.calories}</div>
                <div className="text-xs text-muted-foreground">kcal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{targets.protein}g</div>
                <div className="text-xs text-muted-foreground">タンパク質</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{targets.fat}g</div>
                <div className="text-xs text-muted-foreground">脂質</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{targets.carbs}g</div>
                <div className="text-xs text-muted-foreground">糖質</div>
              </div>
            </div>
          </div>

          {/* 1週間プラン */}
          {weekPlan && (
            <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                1週間の食事プラン
              </h2>

              {/* 曜日タブ */}
              <div className="mb-4 flex gap-1 overflow-x-auto pb-2">
                {weekPlan.map((day, index) => (
                  <button
                    key={day.day}
                    onClick={() => setSelectedDay(index)}
                    className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      selectedDay === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {day.day.slice(0, 1)}
                  </button>
                ))}
              </div>

              {/* 選択した日の食事 */}
              <div className="space-y-3">
                <div className="mb-2 text-sm font-medium text-foreground">
                  {weekPlan[selectedDay].day}
                </div>
                <MealCard meal={weekPlan[selectedDay].meals.breakfast} label="朝食" />
                <MealCard meal={weekPlan[selectedDay].meals.lunch} label="昼食" />
                <MealCard meal={weekPlan[selectedDay].meals.dinner} label="夕食" />
                <MealCard meal={weekPlan[selectedDay].meals.snack} label="間食" />

                {/* 1日の合計 */}
                <div className="mt-4 rounded-lg bg-muted/50 p-3">
                  <div className="text-sm font-medium text-foreground">この日の合計</div>
                  <div className="mt-1 flex gap-4 text-sm text-muted-foreground">
                    <span>
                      {weekPlan[selectedDay].meals.breakfast.calories +
                        weekPlan[selectedDay].meals.lunch.calories +
                        weekPlan[selectedDay].meals.dinner.calories +
                        weekPlan[selectedDay].meals.snack.calories}
                      kcal
                    </span>
                    <span>
                      P:
                      {weekPlan[selectedDay].meals.breakfast.protein +
                        weekPlan[selectedDay].meals.lunch.protein +
                        weekPlan[selectedDay].meals.dinner.protein +
                        weekPlan[selectedDay].meals.snack.protein}
                      g
                    </span>
                    <span>
                      F:
                      {weekPlan[selectedDay].meals.breakfast.fat +
                        weekPlan[selectedDay].meals.lunch.fat +
                        weekPlan[selectedDay].meals.dinner.fat +
                        weekPlan[selectedDay].meals.snack.fat}
                      g
                    </span>
                    <span>
                      C:
                      {weekPlan[selectedDay].meals.breakfast.carbs +
                        weekPlan[selectedDay].meals.lunch.carbs +
                        weekPlan[selectedDay].meals.dinner.carbs +
                        weekPlan[selectedDay].meals.snack.carbs}
                      g
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex-1 rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              PDFで保存
            </button>
            <button
              onClick={handleReset}
              className="flex-1 rounded-lg border border-border bg-background py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
            >
              やり直す
            </button>
          </div>

          <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
            <p className="text-xs leading-relaxed text-muted-foreground">
              ※ この食事プランは一般的な目安です。医療的なアドバイスではありません。
              持病がある方や妊娠中の方は、医師に相談してから始めてください。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
