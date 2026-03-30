import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene1Impact: React.FC<{ profileImg: string }> = ({ profileImg }) => {
  const frame = useCurrentFrame();
  const { fps, height, width } = useVideoConfig();

  // The drop animation - starting from way above to the exact center
  const dropY = spring({
    frame,
    fps,
    config: {
      damping: 12, // Lower damping for more oscillation/bounce
      stiffness: 100,
      mass: 0.8,
    },
    from: -height, // start offscreen top
    to: 0,
  });

  // Calculate if the initial drop impact has happened.
  // We can measure this by when the dropping spring crosses 0 or gets very close for the first time.
  // Actually, spring will interpolate to 0. We'll start shockwave around frame 25 based on this spring config.
  const shockwaveFrame = frame - 25; 
  
  // Shockwave 1
  const shockRingSize = interpolate(shockwaveFrame, [0, 40], [300, 1500], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const shockRingOpacity = interpolate(shockwaveFrame, [0, 10, 40], [0, 0.4, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Shockwave 2 (slightly delayed)
  const shockwaveFrame2 = frame - 30;
  const shockRingSize2 = interpolate(shockwaveFrame2, [0, 40], [300, 1200], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const shockRingOpacity2 = interpolate(shockwaveFrame2, [0, 10, 40], [0, 0.2, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Text Reveal: blurry to sharp, fading in. Starts slightly after impact.
  const textRevealFrame = Math.max(0, frame - 30);
  const textOpacity = interpolate(textRevealFrame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const textBlur = interpolate(textRevealFrame, [0, 20], [30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  // Text scales up slightly as it focuses
  const textScale = spring({
    frame: textRevealFrame,
    fps,
    config: { damping: 14, stiffness: 200 },
    from: 0.8,
    to: 1,
  });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Shockwaves */}
      {shockwaveFrame > 0 && (
        <>
          <div
            style={{
              position: 'absolute',
              width: shockRingSize,
              height: shockRingSize,
              borderRadius: '50%',
              border: '6px solid rgba(255, 255, 255, 0.8)',
              opacity: shockRingOpacity,
              boxShadow: '0 0 40px rgba(255,255,255,0.5), inset 0 0 40px rgba(255,255,255,0.5)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: shockRingSize2,
              height: shockRingSize2,
              borderRadius: '50%',
              border: '4px solid rgba(255, 255, 255, 0.5)',
              opacity: shockRingOpacity2,
            }}
          />
        </>
      )}

      {/* Profile Picture */}
      <div
        style={{
          transform: `translateY(${dropY}px)`,
          width: 400,
          height: 400,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '12px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 100px rgba(255,255,255,0.1)',
          // Glass frosted effect underneath the image edge if it was transparent, 
          // but we just apply it as backdrop filter to the container just in case.
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Img 
          src={profileImg} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      {/* Name Text */}
      <div
        style={{
          position: 'absolute',
          top: height / 2 + 250, // Below the profile picture
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: textOpacity,
          filter: `blur(${textBlur}px)`,
          transform: `scale(${textScale})`,
        }}
      >
        <h1 
          className="font-extrabold tracking-tight"
          style={{ 
            fontSize: '90px', 
            margin: 0,
            textShadow: '0 10px 30px rgba(0,0,0,0.8)',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Victor C. Marinho
        </h1>
        <p
          className="font-medium"
          style={{
            fontSize: '40px',
            color: '#a0a0a0',
            marginTop: '20px',
            textTransform: 'uppercase',
            letterSpacing: '8px',
          }}
        >
          Software Developer
        </p>
      </div>

    </AbsoluteFill>
  );
};
