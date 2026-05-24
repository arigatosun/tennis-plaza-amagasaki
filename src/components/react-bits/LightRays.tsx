type LightRaysProps = {
  variant?: "hero" | "dark";
};

export function LightRays({ variant = "hero" }: LightRaysProps) {
  return (
    <div aria-hidden className={`light-rays light-rays-${variant}`}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
