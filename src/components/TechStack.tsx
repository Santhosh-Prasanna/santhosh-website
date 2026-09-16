import {
  Database,
  Briefcase,
  Bot,
  BrainCircuit,
  Info,
  Layers,
  ArrowRight,
  FileSpreadsheet,
  LineChart,
  Share2,
  Palette,
  Video,
  CheckCircle2,
} from 'lucide-react';
import { SKILLS, STATISTICAL_TOOLS, SERVICE_HIERARCHY } from '@/data/skills';

const AI_TOOLS_CARD = [
  {
    name: 'ChatGPT',
    provider: 'OpenAI',
    role: 'AI-assisted research • analysis • documentation • ideation',
    color: '#10b981',
    badge: 'Practical Research & Analysis',
  },
  {
    name: 'Claude',
    provider: 'Anthropic',
    role: 'AI-assisted research • writing • analysis • documentation',
    color: '#d97706',
    badge: 'Writing & Synthesis',
  },
  {
    name: 'Gemini',
    provider: 'Google',
    role: 'AI-assisted research • productivity • analysis • ideation',
    color: '#38bdf8',
    badge: 'Productivity & Ideation',
  },
];

const DATA_BI_SKILLS = [
  'Business Analysis',
  'Data Analysis',
  'SQL (PostgreSQL, BigQuery, Snowflake)',
  'Power BI & DAX Modeling',
  'Python (Data Cleaning & Exploration)',
  'Dashboard Development & KPI Cockpits',
  'Data Validation & Quality Reconciliation',
  'Process Improvement & BPMN 2.0',
];

const BA_SKILLS = [
  'Requirements Discovery & BRD/FRD',
  'User Stories & Acceptance Criteria',
  '100% RTM Traceability',
  'BPMN 2.0 Process Mapping',
  'Root Cause Analysis (RCA)',
  'UAT Coordination & Defect Triage',
  'Jira Backlog & Agile Scrum',
  'Forex Banking & Payment Gateways',
  'SaaS Invoice Automation Systems',
];

const AI_TOOLS_PLATFORMS = ['ChatGPT', 'Claude', 'Gemini'];

const AI_COMPETENCIES = [
  'Generative AI',
  'Prompt Engineering',
  'AI-assisted Research',
  'AI-assisted Data Analysis',
  'AI-assisted Documentation',
  'AI-assisted Content Creation',
  'AI Workflow Automation',
  'AI-powered Productivity',
  'Responsible AI Awareness',
  'Agentic AI Awareness',
];

const AI_HIERARCHY_STEPS = [
  'Generative AI',
  'ChatGPT • Claude • Gemini',
  'Prompt Engineering',
  'AI-assisted Research',
  'AI-assisted Data Analysis',
  'AI-assisted Documentation',
  'AI-assisted Content Creation',
  'AI Workflow Automation',
  'Responsible AI / Agentic AI Awareness',
];

const DIGITAL_MARKETING_SKILLS = [
  'Social Media Marketing',
  'Content Planning & Calendars',
  'Audience Engagement Optimization',
  'Marketing Research',
  'Marketing Analytics & Reach Tracking',
  'Social Media Strategy',
];

const POSTER_DESIGN_SKILLS = [
  'Canva Layout & Typography',
  'Promotional Poster Design',
  'Social Media Creatives',
  'AI-assisted Asset Generation',
  'Local Business Print Materials',
  'Event & Tournament Visuals',
];

const LIVE_STREAMING_SKILLS = [
  'Wedding Live Streaming',
  'Event Broadcast Support',
  'Multi-Camera RTMP Setup',
  'Bonded Streaming Hardware',
  'Remote Audience Link Delivery',
  'Photography/Videography Collaboration',
];

export default function TechStack() {
  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Skills, Tools &amp; Frameworks</span>
          <h2 className="section-title">
            Practical Capabilities &amp; <span className="gradient-text">Modern AI Tooling</span>
          </h2>
          <p className="section-desc">
            An honest, practical technology stack applied with disciplined business understanding
            and human validation. No inflated vanity titles—only proven day-to-day execution.
          </p>
        </div>

        {/* ============================================================
            DEDICATED SECTION: DATA ANALYTICS & STATISTICAL TOOLS (Excel & SPSS)
           ============================================================ */}
        <div
          className="glass-card"
          style={{
            padding: '34px 30px',
            marginBottom: 40,
            border: '1px solid rgba(16, 185, 129, 0.35)',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 16, 30, 0.96) 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
              marginBottom: 16,
              paddingBottom: 16,
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                }}
              >
                <FileSpreadsheet size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981', fontWeight: 700 }}>
                  Statistical Tooling
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: '2px 0 0 0' }}>
                  Data Analytics &amp; Statistical Tools
                </h3>
              </div>
            </div>

            <div
              style={{
                fontSize: '0.75rem',
                color: '#38bdf8',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: '4px 12px',
                borderRadius: 9999,
                fontWeight: 600,
              }}
            >
              Practical Analysis &amp; Research
            </div>
          </div>

          {/* Positioning statement */}
          <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: 24 }}>
            <strong>Positioning:</strong> &ldquo;{STATISTICAL_TOOLS.positioning}&rdquo;
          </p>

          {/* 2-Column Display: Excel & SPSS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 22,
            }}
          >
            {/* Excel Card */}
            <div
              style={{
                padding: '22px 20px',
                borderRadius: '12px',
                background: 'rgba(7, 10, 19, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                  Excel
                </h4>
                <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600, textTransform: 'uppercase' }}>
                  Core Analytics Tool
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {STATISTICAL_TOOLS.excel.capabilities.map((cap, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: '#e2e8f0' }}>
                    <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0 }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SPSS Card */}
            <div
              style={{
                padding: '22px 20px',
                borderRadius: '12px',
                background: 'rgba(7, 10, 19, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                  SPSS
                </h4>
                <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: 600, textTransform: 'uppercase' }}>
                  Statistical Testing
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {STATISTICAL_TOOLS.spss.capabilities.map((cap, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: '#e2e8f0' }}>
                    <CheckCircle2 size={14} color="#06b6d4" style={{ flexShrink: 0 }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            AI TOOLS VISUAL CARD
           ============================================================ */}
        <div
          className="glass-card"
          style={{
            padding: '36px 32px',
            marginBottom: 44,
            border: '1px solid rgba(6, 182, 212, 0.35)',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 16, 30, 0.96) 100%)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
              marginBottom: 24,
              paddingBottom: 16,
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(6, 182, 212, 0.12)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06b6d4',
                }}
              >
                <Bot size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#06b6d4', fontWeight: 700 }}>
                  Visual Card
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '2px 0 0 0' }}>
                  AI TOOLS
                </h3>
              </div>
            </div>

            <div
              style={{
                fontSize: '0.75rem',
                color: '#10b981',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '5px 14px',
                borderRadius: 9999,
                fontWeight: 600,
              }}
            >
              Supporting Capability • Human Review Central
            </div>
          </div>

          <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: 24, maxWidth: '850px' }}>
            AI tools used for practical research, analysis, ideation, documentation, content workflows
            and productivity. Focused entirely on pragmatic application without inflated claims.
          </p>

          {/* 3 AI Tools Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 20,
              marginBottom: 32,
            }}
          >
            {AI_TOOLS_CARD.map((tool, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px 22px',
                  borderRadius: '14px',
                  background: 'rgba(7, 10, 19, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <h4 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                      {tool.name}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: tool.color,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '3px 8px',
                        borderRadius: 6,
                      }}
                    >
                      {tool.provider}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                    {tool.role}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: 18,
                    paddingTop: 12,
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: tool.color }} />
                  <span>{tool.badge}</span>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '12px 18px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.75rem',
              color: '#64748b',
              lineHeight: 1.5,
              marginBottom: 32,
            }}
          >
            <strong>Attribution Notice:</strong> Product names, logos, and brands (ChatGPT / OpenAI, Claude / Anthropic, Gemini / Google) are property of their respective owners. Mention of these tools is strictly for describing practical freelance workflow usage and does not imply partnership, sponsorship, employment, certification, or endorsement.
          </div>

          {/* AI Skill Progression / Hierarchy */}
          <div
            style={{
              padding: '24px 26px',
              borderRadius: '14px',
              background: 'rgba(6, 182, 212, 0.05)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              marginBottom: 28,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <BrainCircuit size={20} color="#06b6d4" />
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#f8fafc', margin: 0 }}>
                  AI &amp; Automation Skill Hierarchy
                </h4>
                <span style={{ fontSize: '0.775rem', color: '#94a3b8' }}>
                  Progressive application flow from foundational models to governed business execution
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              {AI_HIERARCHY_STEPS.map((item, idx) => (
                <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: idx === 1 ? '#38bdf8' : '#e2e8f0',
                      background: idx === 1 ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      border: idx === 1 ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {item}
                  </span>
                  {idx < AI_HIERARCHY_STEPS.length - 1 && (
                    <span style={{ color: '#06b6d4', fontSize: '0.85rem', fontWeight: 700 }}>&darr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final AI Positioning Statement */}
          <div
            style={{
              padding: '20px 24px',
              borderRadius: '12px',
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
            }}
          >
            <Info size={20} color="#38bdf8" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38bdf8', fontWeight: 700, marginBottom: 4 }}>
                Final AI Positioning
              </div>
              <p style={{ fontSize: '0.925rem', color: '#cbd5e1', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
                &ldquo;I explore and use modern AI tools such as ChatGPT, Claude and Gemini to support
                research, analysis, documentation, content workflows and productivity. I focus on
                applying AI practically, with human judgment and validation remaining central to the
                work.&rdquo;
              </p>
              <div style={{ marginTop: 10, fontSize: '0.8rem', color: '#94a3b8' }}>
                Primary identity remains: <strong style={{ color: '#ffffff' }}>FREELANCE BUSINESS &amp; DATA ANALYST</strong>. AI &amp; Automation is a major supporting capability.
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            CORE SKILL GROUPS: 3 Primary Pillars
           ============================================================ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 28,
            marginBottom: 44,
          }}
        >
          {/* Group 1: Business & Data Analytics */}
          <div className="glass-card" style={{ padding: '30px 26px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Database size={20} color="#06b6d4" />
              <span>Business &amp; Data Analytics</span>
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginBottom: 16 }}>
              Primary service core: SQL, Python, Power BI, Excel, and rigorous quantitative methods.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {DATA_BI_SKILLS.map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.875rem',
                    color: '#e2e8f0',
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Business Analysis & Strategy */}
          <div className="glass-card" style={{ padding: '30px 26px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Briefcase size={20} color="#818cf8" />
              <span>Business Analysis &amp; Strategy</span>
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginBottom: 16 }}>
              End-to-end SDLC governance, user stories, RTM traceability, and domain systems.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {BA_SKILLS.map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.875rem',
                    color: '#e2e8f0',
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Group 3: AI & Automation */}
          <div className="glass-card" style={{ padding: '30px 26px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Layers size={20} color="#10b981" />
              <span>AI &amp; Automation</span>
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginBottom: 16 }}>
              Supporting workflows, structured prompt engineering, and operational tooling.
            </p>

            <div
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.06)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: 16,
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#10b981', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Bot size={14} />
                <span>AI Tools &amp; Platforms</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {AI_TOOLS_PLATFORMS.map((toolName, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      color: '#ffffff',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                    }}
                  >
                    {toolName}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {AI_COMPETENCIES.map((comp, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.825rem',
                    color: '#cbd5e1',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{comp}</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Workflow</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            ADDITIONAL SUPPORTING SERVICES: Digital Marketing, Poster Design & Live Streaming
           ============================================================ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 28,
            marginBottom: 44,
          }}
        >
          {/* Additional: Digital Marketing */}
          <div className="glass-card" style={{ padding: '28px 24px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Share2 size={18} color="#ec4899" />
              <span>Digital Marketing Work</span>
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginBottom: 16 }}>
              Audience engagement, content planning, and influencer campaign support.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {DIGITAL_MARKETING_SKILLS.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.85rem',
                    color: '#cbd5e1',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Creative: Poster Design & Creative Work */}
          <div className="glass-card" style={{ padding: '28px 24px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Palette size={18} color="#f59e0b" />
              <span>Poster Design &amp; Creative</span>
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginBottom: 16 }}>
              Canva &amp; AI-assisted promotional posters for local retail, food &amp; tournaments.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {POSTER_DESIGN_SKILLS.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.85rem',
                    color: '#cbd5e1',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Event: Wedding Live Streaming */}
          <div className="glass-card" style={{ padding: '28px 24px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Video size={18} color="#10b981" />
              <span>Wedding Live Streaming</span>
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginBottom: 16 }}>
              20+ engagements across Tamil Nadu with 100% attendance &amp; photo/video collaboration.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {LIVE_STREAMING_SKILLS.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.85rem',
                    color: '#cbd5e1',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            SERVICE HIERARCHY OVERVIEW BANNER
           ============================================================ */}
        <div
          className="glass-card"
          style={{
            padding: '28px 30px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(10, 16, 30, 0.7)',
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0 0 4px 0' }}>
              Structured Service Hierarchy
            </h4>
            <p style={{ fontSize: '0.825rem', color: '#94a3b8', margin: 0 }}>
              Clear architectural distinction across core analytics and supporting client capabilities.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: 14,
            }}
          >
            {SERVICE_HIERARCHY.map((tier, idx) => (
              <div
                key={idx}
                style={{
                  padding: '16px 14px',
                  borderRadius: '10px',
                  background: idx === 0 ? 'rgba(6, 182, 212, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: idx === 0 ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: idx === 0 ? '#06b6d4' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                  {tier.tier}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
                  {tier.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                  {tier.services.slice(0, 3).join(' • ')}...
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
