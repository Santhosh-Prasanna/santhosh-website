import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Landmark, CreditCard } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Business Analyst',
    company: 'SSINTEK',
    location: 'Trichy, Tamil Nadu',
    period: 'Full-Time Experience',
    badge: 'Core BA Experience',
    summary:
      'Led business analysis and requirements engineering across SaaS Invoice Automation systems and Forex Banking Payment Gateway integrations.',
    highlights: [
      'Spearheaded requirements gathering (BRD/FRD, user stories, acceptance criteria) for SaaS Invoice Automation and Forex Banking Payment Gateway modules, ensuring 100% RTM traceability.',
      'Designed multi-currency reconciliation logic and financial validation workflows for cross-border payment gateway settlements.',
      'Reduced reporting turnaround by 40% through automated Power BI & Excel executive dashboards.',
      'Improved system accuracy by 35% via comprehensive UAT test execution, data validation, and defect analysis.',
      'Enhanced sprint velocity and release quality through Jira backlog management, sprint planning, and Agile ceremonies.',
      'Improved operational efficiency by 30%+ through Root Cause Analysis (RCA), workflow optimization, and AI-driven automation.',
    ],
    tags: [
      'Forex Payment Gateways',
      'SaaS Invoice Automation',
      'Power BI',
      'Excel Dashboards',
      'UAT Testing',
      'Jira Backlog',
      'Agile / Scrum',
      'BRD / FRD',
      'RCA',
      'AI Automation',
    ],
  },
  {
    role: 'Data Analytics and Business Analytics Intern',
    company: 'The Sparks Foundation',
    location: 'Remote',
    period: 'Mar 2022 – Jun 2022',
    badge: 'Analytics Foundation',
    summary:
      'Conducted exploratory data mining and automated KPI reporting to support stakeholder operational decisions.',
    highlights: [
      'Performed EDA and data mining using SQL, Excel, and Power BI to identify business performance trends.',
      'Built automated KPI dashboards and stakeholder reports for real-time performance monitoring.',
      'Ensured reporting accuracy through rigorous data validation, cleansing, and quality analysis.',
      'Converted complex business requirements into actionable executive insights via structured reports and dashboards.',
    ],
    tags: ['SQL', 'Exploratory Data Analysis (EDA)', 'Data Mining', 'Power BI', 'Excel', 'KPI Dashboards'],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Professional Background</span>
          <h2 className="section-title">
            Industry Experience &amp; <span className="gradient-text">Track Record</span>
          </h2>
          <p className="section-desc">
            Direct business analyst track record leading SaaS invoice automation, Forex banking
            payment gateways, and automated Power BI intelligence.
          </p>
        </div>

        <div className="experience-timeline">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="glass-card experience-item-card">
              <div className="experience-card-header">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>{exp.role}</h3>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#06b6d4',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.25)',
                        padding: '3px 10px',
                        borderRadius: 9999,
                      }}
                    >
                      {exp.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#38bdf8', marginBottom: 4 }}>
                    {exp.company}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0, fontStyle: 'italic' }}>
                    {exp.summary}
                  </p>
                </div>

                <div className="experience-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: '0.875rem' }}>
                    <Calendar size={15} color="#06b6d4" />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: '0.875rem' }}>
                    <MapPin size={15} color="#10b981" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="experience-bullets">
                {exp.highlights.map((bullet, bIdx) => (
                  <div key={bIdx} className="experience-bullet-row">
                    <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: 3 }} />
                    <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              <div className="experience-tags-row">
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
