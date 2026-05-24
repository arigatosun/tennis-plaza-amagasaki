"use client";

import { useVariant } from "./VariantProvider";

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowB?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  eyebrowB,
  title,
  description,
  align = "left",
  light = false
}: SectionHeadingProps) {
  const { variant } = useVariant();
  const eyebrowText = variant === "b" && eyebrowB ? eyebrowB : eyebrow;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrowText ? (
        <p className={`eyebrow mb-3 ${light ? "!text-tennis" : ""}`}>{eyebrowText}</p>
      ) : null}
      <h2
        className={`display-heading whitespace-pre-line text-balance text-3xl leading-tight sm:text-4xl ${
          light ? "!text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            light ? "text-white/78" : "text-ink/72"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
