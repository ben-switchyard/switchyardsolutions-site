import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="hero-home">
        <div className="hero-left">
          <h1>Empowering Smarter Business Strategy Through Analytics</h1>
          <p>
            Data is only as powerful as the decisions it informs. We help businesses unravel complexity, clarify strategy, and build analytics-driven pathways to success.
          </p>
          <ul className="hero-list">
            <li>Simplify complex projects and processes</li>
            <li>Align business goals with data-driven insights</li>
            <li>Build a trusted, unified source of truth</li>
            <li>Deliver reports that guide decisive action</li>
            <li>Automate workflows and reporting for efficiency</li>
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
          <h3>Business Strategy & Guidance</h3>
          <p>
            We work with you to simplify complexity, define clear goals, and set a focused path forward.
          </p>
          <ul>
            <li>Project Design</li>
            <li>Team Alignment</li>
            <li>Actionable Roadmaps</li>
          </ul>
          <a href="/services#business-strategy" className="card-link">Explore Strategy &raquo;</a>
        </div>
        <div className="impact-card">
          <img src="/Switchyardtransparent.png" alt="Technology" className="impact-icon" />
          <h3>Analytics</h3>
          <p>
            Turn data into clarity with reliable systems and meaningful measurement.
          </p>
          <ul>
            <li>Scalable Data Platforms</li>
            <li>Insight Generation</li>
            <li>Measurement Frameworks</li>
          </ul>
          <a href="/services#analytics" className="card-link">Explore Analytics &raquo;</a>
        </div>
        <div className="impact-card">
          <img src="/Switchyardtransparent.png" alt="Case Studies" className="impact-icon" />
          <h3>Execution</h3>
          <p>
            Transform plans into results with automation and process optimization.
          </p>
          <ul>
            <li>Workflow Automation</li>
            <li>Operations and Optimization</li>
            <li>Process Recovery</li>
          </ul>
          <a href="/services#execution" className="card-link">Explore Automation &raquo;</a>
        </div>
      </div>
    </Layout>
  );
}