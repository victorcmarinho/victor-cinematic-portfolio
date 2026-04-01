import React from 'react';

const CARDS = [
  {
    icon: '📱',
    title: 'iOS & Swift',
    desc: 'Apps nativos de alta performance para iPhone e iPad.',
    tag: 'Mobile',
    tagColor: '#6366f1',
    tagBg: 'rgba(99,102,241,0.08)',
    accent: '#6366f1',
  },
  {
    icon: '⚡',
    title: 'SaaS & Web',
    desc: 'Plataformas escaláveis com React, Next.js e TypeScript.',
    tag: 'Web',
    tagColor: '#0891b2',
    tagBg: 'rgba(8,145,178,0.08)',
    accent: '#0891b2',
  },
  {
    icon: '🏗️',
    title: 'Arquitetura',
    desc: 'Sistemas robustos, microsserviços e infraestrutura cloud.',
    tag: 'Backend',
    tagColor: '#059669',
    tagBg: 'rgba(5,150,105,0.08)',
    accent: '#059669',
  },
  {
    icon: '🎨',
    title: 'Design & UX',
    desc: 'Interfaces elegantes com Figma, motion design e acessibilidade.',
    tag: 'Design',
    tagColor: '#db2777',
    tagBg: 'rgba(219,39,119,0.08)',
    accent: '#db2777',
  },
];

export const CardsBlock: React.FC = () => (
  <div>
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 36, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>
        O que eu faço
      </h2>
      <p style={{ color: '#64748b', fontSize: 16 }}>
        Especialidades que entregam resultados reais.
      </p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
      {CARDS.map((card) => (
        <div
          key={card.title}
          style={{
            background: 'white',
            borderRadius: 20,
            padding: '28px 24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            border: '1px solid #f1f5f9',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {/* Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: card.tagBg,
              color: card.tagColor,
              borderRadius: 99,
              padding: '3px 10px',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 0.8,
              textTransform: 'uppercase',
              width: 'fit-content',
            }}
          >
            {card.tag}
          </div>

          {/* Icon */}
          <div style={{ fontSize: 36 }}>{card.icon}</div>

          {/* Title */}
          <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', margin: 0 }}>
            {card.title}
          </h3>

          {/* Desc */}
          <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, margin: 0, flex: 1 }}>
            {card.desc}
          </p>

          {/* Bottom accent */}
          <div
            style={{
              height: 3,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${card.accent}, transparent)`,
              marginTop: 8,
            }}
          />
        </div>
      ))}
    </div>
  </div>
);
