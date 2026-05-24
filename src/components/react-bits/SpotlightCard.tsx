"use client";

import { useRef } from "react";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`spotlight-card ${className}`}
      onMouseMove={(event) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--x", `${event.clientX - rect.left}px`);
        ref.current.style.setProperty("--y", `${event.clientY - rect.top}px`);
      }}
      ref={ref}
    >
      {children}
    </div>
  );
}
