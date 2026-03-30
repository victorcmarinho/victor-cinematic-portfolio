import React from 'react';
import { Img } from 'remotion';
import perfilUrl from '../assets/perfil.webp';

export interface HeroRenderProps {
  wireframeMode?: boolean;
  profileScale?: number;
  textOpacity?: number;
  glassOpacity?: number;
}

export const HeroRender: React.FC<HeroRenderProps> = ({
  wireframeMode = false,
  profileScale = 1,
  textOpacity = 1,
  glassOpacity = 0,
}) => {
  // Styles based on mode
  const containerClass = wireframeMode 
    ? "border-2 border-dashed border-[var(--color-primary)] bg-transparent"
    : "border-2 border-transparent bg-transparent";

  const imgClass = wireframeMode
    ? "border-4 border-dashed border-[var(--color-primary)] opacity-50 bg-transparent object-cover"
    : "border-4 border-[var(--color-primary)] shadow-xl bg-[var(--color-border)] object-cover";

  const textStyle: React.CSSProperties = {
    opacity: textOpacity,
    transform: `translateY(${(1 - textOpacity) * 40}px)`,
  };

  const glassStyle: React.CSSProperties = {
    backgroundColor: `rgba(9, 9, 11, ${0.6 * glassOpacity})`,
    backdropFilter: `blur(${16 * glassOpacity}px)`,
    WebkitBackdropFilter: `blur(${16 * glassOpacity}px)`,
    border: glassOpacity > 0 ? `1px solid rgba(255, 255, 255, ${0.1 * glassOpacity})` : '1px solid transparent',
    boxShadow: glassOpacity > 0 ? `0 8px 32px rgba(0, 0, 0, ${0.5 * glassOpacity})` : 'none',
    borderRadius: '24px',
    padding: '40px',
  };

  return (
    <section
      className={`py-24 md:py-32 flex flex-col justify-center min-h-[80vh] w-full max-w-7xl mx-auto ${containerClass}`}
      style={glassOpacity > 0 ? glassStyle : {}}
      aria-label="Apresentação"
    >
      <div className="space-y-6">
        <div style={{ transform: `scale(${profileScale})`, transformOrigin: 'left center' }}>
          <Img
            src={perfilUrl}
            alt="Victor Marinho"
            className={`w-24 h-24 md:w-32 md:h-32 rounded-full ${imgClass}`}
            style={{ 
              opacity: profileScale,
            }}
          />
        </div>
        
        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance text-[var(--color-text)]"
          style={textStyle}
        >
          Olá, eu sou{" "}
          <span className="text-[var(--color-primary)]">Victor C. Marinho</span>
        </h1>
        <p
          className="text-xl md:text-2xl text-[var(--color-muted)] max-w-2xl text-balance font-light leading-relaxed"
          style={textStyle}
        >
          Engenheiro de Software apaixonado por criar produtos digitais escaláveis e de alto impacto focado em ecossistema Apple.
        </p>
        
        <nav
          className="pt-8 flex items-center gap-4"
          style={textStyle}
        >
          <div
            className={`inline-flex items-center justify-center px-6 py-3 border font-medium rounded-full ${
              wireframeMode 
                ? "border-dashed border-[var(--color-primary)] text-[var(--color-primary)]"
                : "border-transparent text-[var(--color-bg)] bg-[var(--color-text)]"
            }`}
          >
             Entre em contato
          </div>
          <div
            className={`inline-flex items-center justify-center px-6 py-3 border font-medium rounded-full ${
               wireframeMode
                 ? "border-dashed border-[var(--color-text)] text-[var(--color-text)]"
                 : "border-[var(--color-border)] text-[var(--color-text)] bg-transparent"
            }`}
          >
            Saber mais
          </div>
        </nav>
      </div>
    </section>
  );
};
