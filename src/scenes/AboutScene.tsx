import React from 'react';
import { Sequence } from 'remotion';
import { AboutRender } from '../components/AboutRender';
import { SceneConfig } from '../config/cinematicConfig';

export interface SceneProps {
  config: SceneConfig;
}

export const AboutScene: React.FC<SceneProps> = ({ config }) => {
  return (
    <Sequence from={config.startFrame} name="About" layout="none">
      <AboutRender />
    </Sequence>
  );
};
