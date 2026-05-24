import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  Inter_Tight,
  JetBrains_Mono,
  Noto_Sans_JP,
  Noto_Serif_JP
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["700", "800", "900"],
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap"
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap"
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: ["500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "採用情報｜テニスプラザ尼崎",
  description:
    "テニスプラザ尼崎では、ジュニアから大人まで幅広い生徒に向き合うコーチを募集しています。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-variant="b" lang="ja">
      <body
        className={`${inter.variable} ${interTight.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${notoSansJp.variable} ${notoSerifJp.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
