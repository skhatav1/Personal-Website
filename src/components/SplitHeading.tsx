import { useInView } from '../hooks/useInView';

interface Props {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
}

export function SplitHeading({ text, className = '', as: Tag = 'h2', delay = 0 }: Props) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const words = text.split(' ');

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            className="inline-block"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(110%)',
              opacity: inView ? 1 : 0,
              transition: `transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay + i * 60}ms, opacity 400ms ease ${delay + i * 60}ms`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
