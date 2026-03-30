import React from 'react';
import { Sequence } from 'remotion';
import { ExperienceRender } from '../components/ExperienceRender';
import { SceneConfig } from '../config/cinematicConfig';

export interface SceneProps {
  config: SceneConfig;
}

export const ExperienceScene: React.FC<SceneProps> = ({ config }) => {
  return (
    <Sequence from={config.startFrame} name="Experience" layout="none">
      <ExperienceRender />
    </Sequence>
  );
};
