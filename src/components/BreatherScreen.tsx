import React from 'react';
import { useCurrentFrame, interpolate, useVideoConfig, spring } from 'remotion';

interface BreatherScreenProps {
  text: string;
  subtitle?: string;
}

export const BreatherScreen: React.FC<BreatherScreenProps> = ({ text, subtitle }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // Fade in
  const opacity = interpolate(
    frame,
    [0, 25, durationInFrames - 25, durationInFrames - 5],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Subtle scale breathe
  const textScale = interpolate(
    frame,
    [0, durationInFrames],
    [0.97, 1.03],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Letter spacing animation
  const letterSpacing = interpolate(
    frame,
    [0, 40],
    [6, 2],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const subtitleProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 20, stiffness: 60 },
  });
  const subtitleOpacity = interpolate(subtitleProgress, [0, 1], [0, 0.6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const subtitleY = interpolate(subtitleProgress, [0, 1], [12, 0]);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #000000 70%)',
        opacity,
      }}
    >
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-48"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)',
          opacity: opacity,
        }}
      />

      <div style={{ transform: `scale(${textScale})`, textAlign: 'center' }}>
        <h1
          className="font-serif font-light text-white leading-tight"
          style={{
            fontSize: 80,
            letterSpacing: letterSpacing,
            textShadow: '0 0 60px rgba(129,140,248,0.4)',
          }}
        >
          {text}
        </h1>

        {subtitle && (
          <p
            className="mt-6 text-indigo-300 text-2xl font-light tracking-widest uppercase"
            style={{
              opacity: subtitleOpacity,
              transform: `translateY(${subtitleY}px)`,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-48"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)',
          opacity: opacity,
        }}
      />
    </div>
  );
};
