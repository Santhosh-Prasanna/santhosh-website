import {
  Activity,
  Share2,
  Palette,
  Video,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';
import { HONEST_EXPERIENCE_COUNTS } from '@/data/skills';

const REAL_WORLD_CARDS = [
  {
    title: 'Healthcare Analytics',
    subtitle: 'RA-CABG vs CABG',
    type: 'Freelance Project',
    icon: Activity,
    color: '#06b6d4',
    badge: 'Clinical Research Analytics',
    desc: 'Real-time cardiac surgery classification (RA-CABG vs CABG) using Python, SPSS, and Excel for data preparation, statistical evaluation, and model validation.',
    disclaimer: 'For analytical and demonstration purposes; not medical advice.',
    filterId: 'Healthcare Analytics',
  },
  {
    title: 'Social Media Marketing',
    subtitle: 'Influencer Engagement',
    type: 'Digital Marketing Work',
    icon: Share2,
    color: '#ec4899',
    badge: 'Audience & Content Growth',
    desc: 'Led content calendar planning, AI-assisted copy workflows, and community engagement optimization for a social media creator.',
    disclaimer: 'Contributed to ~20% reported increase in visibility and follower engagement.',
    filterId: 'Digital Marketing',
  },
  {
    title: 'Poster Design',
    subtitle: 'Local Businesses & Events',
    type: 'Creative Work',
    icon: Palette,
    color: '#f59e0b',
    badge: 'Canva & AI Workflows',
    desc: 'Promotional visual creative for local food stalls, restaurants, garments, interior design, and local cricket tournaments.',
    disclaimer: 'Practical creative design support without inflated commercial claims.',
    filterId: 'Poster Design',
  },
  {
    title: 'Wedding Live Streaming',
    subtitle: '20+ Engagements',
    type: 'Tamil Nadu',
    icon: Video,
    color: '#10b981',
    badge: 'Event Production',
    desc: 'Multi-camera streaming setup, broadcast support, and remote audience access across Tamil Nadu, collaborating with photo/video crews.',
    disclaimer: '100% attendance / fulfilment record across 20+ engagements.',
    filterId: 'Live Streaming',
  },
  {
    title: 'Business & Data Analytics',
    subtitle: 'Professional & Freelance Experience',
    type: 'Core Specialization',
    icon: BarChart3,
    color: '#818cf8',
    badge: 'FinTech, SaaS & BI',
    desc: 'Full-time and freelance business analysis covering SaaS invoice automation, Forex banking payment gateways, and executive Power BI models.',
    disclaimer: 'Primary identity with rigorous data governance and UAT coordination.',
    filterId: 'Business Analysis',
  },
];

export default function RealWorldWork() {
  return (
    <section className="real-world-section" id="real-world-work" style={{ padding: '90px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Diverse Client &amp; Service Engagements</span>
          <h2 className="section-title">
            Real-World <span className="gradient-text">Work</span>
          </h2>
          <p className="section-desc">
            Applying analytical, digital, creative and technical skills across different types of
            projects and client engagements.
          </p>
        </div>

        {/* 5 Real-World Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 22,
            marginBottom: 56,
          }}
        >
          {REAL_WORLD_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background:
                    idx === 4
                      ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 16, 30, 0.98) 100%)'
                      : 'rgba(10, 16, 30, 0.7)',
                  boxShadow: idx === 4 ? '0 12px 35px rgba(99, 102, 241, 0.15)' : undefined,
                  borderColor: idx === 4 ? 'rgba(129, 140, 248, 0.4)' : undefined,
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: `${card.color}18`,
                        border: `1px solid ${card.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: card.color,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        color: card.color,
                        background: `${card.color}15`,
                        border: `1px solid ${card.color}35`,
                        padding: '3px 10px',
                        borderRadius: 9999,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: 4, fontWeight: 700 }}>
                    {card.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: card.color,
                      marginBottom: 12,
                    }}
                  >
                    {card.subtitle} &bull; <span style={{ color: '#cbd5e1' }}>{card.type}</span>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 16 }}>
                    {card.desc}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      lineHeight: 1.45,
                      marginBottom: 16,
                    }}
                  >
                    {card.disclaimer}
                  </div>

                  <a
                    href="#case-studies"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: '#06b6d4',
                      textDecoration: 'none',
                    }}
                  >
                    <span>View in Case Studies</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================
            HONEST EXPERIENCE COUNTS (Separately Displayed)
           ============================================================ */}
        <div
          className="glass-card"
          style={{
            padding: '34px 30px',
            borderRadius: '20px',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(10, 16, 30, 0.95) 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
              marginBottom: 20,
              paddingBottom: 16,
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <ShieldCheck size={22} color="#10b981" />
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>
                Honest Experience Counts
              </h3>
            </div>
            <span
              style={{
                fontSize: '0.75rem',
                color: '#10b981',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '4px 12px',
                borderRadius: 9999,
                fontWeight: 600,
              }}
            >
              Zero Combined Hyperbole • Transparent Record
            </span>
          </div>

          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 24, maxWidth: '820px' }}>
            These numbers represent distinct, authentic categories of practical experience. They are
            never combined into misleading claims like &ldquo;30+ clients&rdquo; or inflated analytics figures.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: 16,
            }}
          >
            {HONEST_EXPERIENCE_COUNTS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '18px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: idx === 0 ? '#10b981' : idx === 3 ? '#38bdf8' : '#ffffff',
                      lineHeight: 1.1,
                      marginBottom: 8,
                    }}
                  >
                    {item.count}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 600, lineHeight: 1.4, marginBottom: 6 }}>
                    {item.label}
                  </div>
                </div>
                <div style={{ fontSize: '0.725rem', color: '#94a3b8', fontStyle: 'italic' }}>
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
