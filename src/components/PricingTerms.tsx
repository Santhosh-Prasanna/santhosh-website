'use client';

import { useState, useEffect } from 'react';
import {
  Globe,
  Building2,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Lock,
  Unlock,
  ArrowRight,
  Sparkles,
  FileCheck,
  Clock,
  Send,
  KeyRound,
  ShieldAlert,
  HelpCircle,
  Scale,
  FileText,
} from 'lucide-react';
import LegalTermsModal from '@/components/LegalTermsModal';

export default function PricingTerms() {
  const [passcode, setPasscode] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [verifiedUpiId, setVerifiedUpiId] = useState<string | null>(null);
  const [verifiedClientNumber, setVerifiedClientNumber] = useState<string | null>(null);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalDefaultTab, setLegalDefaultTab] = useState('scope');

  const verifyTokenDirectly = async (tokenValue: string) => {
    if (!tokenValue.trim()) return;
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/verify-client-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: tokenValue }),
      });

      const data = await res.json();

      if (data.success && data.upiId) {
        setVerifiedUpiId(data.upiId);
        setVerifiedClientNumber(data.clientNumber || '01');
        setErrorMsg('');
      } else {
        setErrorMsg(
          data.message ||
            'Access Restricted: Invalid project passcode. To prevent payment fraud, UPI coordinates are released exclusively to clients with an authorized project token.'
        );
      }
    } catch {
      setErrorMsg('Network verification error. Please try again or contact Santhosh directly.');
    } finally {
      setLoading(false);
    }
  };

  // Automatically check if client accessed via direct verified WhatsApp link
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tokenParam = params.get('token') || params.get('passcode') || params.get('code');
      if (tokenParam) {
        setPasscode(tokenParam);
        verifyTokenDirectly(tokenParam);
      }

      const handleOpenLegalEvent = (e: Event) => {
        const customEvent = e as CustomEvent<{ tab?: string }>;
        setLegalDefaultTab(customEvent.detail?.tab || 'scope');
        setLegalModalOpen(true);
      };

      window.addEventListener('open-legal-terms', handleOpenLegalEvent);
      return () => window.removeEventListener('open-legal-terms', handleOpenLegalEvent);
    }
  }, []);

  const handleVerifyPasscode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setErrorMsg('Please enter your client project passcode provided by Santhosh.');
      return;
    }
    await verifyTokenDirectly(passcode);
  };

  const handleCopyUpi = () => {
    if (verifiedUpiId) {
      navigator.clipboard.writeText(verifiedUpiId);
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2500);
    }
  };

  const handleOpenWhatsAppRequest = () => {
    const text =
      'Hello Santhosh, I would like to verify my project scope and request the Client Project Passcode to unlock your official UPI ID for the 20% advance payment.\n\nProject Name / Brief: ';
    window.open(`/whatsapp?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsAppConfirm = () => {
    const text =
      'Hello Santhosh, I have completed the 20% advance transfer to santhoshprasanna81895@oksbi. Attached is my transaction receipt for your verification and kickoff.';
    window.open(`/whatsapp?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="pricing-section" id="pricing">
      {/* Retain legacy anchor alias */}
      <span id="calculator" style={{ position: 'relative', top: '-88px', display: 'block', visibility: 'hidden' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill emerald" style={{ marginBottom: 12 }}>
            <Sparkles size={14} />
            <span>TRANSPARENT RATES &amp; ENGAGEMENT GOVERNANCE</span>
          </div>
          <h2 className="section-title">
            Project Pricing &amp; <span className="gradient-text">Engagement Terms</span>
          </h2>
          <p className="section-desc">
            Transparent starting benchmarks for international and domestic clients. Every engagement is
            governed by mutual agreement, dedicated sprint slots, and structured milestone payments.
          </p>
        </div>

        {/* Dual Pricing Benchmark Cards Grid */}
        <div className="pricing-cards-grid">
          {/* Card 1: International Clients */}
          <div className="pricing-card glass-card pricing-card-intl">
            <div className="pricing-card-top">
              <div className="pricing-badge badge-intl">
                <Globe size={14} />
                <span>International Engagements</span>
              </div>
              <div className="pricing-market-tag">USD / Global Clients</div>
            </div>

            <div className="pricing-rate-block">
              <div className="pricing-starting-label">Starting From</div>
              <div className="pricing-rate-number">
                <span className="pricing-currency">$</span>
                <span className="pricing-amount">18</span>
                <span className="pricing-unit">/ hr</span>
              </div>
              <div className="pricing-scope-note">
                * Varies dynamically depending on project scope &amp; complexity
              </div>
            </div>

            <div className="pricing-divider" />

            <ul className="pricing-feature-list">
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Direct USD invoicing via Stripe, Wire &amp; Global Rail</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Flexible timezone crossover (EST / GMT / IST)</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>End-to-end Power BI / Tableau dashboards &amp; AI workflows</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Final cost confirmed after mutual requirement discovery</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Strict NDA, code repository handover &amp; 30-day warranty</span>
              </li>
            </ul>

            <a href="#consultation" className="btn btn-primary pricing-cta-btn">
              <span>Book International Project</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 2: Indian & Local Business Queries */}
          <div className="pricing-card glass-card pricing-card-domestic">
            <div className="pricing-card-top">
              <div className="pricing-badge badge-domestic">
                <Building2 size={14} />
                <span>Indian &amp; Local Businesses</span>
              </div>
              <div className="pricing-market-tag">INR / Domestic Queries</div>
            </div>

            <div className="pricing-rate-block">
              <div className="pricing-starting-label">Starting From</div>
              <div className="pricing-rate-number">
                <span className="pricing-currency">₹</span>
                <span className="pricing-amount">2,000</span>
                <span className="pricing-unit">/ hr</span>
              </div>
              <div className="pricing-scope-note">
                * Varies dynamically depending on project scope &amp; complexity
              </div>
            </div>

            <div className="pricing-divider" />

            <ul className="pricing-feature-list">
              <li>
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Direct INR billing with GST compliant documentation</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Instant local phone &amp; dedicated WhatsApp communication</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Custom ERP, Tally, SQL data extraction &amp; analytics setup</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Final quote confirmed after mutual discussion &amp; agreement</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Protected UPI &amp; IMPS settlement upon client onboarding</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={handleOpenWhatsAppRequest}
              className="btn btn-whatsapp pricing-cta-btn"
            >
              <span>Enquire for Indian Project</span>
              <Send size={16} />
            </button>
          </div>
        </div>

        {/* 4 Core Engagement & Governance Policies */}
        <div className="pricing-policy-section">
          <div className="pricing-policy-header">
            <ShieldCheck size={20} className="text-cyan" />
            <h3>Project Governance &amp; Payment Policies</h3>
          </div>

          <div className="pricing-policy-grid">
            {/* Policy 1: Complexity Based */}
            <div className="pricing-policy-card">
              <div className="policy-icon-wrap">
                <Clock size={18} />
              </div>
              <div className="policy-card-content">
                <h4>Complexity-Based Scaling</h4>
                <p>
                  Every engagement is unique. The starting rate is a baseline; the final hourly rate or fixed project
                  milestone price is calculated based on data volume, architecture complexity, and sprint deadlines.
                </p>
              </div>
            </div>

            {/* Policy 2: Mutual Agreement */}
            <div className="pricing-policy-card">
              <div className="policy-icon-wrap">
                <FileCheck size={18} />
              </div>
              <div className="policy-card-content">
                <h4>Mutual Agreement Mandatory</h4>
                <p>
                  Work commences only after mutual agreement on the written Scope of Work (SOW), defined
                  deliverables, milestone schedule, and accepted revision policies.
                </p>
              </div>
            </div>

            {/* Policy 3: 20% Advance Payment Is Must */}
            <div className="pricing-policy-card policy-card-highlight">
              <div className="policy-icon-wrap policy-icon-gold">
                <DollarSign size={18} />
              </div>
              <div className="policy-card-content">
                <h4>20% Advance Payment Is a Must</h4>
                <p>
                  A <strong>strict 20% advance deposit</strong> is mandatory prior to kickoff. This reserves your
                  dedicated sprint window and covers initial technical architecture &amp; diagnostic setup.
                </p>
              </div>
            </div>

            {/* Policy 4: Advance-Paid Queue Only */}
            <div className="pricing-policy-card policy-card-highlight">
              <div className="policy-icon-wrap policy-icon-emerald">
                <ShieldCheck size={18} />
              </div>
              <div className="policy-card-content">
                <h4>Priority Client Onboarding</h4>
                <p>
                  To ensure 100% focus and zero project overlap, <strong>only clients with a confirmed 20% advance payment</strong> are
                  taken into the active pipeline for further development and delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct WhatsApp Client Verification & Confidential UPI Protocol */}
        <div className="upi-access-container glass-card">
          <div className="upi-access-header">
            <div className="upi-lock-badge">
              {verifiedUpiId ? <Unlock size={18} color="#10b981" /> : <Lock size={18} color="#f59e0b" />}
              <span>
                {verifiedUpiId
                  ? 'Client Verified — Authorized Deposit Coordinates Released'
                  : 'Confidential Client Payment Security'}
              </span>
            </div>
            <h3 className="upi-access-title">
              {verifiedUpiId
                ? 'Official UPI Gateway Unlocked for Confirmed Client'
                : 'Direct WhatsApp Verification Protocol'}
            </h3>
            <p className="upi-access-desc">
              To prevent payment fraud, impersonation, and spam on this public website, <strong>Santhosh&apos;s official UPI ID is kept strictly confidential</strong>.
              Payment coordinates are revealed <em>only after</em> your project request is verified and authorized directly on Santhosh&apos;s WhatsApp.
            </p>
          </div>

          {!verifiedUpiId ? (
            <div className="upi-flow-grid">
              {/* Step 1: Send WhatsApp Verification Request */}
              <div className="upi-flow-card upi-flow-card-primary">
                <div className="upi-flow-step-badge">STEP 01</div>
                <div className="upi-flow-icon-wrap upi-flow-wa-icon">
                  <Send size={22} />
                </div>
                <h4>Send Verification Request on WhatsApp</h4>
                <p>
                  Click below to submit your project scope to Santhosh on WhatsApp. Santhosh will personally
                  verify your request and issue your confidential client project passcode.
                </p>
                <button
                  type="button"
                  onClick={handleOpenWhatsAppRequest}
                  className="btn btn-whatsapp upi-wa-cta-btn"
                  id="request-passcode-whatsapp-btn"
                >
                  <Send size={16} />
                  <span>Send Verification Request on WhatsApp</span>
                </button>
              </div>

              {/* Step 2: Enter Passcode Received from Santhosh */}
              <div className="upi-flow-card">
                <div className="upi-flow-step-badge">STEP 02</div>
                <div className="upi-flow-icon-wrap upi-flow-key-icon">
                  <KeyRound size={22} />
                </div>
                <h4>Enter Verified Passcode to Reveal UPI</h4>
                <p>
                  Once Santhosh verifies your request on WhatsApp, enter your assigned client passcode
                  (e.g. <strong>client01</strong>, <strong>client02</strong>, <strong>client03</strong>...) or click your direct unlock link:
                </p>

                <form onSubmit={handleVerifyPasscode} className="upi-passcode-form">
                  <div className="upi-input-wrap">
                    <input
                      type="text"
                      placeholder="Enter passcode (e.g. client01)"
                      value={passcode}
                      onChange={(e) => {
                        setPasscode(e.target.value);
                        setErrorMsg('');
                      }}
                      className="upi-passcode-input"
                      id="client-passcode-input"
                      autoComplete="off"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary upi-verify-btn"
                      id="verify-passcode-btn"
                    >
                      <Unlock size={16} />
                      <span>{loading ? 'Verifying...' : 'Unlock UPI'}</span>
                    </button>
                  </div>

                  {errorMsg && (
                    <div className="upi-error-box">
                      <ShieldAlert size={16} color="#f87171" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          ) : (
            <div className="upi-unlocked-view" id="upi-details-card">
              <div className="upi-credentials-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                  <div className="upi-id-label">
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>
                      {verifiedClientNumber
                        ? `Client #${verifiedClientNumber} Verified Session — Official Deposit UPI ID:`
                        : 'WhatsApp-Verified Client Session — Authorized Deposit UPI ID:'}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '3px 8px', borderRadius: 6 }}>
                    CLIENT #{verifiedClientNumber || '01'} ACTIVE
                  </span>
                </div>

                <div className="upi-id-row">
                  <span className="upi-id-code">{verifiedUpiId}</span>
                  <button
                    type="button"
                    onClick={handleCopyUpi}
                    className="btn-copy-upi"
                    id="copy-upi-btn"
                    aria-label="Copy UPI ID"
                  >
                    {copiedUpi ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copiedUpi ? 'Copied to Clipboard!' : 'Copy UPI ID'}</span>
                  </button>
                </div>

                <div className="upi-supported-apps">
                  <span>Accepted UPI Apps:</span>
                  <span className="upi-app-tag">Google Pay</span>
                  <span className="upi-app-tag">PhonePe</span>
                  <span className="upi-app-tag">Paytm</span>
                  <span className="upi-app-tag">BHIM</span>
                  <span className="upi-app-tag">Cred</span>
                  <span className="upi-app-tag">Amazon Pay</span>
                </div>
              </div>

              <div className="upi-next-steps">
                <div className="upi-step-text">
                  <AlertCircle size={16} color="#06b6d4" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>
                    After completing your <strong>20% advance payment</strong> to <code>{verifiedUpiId}</code> for <strong>Client #{verifiedClientNumber || '01'}</strong>,
                    please send your payment receipt on WhatsApp so Santhosh can confirm your deposit and initiate your project sprint.
                  </span>
                </div>

                <div className="upi-actions-row">
                  <button
                    type="button"
                    onClick={handleOpenWhatsAppConfirm}
                    className="btn btn-whatsapp"
                    id="confirm-upi-whatsapp-btn"
                  >
                    <Send size={16} />
                    <span>Send Advance Receipt on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setVerifiedUpiId(null);
                      setPasscode('');
                    }}
                    className="btn"
                    style={{ color: '#94a3b8', fontSize: '0.825rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                  >
                    Lock &amp; Hide UPI Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Legal Terms & Master Service Agreement Banner */}
        <div className="legal-terms-banner">
          <div className="legal-banner-info">
            <div className="policy-icon-wrap" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}>
              <Scale size={20} />
            </div>
            <div>
              <h4>Master Freelance Service Agreement &amp; Legal Terms</h4>
              <p>
                Comprehensive legal terms covering IP ownership transfer upon payment, strict confidentiality NDAs,
                20% advance deposit policy, and Chennai jurisdiction.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setLegalDefaultTab('scope');
              setLegalModalOpen(true);
            }}
            className="btn-open-legal"
            id="open-legal-terms-btn"
          >
            <FileText size={15} />
            <span>Review Full Legal Terms &amp; Conditions &rarr;</span>
          </button>
        </div>

        {/* Legal Terms Modal */}
        <LegalTermsModal
          isOpen={legalModalOpen}
          onClose={() => setLegalModalOpen(false)}
          defaultSection={legalDefaultTab}
        />
      </div>
    </section>
  );
}
