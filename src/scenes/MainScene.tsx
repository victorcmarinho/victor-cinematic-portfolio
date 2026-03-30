import React from 'react';
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion';

import { Background } from '../components/Background';
import { Scene1Impact } from './Scene1Impact';
import { Scene2Skills } from './Scene2Skills';
import { Scene3Timeline } from './Scene3Timeline';
import { Scene4Projects } from './Scene4Projects';
import { Scene5CTA } from './Scene5CTA';

export const MainScene: React.FC<{ profileImg: string }> = ({ profileImg }) => {
  const frame = useCurrentFrame();

  // Fast Zoom Out Transition between Scene 2 and 3 (around frame 300)
  const scene1and2Scale = interpolate(frame, [280, 310], [1, 0.01], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  // Collapse transition at frame 900 for CTA
  const everythingScale = interpolate(frame, [880, 910], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      <Background />

      {/* Main container that collapses at the end */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', transform: `scale(${everythingScale})` }}>
        
        {/* Scenes 1 and 2 group (that fades/shrinks away for scene 3) */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', transform: `scale(${scene1and2Scale})` }}>
           
          {/* Scene 1: 0 to 120 (We can let it bleed into scene 2 slightly or just end it) */}
          <Sequence from={0} durationInFrames={120}>
            <Scene1Impact profileImg={profileImg} />
          </Sequence>

          {/* Scene 2: 120 to 300 */}
          <Sequence from={120} durationInFrames={180}>
            <Scene2Skills profileImg={profileImg} />
          </Sequence>

        </div>

        {/* Scene 3: 300 to 600 */}
        <Sequence from={300} durationInFrames={300}>
          <Scene3Timeline />
        </Sequence>

        {/* Scene 4: 600 to 900 */}
        <Sequence from={600} durationInFrames={300}>
          <Scene4Projects />
        </Sequence>
      </div>

      {/* Scene 5: 900 to 1200 */}
      <Sequence from={900} durationInFrames={300}>
        <Scene5CTA />
      </Sequence>

    </AbsoluteFill>
  );
};
