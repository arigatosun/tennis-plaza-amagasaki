import type { Metadata } from "next";
import { jobPostingJsonLd } from "@/data/recruit";
import { RecruitHeader } from "@/components/recruit/RecruitHeader";
import { VariantProvider } from "@/components/recruit/VariantProvider";
import {
  AIRoleplaySection,
  CareerPathSection,
  DayFlowSection,
  FaqSection,
  FinalCtaSection,
  FutureRoadmapSection,
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
  title: "採用情報｜テニスプラザ尼崎｜テニスを教えるだけではなく、スクールを育てる仕事",
  description:
    "テニスプラザ尼崎では、ジュニアから大人まで幅広い生徒に向き合うコーチを募集しています。コーチ未経験でも研修あり。テニス経験を、教育・接客・入会案内・運営に広げるキャリアへ。",
  openGraph: {
    title: "テニスを教えるだけではなく、スクールを育てる仕事。",
    description:
      "テニス経験を活かしながら、教育・接客・入会案内・運営まで学べるコーチ採用情報。",
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
        <FutureRoadmapSection />
      </main>
      <MobileStickyCta />
    </VariantProvider>
  );
}
