'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/**
 * Drives the data-on attribute that figures animate from.
 * Starts true so server HTML and no-JS visitors see finished figures.
 * Before first paint every figure drops to its visible default (never empty),
 * then plays when it intersects the viewport, including panels scrolled in sideways.
 */
export function useOn<T extends Element>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(true);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setOn(false);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, on };
}
