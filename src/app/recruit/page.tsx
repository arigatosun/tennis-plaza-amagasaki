import type { Metadata } from "next";
import { jobPostingJsonLd } from "@/data/recruit";
import { RecruitHeader } from "@/components/recruit/RecruitHeader";
import {
  AIRoleplaySection,
  BrandConceptSection,
  CareerPathSection,
  DayFlowSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  InsightSection,
  JobDescriptionSection,
  MayanoMessageSection,
  MobileStickyCta,
  PersonSection,
  PhilosophySection,
  RequirementSection,
  SelectionFlowSection,
  TrainingSection,
  ValueSection
} from "@/components/recruit/RecruitSections";

export const metadata: Metadata = {
  title: "採用情報｜テニスプラザ尼崎｜テニスを教えるだけではなく、スクールを育てる仕事",
  description:
    "テニスプラザ尼崎では、ジュニアから大人まで幅広い生徒に向き合うコーチを募集しています。コーチ未経験でも研修あり。テニス経験を、教育・接客・運営に広げるキャリアへ。",
  openGraph: {
    title: "テニスを教えるだけではなく、スクールを育てる仕事。",
    description:
      "テニス経験を活かしながら、教育・接客・入会案内・運営まで学べるコーチ採用情報。",
    type: "website"
  }
};

export default function RecruitPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingJsonLd)
        }}
        type="application/ld+json"
      />
      <RecruitHeader />
      <main>
        <HeroSection />
        <InsightSection />
        <BrandConceptSection />
        <ValueSection />
        <PhilosophySection />
        <MayanoMessageSection />
        <JobDescriptionSection />
        <DayFlowSection />
        <CareerPathSection />
        <TrainingSection />
        <AIRoleplaySection />
        <PersonSection />
        <RequirementSection />
        <SelectionFlowSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <MobileStickyCta />
    </>
  );
}
