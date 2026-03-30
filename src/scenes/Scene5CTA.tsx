import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene5CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Collapse everything to a single point (0 to 30 frames)
  // 2. Explode the point into the scene (30 to 60 frames)
  
  const explodeFrame = Math.max(0, frame - 30);

  const lightPointSize = spring({
    frame: explodeFrame,
    fps,
    config: { damping: 14, stiffness: 150 },
    from: 0,
    to: 1,
  });

  const explodeOpacity = interpolate(explodeFrame, [0, 10, 30], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // CTA Elements fade in after explosion
  const elementsPresentFrame = Math.max(0, frame - 50);

  // Typewriter effect
  const fullText = "Building the future of Front-end.";
  // Reveal 1 character every 2 frames
  const textCharsToShow = Math.floor(elementsPresentFrame / 2);
  const textToShow = fullText.substring(0, textCharsToShow);

  // Button pop-in and pulse
  const buttonScalePop = spring({
    frame: elementsPresentFrame,
    fps,
    config: { damping: 12, stiffness: 200 },
    from: 0,
    to: 1,
  });

  // Pulsing starts after pop-in
  const pulseScale = interpolate(
    Math.sin(frame * 0.05),
    [-1, 1],
    [0.98, 1.05]
  );
  
  const finalButtonScale = buttonScalePop > 0.99 ? pulseScale : buttonScalePop;

  // Social links fade in
  const socialsOpacity = interpolate(elementsPresentFrame - 60, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      
      {/* The light explosion effect */}
      {frame > 30 && frame < 90 && (
        <div
          style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
            opacity: explodeOpacity,
            transform: `scale(${lightPointSize * 5})`,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Main Content (Only shows after explosion starts) */}
      {elementsPresentFrame > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '80px' }}>
          
          <h2 
            style={{ 
              fontSize: '80px', 
              fontWeight: 800, 
              margin: 0, 
              textAlign: 'center',
              background: 'linear-gradient(90deg, #fff, #aaa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              minHeight: '100px', // Prevent layout shift during typing
            }}
          >
            {textToShow}
            {/* Blinking Cursor */}
            <span style={{ 
                opacity: Math.sin(frame * 0.2) > 0 ? 1 : 0, 
                color: 'white',
                WebkitTextFillColor: 'white'
              }}>|</span>
          </h2>

          <div
            style={{
              transform: `scale(${finalButtonScale})`,
              background: 'white',
              color: 'black',
              padding: '40px 80px',
              borderRadius: '60px',
              fontSize: '40px',
              fontWeight: 700,
              boxShadow: '0 20px 40px rgba(255,255,255,0.2), 0 0 100px rgba(255,255,255,0.4)',
              cursor: 'pointer',
            }}
          >
            Gostaria de saber mais
          </div>

          <div
            style={{
              opacity: socialsOpacity,
              display: 'flex',
              gap: '60px',
              marginTop: '40px',
              fontSize: '32px',
              color: '#888',
              fontWeight: 500,
            }}
          >
            <span>GitHub</span>
            <span>LinkedIn</span>
            <span>Currículo</span>
          </div>

        </div>
      )}

    </AbsoluteFill>
  );
};
