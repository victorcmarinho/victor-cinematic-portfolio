import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { icons } from '../assets/icons';

// Add the names to map easily
const techIcons = [
  { name: 'React', data: icons.react },
  { name: 'Angular', data: icons.angular },
  { name: 'Flutter', data: icons.flutter },
  { name: 'Node.js', data: icons.nodejs },
  { name: 'TypeScript', data: icons.typescript },
];

export const Scene2Skills: React.FC<{ profileImg: string }> = ({ profileImg }) => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();

  // Blur the profile picture over time to create shallow depth of field
  // Start blurring slightly after the scene begins
  const bgBlur = interpolate(frame, [0, 30], [0, 15], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  // Also fade the name text from Scene 1 or just hide it
  const textOpacity = interpolate(frame, [0, 20], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Container for Profile that gets blurred */}
      <div style={{ filter: `blur(${bgBlur}px)`, transition: 'filter 0.1s' }}>
        <div
          style={{
            width: 400,
            height: 400,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '12px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 100px rgba(255,255,255,0.1)',
            position: 'relative',
          }}
        >
          <Img 
            src={profileImg} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Name Text Fading out */}
        <div
          style={{
            position: 'absolute',
            top: height / 2 + 250,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: textOpacity,
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
      </div>

      {/* Explosive Icons */}
      {techIcons.map((icon, index) => {
        const total = techIcons.length;
        // Base angle for this icon
        const baseAngle = (index / total) * Math.PI * 2 - Math.PI / 2;
        
        // Delay each explosion slightly for a staggered effect
        const delay = index * 5;
        const iconFrame = Math.max(0, frame - delay);

        // Spring out from center (radius 0 -> 600)
        const radius = spring({
          frame: iconFrame,
          fps,
          config: {
            damping: 14,
            stiffness: 120,
            mass: 1,
          },
          from: 0,
          to: 700,
        });

        // Extra organic orbit and floating
        const orbitAngle = baseAngle + frame * 0.005; // Slow rotation
        const floatY = Math.sin(frame * 0.05 + index) * 30; // Up and down float
        const floatX = Math.cos(frame * 0.04 + index) * 20;

        const x = Math.cos(orbitAngle) * radius + floatX;
        const y = Math.sin(orbitAngle) * radius + floatY;

        // Scale up as they explode
        const scale = spring({
          frame: iconFrame,
          fps,
          config: { damping: 12, stiffness: 200 },
          from: 0,
          to: 1,
        });

        // Slight rotation to face outwards or just natural wobble
        const rotate = Math.sin(frame * 0.02 + index) * 15;

        // Glassmorphism container for the icon
        return (
          <div
            key={icon.name}
            style={{
              position: 'absolute',
              transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`,
              width: 250,
              height: 250,
              borderRadius: '40px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `0 30px 60px rgba(0,0,0,0.5), inset 0 0 40px rgba(255, 255, 255, 0.05), 0 0 100px ${icon.data.color}33`,
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px',
              zIndex: 20,
            }}
          >
            <div style={{ width: '100%', height: '100%', filter: `drop-shadow(0 0 30px ${icon.data.color}80)` }}>
              {icon.data.svg}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
