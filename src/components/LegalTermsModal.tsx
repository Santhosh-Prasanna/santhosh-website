'use client';

import { useState, useEffect } from 'react';
import {
  Shield,
  FileText,
  Lock,
  DollarSign,
  Scale,
  CheckCircle2,
  AlertTriangle,
  X,
  Printer,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface LegalTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSection?: string;
}

export default function LegalTermsModal({ isOpen, onClose, defaultSection = 'scope' }: LegalTermsModalProps) {
  const [activeTab, setActiveTab] = useState(defaultSection);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (defaultSection) {
      setActiveTab(defaultSection);
    }
  }, [defaultSection]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(`${window.location.origin}/#pricing`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="legal-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="legal-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="legal-modal-header">
          <div className="legal-header-info">
            <div className="badge-pill emerald" style={{ marginBottom: 6 }}>
              <Scale size={13} />
              <span>OFFICIAL CLIENT SERVICE AGREEMENT</span>
            </div>
            <h2 className="legal-modal-title">
              Freelance Legal Terms &amp; <span className="gradient-text">Conditions of Engagement</span>
            </h2>
            <p className="legal-modal-subtitle">
              Standard Master Services Governance &bull; Effective Date: January 2026 &bull; Consultant: Santhosh Prasanna (Sandy)
            </p>
          </div>

          <div className="legal-header-actions">
            <button
              type="button"
              onClick={handlePrint}
              className="legal-action-btn"
              title="Print / Save as PDF"
              aria-label="Print Agreement"
            >
              <Printer size={16} />
              <span className="hide-mobile">Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={handleCopyLink}
              className="legal-action-btn"
              title="Copy link to pricing & terms"
              aria-label="Copy Link"
            >
              {copiedLink ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              <span className="hide-mobile">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="legal-close-btn"
              aria-label="Close legal terms modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body: Sidebar Navigation + Content */}
        <div className="legal-modal-body">
          {/* Quick Nav Sidebar */}
          <aside className="legal-nav-sidebar">
            <div className="legal-sidebar-label">AGREEMENT SECTIONS</div>
            <button
              type="button"
              className={`legal-nav-item ${activeTab === 'scope' ? 'active' : ''}`}
              onClick={() => setActiveTab('scope')}
            >
              <FileText size={15} />
              <span>1. Scope &amp; Deliverables</span>
            </button>
            <button
              type="button"
              className={`legal-nav-item ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => setActiveTab('pricing')}
            >
              <DollarSign size={15} />
              <span>2. Rates &amp; Complexity Scaling</span>
            </button>
            <button
              type="button"
              className={`legal-nav-item ${activeTab === 'advance' ? 'active' : ''}`}
              onClick={() => setActiveTab('advance')}
            >
              <Shield size={15} />
              <span>3. 20% Advance &amp; Priority Queue</span>
            </button>
            <button
              type="button"
              className={`legal-nav-item ${activeTab === 'payment' ? 'active' : ''}`}
              onClick={() => setActiveTab('payment')}
            >
              <Lock size={15} />
              <span>4. Confidential Payment &amp; UPI</span>
            </button>
            <button
              type="button"
              className={`legal-nav-item ${activeTab === 'ip' ? 'active' : ''}`}
              onClick={() => setActiveTab('ip')}
            >
              <CheckCircle2 size={15} />
              <span>5. IP Rights &amp; Ownership</span>
            </button>
            <button
              type="button"
              className={`legal-nav-item ${activeTab === 'confidentiality' ? 'active' : ''}`}
              onClick={() => setActiveTab('confidentiality')}
            >
              <Shield size={15} />
              <span>6. Data Privacy &amp; NDAs</span>
            </button>
            <button
              type="button"
              className={`legal-nav-item ${activeTab === 'revisions' ? 'active' : ''}`}
              onClick={() => setActiveTab('revisions')}
            >
              <FileText size={15} />
              <span>7. Revisions &amp; Scope Creep</span>
            </button>
            <button
              type="button"
              className={`legal-nav-item ${activeTab === 'cancellation' ? 'active' : ''}`}
              onClick={() => setActiveTab('cancellation')}
            >
              <AlertTriangle size={15} />
              <span>8. Cancellation &amp; Refunds</span>
            </button>
            <button
              type="button"
              className={`legal-nav-item ${activeTab === 'liability' ? 'active' : ''}`}
              onClick={() => setActiveTab('liability')}
            >
              <Scale size={15} />
              <span>9. Liability &amp; Jurisdiction</span>
            </button>
          </aside>

          {/* Document Content Scroll Area */}
          <div className="legal-content-scroll">
            {/* Agreement Summary Box */}
            <div className="legal-summary-callout">
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Shield size={20} color="#06b6d4" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Client Protection &amp; Governance Notice:</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    These terms constitute the legal framework governing all professional freelance services provided
                    by <strong>Santhosh Prasanna</strong> (&quot;Consultant&quot;). Engaging services, submitting a project
                    verification request, or processing the 20% advance deposit signifies full acceptance of these terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: Scope */}
            <section className={`legal-doc-section ${activeTab === 'scope' ? 'highlight-section' : ''}`} id="legal-scope">
              <div className="legal-section-header">
                <span className="legal-section-number">01</span>
                <h3>Scope of Engagement &amp; Mutual Statement of Work (SOW)</h3>
              </div>
              <div className="legal-section-body">
                <p>
                  1.1 <strong>Mutual Agreement Requirement:</strong> No development or analytical sprint shall begin without
                  a written and mutually agreed Scope of Work (SOW), defining specific milestones, analytical schemas,
                  expected deliverables, and delivery timelines.
                </p>
                <p>
                  1.2 <strong>Deliverable Boundaries:</strong> Work performed by the Consultant is limited strictly to items
                  expressly articulated in the approved SOW. Any additional requests, alterations to business logic, or extra
                  dashboard views requested during development will be evaluated as a formal Change Request (CR).
                </p>
              </div>
            </section>

            {/* Section 2: Pricing */}
            <section className={`legal-doc-section ${activeTab === 'pricing' ? 'highlight-section' : ''}`} id="legal-pricing">
              <div className="legal-section-header">
                <span className="legal-section-number">02</span>
                <h3>Starting Benchmark Rates &amp; Complexity Scaling</h3>
              </div>
              <div className="legal-section-body">
                <p>
                  2.1 <strong>International Client Rate:</strong> The standard baseline starting rate for international clients
                  is <strong>$18.00 USD per hour</strong> (or flat-rate project equivalent agreed upon in the SOW).
                </p>
                <p>
                  2.2 <strong>Domestic &amp; Indian Client Rate:</strong> The standard baseline starting rate for domestic and
                  local businesses in India is <strong>INR ₹2,000 per hour</strong> (or flat-rate milestone equivalent).
                </p>
                <p>
                  2.3 <strong>Complexity-Based Scaling:</strong> Starting prices reflect entry-level data analysis and standard
                  reporting. Rates scale upwards based on project complexity, enterprise multi-source ETL pipelines, real-time
                  API streaming, machine learning modeling, tight rush turnaround windows, and bespoke database engineering.
                </p>
              </div>
            </section>

            {/* Section 3: 20% Advance */}
            <section className={`legal-doc-section ${activeTab === 'advance' ? 'highlight-section' : ''}`} id="legal-advance">
              <div className="legal-section-header">
                <span className="legal-section-number">03</span>
                <h3>Mandatory 20% Advance Payment &amp; Priority Client Onboarding</h3>
              </div>
              <div className="legal-section-body">
                <p>
                  3.1 <strong>Strict 20% Advance Deposit:</strong> A mandatory, upfront <strong>20% advance deposit</strong> is
                  required prior to the kickoff of any project. This deposit secures your dedicated sprint window, covers initial
                  architectural blueprinting, and allocates exclusive time on the Consultant&apos;s active schedule.
                </p>
                <p>
                  3.2 <strong>Priority Queue Exclusivity:</strong> To eliminate project delays and maintain elite delivery quality,
                  <strong> only clients who have completed the 20% advance deposit are admitted into the active production pipeline</strong>.
                  Exploratory calls and inquiries without confirmed advance deposits are placed on hold.
                </p>
                <p>
                  3.3 <strong>Milestone Disbursements:</strong> Remaining project balance is disbursed on structured delivery
                  milestones (e.g. 40% upon intermediate prototype/beta handover, and 40% upon final sign-off and deployment).
                </p>
              </div>
            </section>

            {/* Section 4: Confidential Payment */}
            <section className={`legal-doc-section ${activeTab === 'payment' ? 'highlight-section' : ''}`} id="legal-payment">
              <div className="legal-section-header">
                <span className="legal-section-number">04</span>
                <h3>Confidential Payment Gateway &amp; UPI Security Protocol</h3>
              </div>
              <div className="legal-section-body">
                <p>
                  4.1 <strong>Public Website Shield:</strong> To safeguard against financial fraud, spam, and unverified transfers
                  on a publicly hosted domain, official banking credentials and UPI IDs are <strong>never displayed openly</strong> to
                  unauthenticated visitors.
                </p>
                <p>
                  4.2 <strong>Incremental Client Passcode Gate:</strong> Official UPI coordinates (<code>santhoshprasanna81895@oksbi</code>)
                  are guarded on a secure server and unlocked strictly through incremental client passcodes (<code>client01</code>,
                  <code>client02</code>, <code>client03</code>, etc.) issued personally by Santhosh on WhatsApp following mutual agreement.
                </p>
                <p>
                  4.3 <strong>Receipt Confirmation:</strong> Following advance deposit transfer, clients must submit their transaction
                  reference receipt on WhatsApp (8270407190). Santhosh issues an official acknowledgement, booking confirmation, and tax invoice.
                </p>
              </div>
            </section>

            {/* Section 5: Intellectual Property */}
            <section className={`legal-doc-section ${activeTab === 'ip' ? 'highlight-section' : ''}`} id="legal-ip">
              <div className="legal-section-header">
                <span className="legal-section-number">05</span>
                <h3>Intellectual Property (IP) Rights &amp; Ownership Transfer</h3>
              </div>
              <div className="legal-section-body">
                <p>
                  5.1 <strong>Full Transfer Upon 100% Final Settlement:</strong> All customized Power BI templates, SQL queries,
                  Python automation scripts, analytical dashboards, and documentation built specifically for the client become
                  the <strong>exclusive intellectual property of the Client upon receipt of 100% full and final payment</strong>.
                </p>
                <p>
                  5.2 <strong>Pre-Payment Lien:</strong> Until full final invoice settlement is completed, all deliverables, analytical
                  models, and files remain the intellectual and legal property of the Consultant. Unauthorized commercial use of unpaid
                  deliverables is strictly prohibited.
                </p>
                <p>
                  5.3 <strong>Portfolio Display Rights:</strong> The Consultant retains the right to display anonymized architectural
                  summaries, sanitized KPIs, and case-study workflows in his professional portfolio unless the Client has executed a signed
                  Non-Disclosure Agreement (NDA) forbidding public mention.
                </p>
              </div>
            </section>

            {/* Section 6: Confidentiality & NDAs */}
            <section className={`legal-doc-section ${activeTab === 'confidentiality' ? 'highlight-section' : ''}`} id="legal-confidentiality">
              <div className="legal-section-header">
                <span className="legal-section-number">06</span>
                <h3>Client Confidentiality, Data Protection &amp; Bilateral NDAs</h3>
              </div>
              <div className="legal-section-body">
                <p>
                  6.1 <strong>Strict Confidentiality:</strong> The Consultant agrees to treat all client datasets, financial accounts,
                  customer records, trade secrets, API tokens, and business strategies as strictly confidential and privileged.
                </p>
                <p>
                  6.2 <strong>No Third-Party Disclosure:</strong> No proprietary client data will ever be sold, rented, leased, or disclosed
                  to any external party or public AI training system without express written authorization.
                </p>
                <p>
                  6.3 <strong>NDA Execution:</strong> The Consultant will gladly execute a mutual or client-provided Non-Disclosure
                  Agreement (NDA) prior to receiving proprietary enterprise datasets.
                </p>
              </div>
            </section>

            {/* Section 7: Revisions */}
            <section className={`legal-doc-section ${activeTab === 'revisions' ? 'highlight-section' : ''}`} id="legal-revisions">
              <div className="legal-section-header">
                <span className="legal-section-number">07</span>
                <h3>Revision Policy, Review Periods &amp; Scope Creep</h3>
              </div>
              <div className="legal-section-body">
                <p>
                  7.1 <strong>Included Revisions:</strong> Standard project contracts include <strong>up to two (2) rounds of minor
                  review revisions</strong> to ensure alignment with initial SOW criteria, provided feedback is submitted within
                  seven (7) business days of milestone handover.
                </p>
                <p>
                  7.2 <strong>Scope Creep &amp; Major Overhauls:</strong> Substantial structural alterations, changes in baseline business
                  rules, new data integrations, or redesigned dashboard layouts requested after milestone sign-off will be quoted as
                  supplementary work at the standard hourly rate ($18/hr or ₹2,000/hr).
                </p>
              </div>
            </section>

            {/* Section 8: Cancellation */}
            <section className={`legal-doc-section ${activeTab === 'cancellation' ? 'highlight-section' : ''}`} id="legal-cancellation">
              <div className="legal-section-header">
                <span className="legal-section-number">08</span>
                <h3>Cancellation, Milestone Acceptance &amp; Refund Policy</h3>
              </div>
              <div className="legal-section-body">
                <p>
                  8.1 <strong>Advance Deposit Non-Refundability:</strong> The 20% advance payment covers initial discovery, sprint
                  reservation, diagnostic architecture setup, and compensation for foregone client engagements. Once sprint work has commenced,
                  the 20% deposit is non-refundable.
                </p>
                <p>
                  8.2 <strong>Mutual Early Termination:</strong> If either party terminates the project before completion, the Client
                  shall be billed on a pro-rata basis for all completed hours or approved milestones up to the termination notice date.
                  Completed files and scripts will be handed over once all accrued invoices are settled.
                </p>
              </div>
            </section>

            {/* Section 9: Liability & Law */}
            <section className={`legal-doc-section ${activeTab === 'liability' ? 'highlight-section' : ''}`} id="legal-liability">
              <div className="legal-section-header">
                <span className="legal-section-number">09</span>
                <h3>Limitation of Liability, Governing Law &amp; Jurisdiction</h3>
              </div>
              <div className="legal-section-body">
                <p>
                  9.1 <strong>Limitation of Liability:</strong> In no event shall the Consultant be held liable for indirect, incidental,
                  special, or consequential damages, including loss of business profits, third-party cloud service outages (AWS, Azure, Power BI Service),
                  or decisions made based on analytical models. Total liability shall never exceed the total compensation actually received
                  by the Consultant for the specific milestone in dispute.
                </p>
                <p>
                  9.2 <strong>Governing Law:</strong> This Agreement shall be construed, interpreted, and governed in accordance with the
                  substantive laws of <strong>India</strong>.
                </p>
                <p>
                  9.3 <strong>Dispute Resolution:</strong> The parties agree to resolve any dispute through amicable negotiation in good faith.
                  Any unresolved legal proceedings shall fall under the exclusive jurisdiction of the competent courts in
                  <strong> Chennai, Tamil Nadu, India</strong>.
                </p>
              </div>
            </section>

            {/* Official Contact Box */}
            <div className="legal-contact-box">
              <h4 style={{ color: '#ffffff', margin: '0 0 6px 0', fontSize: '0.95rem' }}>
                Legal &amp; Contract Inquiries
              </h4>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.825rem', color: '#94a3b8' }}>
                For custom Enterprise SOW agreements, master service agreements (MSA), or bilateral NDAs:
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: '0.825rem' }}>
                <span style={{ color: '#06b6d4' }}>
                  <strong>Email:</strong> santhoshfreelancer25@gmail.com
                </span>
                <span style={{ color: '#25d366' }}>
                  <strong>WhatsApp:</strong> +91 8270407190
                </span>
                <span style={{ color: '#cbd5e1' }}>
                  <strong>Location:</strong> Chennai, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="legal-modal-footer">
          <div className="legal-footer-left">
            <CheckCircle2 size={16} color="#10b981" />
            <span>Acceptance of terms is confirmed upon project agreement and advance payment.</span>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            style={{ padding: '8px 24px', fontSize: '0.85rem' }}
            onClick={onClose}
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
