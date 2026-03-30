import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  tech: string;
  color: string;
  highlighted?: boolean;
}> = ({ title, description, tech, color, highlighted }) => {
  return (
    <div
      style={{
        width: 800,
        height: 600,
        padding: '60px',
        borderRadius: '40px',
        background: highlighted ? 'rgba(40, 40, 40, 0.4)' : 'rgba(20, 20, 20, 0.4)',
        border: `4px solid ${highlighted ? color : 'rgba(255, 255, 255, 0.05)'}`,
        boxShadow: highlighted 
          ? `0 0 100px ${color}66, inset 0 0 40px ${color}33, 0 40px 80px rgba(0,0,0,0.8)` 
          : '0 40px 80px rgba(0,0,0,0.6)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          <h3 style={{ margin: 0, fontSize: '60px', fontWeight: 700, color: highlighted ? '#fff' : '#ccc' }}>
            {title}
          </h3>
        </div>
        <p style={{ margin: 0, fontSize: '32px', color: '#888', lineHeight: 1.6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
          {description}
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '28px', color: '#aaa', fontWeight: 500 }}>
        <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: color, marginRight: 16 }}></div>
        {tech}
      </div>
    </div>
  );
};

export const Scene4Projects: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // The Switch Snap transition happens exactly at frame 0 (start of scene)
  // We can simulate it via a flash of light / color scale
  const flashOpacity = interpolate(frame, [0, 5], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  // 3D shuffle effect
  const isShuffling = frame < 90;
  
  // When shuffle stops, EasierDrop card pushes forward
  const selectFrame = Math.max(0, frame - 90);
  const highlightScale = spring({
    frame: selectFrame,
    fps,
    config: { damping: 12, stiffness: 200 },
    from: 1,
    to: 1.15,
  });

  const normalScale = spring({
    frame: selectFrame,
    fps,
    config: { damping: 15, stiffness: 150 },
    from: 1,
    to: 0.9,
  });

  // Calculate layout for the grid. Cards side by side.
  // We'll rotate the container during shuffle, then settle.
  const containerRotationY = interpolate(frame, [0, 80, 90], [-1800, -90, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', perspective: '3000px' }}>
      
      {/* Title */}
      <h1 style={{ position: 'absolute', top: 150, fontSize: '100px', fontWeight: 800, margin: 0, color: 'white', opacity: interpolate(frame, [10, 30], [0, 1]) }}>
        Projetos Destacados
      </h1>

      {/* Grid Container */}
      <div
        style={{
          display: 'flex',
          gap: '80px',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${isShuffling ? containerRotationY : 0}deg)`,
        }}
      >
        {/* Card 1: victorcmarinho-app */}
        <div style={{ transform: `scale(${isShuffling ? 1 : normalScale})`, opacity: isShuffling ? 0.5 : 1 }}>
          <ProjectCard 
            title="victorcmarinho-app" 
            description="Portfólio pessoal e hub de projetos." 
            tech="Astro" 
            color="#FF5D01" 
          />
        </div>

        {/* Card 2: CRUD-MVC-PHP */}
        <div style={{ transform: `scale(${isShuffling ? 1 : normalScale})`, opacity: isShuffling ? 0.5 : 1 }}>
          <ProjectCard 
            title="CRUD-MVC-PHP" 
            description="Crud em MVC e PHP." 
            tech="PHP" 
            color="#4F5D95" 
          />
        </div>

        {/* Card 3: EasierDrop (Highlighted) */}
        <div 
          style={{ 
            transform: `scale(${isShuffling ? 1 : highlightScale}) translateZ(${isShuffling ? 0 : 100}px)`,
            zIndex: isShuffling ? 1 : 10,
          }}
        >
          <ProjectCard 
            title="EasierDrop" 
            description="O Easier Drop é um aplicativo leve e intuitivo que facilita a transferência de arquivos entre pastas no seu computador." 
            tech="Dart" 
            color="#00B4AB" 
            highlighted={!isShuffling}
          />
        </div>
      </div>

      {/* "Switch" Snap Flash */}
      <AbsoluteFill style={{ backgroundColor: 'white', opacity: flashOpacity, pointerEvents: 'none' }} />

    </AbsoluteFill>
  );
};
