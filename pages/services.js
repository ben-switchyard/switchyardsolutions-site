import Layout from '../components/Layout';

export default function Services() {
  return (
    <Layout>
      <h2>Our Services</h2>
      <section style={{marginBottom: '2.5rem'}}>
        <h3>Technical Consulting</h3>
        <p>
          We provide expert guidance on software architecture, cloud migration, and digital transformation to help your business thrive.
        </p>
      </section>
      <section style={{marginBottom: '2.5rem'}}>
        <h3>Custom Software Development</h3>
        <p>
          From web apps to automation, we build scalable, maintainable solutions tailored to your needs.
        </p>
      </section>
      <section>
        <h3>Cloud & DevOps</h3>
        <p>
          Optimize your infrastructure for reliability, security, and cost-effectiveness with our cloud and DevOps expertise.
        </p>
      </section>
      <a href="/contact" className="button" style={{marginTop: '2rem', display: 'inline-block'}}>Request a Consultation</a>
    </Layout>
  );
}