import { Composition } from 'remotion';
import { FullJourneySequence } from './scenes/FullJourneySequence';
import { cinematicSchema } from './config/cinematicConfig';
import './index.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CinematicPortfolio"
        component={FullJourneySequence}
        durationInFrames={3000}
        fps={60}
        width={3840}
        height={2160}
        schema={cinematicSchema}
        defaultProps={{
          fps: 60,
          globalDuration: 3000,
          width: 3840,
          height: 2160,
          scenes: {
            hero: { startFrame: 0, durationInFrames: 480, scrollYOffset: 140 },
            about: { startFrame: 600, durationInFrames: 240, scrollYOffset: -549 },
            experience: { startFrame: 960, durationInFrames: 360, scrollYOffset: -1438 },
            skills: { startFrame: 1440, durationInFrames: 240, scrollYOffset: -2277 },
            projects: { startFrame: 1800, durationInFrames: 360, scrollYOffset: -3066 },
            footer: { startFrame: 2280, durationInFrames: 180, scrollYOffset: -3780 },
          },
          effects: {
            baseScale: 2.0,
            zoomOutScale: 0.8,
            zoomOutStartFrame: 2580,
            finalScrollY: -2200,
          }
        }}
      />
    </>
  );
};