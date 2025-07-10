import { useState } from 'react';

export default function Layout({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/switchyardtransparent.png"
            alt="Switchyard Solutions"
            style={{ height: 36, marginRight: 12 }}
          />
          <span style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.25rem',
            letterSpacing: 0.5,
          }}>
            Switchyard Solutions
          </span>
        </a>
        <nav className={`nav-links${navOpen ? ' open' : ''}`}>
          <a href="/" onClick={() => setNavOpen(false)}>Home</a>
          <a href="/services" onClick={() => setNavOpen(false)}>Services</a>
          <a href="/tools" onClick={() => setNavOpen(false)}>Tools</a>
          <a href="/about" onClick={() => setNavOpen(false)}>About Us</a>
          <a
            href="mailto:ben@switchyardsolutions.com"
            aria-label="Contact Us"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              color: '#6bbeb7',
              fontWeight: 500,
              fontSize: '1rem',
              textDecoration: 'none',
              opacity: 0.8,
            }}
            onClick={() => setNavOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6bbeb7"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: 2 }}
            >
              <rect x="2" y="4" width="20" height="16" rx="4" />
              <path d="M2 6l10 7 10-7" />
            </svg>
            Contact
          </a>
        </nav>
        <button
          className="hamburger"
          aria-label="Open navigation"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      <main>{children}</main>
      <footer style={{
        textAlign: 'center',
        marginTop: '3rem',
        marginBottom: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <img
          src="/switchyardtransparent.png"
          alt="Switchyard Solutions Logo"
          style={{
            width: 60,
            height: 60,
            marginBottom: 12,
            opacity: 0.85
          }}
        />
        <div style={{ color: '#888', fontSize: '1rem' }}>
          &copy; {new Date().getFullYear()} Switchyard Solutions. All rights reserved.
        </div>
      </footer>
    </>
  );
}