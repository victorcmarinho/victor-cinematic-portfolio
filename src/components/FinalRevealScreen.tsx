import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { Img } from 'remotion';
import perfilUrl from '../assets/perfil.webp';

export const FinalRevealScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // === Background fade in ===
  const bgOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // === Logo reveal ===
  const logoProgress = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 90 },
  });
  const logoScale = interpolate(logoProgress, [0, 1], [0.7, 1]);
  const logoOpacity = interpolate(logoProgress, [0, 0.5, 1], [0, 0.8, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // === Name text ===
  const nameOpacity = interpolate(frame, [15, 40], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const nameY = interpolate(frame, [15, 40], [20, 0], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  // === Role text ===
  const roleOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  // === CTA ===
  const ctaProgress = spring({
    frame: frame - 45,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const ctaScale = interpolate(ctaProgress, [0, 1], [0.8, 1]);
  const ctaOpacity = interpolate(ctaProgress, [0, 0.6, 1], [0, 0.9, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // === Separator line ===
  const separatorWidth = interpolate(frame, [25, 55], [0, 180], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f0f4ff 100%)',
        opacity: bgOpacity,
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6 text-center">
        {/* Profile photo */}
        <div
          style={{
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        >
          <div
            className="relative"
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              padding: 3,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            }}
          >
            <Img
              src={perfilUrl}
              alt="Victor Marinho"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                border: '3px solid white',
              }}
            />
          </div>
        </div>

        {/* Name */}
        <div style={{ opacity: nameOpacity, transform: `translateY(${nameY}px)` }}>
          <h1
            className="font-extrabold tracking-tight text-gray-900"
            style={{ fontSize: 64, lineHeight: 1 }}
          >
            Victor C.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Marinho
            </span>
          </h1>
        </div>

        {/* Separator */}
        <div
          style={{
            height: 2,
            width: separatorWidth,
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
            borderRadius: 99,
          }}
        />

        {/* Role */}
        <p
          className="text-gray-500 font-light tracking-widest uppercase text-lg"
          style={{ opacity: roleOpacity, letterSpacing: 4 }}
        >
          Software Engineer · Apple Ecosystem · SaaS
        </p>

        {/* CTA Button */}
        <div
          style={{
            transform: `scale(${ctaScale})`,
            opacity: ctaOpacity,
            marginTop: 16,
            display: 'flex',
            gap: 16,
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              borderRadius: 99,
              padding: '14px 36px',
              fontSize: 18,
              fontWeight: 700,
              boxShadow: '0 8px 32px rgba(99,102,241,0.4)',
              letterSpacing: 0.5,
            }}
          >
            victorcmarinho.dev
          </div>
          <div
            style={{
              border: '2px solid rgba(99,102,241,0.4)',
              color: '#6366f1',
              borderRadius: 99,
              padding: '14px 36px',
              fontSize: 18,
              fontWeight: 600,
              background: 'white',
              boxShadow: '0 4px 16px rgba(99,102,241,0.1)',
            }}
          >
            Contato
          </div>
        </div>
      </div>
    </div>
  );
};
