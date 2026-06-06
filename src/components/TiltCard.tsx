import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className = '' }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `perspective(900px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) scale3d(1.02,1.02,1.02)`;
    card.style.boxShadow = `${-dx * 12}px ${dy * 12}px 40px rgba(34,211,238,0.15)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    card.style.boxShadow = '';
  };

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-100 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
