import { useEffect, useState } from 'react';

const lines = [
  { text: 'func handleSession(w http.ResponseWriter, r *http.Request) {', color: 'text-violet-300' },
  { text: '  token := validateCookie(r)', color: 'text-slate-300' },
  { text: '  user, err := db.GetUserByToken(token)', color: 'text-slate-300' },
  { text: '  if err != nil { unauthorized(w); return }', color: 'text-rose-300' },
  { text: '  json.NewEncoder(w).Encode(user.Profile())', color: 'text-cyan-300' },
  { text: '}', color: 'text-violet-300' },
];

export function TerminalSnippet() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 320);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07101f] shadow-[0_0_40px_rgba(34,211,238,0.07)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-2 text-xs font-mono text-slate-500">session.go — Velocified LMS</span>
      </div>
      <div className="p-4 font-mono text-[13px] leading-6">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${line.color} animate-fade-up`}>
            <span className="mr-4 select-none text-slate-600">{i + 1}</span>
            {line.text}
          </div>
        ))}
        {visibleLines < lines.length && (
          <span className="inline-block h-4 w-2 animate-blink bg-cyan-300" />
        )}
      </div>
    </div>
  );
}
