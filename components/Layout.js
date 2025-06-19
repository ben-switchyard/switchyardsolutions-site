import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <div style={{flex: 1}}>
          <Link href="/">
            <img src="/logo.svg" alt="Switchyard Solutions Logo" style={{height: 36, verticalAlign: 'middle'}} />
          </Link>
        </div>
        <Link href="/">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <section className="hero">
        <h1>Switchyard Solutions</h1>
        <p>
          Expert technical consulting to transform and scale your digital presence.
        </p>
        <Link href="/contact" className="button">Get in Touch</Link>
      </section>
      <main>{children}</main>
      <footer>
        &copy; {new Date().getFullYear()} Switchyard Solutions. All rights reserved.
      </footer>
    </>
  );
}