import type { Metadata } from "next";
import { RecruitHeader } from "@/components/recruit/RecruitHeader";
import { VariantProvider } from "@/components/recruit/VariantProvider";
import { PersonaSection } from "@/components/recruit/RecruitSections";

export const metadata: Metadata = {
  title: "採用ターゲット・ペルソナ｜テニスプラザ尼崎（社内デモ用）",
  description:
    "このLPを、どんな人に届けたいのか。採用したい代表的な3人のペルソナ（年齢・経歴・悩み）を可視化した社内デモ用ページ。",
  robots: { index: false, follow: false }
};

export default function PersonaPage() {
  return (
    <VariantProvider>
      <RecruitHeader />
      <main>
        <PersonaSection />
      </main>
    </VariantProvider>
  );
}
