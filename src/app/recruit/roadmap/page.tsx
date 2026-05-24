import type { Metadata } from "next";
import { RecruitHeader } from "@/components/recruit/RecruitHeader";
import { VariantProvider } from "@/components/recruit/VariantProvider";
import { FutureRoadmapSection } from "@/components/recruit/RecruitSections";

export const metadata: Metadata = {
  title: "Future Roadmap｜テニスプラザ尼崎（社長デモ用）",
  description:
    "採用LPを入口とした、採用・育成・集客・西宮展開までの伴走ロードマップ。提案デモ専用ページ。",
  robots: { index: false, follow: false }
};

export default function RoadmapPage() {
  return (
    <VariantProvider>
      <RecruitHeader />
      <main>
        <section className="bg-warm py-16">
          <div className="section-shell">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-clay">
              For Internal Demo — Not Public
            </p>
            <h1 className="mt-3 font-serif text-3xl font-semibold leading-[1.5] text-primary sm:text-4xl">
              採用LPの、その先。
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-9 text-ink/74">
              このページは、社長デモ用の補足スライドです。求職者向け採用LPからは切り離して、採用・育成・集客・西宮展開までの伴走ロードマップを別途置いています。
            </p>
          </div>
        </section>
        <FutureRoadmapSection />
      </main>
    </VariantProvider>
  );
}
