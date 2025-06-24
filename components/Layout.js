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
          <a href="/about" onClick={() => setNavOpen(false)}>About Us</a>
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
    </>
  );
}