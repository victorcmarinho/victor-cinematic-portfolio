import React from 'react';
import { useCurrentFrame, interpolate, useVideoConfig } from 'remotion';
import { AssembledPart } from '../components/AssembledPart';

// Site section components (white theme)
import { NavbarBlock } from '../components/NavbarBlock';
import { HeroBlock } from '../components/HeroBlock';
import { CardsBlock } from '../components/CardsBlock';
import { SidebarBlock } from '../components/SidebarBlock';

/**
 * AssemblyScene — Frames 0 to 660 (11s at 60fps)
 * Shows the "anatomy" of a SaaS website assembling section by section in 3D space.
 * Camera does a drone-like sweep: starts tilted at 45° + side angle, ends front-facing.
 */
export const AssemblyScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // === CAMERA: Drone Sweep Animation ===
  // All keyframes must be strictly within [0, durationInFrames] (360 frames = 6s)
  // Phase 1: (0-180)  Bird's eye tilt + side angle — assembly is being built
  // Phase 2: (180-320) Straighten up toward front-facing
  // Phase 3: (320-360) Hold near-frontal for final reveal handoff

  const rotateX = interpolate(
    frame,
    [0, 80, 180, 300, durationInFrames],
    [48, 42, 28, 8, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const rotateY = interpolate(
    frame,
    [0, 100, 220, 320, durationInFrames],
    [-22, -16, -8, -2, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Scale: start small (overview effect), grow to full as camera straightens
  const scale = interpolate(
    frame,
    [0, 100, 240, durationInFrames],
    [0.28, 0.38, 0.60, 0.82],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Camera pan Y: follows the assembly from top → center
  const translateY = interpolate(
    frame,
    [0, 40, 180, durationInFrames],
    [480, 320, 0, -200],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Camera pan X: subtle lateral drift
  const translateX = interpolate(
    frame,
    [0, 200, durationInFrames],
    [80, 20, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // === AMBIENT PARTICLES: background floating dots ===
  // (rendered via static positioned divs — no animation needed, camera moves)

  const SITE_WIDTH = 1440;
  const SECTION_GAP = 96; // Gap between site sections

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 40% 30%, #1e1040 0%, #0a0618 50%, #000000 100%)',
      }}
    >
      {/* Grid floor */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow orbs */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: '10%',
          left: '15%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: '20%',
          right: '20%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Perspective wrapper */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: 2800,
          perspectiveOrigin: '50% 45%',
        }}
      >
        {/* === 3D WORLD: preserve-3d container === */}
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: `
              scale(${scale})
              rotateX(${rotateX}deg)
              rotateY(${rotateY}deg)
              translateX(${translateX}px)
              translateY(${translateY}px)
            `,
            willChange: 'transform',
            position: 'relative',
            width: SITE_WIDTH,
          }}
        >
          {/*
           * Each section is a block in normal flow (not absolute),
           * separated by SECTION_GAP margin. AssembledPart animates them
           * flying in from the Z-axis individually.
           */}

          {/* == NAVBAR == delay: 0 frames */}
          <AssembledPart delay={0} zOffset={1200}>
            <div
              style={{
                background: 'rgba(255,255,255,0.97)',
                borderRadius: 18,
                padding: '0 40px',
                height: 72,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 30px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.8) inset',
                border: '1px solid rgba(226,232,240,0.8)',
                marginBottom: SECTION_GAP,
              }}
            >
              <NavbarBlock />
            </div>
          </AssembledPart>

          {/* == HERO == delay: 40 frames */}
          <AssembledPart delay={40} zOffset={1600}>
            <div
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 60%, #eef2ff 100%)',
                borderRadius: 28,
                padding: '60px 64px',
                boxShadow: '0 20px 60px rgba(99,102,241,0.12), 0 1px 0 rgba(255,255,255,0.9) inset',
                border: '1px solid rgba(199,210,254,0.5)',
                marginBottom: SECTION_GAP,
              }}
            >
              <HeroBlock />
            </div>
          </AssembledPart>

          {/* == CARDS ROW == delay: 90 frames */}
          <AssembledPart delay={90} zOffset={2000}>
            <div
              style={{
                background: 'linear-gradient(180deg, #f8faff 0%, #f0f4ff 100%)',
                borderRadius: 28,
                padding: '48px 64px',
                boxShadow: '0 16px 48px rgba(99,102,241,0.10), 0 1px 0 rgba(255,255,255,0.9) inset',
                border: '1px solid rgba(199,210,254,0.4)',
                marginBottom: SECTION_GAP,
              }}
            >
              <CardsBlock />
            </div>
          </AssembledPart>

          {/* == SIDEBAR + CONTENT LAYOUT == delay: 150 frames */}
          <AssembledPart delay={150} zOffset={2400}>
            <div
              style={{
                background: 'white',
                borderRadius: 28,
                padding: '48px 64px',
                boxShadow: '0 12px 40px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset',
                border: '1px solid rgba(226,232,240,0.6)',
                marginBottom: SECTION_GAP,
              }}
            >
              <SidebarBlock />
            </div>
          </AssembledPart>

          {/* == FOOTER strip == delay: 210 frames */}
          <AssembledPart delay={210} zOffset={2800}>
            <div
              style={{
                background: 'rgba(255,255,255,0.96)',
                borderRadius: 18,
                padding: '24px 64px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                border: '1px solid rgba(226,232,240,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ color: '#6b7280', fontSize: 15 }}>
                © 2025 Victor C. Marinho
              </span>
              <div style={{ display: 'flex', gap: 24 }}>
                {['GitHub', 'LinkedIn', 'Twitter'].map((s) => (
                  <span key={s} style={{ color: '#6366f1', fontSize: 15, fontWeight: 600 }}>{s}</span>
                ))}
              </div>
            </div>
          </AssembledPart>
        </div>
      </div>
    </div>
  );
};
