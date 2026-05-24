type BlurTextProps = {
  text: string;
  className?: string;
  as?: "h2" | "p" | "span";
};

export function BlurText({ text, className = "", as: Tag = "span" }: BlurTextProps) {
  return (
    <Tag className={`blur-text ${className}`}>
      {text.split("\n").map((line, index) => (
        <span
          className="blur-text-line"
          key={`${line}-${index}`}
          style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}
        >
          {line}
        </span>
      ))}
    </Tag>
  );
}
