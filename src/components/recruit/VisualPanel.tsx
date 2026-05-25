type VisualPanelProps = {
  variant: "hero" | "coach" | "staff" | "training" | "roleplay";
  label: string;
};

const variantStyles = {
  hero: {
    image: "/images/recruit/hero-main.jpg",
    badge: "On court",
    card: "コートの上での出会いが、毎日を少しずつ変えていく。"
  },
  coach: {
    image: "/images/recruit/philosophy-watch.jpg",
    badge: "Reading the court",
    card: "一人ひとりを見て、伸ばし方を選ぶ。"
  },
  staff: {
    image: "/images/recruit/mayano-courtside.jpg",
    badge: "Courtside",
    card: "コートの外側の会話が、続けたい気持ちを育てる。"
  },
  training: {
    image: "/images/recruit/adult-lesson.jpg",
    badge: "Learning here",
    card: "最初から全部できなくていい。少しずつ覚えていく。"
  },
  roleplay: {
    image: "/images/recruit/facility/facility-57395.jpg",
    badge: "Future vision",
    card: "難しい場面を、一人で抱えなくていい仕組みへ。"
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
