import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const ROADMAP_STEPS = [
  {
    num: '01',
    title: 'Diagnostic & Data Audit',
    desc: 'Reviewing current data silos, business bottlenecks, and stakeholder reporting requirements to quantify high-priority opportunities.',
  },
  {
    num: '02',
    title: 'Architecture & ETL Design',
    desc: 'Establishing automated ingestion pipelines, SQL cleaning rules, and resilient schema models to guarantee data purity.',
  },
  {
    num: '03',
    title: 'BI & AI Workflow Build',
    desc: 'Crafting interactive Power BI dashboards, automated alerts, and machine-assisted forecasting models tailored for decision-makers.',
  },
  {
    num: '04',
    title: 'Handover & ROI Governance',
    desc: 'Empowering your team with comprehensive documentation, live training workshops, and post-launch metric tracking.',
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: 'Sprint Delivery',
    subtitle: 'Fixed-Scope Project',
    tag: 'Popular for BI Builds',
    desc: 'Ideal for rapid, turnkey deliverables like a complete Power BI executive suite or an automated AI data pipeline.',
    features: [
      'Defined deliverables & timeline (2-4 weeks)',
      'Weekly milestone demos',
      'Full source code & schema documentation',
      '30-day post-launch warranty support',
    ],
  },
  {
    title: 'Fractional Analyst',
    subtitle: 'Ongoing Dedicated Partner',
    featured: true,
    tag: 'High Value',
    desc: 'Embed Santhosh directly into your team as your on-demand lead analyst, steering weekly analytics and automation.',
    features: [
      '15–20 hours / week dedicated bandwidth',
      'Direct Slack/Teams channel integration',
      'Continuous dashboard & pipeline iteration',
      'Executive board & stakeholder presentation support',
    ],
  },
  {
    title: 'Strategic Advisory',
    subtitle: 'Executive Consulting Retainer',
    tag: 'Advisory',
    desc: 'High-level guidance for founders and VPs on data architecture, AI tooling choices, and KPI governance.',
    features: [
      'Bi-weekly strategic review sessions',
      'Data model & dashboard architecture audits',
      'AI feasibility evaluations',
      'Async review of key analytical models',
    ],
  },
];

export default function ProcessRoadmap() {
  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Structured Execution</span>
          <h2 className="section-title">
            How We Partner: From <span className="gradient-text">Chaos to Clarity</span>
          </h2>
          <p className="section-desc">
            A proven, predictable delivery framework ensuring every analytical project ships on
            time, with zero ambiguity and maximum commercial impact.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="process-grid">
          {ROADMAP_STEPS.map((step, idx) => (
            <div key={idx} className="glass-card step-card">
              <div className="step-number">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Engagement Models */}
        <div className="engagement-grid">
          {ENGAGEMENT_MODELS.map((model, idx) => (
            <div
              key={idx}
              className={`glass-card engagement-card ${model.featured ? 'featured' : ''}`}
            >
              {model.featured && (
                <div className="featured-pill">
                  <Sparkles size={13} />
                  <span>Most Popular Engagement</span>
                </div>
              )}

              <div>
                <div className="engagement-top-row">
                  <span className="engagement-subtitle">{model.subtitle}</span>
                  <span className="engagement-badge">{model.tag}</span>
                </div>

                <h3 className="engagement-title">{model.title}</h3>
                <p className="engagement-desc">{model.desc}</p>

                <div className="engagement-features-list">
                  {model.features.map((feat, fIdx) => (
                    <div key={fIdx} className="engagement-feature-item">
                      <div className="feature-icon-chip">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="feature-text">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="engagement-action-wrap">
                <a
                  href="#consultation"
                  className={`btn ${model.featured ? 'btn-primary' : 'btn-secondary'} engagement-btn`}
                >
                  <span>Select {model.title}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
