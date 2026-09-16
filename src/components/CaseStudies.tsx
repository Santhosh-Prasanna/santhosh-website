'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { CASE_STUDIES } from '@/data/projects';

const FILTER_OPTIONS = [
  'All',
  'Business Analysis',
  'Data Analytics',
  'Healthcare Analytics',
  'AI & Automation',
  'Digital Marketing',
  'Poster Design',
  'Creative',
  'Live Streaming',
  'Professional Projects',
  'Freelance Projects',
  'Personal Projects',
];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects = CASE_STUDIES.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Creative') {
      return item.categoryFilter === 'Poster Design';
    }
    if (activeFilter === 'AI & Automation') {
      return (
        item.tools.some((t) => t.toLowerCase().includes('ai')) ||
        item.responsibilities.some((r) => r.toLowerCase().includes('ai'))
      );
    }
    if (
      activeFilter === 'Professional Projects' ||
      activeFilter === 'Freelance Projects' ||
      activeFilter === 'Personal Projects'
    ) {
      return item.typeFilter === activeFilter;
    }
    return item.categoryFilter === activeFilter;
  });

  return (
    <section className="case-studies-section" id="case-studies">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Real-World Case Studies</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Project Portfolio</span>
          </h2>
          <p className="section-desc">
            Clearly categorized real-world work spanning Business Analysis, Healthcare Analytics,
            Executive BI, Digital Marketing, Creative Design, and Event Live Streaming.
          </p>
        </div>

        {/* Filter Bar with Horizontal Scroll Support */}
        <div
          className="filter-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 10,
            overflowX: 'auto',
            paddingBottom: 14,
            marginBottom: 40,
            scrollbarWidth: 'thin',
          }}
        >
          {FILTER_OPTIONS.map((opt, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeFilter === opt ? 'active' : ''}`}
              onClick={() => setActiveFilter(opt)}
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Project Count Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24,
            fontSize: '0.85rem',
            color: '#94a3b8',
          }}
        >
          <div>
            Showing <strong style={{ color: '#ffffff' }}>{filteredProjects.length}</strong> project
            {filteredProjects.length === 1 ? '' : 's'} under filter: &ldquo;
            <span style={{ color: '#06b6d4', fontWeight: 600 }}>{activeFilter}</span>&rdquo;
          </div>
        </div>

        {/* Case Studies Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 30,
          }}
        >
          {filteredProjects.map((proj) => {
            const isHealthcare = proj.id === 'healthcare-classification';
            const isLiveStreaming = proj.id === 'wedding-live-streaming';
            const isMarketing = proj.id === 'influencer-social-media';

            return (
              <div
                key={proj.id}
                className="glass-card project-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '18px',
                  border: isHealthcare
                    ? '1px solid rgba(6, 182, 212, 0.4)'
                    : isLiveStreaming
                    ? '1px solid rgba(16, 185, 129, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  {/* Top Badges Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 10,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        color: isHealthcare ? '#38bdf8' : isLiveStreaming ? '#10b981' : '#06b6d4',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '4px 10px',
                        borderRadius: 9999,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {proj.categoryFilter}
                    </span>

                    <span
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 600,
                        color: '#cbd5e1',
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '3px 8px',
                        borderRadius: 6,
                      }}
                    >
                      {proj.projectType}
                    </span>
                  </div>

                  {/* Project Title & Industry */}
                  <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: 6, fontWeight: 700 }}>
                    {proj.project}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.825rem',
                      color: '#06b6d4',
                      fontWeight: 600,
                      marginBottom: 14,
                    }}
                  >
                    {proj.industry}
                  </div>

                  {/* Metric / Key Highlight Box */}
                  {proj.metricsHighlight && (
                    <div
                      style={{
                        padding: '14px 16px',
                        borderRadius: '10px',
                        background: 'rgba(6, 182, 212, 0.06)',
                        border: '1px solid rgba(6, 182, 212, 0.2)',
                        marginBottom: 18,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#f8fafc',
                          marginBottom: 2,
                        }}
                      >
                        {proj.metricsHighlight}
                      </div>
                      <div style={{ fontSize: '0.775rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {proj.metricLabel}
                      </div>
                    </div>
                  )}

                  {/* Core Challenge / Summary */}
                  <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 20 }}>
                    {proj.challenge}
                  </p>

                  {/* Healthcare Disclaimer */}
                  {isHealthcare && proj.disclaimer && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        padding: '12px 14px',
                        borderRadius: '8px',
                        background: 'rgba(239, 68, 68, 0.08)',
                        border: '1px solid rgba(239, 68, 68, 0.25)',
                        fontSize: '0.785rem',
                        color: '#fca5a5',
                        lineHeight: 1.5,
                        marginBottom: 20,
                      }}
                    >
                      <AlertTriangle size={16} color="#f87171" style={{ flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <strong>Healthcare Disclaimer:</strong> {proj.disclaimer}
                      </div>
                    </div>
                  )}

                  {/* Digital Marketing Note */}
                  {isMarketing && proj.disclaimer && (
                    <div
                      style={{
                        padding: '10px 14px',
                        borderRadius: '8px',
                        background: 'rgba(236, 72, 153, 0.08)',
                        border: '1px solid rgba(236, 72, 153, 0.25)',
                        fontSize: '0.785rem',
                        color: '#fbcfe8',
                        lineHeight: 1.5,
                        marginBottom: 20,
                      }}
                    >
                      <strong>Reported Result Note:</strong> {proj.disclaimer}
                    </div>
                  )}

                  {/* Live Streaming 3 Stats Strip */}
                  {isLiveStreaming && (
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 10,
                        padding: '14px',
                        borderRadius: '10px',
                        background: 'rgba(16, 185, 129, 0.06)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        marginBottom: 20,
                        textAlign: 'center',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981' }}>20+</div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Engagements</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981' }}>100%</div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Attendance</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981' }}>TN</div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Coverage</div>
                      </div>
                    </div>
                  )}

                  {/* 3 Core Responsibilities Preview */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                    {proj.responsibilities.slice(0, 3).map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.825rem', color: '#cbd5e1' }}
                      >
                        <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0, marginTop: 3 }} />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tech Tags */}
                <div style={{ marginTop: 'auto', paddingTop: 16 }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                    }}
                  >
                    {proj.tools.slice(0, 5).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.725rem',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          color: '#94a3b8',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                    {proj.tools.length > 5 && (
                      <span
                        style={{
                          fontSize: '0.725rem',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          color: '#64748b',
                        }}
                      >
                        +{proj.tools.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
