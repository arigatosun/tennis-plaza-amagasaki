"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { recruitPage } from "@/data/recruit";
import { CtaButton } from "./CtaButton";
import { VariantToggle } from "./VariantToggle";

export function RecruitHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-warm/95 shadow-[0_1px_22px_rgba(15,61,46,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-warm/88">
      <div className="mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <a
          aria-label="テニスプラザ尼崎 採用サイト トップへ"
          className="flex items-center gap-2.5 sm:gap-3"
          href="#top"
        >
          <Image
            alt="テニスプラザ尼崎"
            className="h-7 w-auto sm:h-8"
            height={512}
            priority
            src="/logo.png"
            width={2000}
          />
          <span className="hidden border-l border-ink/15 pl-2.5 text-[10px] font-black uppercase tracking-[0.28em] text-primary/70 sm:inline">
            Recruit
          </span>
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
        <div className="flex items-center gap-2 sm:gap-3">
          <VariantToggle />
          <CtaButton
            className="hidden sm:inline-flex"
            href="/recruit/persona"
            label="まずは見学してみる"
            sectionId="header"
            style={{ backgroundColor: "#FFB900", color: "#264831", boxShadow: "none" }}
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
