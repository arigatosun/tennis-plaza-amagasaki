"use client";

import { Magnet } from "@/components/react-bits/Magnet";

type CtaButtonProps = {
  href?: string;
  label: string;
  sectionId: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function CtaButton({
  href = "#entry",
  label,
  sectionId,
  variant = "primary",
  className = ""
}: CtaButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(
      new CustomEvent("recruit_cta_click", {
        detail: {
          cta_label: label,
          section_id: sectionId,
          page_path: window.location.pathname
        }
      })
    );

    window.gtag?.("event", "recruit_cta_click", {
      cta_label: label,
      section_id: sectionId,
      page_path: window.location.pathname
    });
  };

  const styles = {
    primary:
      "bg-tennis text-primary shadow-[0_14px_30px_rgba(15,61,46,0.18)] hover:-translate-y-0.5 hover:shadow-lift",
    secondary:
      "border border-primary/20 bg-white/80 text-primary hover:-translate-y-0.5 hover:border-court hover:bg-white",
    dark:
      "bg-primary text-white shadow-[0_14px_30px_rgba(15,61,46,0.26)] hover:-translate-y-0.5 hover:bg-court"
  };
  const fill = className.includes("w-full") ? "w-full" : "";

  return (
    <Magnet className={className}>
      <a
        className={`relative inline-flex min-h-12 shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-full px-6 text-sm font-black transition before:absolute before:inset-0 before:rounded-full before:border before:border-white/30 before:opacity-60 ${fill} ${styles[variant]}`}
        data-cta-label={label}
        data-section-id={sectionId}
        href={href}
        onClick={handleClick}
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
