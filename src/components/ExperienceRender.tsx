import React from 'react';

export interface ExperienceRenderProps {
  opacity?: number;
  translateY?: number;
}

const experiences = [
  {
    role: "Engenheiro de Software Sênior (iOS)",
    company: "Reclame AQUI",
    duration: "mar de 2025 - o momento",
    description: "Atuando como desenvolvedor iOS no time de aplicativos focados no consumidor, criando e mantendo experiências mobile de alto impacto para milhões de usuários.",
  },
  {
    role: "Engenheiro de Software Pleno (iOS)",
    company: "Reclame AQUI",
    duration: "nov de 2022 - mar de 2025",
    description: "Atuando como desenvolvedor iOS no time de aplicativos focados no consumidor, criando e mantendo experiências mobile de alto impacto para milhões de usuários.",
  },
  {
    role: "Desenvolvedor Front-end Sênior",
    company: "Zappts",
    duration: "mai de 2021 - nov de 2022",
    description: "Fui Tech Lead em um projeto para a Getnet Brasil e atuei como Front-end Sênior em projetos para a Porto Seguro. Conduzi equipes, defini arquiteturas e garanti a entrega técnica em clientes Enterprise.",
  },
  {
    role: "Desenvolvedor Front-end / Mobile Pleno",
    company: "Zappts",
    duration: "mai de 2020 - nov de 2022",
    description: "Desenvolvimento de soluções web e mobile (Angular, React Native) escaláveis para grandes clientes (Enterprise).",
  },
  {
    role: "Desenvolvedor Front-end / Mobile Júnior",
    company: "Hipr Sistemas",
    duration: "out de 2018 - mai de 2020",
    description: "Desenvolvimento do App Hipr Vendas em React Native, e do ERP (módulo web) e PDV utilizando Angular 7+, focando em estabilidade e performance no varejo.",
  },
  {
    role: "Desenvolvedor Web Autônomo",
    company: "Autônomo",
    duration: "ago de 2017 - mai de 2020",
    description: "Desenvolvimento full-stack de land pages, sistemas web e e-commerces, atendendo clientes direta e indiretamente, lidando com requisitos de negócios e implantação.",
  },
];

export const ExperienceRender: React.FC<ExperienceRenderProps> = ({
  opacity = 1,
  translateY = 0,
}) => {
  return (
    <section
      id="experience"
      className="py-20 border-t border-[var(--color-border)] w-full max-w-7xl mx-auto"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
      aria-labelledby="experience-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start px-8">
        <div className="md:col-span-4">
          <h2
            id="experience-heading"
            className="text-3xl font-bold tracking-tight text-[var(--color-text)]"
          >
            Experiência
          </h2>
        </div>
        <div className="md:col-span-8 space-y-12">
          {experiences.map((exp, index) => (
            <article key={index} className="group relative flex flex-col gap-2 pb-1">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {exp.role}
              </h3>
              <div className="flex items-center justify-between text-sm text-[var(--color-muted)]">
                <span className="font-medium text-[var(--color-primary)]">
                  {exp.company}
                </span>
                <span>{exp.duration}</span>
              </div>
              <p className="mt-2 text-[var(--color-muted)] leading-relaxed font-light text-base">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
