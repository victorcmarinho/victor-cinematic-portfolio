import React from 'react';
import { useCurrentFrame, interpolate, Img } from 'remotion';

export const ProjectsRender: React.FC = () => {
  const frame = useCurrentFrame();

  const projects = [
    {
      name: "victorcmarinho-app",
      description: "My personal portfolio built with Astro and completely custom Apple-like styling.",
      language: "Astro",
      stargazers_count: 5,
      forks_count: 1
    },
    {
      name: "notify-lab",
      description: "A robust Flutter web application with real-time push notifications.",
      language: "Dart",
      stargazers_count: 12,
      forks_count: 3
    },
    {
      name: "easier_drop",
      description: "AirDrop clone for completely cross-platform blazing fast file transfers.",
      language: "Dart",
      stargazers_count: 24,
      forks_count: 5
    }
  ];

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = interpolate(frame, [0, 15], [20, 0], { extrapolateRight: 'clamp' });

  return (
    <section className="py-24 w-full max-w-7xl mx-auto">
      <h2 
        className="text-3xl md:text-4xl font-bold mb-12 text-[var(--color-text)]"
        style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)` }}
      >
        Projetos & Contribuições
      </h2>
      
      {/* GitHub Chart */}
      <div 
        className="mb-16 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] shadow-sm"
        style={{
           // Enter chart after the cards
           opacity: interpolate(frame, [60, 80], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }),
           transform: `translateY(${interpolate(frame, [60, 80], [20, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' })}px)`
        }}
      >
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-[var(--color-text)]">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <span className="text-[var(--color-text)]">victorcmarinho</span>
        </h3>
        <div className="w-full overflow-hidden flex justify-center saturate-0 opacity-80 filter invert dark:invert-0">
          <Img 
            src="https://ghchart.rshah.org/victorcmarinho" 
            alt="GitHub Contributions Diagram"
            className="w-full max-w-4xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const itemFrame = Math.max(0, frame - 15 - (index * 15));
          const opacity = interpolate(itemFrame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
          const translateY = interpolate(itemFrame, [0, 20], [40, 0], { extrapolateRight: 'clamp' });

          return (
            <div key={index} style={{ opacity, transform: `translateY(${translateY}px)` }}>
              <div
                className="group block p-6 h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {project.name}
                  </h3>
                  <svg className="w-5 h-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-[var(--color-muted)] text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-[var(--color-muted)] mt-auto">
                  {project.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
                      {project.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    {project.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {project.forks_count}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
