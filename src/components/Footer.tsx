'use client';

import { Mail, ArrowUp, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleOpenLegal = (tab: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-legal-terms', { detail: { tab } }));
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="brand-monogram" style={{ width: 34, height: 34, fontSize: '1rem' }}>
            SP
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc' }}>
              Santhosh Prasanna
            </div>
            <div style={{ fontSize: '0.75rem', color: '#06b6d4', fontWeight: 500 }}>
              Sandy &bull; Freelance Business &amp; Data Analyst &bull; AI Enthusiast
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
          <div className="footer-copy">
            &copy; 2026 Santhosh Prasanna (Sandy). All rights reserved. Built with Next.js.
          </div>
          <div className="footer-legal-bar">
            <a href="#resume" className="footer-legal-link" style={{ color: '#38bdf8', fontWeight: 600 }}>
              Resume (CV)
            </a>
            <span className="footer-legal-divider">&bull;</span>
            <button
              type="button"
              onClick={() => handleOpenLegal('scope')}
              className="footer-legal-link"
            >
              Terms &amp; Conditions
            </button>
            <span className="footer-legal-divider">&bull;</span>
            <button
              type="button"
              onClick={() => handleOpenLegal('advance')}
              className="footer-legal-link"
            >
              20% Advance Policy
            </button>
            <span className="footer-legal-divider">&bull;</span>
            <button
              type="button"
              onClick={() => handleOpenLegal('confidentiality')}
              className="footer-legal-link"
            >
              Confidentiality &amp; NDA
            </button>
            <span className="footer-legal-divider">&bull;</span>
            <button
              type="button"
              onClick={() => handleOpenLegal('ip')}
              className="footer-legal-link"
            >
              IP Rights
            </button>
          </div>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/santhoshprasannaanalyst/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="GitHub Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=santhoshfreelancer25@gmail.com&su=Project%20Enquiry%20%7C%20Freelance%20Business%20%26%20Data%20Analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="Email Santhosh via Gmail"
            title="Email on Gmail"
          >
            <Mail size={18} />
          </a>
          <a
            href="/whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link social-icon-whatsapp"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.05-1.92-.477-1.397-.571-2.482-1.996-2.55-2.088-.069-.092-.563-.748-.563-1.425 0-.677.354-1.009.479-1.147.126-.138.275-.172.367-.172.092 0 .183.001.263.005.085.004.198-.032.309.234.115.275.391.954.425 1.024.035.069.058.149.011.239-.046.092-.069.149-.138.23-.069.08-.145.179-.207.24-.069.069-.141.144-.061.282.08.138.358.591.768.956.528.47 0.973.616 1.111.685.138.069.218.058.299-.035.08-.092.345-.402.437-.539.092-.138.184-.115.31-.069.126.046.804.379.942.448.138.069.23.103.264.161.034.057.034.332-.11.737z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.635 0-3.15-.494-4.417-1.341l-.317-.213-2.955.827.844-2.887-.234-.339A8.026 8.026 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z" />
            </svg>
          </a>
          <a
            href="#hero"
            className="social-icon-link"
            aria-label="Back to top"
            style={{ marginLeft: 8 }}
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
