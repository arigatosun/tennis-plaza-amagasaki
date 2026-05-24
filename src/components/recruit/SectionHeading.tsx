type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-black uppercase tracking-[0.2em] ${
            light ? "text-tennis" : "text-court"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`whitespace-pre-line text-balance text-3xl font-black leading-tight sm:text-4xl ${
          light ? "text-white" : "text-primary"
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
