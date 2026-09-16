'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Send,
  CheckCircle2,
  Mail,
  Calendar,
  Clock,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink,
  Smartphone,
  Sparkles,
} from 'lucide-react';

export default function Consultation() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedChannel, setSubmittedChannel] = useState<'gmail' | 'whatsapp'>('gmail');
  const [copied, setCopied] = useState(false);
  const [qrTab, setQrTab] = useState<'gmail' | 'whatsapp'>('gmail');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'BI & Executive Dashboards',
    timeline: 'Within 2-4 weeks',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('santhoshfreelancer25@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const buildGmailWebUrl = () => {
    const subject = `Project Enquiry: ${formData.service} — ${formData.name || 'New Client'}`;
    const body =
      `Hi Santhosh,\n\n` +
      `I would like to make an enquiry regarding a potential project.\n\n` +
      `Here are my enquiry details:\n` +
      `• Full Name: ${formData.name || 'Not provided'}\n` +
      `• Work Email: ${formData.email || 'Not provided'}\n` +
      `• Primary Need: ${formData.service}\n` +
      `• Estimated Timeline: ${formData.timeline}\n` +
      `• Project Goals & Context:\n${formData.message || 'Ready to discuss on call.'}\n\n` +
      `Looking forward to hearing from you!\n\n` +
      `Best regards,\n${formData.name || 'Inquirer'}`;

    return `https://mail.google.com/mail/?view=cm&fs=1&to=santhoshfreelancer25@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const buildWhatsAppUrl = () => {
    const text =
      `Hello Santhosh, I would like to make an enquiry regarding a potential project.\n\n` +
      `• Full Name: ${formData.name || 'Not provided'}\n` +
      `• Work Email: ${formData.email || 'Not provided'}\n` +
      `• Primary Need: ${formData.service}\n` +
      `• Estimated Timeline: ${formData.timeline}\n` +
      `• Project Goals & Context: ${formData.message || 'Ready to discuss.'}\n\n` +
      `Looking forward to hearing from you!`;

    return `/whatsapp?text=${encodeURIComponent(text)}`;
  };

  const defaultWhatsAppQuickUrl = '/whatsapp';

  const defaultGmailQuickUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=santhoshfreelancer25@gmail.com&su=${encodeURIComponent(
    'Project Enquiry | Freelance Business & Data Analytics'
  )}&body=${encodeURIComponent(
    'Hi Santhosh,\n\nI would like to make an enquiry regarding a potential project.\n\nLooking forward to hearing from you!'
  )}`;

  const handleSendGmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedChannel('gmail');
    setSubmitted(true);
    window.open(buildGmailWebUrl(), '_blank');
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedChannel('whatsapp');
    setSubmitted(true);
    window.open(buildWhatsAppUrl(), '_blank');
  };

  return (
    <section className="consultation-section" id="consultation">
      <div className="container">
        <div className="consultation-card">
          <div className="consultation-grid">
            {/* Left Column: Trust, Direct Channels & Dual QR Codes */}
            <div className="consultation-trust-col">
              <div>
                <div className="consultation-avatar-row">
                  <div className="avatar-micro-wrap">
                    <Image
                      src="/images/profile/My_Photo.jpeg"
                      alt="Santhosh Prasanna — Freelance Business & Data Analyst"
                      width={68}
                      height={68}
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  </div>
                  <div className="avatar-info-wrap">
                    <h4>Santhosh Prasanna (Sandy)</h4>
                    <p>Freelance Business &amp; Data Analyst &bull; AI Specialist</p>
                  </div>
                </div>

                <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: 14 }}>
                  Ready To Elevate Your <span className="gradient-text">Data Architecture?</span>
                </h2>

                <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 28 }}>
                  Whether you need custom Power BI dashboards, automated AI ETL pipelines, or a full
                  business process diagnostic, let&apos;s discuss your exact objectives.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#e2e8f0', fontSize: '0.925rem' }}>
                    <Clock size={18} color="#06b6d4" />
                    <span>Response guaranteed within 24 business hours</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#e2e8f0', fontSize: '0.925rem' }}>
                    <ShieldCheck size={18} color="#10b981" />
                    <span>Strict NDA &amp; confidential data governance guaranteed</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#e2e8f0', fontSize: '0.925rem' }}>
                    <Calendar size={18} color="#818cf8" />
                    <span>Complimentary 30-minute discovery &amp; feasibility assessment</span>
                  </div>
                </div>
              </div>

              {/* Direct Inquiry & Dual QR Code Container */}
              <div className="consultation-inquiry-box">
                <div className="direct-inquiry-header">
                  <span className="direct-inquiry-label">Direct Inquiry Channels</span>

                  {/* Gmail Direct Row */}
                  <div className="direct-email-row">
                    <a
                      href={defaultGmailQuickUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="direct-email-address"
                      id="direct-email-link"
                      title="Click to compose in Gmail"
                    >
                      <Mail size={16} />
                      <span>santhoshfreelancer25@gmail.com</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="btn-copy-email"
                      id="copy-email-button"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* WhatsApp Direct Action (No Phone Number Shown) */}
                  <a
                    href={defaultWhatsAppQuickUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-whatsapp-action"
                    id="consultation-whatsapp-link"
                    title="Direct WhatsApp Chat"
                  >
                    <div className="whatsapp-action-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.05-1.92-.477-1.397-.571-2.482-1.996-2.55-2.088-.069-.092-.563-.748-.563-1.425 0-.677.354-1.009.479-1.147.126-.138.275-.172.367-.172.092 0 .183.001.263.005.085.004.198-.032.309.234.115.275.391.954.425 1.024.035.069.058.149.011.239-.046.092-.069.149-.138.23-.069.08-.145.179-.207.24-.069.069-.141.144-.061.282.08.138.358.591.768.956.528.47 0.973.616 1.111.685.138.069.218.058.299-.035.08-.092.345-.402.437-.539.092-.138.184-.115.31-.069.126.046.804.379.942.448.138.069.23.103.264.161.034.057.034.332-.11.737z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.635 0-3.15-.494-4.417-1.341l-.317-.213-2.955.827.844-2.887-.234-.339A8.026 8.026 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z" />
                      </svg>
                    </div>
                    <div className="whatsapp-action-text">
                      <span className="whatsapp-action-title">Instant WhatsApp Chat</span>
                      <span className="whatsapp-action-subtitle">Click to connect directly on WhatsApp</span>
                    </div>
                  </a>
                </div>

                {/* Dual QR Code Card with Toggle for Both Mail & WhatsApp */}
                <div className="qr-dual-card-wrapper">
                  <div className="qr-toggle-bar">
                    <button
                      type="button"
                      className={`qr-toggle-btn ${qrTab === 'gmail' ? 'active' : ''}`}
                      onClick={() => setQrTab('gmail')}
                      id="qr-tab-gmail"
                    >
                      <Mail size={14} />
                      <span>Gmail QR</span>
                    </button>
                    <button
                      type="button"
                      className={`qr-toggle-btn qr-tab-whatsapp ${qrTab === 'whatsapp' ? 'active' : ''}`}
                      onClick={() => setQrTab('whatsapp')}
                      id="qr-tab-whatsapp"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.05-1.92-.477-1.397-.571-2.482-1.996-2.55-2.088-.069-.092-.563-.748-.563-1.425 0-.677.354-1.009.479-1.147.126-.138.275-.172.367-.172.092 0 .183.001.263.005.085.004.198-.032.309.234.115.275.391.954.425 1.024.035.069.058.149.011.239-.046.092-.069.149-.138.23-.069.08-.145.179-.207.24-.069.069-.141.144-.061.282.08.138.358.591.768.956.528.47 0.973.616 1.111.685.138.069.218.058.299-.035.08-.092.345-.402.437-.539.092-.138.184-.115.31-.069.126.046.804.379.942.448.138.069.23.103.264.161.034.057.034.332-.11.737z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.635 0-3.15-.494-4.417-1.341l-.317-.213-2.955.827.844-2.887-.234-.339A8.026 8.026 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z" />
                      </svg>
                      <span>WhatsApp QR</span>
                    </button>
                  </div>

                  <div style={{ display: qrTab === 'gmail' ? 'block' : 'none' }}>
                    <a
                      href={defaultGmailQuickUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="qr-code-card"
                      style={{ textDecoration: 'none' }}
                      title="Click to open in Gmail or scan with phone"
                    >
                      <div className="qr-code-image-wrap">
                        <Image
                          src="/images/inquiry-qr-code.svg"
                          alt="QR Code to compose email to santhoshfreelancer25@gmail.com"
                          width={96}
                          height={96}
                          className="qr-code-img"
                        />
                      </div>
                      <div className="qr-code-info">
                        <div className="qr-badge">
                          <Smartphone size={12} />
                          <span>Gmail Quick Connect</span>
                        </div>
                        <h5 className="qr-title">Scan to Email via Gmail</h5>
                        <p className="qr-desc">
                          Point your phone camera to auto-open Gmail with pre-filled enquiry details addressed to{' '}
                          <strong>santhoshfreelancer25@gmail.com</strong>.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div style={{ display: qrTab === 'whatsapp' ? 'block' : 'none' }}>
                    <a
                      href={defaultWhatsAppQuickUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="qr-code-card qr-whatsapp-highlight"
                      style={{ textDecoration: 'none' }}
                      title="Click to chat on WhatsApp or scan with phone"
                    >
                      <div className="qr-code-image-wrap qr-wa-border">
                        <Image
                          src="/images/whatsapp-qr-code.svg"
                          alt="QR Code for direct WhatsApp chat with Santhosh"
                          width={96}
                          height={96}
                          className="qr-code-img"
                        />
                      </div>
                      <div className="qr-code-info">
                        <div className="qr-badge qr-badge-wa">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.05-1.92-.477-1.397-.571-2.482-1.996-2.55-2.088-.069-.092-.563-.748-.563-1.425 0-.677.354-1.009.479-1.147.126-.138.275-.172.367-.172.092 0 .183.001.263.005.085.004.198-.032.309.234.115.275.391.954.425 1.024.035.069.058.149.011.239-.046.092-.069.149-.138.23-.069.08-.145.179-.207.24-.069.069-.141.144-.061.282.08.138.358.591.768.956.528.47 0.973.616 1.111.685.138.069.218.058.299-.035.08-.092.345-.402.437-.539.092-.138.184-.115.31-.069.126.046.804.379.942.448.138.069.23.103.264.161.034.057.034.332-.11.737z" />
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.635 0-3.15-.494-4.417-1.341l-.317-.213-2.955.827.844-2.887-.234-.339A8.026 8.026 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z" />
                          </svg>
                          <span>WhatsApp Quick Connect</span>
                        </div>
                        <h5 className="qr-title">Scan to Chat on WhatsApp</h5>
                        <p className="qr-desc">
                          Point your phone camera to instantly launch a direct WhatsApp chat with Santhosh without saving any phone number.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form with Both Channels */}
            <div>
              {submitted ? (
                <div
                  style={{
                    background:
                      submittedChannel === 'whatsapp'
                        ? 'rgba(37, 211, 102, 0.08)'
                        : 'rgba(6, 182, 212, 0.08)',
                    border: `1px solid ${
                      submittedChannel === 'whatsapp'
                        ? 'rgba(37, 211, 102, 0.35)'
                        : 'rgba(6, 182, 212, 0.35)'
                    }`,
                    borderRadius: '16px',
                    padding: '36px 28px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background:
                        submittedChannel === 'whatsapp'
                          ? 'rgba(37, 211, 102, 0.2)'
                          : 'rgba(6, 182, 212, 0.2)',
                      color: submittedChannel === 'whatsapp' ? '#25d366' : '#38bdf8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: 8 }}>
                    {submittedChannel === 'whatsapp'
                      ? 'WhatsApp Enquiry Redirected!'
                      : 'Gmail Enquiry Draft Prepared!'}
                  </h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 20 }}>
                    Thank you, <strong>{formData.name || 'valued client'}</strong>. Your project enquiry for{' '}
                    <strong>{formData.service}</strong> has been opened in a new tab to connect directly with Santhosh.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 360, margin: '0 auto' }}>
                    <a
                      href={buildGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                    >
                      <span>Open in Gmail Web</span>
                      <ExternalLink size={16} />
                    </a>

                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ width: '100%' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.05-1.92-.477-1.397-.571-2.482-1.996-2.55-2.088-.069-.092-.563-.748-.563-1.425 0-.677.354-1.009.479-1.147.126-.138.275-.172.367-.172.092 0 .183.001.263.005.085.004.198-.032.309.234.115.275.391.954.425 1.024.035.069.058.149.011.239-.046.092-.069.149-.138.23-.069.08-.145.179-.207.24-.069.069-.141.144-.061.282.08.138.358.591.768.956.528.47 0.973.616 1.111.685.138.069.218.058.299-.035.08-.092.345-.402.437-.539.092-.138.184-.115.31-.069.126.046.804.379.942.448.138.069.23.103.264.161.034.057.034.332-.11.737z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.635 0-3.15-.494-4.417-1.341l-.317-.213-2.955.827.844-2.887-.234-.339A8.026 8.026 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z" />
                      </svg>
                      <span>Open in WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn"
                      style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: 8 }}
                    >
                      Edit or Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form className="contact-form" id="consultation-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      Work Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-service">
                      Primary Area of Need
                    </label>
                    <select
                      id="contact-service"
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="BI & Executive Dashboards">BI &amp; Executive Dashboards (Power BI / Tableau)</option>
                      <option value="AI Workflow Automation">AI Workflow &amp; ETL Automation</option>
                      <option value="Business Process Optimization">Business Process Analysis &amp; Optimization</option>
                      <option value="Predictive Modeling">Predictive Modeling &amp; Financial Forecasting</option>
                      <option value="Advisory Retainer">Ongoing Freelance Analyst Retainer</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">
                      Project Goals &amp; Context
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Briefly describe your data challenges or the metrics you want to analyze/automate..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Dual Enquiry Submit Buttons (Gmail & WhatsApp) */}
                  <div className="form-dual-submit-row">
                    <button
                      type="button"
                      onClick={handleSendGmail}
                      id="contact-submit-gmail-btn"
                      className="btn btn-primary form-submit-btn"
                      title="Enquire via Gmail"
                    >
                      <span>Enquire via Gmail</span>
                      <Send size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      id="contact-submit-whatsapp-btn"
                      className="btn btn-whatsapp form-submit-btn"
                      title="Enquire via WhatsApp"
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.05-1.92-.477-1.397-.571-2.482-1.996-2.55-2.088-.069-.092-.563-.748-.563-1.425 0-.677.354-1.009.479-1.147.126-.138.275-.172.367-.172.092 0 .183.001.263.005.085.004.198-.032.309.234.115.275.391.954.425 1.024.035.069.058.149.011.239-.046.092-.069.149-.138.23-.069.08-.145.179-.207.24-.069.069-.141.144-.061.282.08.138.358.591.768.956.528.47 0.973.616 1.111.685.138.069.218.058.299-.035.08-.092.345-.402.437-.539.092-.138.184-.115.31-.069.126.046.804.379.942.448.138.069.23.103.264.161.034.057.034.332-.11.737z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.635 0-3.15-.494-4.417-1.341l-.317-.213-2.955.827.844-2.887-.234-.339A8.026 8.026 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z" />
                      </svg>
                      <span>Enquire via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
