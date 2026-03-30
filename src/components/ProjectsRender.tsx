import React from 'react';
import { Img } from 'remotion';

export interface ProjectsRenderProps {
  opacity?: number;
  translateY?: number;
}

const projects = [
  {
    name: "EasierDrop",
    description: "O Easier Drop é um aplicativo leve e intuitivo que facilita a transferência de arquivos entre pastas no seu computador (macOS).",
    url: "https://github.com/victorcmarinho/EasierDrop",
    language: "Dart",
  },
  {
    name: "victor-cinematic-portfolio",
    description: "projeto de cinematic do meu portifólio construído com Remotion",
    url: "https://github.com/victorcmarinho/victor-cinematic-portfolio",
    language: "TypeScript",
  },
  {
    name: "app-notifylab",
    description: "App NotifyLab para laboratório de notificações push no iOS.",
    url: "https://github.com/victorcmarinho/app-notifylab",
    language: "Dart",
  },
  {
    name: "victorcmarinho-app",
    description: "Meu portfólio pessoal e hub central da minha identidade web.",
    url: "https://github.com/victorcmarinho/victorcmarinho-app",
    language: "Astro",
  }
];

export const ProjectsRender: React.FC<ProjectsRenderProps> = ({
  opacity = 1,
  translateY = 0,
}) => {
  return (
    <section
      id="projects"
      className="py-20 border-t border-[var(--color-border)] w-full max-w-7xl mx-auto"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
      aria-labelledby="projects-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start px-8">
        <div className="md:col-span-4">
          <div>
            <h2
              id="projects-heading"
              className="text-3xl font-bold tracking-tight text-[var(--color-text)]"
            >
              Projetos em Destaque
            </h2>
            <p className="mt-4 text-[var(--color-muted)] font-light text-sm">
              Alguns dos meus trabalhos e experimentos recentes focados em mobile e web.
            </p>
          </div>
        </div>
        <ul className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <li key={index}>
              <div
                className="group block p-6 h-full rounded-2xl border border-[var(--color-border)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {project.name}
                  </h3>
                  <svg
                    className="h-5 w-5 text-[var(--color-muted)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="text-sm font-light text-[var(--color-muted)] mb-4 h-16 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex items-center text-xs font-medium text-[var(--color-muted)]">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full mr-2 bg-[var(--color-primary)] opacity-80"
                    aria-hidden="true"
                  />
                  {project.language}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="mt-16 flex flex-col gap-4 px-8"
        aria-label="Gráfico de contribuições do Github"
      >
        <div className="flex items-center gap-4">
          <h3 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider">
            Contribuições Open Source
          </h3>
          <div className="h-px flex-1 bg-[var(--color-border)]"></div>
        </div>
        <div className="rounded-xl p-4 md:p-8 bg-[var(--color-border)]/30 backdrop-blur-sm border border-[var(--color-border)] flex justify-center w-full">
          <Img
            src="https://ghchart.rshah.org/4070F4/victorcmarinho"
            alt="Gráfico de Commits de Victor Marinho"
            className="w-full h-auto opacity-90"
          />
        </div>
      </div>
    </section>
  );
};
