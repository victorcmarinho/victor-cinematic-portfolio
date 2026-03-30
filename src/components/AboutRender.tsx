import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

export const AboutRender: React.FC = () => {
  const frame = useCurrentFrame();

  const h2Opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const h2Y = interpolate(frame, [0, 20], [20, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  const p1Opacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const p1Y = interpolate(frame, [10, 30], [20, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  const p2Opacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const p2Y = interpolate(frame, [20, 40], [20, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  return (
    <section className="py-24 w-full max-w-7xl mx-auto">
      <h2 
        className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-text)]"
        style={{ opacity: h2Opacity, transform: `translateY(${h2Y}px)` }}
      >
        Sobre Mim
      </h2>
      <div className="max-w-3xl space-y-6 text-lg text-[var(--color-muted)] leading-relaxed">
        <p style={{ opacity: p1Opacity, transform: `translateY(${p1Y}px)` }}>
          Sou um engenheiro de software focado no ecossistema Apple e em tecnologias
          web modernas. Minha paixão é transformar problemas complexos em
          experiências elegantes e intuitivas, seja em uma tela do iPhone ou
          através de uma aplicação web robusta, entregando impacto real desde o
          primeiro commit até grandes escalas para mais de 1 milhão de usuários.
        </p>
        <p style={{ opacity: p2Opacity, transform: `translateY(${p2Y}px)` }}>
          Com anos de experiência em engenharia de sistemas e desenvolvimento
          frontend, combino conhecimento técnico profundo arquitetural e de performance. Nos
          últimos anos, tenho liderado projetos mobile de missão crítica.
        </p>
      </div>
    </section>
  );
};
