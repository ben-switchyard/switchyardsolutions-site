import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <h2>About Switchyard Solutions</h2>
      <p>
        We help organizations harness technology for growth with expertise in software engineering, cloud architecture, and digital strategy.
      </p>
      <img src="/business-network.svg" alt="Business Network Graphic" style={{maxWidth: '320px', display: 'block', margin: '2rem auto'}} />
      <h3>Why Choose Us?</h3>
      <ul>
        <li>Proven track record in digital transformation</li>
        <li>Tailored solutions for your business</li>
        <li>Transparent, collaborative approach</li>
      </ul>
    </Layout>
  );
}