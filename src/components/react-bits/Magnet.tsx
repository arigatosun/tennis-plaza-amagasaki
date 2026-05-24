"use client";

import { useRef } from "react";

type MagnetProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function Magnet({ children, className = "", strength = 0.18 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <div
      className={`magnet ${className || "inline-flex"}`}
      onMouseLeave={reset}
      onMouseMove={(event) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * strength;
        const y = (event.clientY - rect.top - rect.height / 2) * strength;
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }}
      ref={ref}
    >
      {children}
    </div>
  );
}
