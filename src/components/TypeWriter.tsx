import { useEffect, useState } from 'react';

interface Props {
  phrases: string[];
  className?: string;
}

export function TypeWriter({ phrases, className }: Props) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const current = phrases[phraseIndex];
    let delay: number;

    if (!deleting && charIndex <= current.length) {
      setText(current.slice(0, charIndex));
      delay = charIndex === current.length ? 2200 : 55;
      const t = setTimeout(() => {
        if (charIndex === current.length) setDeleting(true);
        else setCharIndex((c) => c + 1);
      }, delay);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex >= 0) {
      setText(current.slice(0, charIndex));
      delay = 30;
      const t = setTimeout(() => {
        if (charIndex === 0) {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }, delay);
      return () => clearTimeout(t);
    }
  }, [charIndex, deleting, phraseIndex, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-cyan-300" />
    </span>
  );
}
