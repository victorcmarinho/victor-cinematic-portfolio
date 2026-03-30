import React from 'react';
import { useCurrentFrame, spring, useVideoConfig, interpolate } from 'remotion';

export const ExperienceRender: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const experiences = [
    {
      role: 'Engenheiro de software sênior',
      company: 'Reclame AQUI',
      period: '2025 - Presente',
      description: 'Atuando na equipe de desenvolvimento de software do Reclame Aqui com as tecnologias React, Next.js e Node.js;',
    },
    {
      role: 'Engenheiro de software Pleno',
      company: 'Reclame AQUI',
      period: '2022 - 2025',
      description: 'Atuando na equipe de desenvolvimento de software do Reclame Aqui com as tecnologias React, Next.js e Node.js;',
    },
    {
      role: 'Desenvolvedor de front-end Senior',
      company: 'Zappts',
      period: '2021 - 2022',
      description: 'Liderança técnica e desenvolvimento focado em escalabilidade.',
    },
    {
      role: 'Desenvolvedor de front-end',
      company: 'Zappts',
      period: '2020 - 2022',
      description: 'Desenvolvimento e design das soluções white-label de e-commerce e integrações.',
    },
    {
      role: 'Desenvolvedor de front-end',
      company: 'Hipr Sistemas',
      period: '2018 - 2020',
      description: 'Desenvolvimento de interfaces e aplicações front-end.',
    }
  ];

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  return (
    <section className="py-24 w-full max-w-7xl mx-auto">
      <h2
        className="text-3xl md:text-4xl font-bold mb-12 text-[var(--color-text)]"
        style={{ opacity: titleOpacity }}
      >
        Experiência
      </h2>
      <div className="space-y-12 border-l-2 border-[var(--color-border)] ml-4 sm:ml-6 relative">
        {experiences.map((exp, index) => {
          // Stagger each item by 8 frames
          const itemFrame = Math.max(0, frame - 15 - (index * 8));
          const opacity = interpolate(itemFrame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
          const translateY = interpolate(itemFrame, [0, 15], [30, 0], { extrapolateRight: 'clamp' });
          const scale = spring({ frame: itemFrame, fps, config: { damping: 14 } });

          return (
            <div
              key={index}
              className="relative pl-8 sm:pl-10"
              style={{ opacity, transform: `translateY(${translateY}px)` }}
            >
              <div
                className="absolute w-4 h-4 rounded-full bg-[var(--color-primary)] -left-[9px] top-1.5 shadow-sm"
                style={{ transform: `scale(${scale})` }}
              />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {exp.role} <span className="text-[var(--color-primary)]">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-medium text-[var(--color-muted)] mt-1 sm:mt-0 font-mono bg-[var(--color-border)] px-2 py-1 rounded-md">
                  {exp.period}
                </span>
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed">{exp.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
