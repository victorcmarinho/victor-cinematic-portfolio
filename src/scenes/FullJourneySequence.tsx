import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { HeroScene } from './HeroScene';
import { AboutScene } from './AboutScene';
import { ExperienceScene } from './ExperienceScene';
import { SkillsScene } from './SkillsScene';
import { ProjectsScene } from './ProjectsScene';
import { FooterScene } from './FooterScene';
import { CinematicProps } from '../config/cinematicConfig';

export const FullJourneySequence: React.FC<CinematicProps> = (props) => {
  const frame = useCurrentFrame();

  const scrollYInput = [
    props.scenes.hero.startFrame, props.scenes.hero.startFrame + props.scenes.hero.durationInFrames,
    props.scenes.about.startFrame, props.scenes.about.startFrame + props.scenes.about.durationInFrames,
    props.scenes.experience.startFrame, props.scenes.experience.startFrame + props.scenes.experience.durationInFrames,
    props.scenes.skills.startFrame, props.scenes.skills.startFrame + props.scenes.skills.durationInFrames,
    props.scenes.projects.startFrame, props.scenes.projects.startFrame + props.scenes.projects.durationInFrames,
    props.scenes.footer.startFrame, props.scenes.footer.startFrame + props.scenes.footer.durationInFrames,
    props.effects.zoomOutStartFrame,
    props.globalDuration
  ];

  const scrollYOutput = [
    props.scenes.hero.scrollYOffset, props.scenes.hero.scrollYOffset,
    props.scenes.about.scrollYOffset, props.scenes.about.scrollYOffset,
    props.scenes.experience.scrollYOffset, props.scenes.experience.scrollYOffset,
    props.scenes.skills.scrollYOffset, props.scenes.skills.scrollYOffset,
    props.scenes.projects.scrollYOffset, props.scenes.projects.scrollYOffset,
    props.scenes.footer.scrollYOffset, props.scenes.footer.scrollYOffset,
    200, 
    props.effects.finalScrollY
  ];

  const scrollY = interpolate(frame, scrollYInput, scrollYOutput, { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const endOfFooter = props.scenes.footer.startFrame + props.scenes.footer.durationInFrames;

  const scale = interpolate(
    frame, 
    [0, endOfFooter, props.effects.zoomOutStartFrame, props.globalDuration], 
    [props.effects.baseScale, props.effects.baseScale, props.effects.zoomOutScale, props.effects.zoomOutScale], 
    { extrapolateRight: 'clamp' }
  );

  const gap = interpolate(
    frame,
    [endOfFooter, props.effects.zoomOutStartFrame],
    [2500, 32],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  return (
    <div 
      className="absolute flex items-start justify-center bg-[var(--color-bg)] w-full h-full overflow-hidden text-[var(--color-text)]"
      style={{ perspective: '3000px' }}
    >
      <div
        style={{
          transform: `scale(${scale}) translateY(${scrollY}px)`,
          width: '1920px', 
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
          zIndex: 10,
        }}
      >
        <main 
          className="w-full flex items-center justify-center flex-col py-16 px-6 relative"
          style={{ gap: `${gap}px` }}
        >
          <HeroScene config={props.scenes.hero} />
          <AboutScene config={props.scenes.about} />
          <ExperienceScene config={props.scenes.experience} />
          <SkillsScene config={props.scenes.skills} />
          <ProjectsScene config={props.scenes.projects} />
          <FooterScene config={props.scenes.footer} />
        </main>
      </div>
    </div>
  );
};
