import type { Metadata } from "next";
import { jobPostingJsonLd } from "@/data/recruit";
import { RecruitHeader } from "@/components/recruit/RecruitHeader";
import { ScoreProgress } from "@/components/recruit/ScoreProgress";
import { VariantProvider } from "@/components/recruit/VariantProvider";
import {
  AIRoleplaySection,
  CareerPathSection,
  DayFlowSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  IdealPersonSection,
  InsightSection,
  JobDescriptionSection,
  MayanoMessageSection,
  MobileStickyCta,
  RequirementSection,
  SelectionFlowSection,
  TrainingSection,
  TrialToEnrollmentSection,
  ValueSection,
  VisitPreviewSection,
  WhyNowSection,
  PhilosophySection
} from "@/components/recruit/RecruitSections";

export const metadata: Metadata = {
  title: "採用情報｜テニスプラザ尼崎｜好きだったテニスが、誰かの人生に少し触れる仕事になる",
  description:
    "テニスプラザ尼崎では、ジュニアから大人まで幅広い生徒と関わるコーチを募集しています。コーチ未経験でも研修あり。好きだったテニスを、自分のペースで人と関わる時間に変えていきませんか。",
  openGraph: {
    title: "好きだったテニスが、誰かの人生に少し触れる仕事になる。",
    description:
      "テニス経験を活かしながら、自分のペースで人と関わる時間を大切にしたい方へ。",
    type: "website"
  }
};

export default function RecruitPage() {
  return (
    <VariantProvider>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingJsonLd)
        }}
        type="application/ld+json"
      />
      <ScoreProgress />
      <RecruitHeader />
      <main id="recruit-main">
        <HeroSection />
        <WhyNowSection />
        <InsightSection />
        <IdealPersonSection />
        <ValueSection />
        <PhilosophySection />
        <TrialToEnrollmentSection />
        <MayanoMessageSection />
        <JobDescriptionSection />
        <TrainingSection />
        <CareerPathSection />
        <AIRoleplaySection />
        <DayFlowSection />
        <RequirementSection />
        <VisitPreviewSection />
        <SelectionFlowSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <MobileStickyCta />
    </VariantProvider>
  );
}
