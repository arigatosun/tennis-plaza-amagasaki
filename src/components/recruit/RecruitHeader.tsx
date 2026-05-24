"use client";

import { Dumbbell, Menu } from "lucide-react";
import { recruitPage } from "@/data/recruit";
import { CtaButton } from "./CtaButton";
import { VariantToggle } from "./VariantToggle";

export function RecruitHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-white/84 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-3">
        <a className="flex items-center gap-3 font-black text-primary" href="#top">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-tennis">
            <Dumbbell aria-hidden size={18} />
          </span>
          <span className="hidden text-sm sm:inline">Tennis Plaza Amagasaki Recruit</span>
          <span className="text-sm sm:hidden">採用情報</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-bold text-ink/70 lg:flex">
          {recruitPage.nav.map((item) => (
            <a
              className="b-underline-coral transition hover:text-primary"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <VariantToggle />
          <CtaButton
            className="hidden sm:inline-flex"
            label="まずは見学してみる"
            sectionId="header"
          />
          <CtaButton
            className="px-4 sm:hidden"
            label="見学する"
            sectionId="header"
          />
          <button
            aria-label="メニュー"
            className="grid size-10 place-items-center rounded-full border border-primary/10 text-primary lg:hidden"
            type="button"
          >
            <Menu aria-hidden size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
