import type { Metadata } from "next";
import { jobPostingJsonLd } from "@/data/recruit";
import { RecruitHeader } from "@/components/recruit/RecruitHeader";
import { ScoreProgress } from "@/components/recruit/ScoreProgress";
import { VariantProvider } from "@/components/recruit/VariantProvider";
import {
  CareerReframeSection,
  DailyWorkSection,
  DayFlowSection,
  FaqSection,
  FinalCtaSection,
  FirstStepSection,
  HeroSection,
  InsightSection,
  MobileStickyCta,
  PeopleCultureSection,
  PhilosophySection,
  RequirementsSection,
  SelectionFlowSection,
  VisitPreviewSection,
  WorkplaceSection,
  YarigaiSection
} from "@/components/recruit/RecruitSections";

export const metadata: Metadata = {
  title: "採用情報｜テニスプラザ尼崎｜好きなテニスを、誰かの成長に変える仕事",
  description:
    "テニスプラザ尼崎では、ジュニアから大人まで幅広い生徒と関わるコーチを募集しています。はじめは見学やレッスン補助から、少しずつ現場に慣れていけます。いきなり応募ではなく、カジュアル面談・見学からでも歓迎です。",
  openGraph: {
    title: "好きなテニスを、誰かの成長に変える仕事。",
    description:
      "テニスを通じて、人の成長や挑戦を支える仕事。はじめは見学やレッスン補助から、少しずつ慣れていけます。",
    type: "website"
  }
};

export default function RecruitPage() {
  // Google しごと検索の必須項目（掲載日・掲載終了日）を動的に付与する。
  // 固定値だと陳腐化するため、ビルド/レンダリング時の日付を基準に自動更新する。
  const now = new Date();
  const datePosted = now.toISOString().slice(0, 10);
  const validThrough = new Date(now.getTime() + 120 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const jobPostingLd = { ...jobPostingJsonLd, datePosted, validThrough };

  return (
    <VariantProvider>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingLd)
        }}
        type="application/ld+json"
      />
      <ScoreProgress />
      <RecruitHeader />
      <main id="recruit-main">
        <HeroSection />
        <InsightSection />
        <CareerReframeSection />
        <YarigaiSection />
        <DailyWorkSection />
        <DayFlowSection />
        <FirstStepSection />
        <WorkplaceSection />
        <PeopleCultureSection />
        <PhilosophySection />
        <RequirementsSection />
        <VisitPreviewSection />
        <SelectionFlowSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <MobileStickyCta />
    </VariantProvider>
  );
}
