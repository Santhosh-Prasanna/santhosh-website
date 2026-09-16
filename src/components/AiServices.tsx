import {
  Brain,
  Search,
  LineChart,
  FileCode,
  FileSpreadsheet,
  Workflow,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const AI_SERVICES_LIST = [
  {
    icon: Search,
    title: 'AI-assisted Business Research',
    desc: 'Accelerating market landscape exploration, competitor profiling, and industry benchmark synthesis. Every insight is critically vetted against real-world domain realities and primary business records.',
    focus: 'Research Acceleration • Qualitative Discovery',
  },
  {
    icon: LineChart,
    title: 'AI-assisted Data Analysis',
    desc: 'Leveraging AI assistance to formulate analytical hypotheses, spot initial numerical patterns, and structure exploratory queries, followed by rigorous SQL reconciliation and quantitative verification.',
    focus: 'Pattern Discovery • Statistical Sanity Checks',
  },
  {
    icon: FileCode,
    title: 'AI-powered Documentation',
    desc: 'Drafting structured Business Requirements Documents (BRDs), Functional Requirements Documents (FRDs), and user stories. Human review ensures 100% Requirements Traceability Matrix (RTM) integrity.',
    focus: 'BRD / FRD Drafting • User Stories & Acceptance Criteria',
  },
  {
    icon: FileSpreadsheet,
    title: 'AI-assisted Reporting',
    desc: 'Structuring executive briefing memos, milestone summaries, and contextual narratives to accompany quantitative BI dashboards for rapid stakeholder clarity and leadership review.',
    focus: 'Executive Briefs • Stakeholder Narrative Context',
  },
  {
    icon: Sparkles,
    title: 'AI Content Workflows',
    desc: 'Streamlining operational content delivery including sprint documentation, client handover SOPs, release notes, and technical walkthroughs with consistent precision and professional tone.',
    focus: 'Operational Handover • Process Guides & SOPs',
  },
  {
    icon: Workflow,
    title: 'AI Workflow Automation',
    desc: 'Mapping and implementing practical trigger-based automations and webhook integrations to eliminate administrative friction and repetitive manual data movement across SaaS tools.',
    focus: 'Process Modernization • Redundant Task Elimination',
  },
  {
    icon: Brain,
    title: 'Prompt Engineering',
    desc: 'Designing deterministic, role-structured prompt templates that produce repeatable, governed business artifacts without hallucinations or ambiguity.',
    focus: 'Structured System Prompts • Deterministic Outputs',
  },
  {
    icon: Zap,
    title: 'AI Productivity Workflows',
    desc: 'Establishing practical day-to-day workflow rituals using tools like ChatGPT, Claude, and Gemini to safely augment operational pace while safeguarding proprietary business data.',
    focus: 'Operational Velocity • Safe AI Application',
  },
];

const VALUE_PILLARS = [
  { title: 'Business Understanding', desc: 'Grounded domain knowledge in finance, SaaS, and banking' },
  { title: 'Analytical Thinking', desc: 'Rigorous root-cause discovery and quantitative skepticism' },
  { title: 'Human Review', desc: '100% manual validation before any business decision or deployment' },
  { title: 'Practical AI Application', desc: 'Targeted tooling to accelerate velocity without hype' },
];

export default function AiServices() {
  return (
    <section className="services-section" id="ai-services" style={{ paddingTop: 60, paddingBottom: 60 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Supporting Capability</span>
          <h2 className="section-title">
            AI &amp; Automation <span className="gradient-text">Service Offerings</span>
          </h2>
          <p className="section-desc">
            Practical AI application designed to augment business research, documentation, and data
            analysis. Built with human validation at every single milestone.
          </p>
        </div>

        {/* Primary Value Architecture Banner */}
        <div
          className="glass-card"
          style={{
            padding: '28px 32px',
            marginBottom: 40,
            border: '1px solid rgba(6, 182, 212, 0.35)',
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
              marginBottom: 18,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <ShieldCheck size={22} color="#10b981" />
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0 }}>
                The Primary Value Equation
              </h3>
            </div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#38bdf8',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: '4px 12px',
                borderRadius: 9999,
              }}
            >
              Supporting Technology • Human Review Central
            </span>
          </div>

          {/* 4 Pillars Formula */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
              gap: 14,
              marginBottom: 20,
            }}
          >
            {VALUE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <CheckCircle2 size={16} color="#06b6d4" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                    {pillar.title}
                  </span>
                </div>
                <p style={{ fontSize: '0.775rem', color: '#94a3b8', lineHeight: 1.45, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Critical Governance Note */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 16px',
              borderRadius: '8px',
              background: 'rgba(239, 68, 68, 0.06)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              fontSize: '0.8rem',
              color: '#cbd5e1',
            }}
          >
            <AlertCircle size={16} color="#f87171" style={{ flexShrink: 0 }} />
            <span>
              <strong>Crucial Governance Standard:</strong> AI is leveraged strictly as a supporting
              accelerator. AI never independently makes business decisions or models financial
              commitments without human validation and verification.
            </span>
          </div>
        </div>

        {/* 8 AI Services Balanced Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 22,
          }}
        >
          {AI_SERVICES_LIST.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '24px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(10, 16, 30, 0.65)',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
              >
                <div>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#06b6d4',
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: 8, fontWeight: 600 }}>
                    {srv.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                    {srv.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: 18,
                    paddingTop: 12,
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.75rem',
                    color: '#06b6d4',
                    fontWeight: 600,
                  }}
                >
                  {srv.focus}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
