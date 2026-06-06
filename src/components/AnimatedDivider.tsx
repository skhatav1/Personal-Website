import { useInView } from '../hooks/useInView';

export function AnimatedDivider() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="mx-5 my-0 lg:mx-8">
      <div className="mx-auto max-w-6xl">
        <div
          className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
          style={{
            transform: inView ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 900ms cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </div>
    </div>
  );
}
