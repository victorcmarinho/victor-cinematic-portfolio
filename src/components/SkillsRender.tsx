import React from 'react';

export interface SkillsRenderProps {
  opacity?: number;
  translateY?: number;
}

const skills = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "React Native",
  "Flutter",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Astro",
  "Tailwind CSS",
];

export const SkillsRender: React.FC<SkillsRenderProps> = ({
  opacity = 1,
  translateY = 0,
}) => {
  return (
    <section
      id="skills"
      className="py-20 border-t border-[var(--color-border)] w-full max-w-7xl mx-auto"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
      aria-labelledby="skills-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start px-8">
        <div className="md:col-span-4">
          <h2
            id="skills-heading"
            className="text-3xl font-bold tracking-tight text-[var(--color-text)]"
          >
            Habilidades Principais
          </h2>
        </div>
        <ul className="md:col-span-8 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <li 
              key={index} 
              className="px-5 py-2 border border-[var(--color-border)] text-[var(--color-text)] rounded-full text-sm font-medium hover:bg-[var(--color-border)] hover:text-[var(--color-primary)] cursor-default"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
