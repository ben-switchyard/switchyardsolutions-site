import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="hero-home">
        <div className="hero-left">
          <h1>Improve Your Information Environment</h1>
          <p>
            We enable your team to:
          </p>
          <ul className="hero-list">
            <li>Streamline operations</li>
            <li>Establish one source of truth</li>
            <li>Provide actionable reporting</li>
            <li>Automate workflows</li>
            <li>Create interactive dashboards</li>
          </ul>
          <div className="hero-buttons">
            <a href="/services" className="button">About Us</a>
            <a href="/contact" className="button button-outline">Contact Us</a>
          </div>
        </div>
        <div className="hero-right">
          <img src="/Switchyardtransparent.png" alt="Information Environment" />
        </div>
      </section>

      <div className="overview-label">Overview</div>
      <h2 className="impact-title">How We Make An Impact</h2>
      <div className="impact-cards">
        <div className="impact-card">
          <img src="/Switchyardtransparent.png" alt="Services" className="impact-icon" />
          <h3>Services</h3>
          <p>
            We combine technical expertise and business insight to deliver end-to-end solutions.
          </p>
          <ul>
            <li>Digital Transformation</li>
            <li>Advisory Services</li>
            <li>Reporting Services</li>
          </ul>
          <a href="/services" className="card-link">Explore Services &raquo;</a>
        </div>
        <div className="impact-card">
          <img src="/Switchyardtransparent.png" alt="Technology" className="impact-icon" />
          <h3>Technology</h3>
          <p>
            We offer solutions across multiple platforms and technologies.
          </p>
          <ul>
            <li>On-Premises</li>
            <li>Cloud</li>
            <li>Hybrid</li>
          </ul>
          <a href="/services" className="card-link">Explore Technology &raquo;</a>
        </div>
        <div className="impact-card">
          <img src="/Switchyardtransparent.png" alt="Case Studies" className="impact-icon" />
          <h3>Case Studies</h3>
          <p>
            See how we’ve helped organizations transform their operations and reporting.
          </p>
          <ul>
            <li>Cash Flow Management</li>
            <li>Margin Management</li>
            <li>Automated Workflows</li>
          </ul>
          <a href="/contact" className="card-link">Contact Us &raquo;</a>
        </div>
      </div>
    </Layout>
  );
}