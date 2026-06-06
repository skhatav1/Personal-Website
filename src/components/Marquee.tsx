interface Props {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

export function Marquee({ items, direction = 'left', speed = 35 }: Props) {
  const doubled = [...items, ...items];
  const duration = `${(items.length * speed)}s`;

  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex min-w-full shrink-0 gap-3 py-1 ${direction === 'right' ? 'animate-marquee-right' : 'animate-marquee'}`}
        style={{ animationDuration: duration }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-300 ring-1 ring-white/10"
          >
            {item}
          </span>
        ))}
      </div>
      <div
        className={`flex min-w-full shrink-0 gap-3 py-1 ${direction === 'right' ? 'animate-marquee-right' : 'animate-marquee'}`}
        style={{ animationDuration: duration }}
        aria-hidden
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-300 ring-1 ring-white/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
