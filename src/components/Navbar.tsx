'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  Layers,
  Briefcase,
  Award,
  Fingerprint,
  GitBranch,
  Coins,
  HelpCircle,
  FileText,
} from 'lucide-react';

const GMAIL_ENQUIRY_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=santhoshfreelancer25@gmail.com&su=${encodeURIComponent(
  'Project Enquiry | Freelance Business & Data Analytics'
)}&body=${encodeURIComponent(
  `Hi Santhosh,\n\nI would like to make an enquiry regarding a potential project.\n\n` +
  `Here are my project details:\n` +
  `• Full Name: \n` +
  `• Company / Organization: \n` +
  `• Primary Need: [BI Dashboards / AI Automation / Data Architecture / Forecasting / Business Analysis]\n` +
  `• Project Summary & Goals: \n` +
  `• Estimated Timeline / Budget: \n\n` +
  `Looking forward to hearing from you!\n`
)}`;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const getHref = (hash: string) => (pathname === '/' ? hash : `/${hash}`);

  const openWhatsApp = () => {
    window.open('/whatsapp', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMoreDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setMoreDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* Brand identity - Left */}
        <Link href={getHref('#hero')} className="nav-brand" id="nav-brand-link">
          <div className="brand-monogram">SP</div>
          <div className="brand-title-wrap">
            <span className="brand-title">Santhosh Prasanna</span>
            <div className="brand-subtitle">
              <span className="brand-tag">Sandy</span>
              <span className="brand-sep">•</span>
              <span>Business &amp; Data Analyst</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Center */}
        <ul className="nav-links">
          <li>
            <a href={getHref('#expertise')} className="nav-link" id="nav-expertise">
              Capabilities
            </a>
          </li>
          <li>
            <a href={getHref('#ai-services')} className="nav-link" id="nav-ai-services">
              AI Services
            </a>
          </li>
          <li>
            <a href={getHref('#case-studies')} className="nav-link" id="nav-case-studies">
              Projects
            </a>
          </li>
          <li>
            <a href={getHref('#experience')} className="nav-link" id="nav-experience">
              Experience
            </a>
          </li>
          <li>
            <a href={getHref('#about')} className="nav-link" id="nav-about">
              About
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="nav-link"
              id="nav-resume"
            >
              Resume
            </a>
          </li>

          {/* More Sections Dropdown */}
          <li className="nav-dropdown-item" ref={dropdownRef}>
            <button
              className={`nav-link nav-dropdown-trigger ${
                moreDropdownOpen ? 'active' : ''
              }`}
              id="nav-more-dropdown-btn"
              aria-expanded={moreDropdownOpen}
              aria-haspopup="true"
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
            >
              <span>More</span>
              <ChevronDown
                size={14}
                className={`dropdown-chevron ${moreDropdownOpen ? 'open' : ''}`}
              />
            </button>

            {moreDropdownOpen && (
              <div className="nav-dropdown-menu" id="nav-more-dropdown-menu">
                <a
                  href="#resume"
                  className="dropdown-link"
                  onClick={closeMenus}
                >
                  <div className="dropdown-icon-box" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#38bdf8' }}>
                    <FileText size={16} />
                  </div>
                  <div className="dropdown-text">
                    <span className="dropdown-title">Resume &amp; CV</span>
                    <span className="dropdown-desc">
                      Verified 2+ yrs experience &amp; skills
                    </span>
                  </div>
                </a>

                <a
                  href={getHref('#tech-stack')}
                  className="dropdown-link"
                  onClick={closeMenus}
                >
                  <div className="dropdown-icon-box">
                    <Layers size={16} />
                  </div>
                  <div className="dropdown-text">
                    <span className="dropdown-title">Skills &amp; Tools</span>
                    <span className="dropdown-desc">
                      Python, Power BI, SQL &amp; Cloud
                    </span>
                  </div>
                </a>

                <a
                  href={getHref('#real-world-work')}
                  className="dropdown-link"
                  onClick={closeMenus}
                >
                  <div className="dropdown-icon-box">
                    <Briefcase size={16} />
                  </div>
                  <div className="dropdown-text">
                    <span className="dropdown-title">Real-World Work</span>
                    <span className="dropdown-desc">
                      Hands-on analytics deliveries
                    </span>
                  </div>
                </a>

                <a
                  href={getHref('#client-appreciation')}
                  className="dropdown-link"
                  onClick={closeMenus}
                >
                  <div className="dropdown-icon-box">
                    <Award size={16} />
                  </div>
                  <div className="dropdown-text">
                    <span className="dropdown-title">Client Appreciation</span>
                    <span className="dropdown-desc">
                      Client feedback &amp; milestones
                    </span>
                  </div>
                </a>

                <a href={getHref('#brand')} className="dropdown-link" onClick={closeMenus}>
                  <div className="dropdown-icon-box">
                    <Fingerprint size={16} />
                  </div>
                  <div className="dropdown-text">
                    <span className="dropdown-title">Sandy Brand</span>
                    <span className="dropdown-desc">
                      Identity, vision &amp; ethos
                    </span>
                  </div>
                </a>

                <a
                  href={getHref('#process')}
                  className="dropdown-link"
                  onClick={closeMenus}
                >
                  <div className="dropdown-icon-box">
                    <GitBranch size={16} />
                  </div>
                  <div className="dropdown-text">
                    <span className="dropdown-title">Process &amp; Models</span>
                    <span className="dropdown-desc">
                      6-step project delivery roadmap
                    </span>
                  </div>
                </a>

                <a
                  href={getHref('#pricing')}
                  className="dropdown-link"
                  onClick={closeMenus}
                >
                  <div className="dropdown-icon-box">
                    <Coins size={16} />
                  </div>
                  <div className="dropdown-text">
                    <span className="dropdown-title">Pricing &amp; Terms</span>
                    <span className="dropdown-desc">
                      Starting rates, 20% advance &amp; UPI
                    </span>
                  </div>
                </a>
              </div>
            )}
          </li>

          <li>
            <a href={getHref('#faq')} className="nav-link" id="nav-faq">
              FAQ
            </a>
          </li>
        </ul>

        {/* Right CTA Actions (WhatsApp & Gmail Enquiry) */}
        <div className="nav-actions-group">
          <button
            type="button"
            onClick={openWhatsApp}
            className="nav-whatsapp-btn"
            id="nav-whatsapp-link"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.05-1.92-.477-1.397-.571-2.482-1.996-2.55-2.088-.069-.092-.563-.748-.563-1.425 0-.677.354-1.009.479-1.147.126-.138.275-.172.367-.172.092 0 .183.001.263.005.085.004.198-.032.309.234.115.275.391.954.425 1.024.035.069.058.149.011.239-.046.092-.069.149-.138.23-.069.08-.145.179-.207.24-.069.069-.141.144-.061.282.08.138.358.591.768.956.528.47 0.973.616 1.111.685.138.069.218.058.299-.035.08-.092.345-.402.437-.539.092-.138.184-.115.31-.069.126.046.804.379.942.448.138.069.23.103.264.161.034.057.034.332-.11.737z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.635 0-3.15-.494-4.417-1.341l-.317-.213-2.955.827.844-2.887-.234-.339A8.026 8.026 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z" />
            </svg>
          </button>

          <a
            href={GMAIL_ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-cta-btn"
            id="nav-cta-button"
          >
            <span>Enquiry</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="nav-mobile-toggle"
          id="mobile-menu-btn"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" id="mobile-nav-drawer">
          <div className="mobile-nav-group">
            <span className="mobile-group-label">Core Navigation</span>
            <a
              href="#resume"
              className="mobile-nav-link"
              onClick={closeMenus}
              style={{
                color: '#38bdf8',
                fontWeight: 700,
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                borderRadius: '8px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>📄 Resume &amp; Background</span>
              <span style={{ fontSize: '0.75rem', color: '#4ade80' }}>2+ Yrs Exp</span>
            </a>
            <a href={getHref('#expertise')} className="mobile-nav-link" onClick={closeMenus}>
              Capabilities
            </a>
            <a href={getHref('#ai-services')} className="mobile-nav-link" onClick={closeMenus}>
              AI &amp; Automation Services
            </a>
            <a href={getHref('#case-studies')} className="mobile-nav-link" onClick={closeMenus}>
              Selected Projects
            </a>
            <a href={getHref('#experience')} className="mobile-nav-link" onClick={closeMenus}>
              Work Experience
            </a>
            <a href={getHref('#about')} className="mobile-nav-link" onClick={closeMenus}>
              About Santhosh
            </a>
            <a href={getHref('#faq')} className="mobile-nav-link" onClick={closeMenus}>
              FAQ
            </a>
          </div>

          <div className="mobile-nav-group">
            <span className="mobile-group-label">Explore More</span>
            <a href={getHref('#tech-stack')} className="mobile-nav-link" onClick={closeMenus}>
              Skills &amp; AI Tools
            </a>
            <a href={getHref('#real-world-work')} className="mobile-nav-link" onClick={closeMenus}>
              Real-World Work
            </a>
            <a href={getHref('#client-appreciation')} className="mobile-nav-link" onClick={closeMenus}>
              Client Appreciation
            </a>
            <a href={getHref('#brand')} className="mobile-nav-link" onClick={closeMenus}>
              The Sandy Brand Identity
            </a>
            <a href={getHref('#process')} className="mobile-nav-link" onClick={closeMenus}>
              Process Roadmap
            </a>
            <a href={getHref('#pricing')} className="mobile-nav-link" onClick={closeMenus}>
              Pricing &amp; Engagement Terms
            </a>
          </div>

          <div className="mobile-cta-group">
            <a
              href={GMAIL_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={closeMenus}
            >
              <span>Enquire via Gmail</span>
              <Sparkles size={16} />
            </a>

            <button
              type="button"
              className="btn btn-whatsapp"
              onClick={() => {
                closeMenus();
                openWhatsApp();
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.05-1.92-.477-1.397-.571-2.482-1.996-2.55-2.088-.069-.092-.563-.748-.563-1.425 0-.677.354-1.009.479-1.147.126-.138.275-.172.367-.172.092 0 .183.001.263.005.085.004.198-.032.309.234.115.275.391.954.425 1.024.035.069.058.149.011.239-.046.092-.069.149-.138.23-.069.08-.145.179-.207.24-.069.069-.141.144-.061.282.08.138.358.591.768.956.528.47 0.973.616 1.111.685.138.069.218.058.299-.035.08-.092.345-.402.437-.539.092-.138.184-.115.31-.069.126.046.804.379.942.448.138.069.23.103.264.161.034.057.034.332-.11.737z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.635 0-3.15-.494-4.417-1.341l-.317-.213-2.955.827.844-2.887-.234-.339A8.026 8.026 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
