type ScrollVelocityProps = {
  items: string[];
  reverse?: boolean;
};

export function ScrollVelocity({ items, reverse = false }: ScrollVelocityProps) {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="scroll-velocity" data-reverse={reverse ? "true" : "false"}>
      <div className="scroll-velocity-track">
        {doubled.map((item, index) => (
          <span className="scroll-velocity-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
