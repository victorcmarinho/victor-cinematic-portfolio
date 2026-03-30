import React from 'react';
import { Sequence } from 'remotion';
import { SkillsRender } from '../components/SkillsRender';
import { SceneConfig } from '../config/cinematicConfig';

export interface SceneProps {
  config: SceneConfig;
}

export const SkillsScene: React.FC<SceneProps> = ({ config }) => {
  return (
    <Sequence from={config.startFrame} name="Skills" layout="none">
      <SkillsRender />
    </Sequence>
  );
};
