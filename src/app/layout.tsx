import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
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
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJp.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
