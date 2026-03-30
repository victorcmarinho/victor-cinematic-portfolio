import { Composition } from 'remotion';
import { MyComposition } from './Composition';
import './index.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CinematicPortfolio"
        component={MyComposition}
        durationInFrames={720}
        fps={60}
        width={3840}
        height={2160}
      />
    </>
  );
};