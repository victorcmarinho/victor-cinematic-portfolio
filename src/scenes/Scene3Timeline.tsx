import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

const ExperienceCard: React.FC<{
  title: string;
  role: string;
  period: string;
  delay: number;
  frame: number;
  fps: number;
}> = ({ title, role, period, delay, frame, fps }) => {
  const compFrame = Math.max(0, frame - delay);
  
  const scale = spring({
    frame: compFrame,
    fps,
    config: { damping: 14, stiffness: 150 },
    from: 0,
    to: 1,
  });

  const translateY = interpolate(compFrame, [0, 15], [50, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const opacity = interpolate(compFrame, [0, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${translateY}px)`,
        opacity,
        width: 800,
        padding: '60px',
        borderRadius: '40px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '2px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,255,255,0.02)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '50px', fontWeight: 800, background: 'linear-gradient(90deg, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {title}
        </h2>
        <span style={{ fontSize: '30px', color: '#888', fontWeight: 500 }}>{period}</span>
      </div>
      <p style={{ margin: 0, fontSize: '36px', color: '#ccc', fontWeight: 400 }}>{role}</p>
    </div>
  );
};

export const Scene3Timeline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // The connector line grows from top to bottom
  const lineStartFrame = 60; // Start drawing after first node appears
  const lineDrawProgress = spring({
    frame: Math.max(0, frame - lineStartFrame),
    fps,
    config: { damping: 100, stiffness: 50 }, // Slow, deliberate draw
    from: 0,
    to: 1,
  });

  // Calculate coordinates for the line based on layout
  const topNodeY = height / 2 - 300;
  const bottomNodeY = height / 2 + 300;

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: 200,
          left: 300,
          opacity: interpolate(frame, [0, 20], [0, 1]),
          transform: `translateY(${interpolate(frame, [0, 20], [-50, 0])}px)`,
        }}
      >
        <h1 style={{ fontSize: '100px', fontWeight: 800, margin: 0, color: 'white' }}>Experiência</h1>
        <div style={{ width: 100, height: 10, background: '#4070F4', borderRadius: 5, marginTop: 20 }} />
      </div>

      <div style={{ position: 'relative', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '200px' }}>
        
        {/* Node 1 */}
        <div style={{ transform: 'translateX(-200px)' }}>
           <ExperienceCard 
            title="Reclame AQUI" 
            role="Engenheiro de S/W Sênior" 
            period="2022 - Atual" 
            delay={30} 
            frame={frame} 
            fps={fps} 
          />
        </div>

        {/* Node 2 */}
        <div style={{ transform: 'translateX(200px)' }}>
          <ExperienceCard 
            title="Zappts" 
            role="Desenvolvedor Front-end Sênior" 
            period="2020 - 2022" 
            delay={120} 
            frame={frame} 
            fps={fps} 
          />
        </div>

        {/* SVG Connector Line */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        >
          {/* We'll draw a bezier curve between the two cards */}
          <path
            d={`M ${width / 2 - 200 + 400} ${topNodeY + 150} C ${width / 2 + 200} ${topNodeY + 150}, ${width / 2 - 200} ${bottomNodeY - 50}, ${width / 2 + 200 - 400} ${bottomNodeY - 50}`}
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: 2000 * (1 - lineDrawProgress), // Animate the line drawing
              filter: 'drop-shadow(0 0 20px rgba(64, 112, 244, 0.8))',
            }}
          />
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4070F4" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>

      </div>
    </AbsoluteFill>
  );
};
