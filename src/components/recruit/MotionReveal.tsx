"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type MotionRevealVariant = "up" | "scale" | "rise-scale" | "left" | "right" | "clip";

type MotionRevealProps = {
  children: ReactNode;
  variant?: MotionRevealVariant;
  /** delay in seconds */
  delay?: number;
  className?: string;
};

export function MotionReveal({
  children,
  variant = "up",
  delay = 0,
  className = ""
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => {
      setVisible(true);
      observer.disconnect();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reveal when entering view, OR when already scrolled past (fast flings
        // can leave an element above the viewport before IO catches it — never
        // leave content permanently hidden).
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          reveal();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);

    // Safety net: if observers never fire (rare), ensure content is visible.
    const fallback = window.setTimeout(() => {
      if (node.getBoundingClientRect().top < window.innerHeight) {
        reveal();
      }
    }, 2600);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      className={`reveal reveal--${variant} ${visible ? "is-in" : ""} ${className}`}
      ref={ref}
      style={{ "--rv-delay": `${Math.round(delay * 1000)}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
