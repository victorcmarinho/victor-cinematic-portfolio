import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

interface AssembledPartProps {
  children: React.ReactNode;
  delay: number;
  zOffset: number;
}

export const AssembledPart: React.FC<AssembledPartProps> = ({ children, delay, zOffset }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const zProgress = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 16,
      stiffness: 80,
      mass: 1.0,
    },
  });

  const translateZ = interpolate(zProgress, [0, 1], [zOffset, 0]);

  const opacity = interpolate(zProgress, [0, 0.3, 1], [0, 0.6, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const translateY = interpolate(zProgress, [0, 1], [60, 0]);

  if (frame < delay) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <div
      style={{
        transform: `translateZ(${translateZ}px) translateY(${translateY}px)`,
        opacity,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};
