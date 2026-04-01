import React from 'react';

const SKILLS = ['Swift', 'SwiftUI', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Rust', 'PostgreSQL'];

const PROJECTS = [
  { name: 'HealthKit Pro', desc: 'iOS health tracking app — 500k users', lang: 'Swift', color: '#ff6b35' },
  { name: 'SaaS Dashboard', desc: 'Analytics platform — 200k req/day', lang: 'Next.js', color: '#6366f1' },
  { name: 'CloudSync CLI', desc: 'High-perf sync tool in Rust', lang: 'Rust', color: '#f97316' },
];

export const SidebarBlock: React.FC = () => (
  <div style={{ display: 'flex', gap: 48 }}>
    {/* Sidebar */}
    <div
      style={{
        width: 280,
        flexShrink: 0,
        borderRight: '1px solid #f1f5f9',
        paddingRight: 40,
      }}
    >
      <h3 style={{ fontSize: 13, fontWeight: 700, color: '#94a3b8', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 }}>
        Tech Stack
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {SKILLS.map((skill) => (
          <div
            key={skill}
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 99,
              padding: '6px 14px',
              fontSize: 13,
              fontWeight: 600,
              color: '#374151',
            }}
          >
            {skill}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 36 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#94a3b8', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
          Localização
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>📍</span>
          <span style={{ color: '#374151', fontWeight: 600 }}>Brasil · Remote</span>
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#94a3b8', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
          Disponibilidade
        </h3>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(74,222,128,0.1)',
            border: '1px solid rgba(74,222,128,0.3)',
            borderRadius: 99,
            padding: '8px 16px',
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80' }} />
          <span style={{ color: '#16a34a', fontWeight: 700, fontSize: 14 }}>Aberto a conversas</span>
        </div>
      </div>
    </div>

    {/* Main content: Projects list */}
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0f172a' }}>Projetos em Destaque</h2>
        <span style={{ color: '#6366f1', fontWeight: 600, fontSize: 14 }}>Ver todos →</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {PROJECTS.map((proj) => (
          <div
            key={proj.name}
            style={{
              background: '#f8fafc',
              borderRadius: 16,
              padding: '20px 24px',
              border: '1px solid #f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {/* Color dot */}
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: proj.color,
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: 16 }}>{proj.name}</div>
                <div style={{ color: '#64748b', fontSize: 13, marginTop: 2 }}>{proj.desc}</div>
              </div>
            </div>
            <div
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: 8,
                padding: '4px 12px',
                fontSize: 12,
                fontWeight: 700,
                color: '#374151',
              }}
            >
              {proj.lang}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub activity mini-chart */}
      <div style={{ marginTop: 28 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#94a3b8', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>
          GitHub Activity
        </h3>
        <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end' }}>
          {[3, 5, 2, 7, 4, 8, 6, 9, 3, 5, 7, 4, 6, 8, 5, 3, 7, 9, 4, 6, 8, 5, 3, 7].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: h * 6,
                borderRadius: 3,
                background: i > 18
                  ? 'linear-gradient(180deg, #6366f1, #8b5cf6)'
                  : 'rgba(99,102,241,0.15)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
