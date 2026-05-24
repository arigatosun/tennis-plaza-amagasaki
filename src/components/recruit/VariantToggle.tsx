"use client";

import { recruitPage } from "@/data/recruit";
import { useVariant, type VariantKey } from "./VariantProvider";

const ORDER: VariantKey[] = ["a", "b"];

type Size = "default" | "compact";

export function VariantToggle({
  size = "default",
  className = ""
}: {
  size?: Size;
  className?: string;
}) {
  const { variant, setVariant, hydrated } = useVariant();

  return (
    <div
      aria-label="デザイン案の切り替え"
      className={`variant-toggle ${size === "compact" ? "variant-toggle--compact" : ""} ${className}`.trim()}
      data-hydrated={hydrated ? "true" : "false"}
      role="tablist"
    >
      {ORDER.map((key) => {
        const meta = recruitPage.variants[key];
        const active = variant === key;
        return (
          <button
            aria-controls="recruit-main"
            aria-selected={active}
            className={`variant-toggle__tab ${active ? "is-active" : ""}`}
            data-key={key}
            key={key}
            onClick={() => setVariant(key)}
            role="tab"
            type="button"
          >
            <span className="variant-toggle__key">{meta.shortLabel}</span>
            <span className="variant-toggle__label">{meta.brandLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
