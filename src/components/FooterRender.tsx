import React from 'react';

export interface FooterRenderProps {
  opacity?: number;
  translateY?: number;
}

export const RAVerificadaSeloRender: React.FC = () => {
  return (
    <div className="flex items-center gap-2 border border-[#00A526] bg-[#00A526]/10 px-3 py-1.5 rounded-md">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#00A526"/>
        <path d="M16 9L10.5 14.5L8 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-[#00A526] text-xs font-bold uppercase tracking-wider">
        Verificado Reclame AQUI
      </span>
    </div>
  );
}

export const FooterRender: React.FC<FooterRenderProps> = ({
  opacity = 1,
  translateY = 0,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[var(--color-muted)] font-light mt-12 pb-24 w-full max-w-7xl mx-auto px-8"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="flex flex-col gap-4">
        <RAVerificadaSeloRender />
        <p>
          &copy; {currentYear} Victor C. Marinho. Todos os direitos reservados.
        </p>
      </div>
      <nav aria-label="Redes Sociais" className="flex gap-6">
        <div className="text-[var(--color-muted)] hover:text-[var(--color-text)]">
          GitHub
        </div>
        <div className="text-[var(--color-muted)] hover:text-[var(--color-text)]">
          LinkedIn
        </div>
        <div className="text-[var(--color-muted)] hover:text-[var(--color-text)]">
          Currículo
        </div>
      </nav>
    </footer>
  );
};
