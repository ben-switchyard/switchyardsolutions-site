import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}