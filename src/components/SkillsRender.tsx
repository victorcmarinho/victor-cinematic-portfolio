import React from 'react';
import { useCurrentFrame, spring, useVideoConfig, interpolate } from 'remotion';

export const SkillsRender: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const skills = [
    'Swift', 'Kotlin', 'React Native', 'Flutter', 'TypeScript',
    'Node.js', 'React', 'Next.js', 'TailwindCSS', 'PostgreSQL',
    'MongoDB', 'Docker', 'AWS', 'CI/CD'
  ];

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const titleY = interpolate(frame, [0, 15], [20, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  return (
    <section className="py-24 w-full max-w-7xl mx-auto">
      <h2 
        className="text-3xl md:text-4xl font-bold mb-12 text-[var(--color-text)]"
        style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)` }}
      >
        Habilidades Técnicas
      </h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => {
          // Stagger badges
          const itemFrame = Math.max(0, frame - 15 - (index * 3));
          const scale = spring({ frame: itemFrame, fps, config: { damping: 12, stiffness: 120 } });
          const opacity = interpolate(itemFrame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });

          return (
            <div
              key={skill}
              className="px-6 py-3 bg-[var(--color-border)] text-[var(--color-text)] rounded-full text-base font-medium shadow-sm border border-[var(--color-border)]"
              style={{
                transform: `scale(${scale})`,
                opacity
              }}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
};
