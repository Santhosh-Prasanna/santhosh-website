import { LayoutDashboard, FileText, Cpu, CheckSquare, Database, LineChart } from 'lucide-react';

const CAPABILITIES = [
  {
    icon: LayoutDashboard,
    title: 'Executive BI & Automated Dashboards',
    desc: 'Reduced reporting turnaround by 40% by engineering automated Power BI & Excel dashboards that turn complex business data into real-time decision cockpits.',
    tags: ['Power BI', 'Advanced Excel', 'DAX', 'KPI Dashboards'],
    metric: '40% Faster Turnaround',
  },
  {
    icon: FileText,
    title: 'Requirements Engineering & Agile SDLC',
    desc: 'Authoring clear BRD/FRD documents, epics, user stories, and acceptance criteria with 100% RTM traceability, Jira backlog grooming, and sprint ceremonies.',
    tags: ['BRD / FRD', 'User Stories', 'Jira', 'RTM Traceability', 'Agile Scrum'],
    metric: '100% RTM Traceability',
  },
  {
    icon: Cpu,
    title: 'Workflow Optimization & AI Automation',
    desc: 'Improved operational efficiency by 30%+ through root-cause analysis (RCA), business process re-engineering, and AI-driven workflow automation.',
    tags: ['RCA', 'Workflow Optimization', 'AI Automation', 'Process Mapping'],
    metric: '30%+ Efficiency Gain',
    isAiAutomation: true,
  },
  {
    icon: CheckSquare,
    title: 'Data Validation, QA & UAT Governance',
    desc: 'Improved system accuracy by 35% through meticulous User Acceptance Testing (UAT), data validation, reconciliation logic, and defect lifecycle analysis.',
    tags: ['UAT Testing', 'Data Validation', 'Reconciliation', 'Defect Analysis'],
    metric: '35% Accuracy Boost',
  },
  {
    icon: Database,
    title: 'Exploratory Data Analysis & Mining',
    desc: 'Performing comprehensive exploratory data analysis (EDA) and data mining with SQL, Excel, and Power BI to identify underlying performance trends.',
    tags: ['SQL', 'EDA', 'Data Mining', 'Trend Analysis'],
    metric: 'Data-Driven Clarity',
  },
  {
    icon: LineChart,
    title: 'Financial & Profitability Analytics',
    desc: 'Analyzing multi-million dollar business datasets (e.g. $24.9M+ records) to diagnose margin leaks and model revenue optimization scenarios.',
    tags: ['Financial Modeling', 'Revenue Analysis', 'Profitability', 'Power BI'],
    metric: '$24.9M Dataset Modeling',
  },
];

export default function Expertise() {
  return (
    <section className="services-section" id="expertise">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Core Capabilities</span>
          <h2 className="section-title">
            Business Analysis &amp; <span className="gradient-text">Data Engineering Expertise</span>
          </h2>
          <p className="section-desc">
            Proven analytical competencies spanning requirements engineering, automated dashboard
            development, process optimization, and AI workflow integration.
          </p>
        </div>

        <div className="services-grid-balanced">
          {CAPABILITIES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="glass-card service-card"
                style={
                  srv.isAiAutomation
                    ? {
                        border: '1px solid rgba(6, 182, 212, 0.35)',
                        background:
                          'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(10, 16, 30, 0.9) 100%)',
                      }
                    : undefined
                }
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 20,
                    }}
                  >
                    <div className="service-icon-wrap" style={{ marginBottom: 0 }}>
                      <Icon size={24} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#10b981',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        padding: '3px 10px',
                        borderRadius: 9999,
                      }}
                    >
                      {srv.metric}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: 10, color: '#ffffff' }}>
                    {srv.title}
                  </h3>

                  <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: 1.65, marginBottom: 20 }}>
                    {srv.desc}
                  </p>
                </div>

                <div>
                  <div className="service-tags">
                    {srv.tags.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {srv.isAiAutomation && (
                    <div
                      style={{
                        marginTop: 18,
                        paddingTop: 16,
                        borderTop: '1px solid rgba(6, 182, 212, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 10,
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.825rem',
                          fontWeight: 600,
                          color: '#38bdf8',
                        }}
                      >
                        ChatGPT • Claude • Gemini • AI Automation
                      </span>
                      <a
                        href="#ai-services"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          fontSize: '0.825rem',
                          color: '#06b6d4',
                          fontWeight: 700,
                          textDecoration: 'none',
                        }}
                      >
                        <span>Explore AI Capabilities</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
