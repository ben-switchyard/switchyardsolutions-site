import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/switchyardtransparent.png"
              alt="Switchyard Solutions Logo"
              style={{ height: 36, marginRight: 20 }}
            />
            <span className="site-title" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>
              Switchyard Solutions
            </span>
          </Link>
        </div>
        <Link href="/">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
      <footer>
        &copy; {new Date().getFullYear()} Switchyard Solutions. All rights reserved.
      </footer>
    </>
  );
}