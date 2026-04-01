import React from 'react';

export const NavbarBlock: React.FC = () => (
  <>
    {/* Logo */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 900,
          fontSize: 16,
        }}
      >
        V
      </div>
      <span style={{ fontWeight: 800, fontSize: 18, color: '#111' }}>
        Victor<span style={{ color: '#6366f1' }}>Dev</span>
      </span>
    </div>

    {/* Nav links */}
    <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
      {['Sobre', 'Projetos', 'Skills', 'Blog', 'Contato'].map((item) => (
        <span
          key={item}
          style={{
            color: item === 'Projetos' ? '#6366f1' : '#374151',
            fontSize: 15,
            fontWeight: item === 'Projetos' ? 700 : 500,
            letterSpacing: 0.2,
          }}
        >
          {item}
        </span>
      ))}
    </nav>

    {/* CTA */}
    <div
      style={{
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        color: 'white',
        borderRadius: 99,
        padding: '10px 24px',
        fontSize: 14,
        fontWeight: 700,
      }}
    >
      Hire me ✨
    </div>
  </>
);
