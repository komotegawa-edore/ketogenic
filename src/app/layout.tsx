import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ketolier（ケトリエ）| ケトジェニックダイエットの情報メディア",
    template: "%s | Ketolier（ケトリエ）",
  },
  description:
    "ケトジェニックダイエットの正しい知識と実践方法を解説。糖質制限の基礎から食事例、便利なツールまで。",
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
