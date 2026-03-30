import React from 'react';
import { Sequence } from 'remotion';
import { ProjectsRender } from '../components/ProjectsRender';
import { SceneConfig } from '../config/cinematicConfig';

export interface SceneProps {
  config: SceneConfig;
}

export const ProjectsScene: React.FC<SceneProps> = ({ config }) => {
  return (
    <Sequence from={config.startFrame} name="Projects" layout="none">
      <ProjectsRender />
    </Sequence>
  );
};
