"use client";

import { useEffect, useState } from "react";

const SCORE_STEPS = ["LOVE", "15", "30", "40", "GAME"] as const;

export function ScoreProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const next = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      setProgress(next);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const stepIndex = Math.min(
    SCORE_STEPS.length - 1,
    Math.floor(progress * (SCORE_STEPS.length - 1) + 0.0001)
  );
  const score = SCORE_STEPS[stepIndex];

  return (
    <div aria-hidden className="score-progress">
      <div className="score-progress__track">
        <span
          className="score-progress__fill"
          style={{ transform: `scaleX(${progress})` }}
        />
        {SCORE_STEPS.map((_, i) => (
          <span
            className="score-progress__tick"
            key={i}
            style={{ left: `${(i / (SCORE_STEPS.length - 1)) * 100}%` }}
          />
        ))}
      </div>
      <span className="score-progress__score">{score}</span>
    </div>
  );
}
