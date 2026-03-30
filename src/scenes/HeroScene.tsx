import React from 'react';
import { Sequence } from 'remotion';
import { HeroRender } from '../components/HeroRender';
import { SceneConfig } from '../config/cinematicConfig';

export interface SceneProps {
  config: SceneConfig;
}

export const HeroScene: React.FC<SceneProps> = ({ config }) => {
  return (
    <Sequence from={config.startFrame} name="Hero" layout="none">
      <HeroRender />
    </Sequence>
  );
};
