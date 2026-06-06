import { useInView } from '../hooks/useInView';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

const origins: Record<string, string> = {
  up:    'translateY(32px)',
  left:  'translateX(-28px)',
  right: 'translateX(28px)',
};

export function RevealCard({ children, delay = 0, className, direction = 'up' }: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0,0)' : origins[direction],
        transition: `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
