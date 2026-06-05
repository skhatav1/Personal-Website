import { useInView } from '../hooks/useInView';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function RevealCard({ children, delay = 0, className }: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal-card ${className ?? ''}`}
      style={{ animationDelay: `${delay}ms` }}
      data-visible={inView}
    >
      {children}
    </div>
  );
}
