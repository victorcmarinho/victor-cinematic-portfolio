import { Composition } from 'remotion';
import { FullJourneySequence } from './scenes/FullJourneySequence';
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
      />
    </>
  );
};