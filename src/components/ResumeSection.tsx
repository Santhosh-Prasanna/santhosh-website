'use client';

import { useState } from 'react';
import { RESUME_DATA } from '@/data/resume';
import {
  FileText,
  Download,
  Printer,
  Mail,
  Calendar,
  MapPin,
  CheckCircle2,
  Briefcase,
  Layers,
  Sparkles,
  Award,
  GraduationCap,
  BookOpen,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  X,
  Share2,
  TrendingUp,
} from 'lucide-react';

const LinkedInIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ResumeSection() {
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const resumeUrl = `${window.location.origin}/#resume`;
      navigator.clipboard.writeText(resumeUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const openWhatsApp = () => {
    window.open('/whatsapp', '_blank', 'noopener,noreferrer');
  };

  const GMAIL_CONSULT_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    RESUME_DATA.identity.email
  )}&su=${encodeURIComponent(
    'Project Discussion & Freelance Engagement | Santhosh Prasanna'
  )}&body=${encodeURIComponent(
    `Hi Santhosh,\n\nI reviewed your resume on your portfolio and would like to connect regarding a potential project.\n\n` +
    `• Organization / Individual: \n` +
    `• Project Type: [Business Analysis / Power BI Dashboards / SQL / Healthcare Analytics / AI Workflow]\n` +
    `• Estimated Timeline: \n\nLooking forward to speaking with you!\n`
  )}`;

  return (
    <section className="resume-section-wrapper" id="resume">
      <div className="container resume-inner-content">
        
        {/* TOP ACTION BAR / CONTROLS (Hidden in Print) */}
        <div className="resume-action-bar no-print">
          <div className="resume-version-badge">
            <span className="live-dot" />
            <span>Resume Dossier • v{RESUME_DATA.metadata.version}</span>
            <span className="badge-divider">•</span>
            <span>Last Updated: {RESUME_DATA.metadata.lastUpdated}</span>
          </div>

          <div className="resume-action-buttons">
            {/* Print / Save as PDF */}
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-outline resume-ctrl-btn"
              title="Print or Save as PDF via browser"
              id="resume-print-btn"
            >
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>

            {/* Download Resume PDF Button */}
            <a
              href={RESUME_DATA.metadata.pdfFile}
              download="Santhosh-Prasanna-Resume.pdf"
              className="btn btn-primary resume-ctrl-btn"
              title="Download official PDF version"
              id="resume-download-btn"
            >
              <Download size={16} />
              <span>Download Resume PDF</span>
            </a>

            {/* LinkedIn Profile */}
            <a
              href={RESUME_DATA.identity.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline resume-ctrl-btn resume-linkedin-btn"
              id="resume-linkedin-btn"
            >
              <LinkedInIcon size={16} />
              <span>View LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Copy Share Link */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="btn btn-outline resume-icon-btn"
              title="Copy Direct Link to Resume"
              aria-label="Copy Direct Link to Resume"
              id="resume-share-btn"
            >
              <Share2 size={16} />
              {copiedLink && <span className="copy-feedback-toast">Copied #resume!</span>}
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RESUME PAPER CANVAS (Optimized for both Web & Print)         */}
        {/* ============================================================ */}
        <div className="resume-paper-canvas">
          
          {/* 1. HEADER SECTION */}
          <header className="resume-header-block">
            <div className="resume-header-main">
              <div className="resume-name-group">
                <div className="resume-eyebrow">
                  <span className="resume-brand-badge">{RESUME_DATA.identity.brandName}</span>
                  <span className="resume-availability-tag">
                    <span className="pulse-indicator" />
                    {RESUME_DATA.identity.availability}
                  </span>
                </div>

                <h2 className="resume-fullname">{RESUME_DATA.identity.fullName}</h2>
                <div className="resume-primary-title">{RESUME_DATA.identity.primaryTitle}</div>
                
                <div className="resume-positioning-row">
                  <span className="positioning-highlight">
                    {RESUME_DATA.identity.currentPositioning}
                  </span>
                  <span className="positioning-sep">•</span>
                  <span>{RESUME_DATA.identity.experienceYears}</span>
                </div>
              </div>

              {/* Contact Quick Info */}
              <div className="resume-contact-meta">
                <div className="contact-meta-item">
                  <MapPin size={15} className="meta-icon" />
                  <span>{RESUME_DATA.identity.location}</span>
                </div>
                <div className="contact-meta-item">
                  <Mail size={15} className="meta-icon" />
                  <a href={`mailto:${RESUME_DATA.identity.email}`}>{RESUME_DATA.identity.email}</a>
                </div>
                <div className="contact-meta-item">
                  <LinkedInIcon size={15} className="meta-icon" />
                  <a
                    href={RESUME_DATA.identity.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {RESUME_DATA.identity.linkedInDisplay}
                  </a>
                </div>
                <div className="contact-meta-item print-only">
                  <FileText size={15} className="meta-icon" />
                  <span>Portfolio: santhoshprasanna.com/#case-studies</span>
                </div>
              </div>
            </div>

            {/* 2. PROFESSIONAL SUMMARY */}
            <div className="resume-summary-block">
              <h3 className="resume-section-label">Professional Summary</h3>
              <p className="resume-summary-text">{RESUME_DATA.summary}</p>
            </div>
          </header>

          {/* KEY HONEST METRICS / EXPERIENCE HIGHLIGHTS */}
          <section className="resume-metrics-strip">
            <div className="resume-metrics-grid">
              {RESUME_DATA.keyMetrics.map((metric, idx) => (
                <div key={idx} className="metric-box">
                  <div className="metric-val">{metric.value}</div>
                  <div className="metric-lbl">{metric.label}</div>
                  <div className="metric-note">{metric.note}</div>
                </div>
              ))}
            </div>
            <div className="honest-metrics-disclaimer">
              <ShieldCheck size={14} />
              <span>
                All engagement metrics are distinctly stated based on verified professional engagements and independent project scopes.
              </span>
            </div>
          </section>

          {/* TWO-COLUMN RESUME BODY */}
          <div className="resume-columns-grid">
            
            {/* LEFT COLUMN: EXPERIENCE & PROJECTS */}
            <div className="resume-col-left">

              {/* 3. PREVIOUS PROFESSIONAL EXPERIENCE */}
              <section className="resume-section">
                <div className="resume-section-heading">
                  <Briefcase size={20} className="section-header-icon" />
                  <h3>Professional Experience</h3>
                </div>

                <div className="experience-timeline-container">
                  {RESUME_DATA.professionalExperience.map((exp, idx) => (
                    <article key={idx} className="timeline-entry">
                      <div className="timeline-entry-header">
                        <div className="entry-role-group">
                          <h4 className="entry-role">{exp.role}</h4>
                          <div className="entry-company-wrap">
                            <span className="entry-company">{exp.company}</span>
                            <span
                              className={`entry-status-tag ${
                                exp.companyStatus === 'Previous Employer'
                                  ? 'tag-previous'
                                  : 'tag-intern'
                              }`}
                            >
                              {exp.companyStatus}
                            </span>
                          </div>
                        </div>

                        <div className="entry-meta">
                          <div className="entry-period">
                            <Calendar size={13} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="entry-location">
                            <MapPin size={13} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="entry-summary">{exp.summary}</p>

                      <ul className="entry-highlights-list">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx}>
                            <CheckCircle2 size={14} className="highlight-bullet-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="entry-tech-pills">
                        {exp.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* 4. FREELANCE & INDEPENDENT WORK (Distinct Section) */}
              <section className="resume-section">
                <div className="resume-section-heading">
                  <Layers size={20} className="section-header-icon" />
                  <div>
                    <h3>Freelance &amp; Independent Work</h3>
                    <p className="section-subtext">
                      Independent client engagements and specialized service delivery
                    </p>
                  </div>
                </div>

                <div className="freelance-cards-list">
                  {RESUME_DATA.freelanceWork.map((fw, idx) => (
                    <article key={idx} className="freelance-entry-card">
                      <div className="freelance-card-top">
                        <div className="freelance-title-wrap">
                          <h4 className="freelance-area-title">{fw.area}</h4>
                          <span
                            className={`freelance-category-badge ${
                              fw.category === 'Direct Analytics Work'
                                ? 'cat-analytics'
                                : 'cat-creative'
                            }`}
                          >
                            {fw.category}
                          </span>
                        </div>
                        <span className="freelance-scope-tag">{fw.scope}</span>
                      </div>

                      <p className="freelance-desc">{fw.description}</p>

                      <ul className="freelance-highlights">
                        {fw.keyHighlights.map((hl, hIdx) => (
                          <li key={hIdx}>
                            <span className="freelance-bullet">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="freelance-tools-list">
                        {fw.tools.map((tool, tIdx) => (
                          <span key={tIdx} className="freelance-tool-item">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* 5. SELECTED PROJECTS */}
              <section className="resume-section">
                <div className="resume-section-heading">
                  <TrendingUp size={20} className="section-header-icon" />
                  <div>
                    <h3>Selected Projects</h3>
                    <p className="section-subtext">
                      Compact view of technical deliverables and analytical case studies
                    </p>
                  </div>
                </div>

                <div className="selected-projects-list">
                  {RESUME_DATA.selectedProjects.map((proj, idx) => (
                    <div key={proj.id || idx} className="project-item-row">
                      <div className="project-item-info">
                        <div className="project-title-line">
                          <a
                            href={proj.portfolioUrl || '#case-studies'}
                            className="project-name-link"
                            title={`View ${proj.title} details`}
                          >
                            <span>{proj.title}</span>
                            <ArrowUpRight size={13} className="project-link-arrow" />
                          </a>
                          <span className="project-cat-pill">{proj.category}</span>
                        </div>
                        <p className="project-item-desc">{proj.description}</p>
                        <div className="project-item-tags">
                          {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                            <span key={tIdx} className="proj-micro-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Full Portfolio Banner */}
                <div className="portfolio-cta-strip no-print">
                  <div>
                    <div className="cta-strip-title">Explore Detailed Case Studies</div>
                    <div className="cta-strip-desc">
                      Full datasets, schemas, visualizations, and problem architectures.
                    </div>
                  </div>
                  <a href="#case-studies" className="btn btn-outline cta-strip-btn">
                    <span>View All Projects</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: SKILLS, CERTIFICATIONS, EDUCATION & ARTICLES */}
            <div className="resume-col-right">

              {/* 6. CORE SKILLS */}
              <section className="resume-section side-card">
                <div className="resume-section-heading">
                  <Layers size={18} className="section-header-icon" />
                  <h3>Core Skills</h3>
                </div>
                <div className="skills-tags-cluster">
                  {RESUME_DATA.coreSkills.map((skill, idx) => (
                    <span key={idx} className="core-skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* 7. PRACTICAL AI SKILLS */}
              <section className="resume-section side-card">
                <div className="resume-section-heading">
                  <Sparkles size={18} className="section-header-icon" />
                  <h3>AI &amp; Automation Skills</h3>
                </div>
                <p className="side-card-intro">
                  Applied workflows augmenting research, data analysis, prompt synthesis, and documentation:
                </p>
                <div className="skills-tags-cluster">
                  {RESUME_DATA.aiSkills.map((skill, idx) => (
                    <span key={idx} className="ai-skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* 8. ADDITIONAL CAPABILITIES */}
              <section className="resume-section side-card">
                <div className="resume-section-heading">
                  <Share2 size={18} className="section-header-icon" />
                  <h3>Additional Capabilities</h3>
                </div>
                <div className="skills-tags-cluster">
                  {RESUME_DATA.additionalCapabilities.map((cap, idx) => (
                    <span key={idx} className="additional-cap-badge">
                      {cap}
                    </span>
                  ))}
                </div>
              </section>

              {/* 9. CERTIFICATIONS & PROFESSIONAL LEARNING */}
              <section className="resume-section side-card">
                <div className="resume-section-heading">
                  <Award size={18} className="section-header-icon" />
                  <div>
                    <h3>Certifications &amp; Learning</h3>
                    <span className="side-card-tagline">Verified Credentials &amp; Training</span>
                  </div>
                </div>

                <div className="credentials-list">
                  {RESUME_DATA.certificationsAndLearning.map((item, idx) => (
                    <div key={idx} className="credential-row">
                      <div className="credential-top">
                        <h4 className="credential-title">{item.title}</h4>
                        <span
                          className={`credential-type-badge cred-${item.credentialType
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                        >
                          {item.credentialType}
                        </span>
                      </div>
                      <div className="credential-issuer">{item.issuer}</div>
                      {item.credentialNote && (
                        <div className="credential-note">{item.credentialNote}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* 10. EDUCATION */}
              <section className="resume-section side-card">
                <div className="resume-section-heading">
                  <GraduationCap size={18} className="section-header-icon" />
                  <h3>Education</h3>
                </div>

                <div className="education-block">
                  <h4 className="education-degree">
                    {RESUME_DATA.education.degree} in {RESUME_DATA.education.field}
                  </h4>
                  <div className="education-inst">{RESUME_DATA.education.institution}</div>
                  <div className="education-period">
                    <Calendar size={13} />
                    <span>{RESUME_DATA.education.period}</span>
                    <span className="edu-dot">•</span>
                    <span>{RESUME_DATA.education.location}</span>
                  </div>

                  <ul className="education-bullets">
                    {RESUME_DATA.education.details.map((bullet, idx) => (
                      <li key={idx}>
                        <span className="edu-bullet-dot">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* 11. SELECTED PUBLICATIONS */}
              <section className="resume-section side-card">
                <div className="resume-section-heading">
                  <BookOpen size={18} className="section-header-icon" />
                  <div>
                    <h3>Selected Publications</h3>
                    <span className="side-card-tagline">Thought Leadership &amp; Insights</span>
                  </div>
                </div>

                <div className="publications-list">
                  {RESUME_DATA.selectedPublications.map((pub, idx) => (
                    <article key={idx} className="publication-card">
                      <h4 className="pub-title">
                        {pub.title} {pub.year && <span className="pub-year">({pub.year})</span>}
                      </h4>
                      <div className="pub-topic">{pub.topic}</div>
                      <p className="pub-summary">{pub.summary}</p>
                    </article>
                  ))}
                </div>

                <div className="publications-cta no-print">
                  <a
                    href={RESUME_DATA.identity.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insights-cta-link"
                  >
                    <span>View All Insights &amp; Articles</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </section>

            </div>
          </div>

          {/* ============================================================ */}
          {/* 12. BOTTOM CONVERSION CALL TO ACTION                         */}
          {/* ============================================================ */}
          <footer className="resume-footer-cta no-print">
            <div className="resume-cta-content">
              <span className="cta-subtitle">Let&apos;s Collaborate</span>
              <h3 className="cta-title">Interested in working together?</h3>
              <p className="cta-desc">
                Whether you require strategic business requirements engineering, Power BI executive dashboards,
                statistical data analysis, or practical AI-driven workflow optimization, I am available for new freelance
                client projects.
              </p>

              <div className="resume-cta-buttons">
                <a
                  href={GMAIL_CONSULT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  id="resume-start-project-btn"
                >
                  <span>Start a Project</span>
                  <Sparkles size={16} />
                </a>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="btn btn-whatsapp"
                  id="resume-whatsapp-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.05-1.92-.477-1.397-.571-2.482-1.996-2.55-2.088-.069-.092-.563-.748-.563-1.425 0-.677.354-1.009.479-1.147.126-.138.275-.172.367-.172.092 0 .183.001.263.005.085.004.198-.032.309.234.115.275.391.954.425 1.024.035.069.058.149.011.239-.046.092-.069.149-.138.23-.069.08-.145.179-.207.24-.069.069-.141.144-.061.282.08.138.358.591.768.956.528.47 0.973.616 1.111.685.138.069.218.058.299-.035.08-.092.345-.402.437-.539.092-.138.184-.115.31-.069.126.046.804.379.942.448.138.069.23.103.264.161.034.057.034.332-.11.737z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.635 0-3.15-.494-4.417-1.341l-.317-.213-2.955.827.844-2.887-.234-.339A8.026 8.026 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z" />
                  </svg>
                  <span>Contact Me</span>
                </button>

                <a href="#case-studies" className="btn btn-outline" id="resume-view-portfolio-btn">
                  <span>View All Projects</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </footer>

        </div>
      </div>

      {/* ============================================================ */}
      {/* PDF DOWNLOAD PLACEHOLDER MODAL                               */}
      {/* ============================================================ */}
      {pdfModalOpen && (
        <div
          className="resume-modal-overlay"
          onClick={() => setPdfModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="resume-modal-card glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="resume-modal-header">
              <div className="modal-title-group">
                <div className="modal-icon-badge">
                  <FileText size={22} color="#06b6d4" />
                </div>
                <div>
                  <h4 className="modal-heading">Resume PDF Document</h4>
                  <span className="modal-version-tag">
                    Official Release • Version {RESUME_DATA.metadata.version}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setPdfModalOpen(false)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="resume-modal-body">
              <div className="modal-status-box">
                <div className="status-badge-row">
                  <span className="status-tag-orange">Resume PDF Coming Soon</span>
                  <span className="status-date">{RESUME_DATA.metadata.lastUpdated}</span>
                </div>
                <p className="modal-status-desc">{RESUME_DATA.metadata.statusNotice}</p>
              </div>

              <div className="modal-actions-guide">
                <h5 className="guide-title">How you can view or save right now:</h5>
                <div className="guide-options">
                  <div className="guide-opt-item">
                    <div className="opt-number">1</div>
                    <div>
                      <strong>Print / Save as PDF from Browser:</strong>
                      <p>
                        Click the &quot;Print / Save PDF&quot; button to immediately generate a clean,
                        printer-ready PDF via your browser&apos;s native Print dialog.
                      </p>
                    </div>
                  </div>
                  <div className="guide-opt-item">
                    <div className="opt-number">2</div>
                    <div>
                      <strong>Full Web Layout:</strong>
                      <p>
                        This dedicated section contains all verified professional details, metrics,
                        skills, projects, and certifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume-modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setPdfModalOpen(false);
                  handlePrint();
                }}
              >
                <Printer size={16} />
                <span>Print / Save as PDF Now</span>
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setPdfModalOpen(false)}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
