'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Lock,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  FileCheck,
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';

const RECOGNIZED_AREAS = [
  'Requirements Gathering & Business Understanding',
  'Market Research & Data Analysis',
  'Data Validation & Reporting',
  'Project Coordination & Management',
  'Workflow Analysis & Process Improvement',
  'AI-Powered Research, Analysis & Documentation',
];

const RECOGNIZED_TRAITS = [
  'Professionalism',
  'Responsiveness',
  'Willingness to Learn',
  'Attention to Detail',
  'Commitment to Completing the Work Properly',
];

export default function ClientAppreciation() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="client-appreciation-section" id="client-appreciation">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">CLIENT PERSPECTIVE</span>
          <h2 className="section-title">
            A Small Appreciation, A <span className="gradient-text">Meaningful Milestone 🚀</span>
          </h2>
          <p className="section-desc">
            A note of appreciation from a client following a freelance Business Data Analyst engagement.
          </p>
        </div>

        {/* Confidentiality Badge Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#f59e0b',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            <Lock size={14} />
            <span>Client details confidential</span>
          </div>
        </div>

        {/* Two-Column Desktop / Stacked Mobile Layout */}
        <div className="appreciation-grid">
          {/* LEFT: Client Appreciation Document Viewer */}
          <div className="appreciation-viewer-col">
            <div className="glass-card appreciation-card">
              <div className="appreciation-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <FileCheck size={20} color="#06b6d4" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#f8fafc' }}>
                    Original Client Appreciation Letter
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="zoom-btn"
                  title="Click to view full size"
                  aria-label="View full size document"
                >
                  <Maximize2 size={16} />
                  <span>Enlarge Document</span>
                </button>
              </div>

              {/* Document Image Container */}
              <div
                className="appreciation-image-container"
                onClick={() => setModalOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src="/images/appreciation/client-appreciation.jpg"
                  alt="Official Client Appreciation Document — Santhosh Prasanna Freelance Business Data Analyst"
                  width={1236}
                  height={1983}
                  className="appreciation-doc-image"
                  sizes="(max-width: 960px) 100vw, 540px"
                />
                <div className="hover-zoom-overlay">
                  <Maximize2 size={24} color="#06b6d4" />
                  <span>Click to expand full resolution</span>
                </div>
              </div>

              <div className="appreciation-card-footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ShieldCheck size={16} color="#10b981" />
                  <span style={{ fontSize: '0.785rem', color: '#94a3b8' }}>
                    Authentic document from 1 direct freelance engagement
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Context, Summary & Recognized Contributions */}
          <div className="appreciation-context-col">
            <div className="glass-card" style={{ padding: '34px 30px' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#06b6d4',
                  display: 'block',
                  marginBottom: 10,
                }}
              >
                Engagement Context &bull; Business Data Analyst
              </span>

              <h3 style={{ fontSize: '1.45rem', marginBottom: 16, color: '#ffffff' }}>
                Appreciation for Santhosh&apos;s Contribution
              </h3>

              <p
                style={{
                  color: '#cbd5e1',
                  fontSize: '0.975rem',
                  lineHeight: 1.75,
                  marginBottom: 24,
                }}
              >
                One client opportunity became an important milestone in my freelance journey. The
                appreciation recognized my contribution across business understanding, requirements
                gathering, research, data analysis, reporting, project coordination, workflow
                analysis, process improvement, and AI-assisted work.
              </p>

              {/* Core Recognized Competencies */}
              <div style={{ marginBottom: 24 }}>
                <h4
                  style={{
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#94a3b8',
                    marginBottom: 12,
                  }}
                >
                  Recognized Areas of Contribution:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {RECOGNIZED_AREAS.map((area, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: 'rgba(6, 182, 212, 0.08)',
                        border: '1px solid rgba(6, 182, 212, 0.25)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#38bdf8',
                      }}
                    >
                      <CheckCircle2 size={14} color="#06b6d4" style={{ flexShrink: 0 }} />
                      <span>{area}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Recognized Professional Traits */}
              <div style={{ marginBottom: 24 }}>
                <h4
                  style={{
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#94a3b8',
                    marginBottom: 12,
                  }}
                >
                  Key Professional Traits Recognized:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {RECOGNIZED_TRAITS.map((trait, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '5px 12px',
                        borderRadius: '6px',
                        background: 'rgba(16, 185, 129, 0.08)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        fontSize: '0.785rem',
                        fontWeight: 600,
                        color: '#10b981',
                      }}
                    >
                      <Sparkles size={13} color="#10b981" style={{ flexShrink: 0 }} />
                      <span>{trait}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Confidentiality Commitment Box */}
              <div
                style={{
                  padding: '16px 18px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                }}
              >
                <Lock size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: '0.825rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  <strong style={{ color: '#e2e8f0' }}>Client Privacy Note:</strong> Client
                  identity and project details remain confidential by mutual agreement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Reflection & Learning Section */}
        <div className="personal-reflection-wrap">
          <div className="glass-card reflection-card">
            <div className="reflection-badge">
              <HeartHandshake size={18} color="#06b6d4" />
              <span>Personal Reflection</span>
            </div>

            <h3 className="reflection-heading">Why This Milestone Matters</h3>

            <div className="reflection-body">
              <p>
                For a long time, I felt that people didn&apos;t believe in my skills or my ability to
                take on bigger responsibilities.
              </p>

              <p className="emphasis-statement">But one person did.</p>

              <p>
                One client trusted my ability, gave me an opportunity to work on a meaningful
                project, and most importantly, gave me the freedom, time, and trust to learn and grow
                in Business Analysis.
              </p>

              <p>
                That opportunity meant much more to me than just a project. It gave me the chance to
                explore new areas, understand business problems more deeply, improve my analytical
                thinking, work on real requirements, understand workflows, conduct research, and
                continuously find better ways of doing the work.
              </p>

              <div className="reflection-divider" />

              <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: 12 }}>
                Learning &amp; Growth
              </h4>

              <p>
                I may not have had everyone believing in me. But I believed in myself. And they
                believed in me too.
              </p>

              <p>
                That trust became an opportunity for me to prove what I could do — and I&apos;m
                genuinely grateful for it.
              </p>

              <p>
                Every day, I&apos;m learning something new. Every day, I&apos;m becoming better at what
                I do. And every project is teaching me something that no course or certification
                alone can teach.
              </p>

              <p style={{ marginTop: 20 }}>
                So, thank you for believing in my ability, trusting me with the opportunity, and
                giving me the freedom to learn. I genuinely respect and appreciate the opportunity
                you gave me.
              </p>

              <p>
                I may still have a lot to learn, but I&apos;m proud that I&apos;m becoming better at
                my work day by day.
              </p>

              {/* Final Highlighted Quote Card */}
              <div className="final-quote-card">
                <p className="final-quote-text">
                  &ldquo;Sometimes, you don&apos;t need everyone to believe in you. You just need one
                  person to give you an opportunity — and the courage to prove yourself. 🙏&rdquo;
                </p>
                <div className="quote-author">— Santhosh Prasanna (Sandy)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Document Modal / Lightbox */}
      {modalOpen && (
        <div
          className="appreciation-modal-overlay"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="appreciation-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <FileCheck size={20} color="#06b6d4" />
                <span style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.95rem' }}>
                  Official Client Appreciation Letter (Full Resolution)
                </span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>

            <div className="modal-image-scroll">
              <Image
                src="/images/appreciation/client-appreciation.jpg"
                alt="Official Client Appreciation Document — Full View"
                width={1236}
                height={1983}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                priority
              />
            </div>

            <div className="modal-footer">
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                Client identity and confidential project details protected by mutual agreement.
              </span>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                onClick={() => setModalOpen(false)}
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
