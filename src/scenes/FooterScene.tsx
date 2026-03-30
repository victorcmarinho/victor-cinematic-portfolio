import React from 'react';
import { Sequence } from 'remotion';
import { FooterRender } from '../components/FooterRender';
import { SceneConfig } from '../config/cinematicConfig';

export interface SceneProps {
  config: SceneConfig;
}

export const FooterScene: React.FC<SceneProps> = ({ config }) => {
  return (
    <Sequence from={config.startFrame} name="Footer" layout="none">
      <FooterRender />
    </Sequence>
  );
};
