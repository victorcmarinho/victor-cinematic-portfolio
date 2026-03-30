import React from 'react';
import { Img, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import perfilUrl from '../assets/perfil.webp';

export const HeroRender: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Staggering timings
  const imgPop = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  
  const titleOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const titleY = interpolate(frame, [15, 35], [20, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  const pOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const pY = interpolate(frame, [30, 50], [20, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  const btnOpacity = interpolate(frame, [45, 65], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const btnY = interpolate(frame, [45, 65], [20, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  return (
    <section className="py-24 md:py-32 flex flex-col justify-center min-h-[800px] w-full max-w-7xl mx-auto">
      <div className="space-y-6">
        <div style={{ transform: `scale(${imgPop})`, transformOrigin: 'left center' }}>
          <Img
            src={perfilUrl}
            alt="Victor Marinho"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[var(--color-primary)] shadow-xl bg-[var(--color-bg)] object-cover"
          />
        </div>
        
        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance text-[var(--color-text)]"
          style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)` }}
        >
          Olá, eu sou{" "}
          <span className="text-[var(--color-primary)]">Victor C. Marinho</span>
        </h1>
        
        <p
          className="text-xl md:text-2xl text-[var(--color-muted)] max-w-2xl text-balance font-light leading-relaxed"
          style={{ opacity: pOpacity, transform: `translateY(${pY}px)` }}
        >
          Engenheiro de Software apaixonado por criar produtos digitais escaláveis e de alto impacto focado em ecossistema Apple.
        </p>
        
        <nav
          className="pt-8 flex items-center gap-4"
          style={{ opacity: btnOpacity, transform: `translateY(${btnY}px)` }}
        >
          <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-[var(--color-bg)] bg-[var(--color-text)] font-medium rounded-full shadow-md">
             Entre em contato
          </div>
          <div className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] bg-[var(--color-bg)] font-medium rounded-full shadow-sm">
            Saber mais
          </div>
        </nav>
      </div>
    </section>
  );
};
