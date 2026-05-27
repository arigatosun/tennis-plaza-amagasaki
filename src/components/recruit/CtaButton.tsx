"use client";

import type { CSSProperties } from "react";
import { Magnet } from "@/components/react-bits/Magnet";
import { useVariant } from "./VariantProvider";

type CtaButtonProps = {
  href?: string;
  label: string;
  sectionId: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  /** 指定すると、テキストボタンの代わりにこの画像をボタンとして表示する */
  imageSrc?: string;
  /** ボタン本体(<a>)へのインラインスタイル上書き（色のカスタム指定などに使用）*/
  style?: CSSProperties;
};

export function CtaButton({
  href = "#entry",
  label,
  sectionId,
  variant = "primary",
  className = "",
  imageSrc,
  style
}: CtaButtonProps) {
  const { variant: themeVariant } = useVariant();

  const handleClick = () => {
    window.dispatchEvent(
      new CustomEvent("recruit_cta_click", {
        detail: {
          cta_label: label,
          section_id: sectionId,
          theme_variant: themeVariant,
          page_path: window.location.pathname
        }
      })
    );

    window.gtag?.("event", "recruit_cta_click", {
      cta_label: label,
      section_id: sectionId,
      theme_variant: themeVariant,
      page_path: window.location.pathname
    });
  };

  const stylesA = {
    primary:
      "bg-tennis text-primary shadow-[0_14px_30px_rgba(15,61,46,0.18)] hover:-translate-y-0.5 hover:shadow-lift",
    secondary:
      "border border-primary/20 bg-white/80 text-primary hover:-translate-y-0.5 hover:border-court hover:bg-white",
    dark:
      "bg-primary text-white shadow-[0_14px_30px_rgba(15,61,46,0.26)] hover:-translate-y-0.5 hover:bg-court"
  };

  // Variant B CTAs: Ink ベタ + Tennis Yellow の1px下線、または白カード+Coral
  const stylesB = {
    primary:
      "bg-ink text-warm border-b-2 border-tennis hover:-translate-y-0.5 hover:bg-primary",
    secondary:
      "border border-ink/20 bg-warm text-ink hover:-translate-y-0.5 hover:border-clay hover:text-clay",
    dark:
      "bg-deep text-warm hover:-translate-y-0.5 hover:bg-primary"
  };

  const styles = themeVariant === "b" ? stylesB : stylesA;
  const radius = themeVariant === "b" ? "rounded-sm" : "rounded-full";
  const fill = className.includes("w-full") ? "w-full" : "";

  // 画像ボタン: デザイナー支給の画像をそのままボタンとして表示する
  if (imageSrc) {
    return (
      <Magnet className={className}>
        <a
          className={`inline-flex shrink-0 transition-transform duration-300 hover:-translate-y-0.5 ${fill}`}
          data-cta-label={label}
          data-section-id={sectionId}
          href={href}
          onClick={handleClick}
          style={style}
        >
          <img
            alt={label}
            className="h-16 w-auto sm:h-[4.5rem]"
            src={imageSrc}
          />
        </a>
      </Magnet>
    );
  }

  return (
    <Magnet className={className}>
      <a
        className={`relative inline-flex min-h-12 shrink-0 items-center justify-center overflow-hidden whitespace-nowrap ${radius} px-6 text-sm font-bold transition ${fill} ${styles[variant]}`}
        data-cta-label={label}
        data-section-id={sectionId}
        href={href}
        onClick={handleClick}
        style={style}
      >
        <span className="relative">{label}</span>
      </a>
    </Magnet>
  );
}

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params: Record<string, string>
    ) => void;
  }
}
