"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

export type VariantKey = "a" | "b";

type VariantContextValue = {
  variant: VariantKey;
  setVariant: (next: VariantKey) => void;
  hydrated: boolean;
};

const STORAGE_KEY = "tpa-recruit-variant";
const DEFAULT_VARIANT: VariantKey = "b";

const VariantContext = createContext<VariantContextValue | null>(null);

export function VariantProvider({ children }: { children: ReactNode }) {
  const [variant, setVariantState] = useState<VariantKey>(DEFAULT_VARIANT);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "a" || stored === "b") {
        setVariantState(stored);
      }
    } catch {
      // ignore storage access errors (private mode, etc.)
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.variant = variant;
  }, [variant]);

  const setVariant = useCallback((next: VariantKey) => {
    setVariantState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    window.dispatchEvent(
      new CustomEvent("recruit_variant_change", {
        detail: { variant: next }
      })
    );
  }, []);

  const value = useMemo<VariantContextValue>(
    () => ({ variant, setVariant, hydrated }),
    [variant, setVariant, hydrated]
  );

  return <VariantContext.Provider value={value}>{children}</VariantContext.Provider>;
}

export function useVariant() {
  const ctx = useContext(VariantContext);
  if (!ctx) {
    throw new Error("useVariant must be used within VariantProvider");
  }
  return ctx;
}
