import React from 'react';
import { useCurrentFrame, useVideoConfig, interpolate, spring } from 'remotion';

/**
 * CloseUpScene — frames 0 to 180 (3 seconds)
 * Zooms into a CTA button / feature card element.
 */
export const CloseUpScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in screen
  const screenOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  // Zoom-in camera: scale from 0.6 to 1.4 with ease
  const zoom = interpolate(frame, [0, 140], [0.6, 1.4], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  // Slight parallax pan
  const panY = interpolate(frame, [0, 140], [40, -20], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  // Card elements stagger
  const cardProgress = spring({ frame, fps, config: { damping: 20, stiffness: 80 } });
  const cardOpacity = interpolate(cardProgress, [0, 1], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  const btn1Progress = spring({ frame: frame - 15, fps, config: { damping: 16, stiffness: 100 } });
  const btn1Scale = interpolate(btn1Progress, [0, 1], [0.8, 1]);
  const btn1Opacity = interpolate(btn1Progress, [0, 0.6, 1], [0, 0.9, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  const tagProgress = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 120 } });
  const tagOpacity = interpolate(tagProgress, [0, 1], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const tagX = interpolate(tagProgress, [0, 1], [-20, 0]);

  // Shimmer effect on button
  const shimmerX = interpolate(frame, [30, 130], [-200, 400], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at center, #1e1b4b 0%, #0f0a1e 100%)',
        opacity: screenOpacity,
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Zoom container */}
      <div
        style={{
          transform: `scale(${zoom}) translateY(${panY}px)`,
          willChange: 'transform',
        }}
      >
        {/* === Feature Card Close-up === */}
        <div
          style={{
            width: 640,
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 28,
            padding: '48px 52px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
            opacity: cardOpacity,
          }}
        >
          {/* Top label */}
          <div
            style={{
              opacity: tagOpacity,
              transform: `translateX(${tagX}px)`,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 8px #4ade80',
              }}
            />
            <span
              style={{
                color: '#86efac',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}
            >
              Produto Pronto para Escalar
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              color: 'white',
              fontSize: 40,
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 16,
              opacity: cardOpacity,
            }}
          >
            De 0 a{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              1 Milhão
            </span>
            {' '}de usuários.
          </h2>

          {/* Body */}
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 18,
              lineHeight: 1.7,
              marginBottom: 36,
              opacity: cardOpacity,
            }}
          >
            Arquitetura pensada para performance, escalabilidade e uma experiência que encanta desde o primeiro clique.
          </p>

          {/* CTA Button with shimmer */}
          <div
            style={{
              transform: `scale(${btn1Scale})`,
              opacity: btn1Opacity,
              transformOrigin: 'left center',
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 99,
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
                color: 'white',
                borderRadius: 99,
                padding: '16px 40px',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 0.5,
                boxShadow: '0 8px 32px rgba(99,102,241,0.5), 0 0 0 1px rgba(99,102,241,0.3)',
                cursor: 'pointer',
              }}
            >
              Ver Portfólio Completo →
            </div>
            {/* Shimmer effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: shimmerX,
                width: 100,
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                transform: 'skewX(-20deg)',
              }}
            />
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: 32,
              marginTop: 32,
              opacity: tagOpacity,
            }}
          >
            {[
              { value: '5+', label: 'anos exp.' },
              { value: '1M+', label: 'usuários' },
              { value: '50+', label: 'projetos' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ color: '#818cf8', fontSize: 24, fontWeight: 800 }}>{value}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
