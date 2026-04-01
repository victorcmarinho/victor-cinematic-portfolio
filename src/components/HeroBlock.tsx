import React from 'react';
import { Img } from 'remotion';
import perfilUrl from '../assets/perfil.webp';

export const HeroBlock: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40 }}>
    {/* Left content */}
    <div style={{ flex: 1 }}>
      {/* Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(99,102,241,0.08)',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: 99,
          padding: '6px 16px',
          marginBottom: 24,
        }}
      >
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80' }} />
        <span style={{ color: '#6366f1', fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>
          DISPONÍVEL PARA PROJETOS
        </span>
      </div>

      <h1
        style={{
          fontSize: 72,
          fontWeight: 900,
          lineHeight: 1.05,
          color: '#0f172a',
          marginBottom: 20,
          letterSpacing: -2,
        }}
      >
        Olá, sou{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 60%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Victor
        </span>
        .
      </h1>

      <p style={{ color: '#64748b', fontSize: 20, lineHeight: 1.7, maxWidth: 540, marginBottom: 36 }}>
        Engenheiro de Software especializado no ecossistema Apple e em SaaS de alto impacto.
        Transformo ideias em produtos que escalam para{' '}
        <strong style={{ color: '#6366f1' }}>1 milhão de usuários</strong>.
      </p>

      <div style={{ display: 'flex', gap: 16 }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            borderRadius: 99,
            padding: '14px 36px',
            fontSize: 16,
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
          }}
        >
          Ver Projetos →
        </div>
        <div
          style={{
            border: '1.5px solid #e2e8f0',
            color: '#374151',
            borderRadius: 99,
            padding: '14px 36px',
            fontSize: 16,
            fontWeight: 600,
            background: 'white',
          }}
        >
          Sobre mim
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display: 'flex', gap: 40, marginTop: 40 }}>
        {[
          { value: '5+', label: 'Anos de Exp.' },
          { value: '1M+', label: 'Usuários Impactados' },
          { value: '50+', label: 'Projetos Entregues' },
        ].map(({ value, label }) => (
          <div key={label}>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#0f172a' }}>{value}</div>
            <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Right: Profile Image with decorative elements */}
    <div style={{ position: 'relative', flexShrink: 0 }}>
      {/* Glow behind image */}
      <div
        style={{
          position: 'absolute',
          inset: -20,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        style={{
          width: 260,
          height: 260,
          borderRadius: '50%',
          padding: 4,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #c084fc)',
          position: 'relative',
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
            border: '4px solid white',
            display: 'block',
          }}
        />
      </div>

      {/* Floating badge */}
      <div
        style={{
          position: 'absolute',
          bottom: -10,
          right: -20,
          background: 'white',
          borderRadius: 14,
          padding: '10px 16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 20 }}>🍎</span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Apple Dev</div>
          <div style={{ fontSize: 11, color: '#94a3b8' }}>iOS · macOS · Swift</div>
        </div>
      </div>
    </div>
  </div>
);
