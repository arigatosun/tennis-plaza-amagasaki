type SplitTextProps = {
  text: string;
  className?: string;
  delayStep?: number;
  as?: "h1" | "h2" | "p" | "span";
};

export function SplitText({
  text,
  className = "",
  delayStep = 42,
  as: Tag = "span"
}: SplitTextProps) {
  const lines = text.split("\n");
  let wordIndex = 0;

  return (
    <Tag className={`split-text ${className}`}>
      {lines.map((line, lineIndex) => (
        <span className="split-text-line" key={`${line}-${lineIndex}`}>
          {line.split(" ").map((word) => {
            const delay = wordIndex * delayStep;
            wordIndex += 1;
            return (
              <span
                className="split-text-word"
                key={`${word}-${wordIndex}`}
                style={{ "--delay": `${delay}ms` } as React.CSSProperties}
              >
                {word}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
