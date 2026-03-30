import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { HeroRender } from '../components/HeroRender';
import { AboutRender } from '../components/AboutRender';
import { SkillsRender } from '../components/SkillsRender';
import { ExperienceRender } from '../components/ExperienceRender';
import { ProjectsRender } from '../components/ProjectsRender';
import { FooterRender } from '../components/FooterRender';

// Wrapping each element in a strict 1080p container guarantees exact positioning
const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full flex items-center justify-center flex-shrink-0" style={{ height: '1080px' }}>
    {children}
  </div>
);

export const FullJourneySequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Hero Timings (0s - 8s) ---
  const isWireframe = frame < 120;
  const profileScale = spring({ frame: frame - 120, fps, config: { damping: 12, stiffness: 100, mass: 0.8 } });
  const heroTextOpacity = interpolate(frame, [240, 320], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const heroGlassOpacity = spring({ frame: Math.max(0, frame - 380), fps, config: { damping: 200, stiffness: 80 } });

  // --- About Reveal (10s - 14s) ---
  const aboutOpacity = interpolate(frame, [600, 680], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const aboutY = interpolate(frame, [600, 680], [100, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // --- Experience Reveal (16s - 22s) ---
  const expOpacity = interpolate(frame, [960, 1040], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const expY = interpolate(frame, [960, 1040], [100, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // --- Skills Reveal (24s - 28s) ---
  const skillsOpacity = interpolate(frame, [1440, 1500], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const skillsY = interpolate(frame, [1440, 1500], [100, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // --- Projects Reveal (30s - 36s) ---
  const projOpacity = interpolate(frame, [1800, 1880], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const projY = interpolate(frame, [1800, 1880], [100, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // --- Footer Reveal (38s - 41s) ---
  const footerOpacity = interpolate(frame, [2280, 2340], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const footerY = interpolate(frame, [2280, 2340], [50, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // --- Global Camera Choreography ---
  const scrollY = interpolate(
    frame,
    [
      0, 480,            // Hero 
      600, 840,          // About
      960, 1320,         // Experience
      1440, 1680,        // Skills
      1800, 2160,        // Projects
      2280, 2460,        // Footer 
      2580,              // Zoom Out (Reset Y)
      3000               // Final Scroll
    ],
    [
      0, 0,
      -1080, -1080,
      -2160, -2160,
      -3240, -3240,
      -4320, -4320,
      -5400, -5400,
      200,
      -3500 
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
      {/* Background HDR glow mapped to scroll */}
      <div 
        className="absolute w-[1600px] h-[1600px] rounded-full blur-[200px] bg-[var(--color-primary)] opacity-10"
        style={{
          transform: `translate(
            ${interpolate(frame, [0, 3000], [-800, 800])}px, 
            ${interpolate(frame, [0, 3000], [-400, 800])}px
          )`,
          opacity: interpolate(frame, [0, 420, 3000], [0.05, 0.15, 0.3]),
          zIndex: 0
        }}
      />
      
      <div
        style={{
          transform: `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${scrollY}px)`,
          width: '1920px', // Standard desktop bounding box wrapper to be scaled up
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0', 
        }}
      >
        <SectionWrapper>
          <HeroRender
            wireframeMode={isWireframe}
            profileScale={isWireframe ? 1 : profileScale} 
            textOpacity={isWireframe ? 1 : heroTextOpacity}
            glassOpacity={heroGlassOpacity}
          />
        </SectionWrapper>

        <SectionWrapper>
          <AboutRender opacity={aboutOpacity} translateY={aboutY} />
        </SectionWrapper>
        
        <SectionWrapper>
          <ExperienceRender opacity={expOpacity} translateY={expY} />
        </SectionWrapper>

        <SectionWrapper>
          <SkillsRender opacity={skillsOpacity} translateY={skillsY} />
        </SectionWrapper>

        <SectionWrapper>
          <ProjectsRender opacity={projOpacity} translateY={projY} />
        </SectionWrapper>

        <SectionWrapper>
          <FooterRender opacity={footerOpacity} translateY={footerY} />
        </SectionWrapper>

      </div>
    </div>
  );
};
