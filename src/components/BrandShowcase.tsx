import Image from 'next/image';
import { Cpu, LineChart, Network, Check, Zap } from 'lucide-react';

export default function BrandShowcase() {
  return (
    <section className="brand-showcase-section" id="brand">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Official Brand Identity</span>
          <h2 className="section-title">
            The <span className="gradient-text">Sandy</span> Advantage
          </h2>
          <p className="section-desc">
            Bridging analytical precision and modern AI workflow engineering to deliver tangible
            commercial advantage for ambitious businesses.
          </p>
        </div>

        <div className="brand-grid">
          {/* Official Sandy Brand Visual: 1:1 square, object-fit contain, zero cropping or distortion */}
          <div className="brand-visual-container">
            <div className="brand-visual-card">
              <div className="brand-image-wrapper">
                <Image
                  src="/images/branding/santhosh.png"
                  alt="Sandy — AI-Powered Business and Growth Analyst brand visual"
                  width={480}
                  height={480}
                  className="brand-image"
                  sizes="(max-width: 900px) 420px, 480px"
                />
              </div>
            </div>
          </div>

          {/* Core Brand Pillars & Architecture */}
          <div className="brand-features-col">
            <div className="glass-card brand-feature-card">
              <div className="feature-icon-box">
                <LineChart size={24} />
              </div>
              <div className="feature-info">
                <h4>Quantitative Business Diagnostics</h4>
                <p>
                  Deconstructing complex operational data into actionable KPI frameworks, cohort
                  retention analyses, and margin-optimizing strategies.
                </p>
              </div>
            </div>

            <div className="glass-card brand-feature-card">
              <div className="feature-icon-box emerald">
                <Cpu size={24} />
              </div>
              <div className="feature-info">
                <h4>AI Workflow &amp; Automation Integration</h4>
                <p>
                  Harnessing machine intelligence, LLM agents, and automated data pipelines to
                  replace manual reporting and accelerate decision velocity.
                </p>
              </div>
            </div>

            <div className="glass-card brand-feature-card">
              <div className="feature-icon-box indigo">
                <Network size={24} />
              </div>
              <div className="feature-info">
                <h4>Predictive &amp; Executive Intelligence</h4>
                <p>
                  Architecting dynamic Power BI and modern BI dashboards tailored for board-level
                  clarity, revenue forecasting, and rapid scenario modeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
