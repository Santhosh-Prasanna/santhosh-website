'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How quickly can we kick off an analytics or dashboard project?',
    a: 'Most sprint projects kick off within 3 to 5 business days following an initial discovery consultation and mutual agreement on scope. Discovery calls can typically be scheduled within 24 to 48 hours.',
  },
  {
    q: 'Do you sign non-disclosure agreements (NDAs) to protect our company data?',
    a: 'Yes, 100%. Data privacy and governance are paramount. I routinely sign mutual NDAs before reviewing sensitive business records, customer telemetry, or financial models.',
  },
  {
    q: 'Can you work with our existing stack (e.g. Power BI, BigQuery, Excel, Snowflake)?',
    a: 'Absolutely. Rather than forcing new expensive software onto your organization, I build on top of your existing infrastructure—whether that is modern cloud warehouses (Snowflake, BigQuery), standard SQL databases, Power BI, or complex legacy Excel spreadsheets.',
  },
  {
    q: 'What is the difference between a Fixed-Scope Sprint and Fractional Retainer?',
    a: 'A Fixed-Scope Sprint is ideal when you have a defined output in mind (e.g. "Build an executive financial dashboard in 3 weeks"). A Fractional Retainer is best when your team needs ongoing analytical leadership, ad-hoc deep-dives, and weekly pipeline iteration (typically 15-20 hours/week).',
  },
  {
    q: 'How do you incorporate AI and automation into business analysis?',
    a: 'I leverage AI where it delivers real ROI: automating manual data entry and document scraping, orchestrating automated webhook alerts for anomaly detection, and implementing LLM-powered summarization pipelines so your team spends zero time on mechanical reporting.',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Frequently Asked Questions</span>
          <h2 className="section-title">
            Answers To Common <span className="gradient-text">Client Questions</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about working together, timelines, data security, and
            deliverables.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      color: isOpen ? '#06b6d4' : '#94a3b8',
                    }}
                  />
                </button>

                {isOpen && <div className="faq-answer">{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
