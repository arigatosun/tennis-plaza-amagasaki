"use client";

import RBSplitText from "@/components/reactbits/SplitText";

type SectionHeadingProps = {
  /** Retained for call-site compatibility; no longer rendered. */
  eyebrow?: string;
  /** Retained for call-site compatibility; no longer rendered. */
  eyebrowB?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  light = false
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <RBSplitText
        className={`display-heading whitespace-pre-line text-balance text-3xl leading-tight sm:text-4xl ${
          light ? "!text-white" : ""
        }`}
        delay={20}
        duration={0.7}
        ease="power3.out"
        from={{ opacity: 0, y: 18 }}
        splitType="chars"
        tag="h2"
        text={title}
        textAlign={align}
        to={{ opacity: 1, y: 0 }}
      />
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
