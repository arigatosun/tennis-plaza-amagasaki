"use client";

import { useState } from "react";

type Spark = {
  id: number;
  x: number;
  y: number;
};

export function ClickSpark({ children }: { children: React.ReactNode }) {
  const [sparks, setSparks] = useState<Spark[]>([]);

  return (
    <div
      className="click-spark"
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const id = Date.now();
        setSparks((current) => [
          ...current,
          { id, x: event.clientX - rect.left, y: event.clientY - rect.top }
        ]);
        window.setTimeout(() => {
          setSparks((current) => current.filter((spark) => spark.id !== id));
        }, 680);
      }}
    >
      {children}
      {sparks.map((spark) => (
        <span
          className="spark"
          key={spark.id}
          style={{ left: spark.x, top: spark.y }}
        />
      ))}
    </div>
  );
}
