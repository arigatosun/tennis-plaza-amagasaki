type VisualPanelProps = {
  variant: "hero" | "coach" | "staff" | "training" | "roleplay";
  label: string;
};

const variantStyles = {
  hero: {
    image: "/images/recruit/hero-court.svg",
    badge: "Junior lesson",
    card: "生徒の表情を見ながら、声かけを変える。"
  },
  coach: {
    image: "/images/recruit/coach-scene.svg",
    badge: "Coaching philosophy",
    card: "一人ひとりに合わせて、伸ばし方を変える。"
  },
  staff: {
    image: "/images/recruit/staff-scene.svg",
    badge: "Courtside support",
    card: "体験後の不安に、現場の言葉で向き合う。"
  },
  training: {
    image: "/images/recruit/training-scene.svg",
    badge: "Training",
    card: "育てる前提で、レッスンも対応も少しずつ学ぶ。"
  },
  roleplay: {
    image: "/images/recruit/roleplay-scene.svg",
    badge: "Future vision",
    card: "保護者対応や入会案内を、事前に練習できる仕組みへ。"
  }
} as const;

export function VisualPanel({ variant, label }: VisualPanelProps) {
  const visual = variantStyles[variant];

  return (
    <figure className="tilt-card relative overflow-hidden rounded-lg bg-primary shadow-soft">
      <img
        alt={label}
        className="aspect-[4/3] h-full w-full object-cover"
        src={visual.image}
      />
      <figcaption className="absolute inset-x-4 bottom-4 rounded-lg border border-white/30 bg-white/88 p-4 shadow-soft backdrop-blur">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-court">
          {visual.badge}
        </p>
        <p className="mt-1 text-sm font-bold leading-6 text-primary">{visual.card}</p>
      </figcaption>
    </figure>
  );
}
