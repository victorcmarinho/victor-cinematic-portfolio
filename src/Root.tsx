import { Composition } from 'remotion';
import { FullJourneySequence } from './scenes/FullJourneySequence';
import { AnatomyOrchestrator } from './scenes/AnatomyOrchestrator';
import { cinematicSchema } from './config/cinematicConfig';
import './index.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CinematicPortfolio"
        component={FullJourneySequence}
        durationInFrames={2820}
        fps={60}
        width={3840}
        height={2160}
        schema={cinematicSchema}
        defaultProps={{
          fps: 60,
          globalDuration: 2820,
          width: 3840,
          height: 2160,
          scenes: {
            hero: { startFrame: 0, durationInFrames: 300, scrollYOffset: 140 },
            about: { startFrame: 420, durationInFrames: 240, scrollYOffset: -2985 },
            experience: { startFrame: 780, durationInFrames: 360, scrollYOffset: -6310 },
            skills: { startFrame: 1260, durationInFrames: 240, scrollYOffset: -9585 },
            projects: { startFrame: 1620, durationInFrames: 360, scrollYOffset: -12540 },
            footer: { startFrame: 2100, durationInFrames: 180, scrollYOffset: -15960 },
          },
          effects: {
            baseScale: 2.0,
            zoomOutScale: 0.8,
            zoomOutStartFrame: 2400,
            finalScrollY: -2200,
          }
        }}
      />
      <Composition
        id="SiteAnatomyProcess"
        component={AnatomyOrchestrator}
        durationInFrames={900}
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};