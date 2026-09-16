import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, BarChart3, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* LEFT COLUMN: Positioning, Headline, Description, CTAs */}
          <div className="hero-content">
            <div className="badge-pill emerald">
              <span className="pulse-dot"></span>
              <span>Available for Advisory &amp; Contract Analytics</span>
            </div>

            <div className="hero-supporting-title">
              <Sparkles size={18} className="text-accent-emerald" />
              <span>BUSINESS &amp; DATA ANALYST &bull; AI, MARKETING &amp; EVENT STREAMING</span>
            </div>

            <h1 className="hero-heading">
              FREELANCE <span className="gradient-text">BUSINESS &amp; DATA ANALYST</span>
            </h1>

            <p className="hero-description">
              Transforming fragmented business metrics into high-leverage growth strategies,
              automated data pipelines, and intelligent executive dashboards. Empowering leadership
              with quantifiable clarity and predictive precision.
            </p>

            <div className="hero-actions">
              <a href="#consultation" id="hero-cta-primary" className="btn btn-primary">
                <span>Book Strategy Consultation</span>
                <ArrowRight size={18} />
              </a>

              <a href="#real-world-work" id="hero-cta-work" className="btn btn-secondary">
                <span>Real-World Work</span>
                <Sparkles size={16} />
              </a>
            </div>

            <div className="hero-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(105px, 1fr))', gap: 12 }}>
              <div className="stat-item">
                <span className="stat-number">2+ Yrs</span>
                <span className="stat-label">Analytics Exp</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Direct BA Client</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Live Streams (100%)</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Multi</span>
                <span className="stat-label">Healthcare &bull; Creative</span>
              </div>
            </div>

            {/* Compact Homepage Client Appreciation Card */}
            <div
              style={{
                marginTop: 20,
                padding: '16px 20px',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 14,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    position: 'relative',
                    width: 44,
                    height: 56,
                    borderRadius: 6,
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/images/appreciation/client-appreciation.jpg"
                    alt="Client appreciation preview"
                    width={44}
                    height={56}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      CLIENT APPRECIATION
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', padding: '2px 8px', borderRadius: 9999, border: '1px solid rgba(245, 158, 11, 0.25)' }}>
                      Client details confidential
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '2px 0 0' }}>
                    &ldquo;A meaningful milestone from my early freelance journey.&rdquo;
                  </p>
                </div>
              </div>

              <a
                href="#client-appreciation"
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.825rem', whiteSpace: 'nowrap' }}
              >
                <span>Read the Appreciation</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Professional Portrait */}
          <div className="hero-portrait-col">
            <div className="portrait-glow-backdrop" aria-hidden="true" />

            <div className="portrait-card">
              {/* Clean Portrait Image Container - 3:4 aspect ratio, zero distortion, zero face cropping, NO overlapping text */}
              <div className="portrait-image-wrapper">
                <Image
                  src="/images/profile/My_Photo.jpeg"
                  alt="Santhosh Prasanna — Freelance Business & Data Analyst"
                  width={410}
                  height={547}
                  priority
                  className="portrait-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }}
                  sizes="(max-width: 640px) 320px, (max-width: 960px) 360px, 410px"
                />
              </div>

              {/* Verified Professional Identity Strip positioned cleanly below the portrait */}
              <div className="portrait-info-footer">
                <div className="portrait-info-primary">
                  <div className="status-indicator-dot"></div>
                  <div>
                    <div className="portrait-name">Santhosh Prasanna</div>
                    <div className="portrait-role">Verified Business &amp; Data Analyst</div>
                  </div>
                </div>
                <div className="portrait-spec-tag">AI &bull; Power BI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
