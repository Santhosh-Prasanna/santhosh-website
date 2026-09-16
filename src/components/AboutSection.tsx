import { CheckCircle2, Award, BookOpen, Lightbulb, Compass, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left: Credential & Capability Card */}
          <div className="glass-card about-portrait-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <Award size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: '#fff' }}>Santhosh Prasanna</h4>
                <p style={{ fontSize: '0.85rem', color: '#06b6d4', fontWeight: 600 }}>
                  Business Analyst &amp; Growth Partner
                </p>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 20 }}>
              Operating at the intersection of business strategy, data architecture, and emerging
              AI capabilities to transform operational friction into competitive advantage.
            </p>

            <div className="about-cred-list">
              <div className="cred-item">
                <span className="cred-check">
                  <CheckCircle2 size={16} />
                </span>
                <span>Advanced Quantitative Analysis &amp; Data Storytelling</span>
              </div>
              <div className="cred-item">
                <span className="cred-check">
                  <CheckCircle2 size={16} />
                </span>
                <span>End-to-end Enterprise BI Dashboard Delivery</span>
              </div>
              <div className="cred-item">
                <span className="cred-check">
                  <CheckCircle2 size={16} />
                </span>
                <span>AI-Assisted Workflow &amp; ETL Automation</span>
              </div>
              <div className="cred-item">
                <span className="cred-check">
                  <CheckCircle2 size={16} />
                </span>
                <span>Cross-functional Stakeholder Governance &amp; ROI Tracking</span>
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <Target size={18} color="#06b6d4" />
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f8fafc' }}>
                  Mission &amp; Value Delivery
                </span>
              </div>
              <p style={{ fontSize: '0.825rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                Providing executive clarity without technical jargon, ensuring every model and dashboard
                directly impacts profitability and operational speed.
              </p>
            </div>
          </div>

          {/* Right: Narrative & Impact */}
          <div className="about-content">
            <span className="section-subtitle">About Santhosh</span>
            <h3>
              Decisive Insights Backed By <span className="gradient-text">Rigorous Data Strategy</span>
            </h3>

            <p>
              I partner with founders, executives, and department leads who need clarity in their
              numbers. In fast-paced business environments, disconnected spreadsheets and siloed databases
              create blindness.
            </p>

            <p>
              Through the <strong>Sandy</strong> brand, my approach combines deep business context with cutting-edge
              analytical frameworks. Whether designing automated metric monitors, forecasting
              runway, or embedding AI assistants into daily operations, the goal is always clear:
              <strong> actionable leverage</strong>.
            </p>

            {/* Beyond Analytics Section */}
            <div
              style={{
                marginTop: 22,
                marginBottom: 24,
                padding: '22px 24px',
                borderRadius: '14px',
                background: 'rgba(99, 102, 241, 0.05)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#818cf8', marginBottom: 6 }}>
                Beyond Analytics
              </div>
              <p style={{ fontSize: '0.925rem', color: '#e2e8f0', lineHeight: 1.65, marginBottom: 10 }}>
                &ldquo;My professional foundation is in Business &amp; Data Analytics, but my practical
                work has also given me opportunities to explore healthcare analytics, AI-assisted
                workflows, digital marketing, creative design and live event streaming.&rdquo;
              </p>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                &ldquo;These experiences have helped me understand different types of clients,
                requirements, workflows and delivery expectations.&rdquo;
              </p>
              <div
                style={{
                  marginTop: 14,
                  paddingTop: 12,
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.8rem',
                  color: '#cbd5e1',
                }}
              >
                <strong>Important Brand Positioning:</strong> &ldquo;I am a Business &amp; Data Analyst
                with practical experience across analytics, AI, digital marketing, creative design
                and live streaming.&rdquo; Primary identity remains:{' '}
                <strong style={{ color: '#ffffff' }}>FREELANCE BUSINESS &amp; DATA ANALYST</strong>.
                Supporting capabilities: AI &amp; Automation, Digital Marketing, Poster Design &amp;
                Creative, Wedding Live Streaming.
              </div>
            </div>

            {/* AI Philosophy & Stance */}
            <div
              style={{
                marginTop: 0,
                marginBottom: 24,
                padding: '18px 22px',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.05)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#06b6d4', marginBottom: 6 }}>
                AI Philosophy &amp; Stance
              </div>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
                &ldquo;I explore and use modern AI tools such as ChatGPT, Claude and Gemini to support
                research, analysis, documentation, content workflows and productivity. I focus on
                applying AI practically, with human judgment and validation remaining central to the
                work.&rdquo;
              </p>
            </div>

            <div className="about-metrics-grid">
              <div className="about-metric-box">
                <div className="val">100%</div>
                <div className="desc">Focus on Business ROI &amp; Operational Efficiency</div>
              </div>
              <div className="about-metric-box">
                <div className="val">Zero</div>
                <div className="desc">Vanity Metrics — Only High-Leverage Strategic KPIs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
