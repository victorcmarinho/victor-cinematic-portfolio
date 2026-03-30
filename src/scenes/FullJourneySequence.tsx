import React from 'react';
import { interpolate, useCurrentFrame, Sequence } from 'remotion';
import { HeroRender } from '../components/HeroRender';
import { AboutRender } from '../components/AboutRender';
import { SkillsRender } from '../components/SkillsRender';
import { ExperienceRender } from '../components/ExperienceRender';
import { ProjectsRender } from '../components/ProjectsRender';
import { FooterRender } from '../components/FooterRender';

export const FullJourneySequence: React.FC = () => {
  const frame = useCurrentFrame();

  // --- Global Camera Choreography ---
  // Calculates estimated Y positions to center elements within the view
  const scrollY = interpolate(
    frame,
    [
      0, 480,            // Hero (Center ~400px)
      600, 840,          // About (Center ~1089px)
      960, 1320,         // Experience (Center ~1978px)
      1440, 1680,        // Skills (Center ~2817px)
      1800, 2160,        // Projects (Center ~3606px)
      2280, 2460,        // Footer (Center ~4320px)
      2580,              // Zoom Out (Reset Y)
      3000               // Final Scroll
    ],
    [
      140, 140,
      -549, -549,
      -1438, -1438,
      -2277, -2277,
      -3066, -3066,
      -3780, -3780,
      200,
      -2200 
    ],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Zoom scale multiplier (2.0 during reveals to fill 4K screen, zooms out to 0.8 at 43s)
  const scale = interpolate(frame, [0, 2460, 2580, 3000], [2.0, 2.0, 0.8, 0.8], { extrapolateRight: 'clamp' });
  
  // 3D tilt
  const rotateX = interpolate(frame, [420, 2460, 2580, 3000], [0, 12, 10, 5], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const rotateY = interpolate(frame, [420, 2460, 2580, 3000], [0, -6, 2, -2], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  return (
    <div 
      className="absolute flex items-start justify-center bg-[var(--color-bg)] w-full h-full overflow-hidden text-[var(--color-text)]"
      style={{ perspective: '3000px' }}
    >
      <div
        style={{
          transform: `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${scrollY}px)`,
          width: '1920px', // Standard desktop bounding box wrapper to be scaled up
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
          zIndex: 10,
        }}
      >
        <main className="w-full flex items-center justify-center flex-col gap-16 py-16 px-6 relative">
          <Sequence name="Hero" layout="none">
            <HeroRender />
          </Sequence>

          <Sequence from={600} name="About" layout="none">
            <AboutRender />
          </Sequence>
          
          <Sequence from={960} name="Experience" layout="none">
            <ExperienceRender />
          </Sequence>

          <Sequence from={1440} name="Skills" layout="none">
            <SkillsRender />
          </Sequence>

          <Sequence from={1800} name="Projects" layout="none">
            <ProjectsRender />
          </Sequence>

          <Sequence from={2280} name="Footer" layout="none">
            <FooterRender />
          </Sequence>
        </main>
      </div>
    </div>
  );
};
