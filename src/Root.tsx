import { Composition } from 'remotion';
import { FullJourneySequence } from './scenes/FullJourneySequence';
import { defaultCinematicConfig, cinematicSchema } from './config/cinematicConfig';
import './index.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CinematicPortfolio"
        component={FullJourneySequence as React.FC<any>}
        durationInFrames={defaultCinematicConfig.globalDuration}
        fps={defaultCinematicConfig.fps}
        width={defaultCinematicConfig.width}
        height={defaultCinematicConfig.height}
        defaultProps={defaultCinematicConfig}
        schema={cinematicSchema}
      />
    </>
  );
};