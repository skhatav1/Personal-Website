import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: string, active: boolean, duration = 1400) {
  const [display, setDisplay] = useState('0');
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    const numeric = parseFloat(target.replace(/[^0-9.]/g, ''));
    const suffix = target.replace(/[0-9.]/g, '');
    if (isNaN(numeric)) { setDisplay(target); return; }

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = numeric * eased;
      const formatted = Number.isInteger(numeric)
        ? Math.round(value).toString()
        : value.toFixed(1);
      setDisplay(formatted + suffix);
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, target, duration]);

  return display;
}
