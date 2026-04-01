import React from 'react';
import { Sequence, AbsoluteFill } from 'remotion';
import { BreatherScreen } from '../components/BreatherScreen';
import { FinalRevealScreen } from '../components/FinalRevealScreen';
import { AssemblyScene } from './AssemblyScene';
import { CloseUpScene } from './CloseUpScene';

/**
 * AnatomyOrchestrator — 15 seconds @ 60fps = 900 frames
 *
 * Timeline:
 *  0  - 120  (0-2s)   → Breather: "A ideia toma forma."
 *  120 - 480  (2-8s)   → 3D Assembly Scene (360 frames = 6s)
 *  480 - 570  (8-9.5s) → Breather: "Cada detalhe importa."
 *  570 - 750  (9.5-12.5s) → Close-up Scene (180 frames = 3s)
 *  750 - 810  (12.5-13.5s) → Breather: "Pronto para o futuro."
 *  810 - 900  (13.5-15s)   → Final Reveal (Logo + CTA)
 */
export const AnatomyOrchestrator: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: '#000' }}>
      {/* === 0-2s: Intro Breather === */}
      <Sequence from={0} durationInFrames={120}>
        <BreatherScreen
          text="A ideia toma forma."
          subtitle="Anatomy of a SaaS"
        />
      </Sequence>

      {/* === 2-8s: 3D Assembly Scene === */}
      <Sequence from={120} durationInFrames={360}>
        <AssemblyScene />
      </Sequence>

      {/* === 8-9.5s: Mid Breather === */}
      <Sequence from={480} durationInFrames={90}>
        <BreatherScreen text="Cada detalhe importa." />
      </Sequence>

      {/* === 9.5-12.5s: Close-Up Scene (zoom into CTA card) === */}
      <Sequence from={570} durationInFrames={180}>
        <CloseUpScene />
      </Sequence>

      {/* === 12.5-13.5s: Final Breather === */}
      <Sequence from={750} durationInFrames={60}>
        <BreatherScreen text="Pronto para o futuro." />
      </Sequence>

      {/* === 13.5-15s: Final Reveal (Logo + CTA) === */}
      <Sequence from={810} durationInFrames={90}>
        <FinalRevealScreen />
      </Sequence>
    </AbsoluteFill>
  );
};
