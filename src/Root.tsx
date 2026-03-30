import { Composition } from 'remotion';
import { MainScene } from './scenes/MainScene';
import './index.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PortfolioAppleStyle"
        component={MainScene}
        durationInFrames={1200}
        fps={60}
        width={3840}
        height={2160}
        defaultProps={{
          profileImg: "https://victorcmarinho.app/perfil.webp"
        }}
      />
    </>
  );
};