import React from 'react';

export interface AboutRenderProps {
  opacity?: number;
  translateY?: number;
}

export const AboutRender: React.FC<AboutRenderProps> = ({
  opacity = 1,
  translateY = 0,
}) => {
  return (
    <section
      id="about"
      className="py-20 border-t border-[var(--color-border)] w-full max-w-7xl mx-auto"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start px-8">
        <div className="md:col-span-5">
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-[var(--color-text)]"
          >
            Sobre Mim
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-[var(--color-muted)] leading-relaxed text-lg font-light">
          <p>
            Sou graduado em Ciência da Computação, com uma sólida formação acadêmica e prática que sustenta minha carreira como desenvolvedor.
          </p>
          <p>
            Com mais de 7 anos de experiência no desenvolvimento de software, atuei em diversas frentes da engenharia, desde a criação de interfaces de usuário imersivas e intuitivas até o desenvolvimento e a arquitetura de sistemas no back-end. Já colaborei tanto com startups inovadoras quanto com grandes empresas corporativas, adaptando-me a diferentes ambientes e escalas de projeto.
          </p>
          <p>
            Atualmente, minha especialidade reside na criação de aplicações para o ecossistema Apple. Além de focar na excelência técnica durante o desenvolvimento, possuo ampla experiência com todo o ciclo de vida do software no ambiente Apple, incluindo conhecimentos profundos sobre os processos de submissão, diretrizes e distribuição na App Store e TestFlight.
          </p>
          <p className="font-medium text-[var(--color-text)]">
            Também possuo certificação Scrum Fundamentals, o que reforça meu compromisso e habilidade em trabalhar de forma eficiente em ambientes ágeis.
          </p>
        </div>
      </div>
    </section>
  );
};
