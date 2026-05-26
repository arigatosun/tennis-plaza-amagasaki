import type { Metadata } from "next";
import { RecruitHeader } from "@/components/recruit/RecruitHeader";
import { VariantProvider } from "@/components/recruit/VariantProvider";
import {
  FutureRoadmapSection,
  RoadmapOutcomesSection
} from "@/components/recruit/RecruitSections";

export const metadata: Metadata = {
  title: "伴走ロードマップ｜テニスプラザ尼崎（社長デモ用）",
  description:
    "採用LPを入口とした、採用・育成・集客・西宮展開までの伴走ロードマップ。提案デモ専用ページ。",
  robots: { index: false, follow: false }
};

export default function RoadmapPage() {
  return (
    <VariantProvider>
      <RecruitHeader />
      <main>
        <section className="border-b border-ink/10 bg-warm pb-12 pt-16">
          <div className="section-shell">
            <p className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-clay/10 px-4 py-1.5 text-xs font-bold tracking-[0.08em] text-clay">
              社内デモ用 ・ 非公開ページ
            </p>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-[1.45] text-primary sm:text-4xl">
              採用LPの、その先。
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-9 text-ink/74">
              このページは、社長デモ用の補足資料です。求職者向け採用LPとは切り離して、採用・育成・集客・西宮展開までの伴走ロードマップをまとめています。
            </p>
          </div>
        </section>
        <FutureRoadmapSection />
        <RoadmapOutcomesSection />
      </main>
    </VariantProvider>
  );
}
