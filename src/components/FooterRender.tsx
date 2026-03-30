import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const FooterRender: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const textY = interpolate(frame, [0, 20], [20, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  const sealScale = spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 12, stiffness: 100 } });

  return (
    <footer className="w-full border-t border-[var(--color-border)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div style={{ opacity: textOpacity, transform: `translateY(${textY}px)` }}>
          <p className="text-[var(--color-muted)] text-sm">
            © {new Date().getFullYear()} Victor C. Marinho. Todos os direitos reservados.
          </p>
        </div>

        {/* Mocked Reclame AQUI Seal */}
        <div 
          className="flex items-center gap-2 px-4 py-2 border border-[#16A34A] rounded-md bg-[#F0FDF4] shadow-sm cursor-default"
          style={{ transform: `scale(${sealScale})` }}
        >
          <div className="w-6 h-6 flex items-center justify-center bg-[#16A34A] rounded-sm text-white font-bold text-xs select-none">
            RA
          </div>
          <div className="flex flex-col">
            <span className="text-[#15803D] text-[10px] uppercase font-bold tracking-tight leading-none">
              Empresa Verificada
            </span>
            <span className="text-[#16A34A] text-[12px] font-black leading-tight">
              Reclame AQUI
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
