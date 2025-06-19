import { useState } from 'react';
import Layout from '../components/Layout';

const services = [
  {
    key: 'consulting',
    label: 'Technical Consulting',
    content: (
      <>
        <h2>Technical Consulting</h2>
        <p>
          We provide expert guidance on software architecture, cloud migration, and digital transformation to help your business thrive.
        </p>
      </>
    ),
  },
  {
    key: 'development',
    label: 'Custom Software Development',
    content: (
      <>
        <h2>Custom Software Development</h2>
        <p>
          From web apps to automation, we build scalable, maintainable solutions tailored to your needs.
        </p>
      </>
    ),
  },
  {
    key: 'cloud',
    label: 'Cloud & DevOps',
    content: (
      <>
        <h2>Cloud & DevOps</h2>
        <p>
          Optimize your infrastructure for reliability, security, and cost-effectiveness with our cloud and DevOps expertise.
        </p>
      </>
    ),
  },
];

export default function Services() {
  const [active, setActive] = useState('consulting');

  return (
    <Layout>
      <div className="service-tabs-bar">
        {services.map((s) => (
          <button
            key={s.key}
            className={`service-tab-btn${active === s.key ? ' active' : ''}`}
            onMouseEnter={() => setActive(s.key)}
            onFocus={() => setActive(s.key)}
            tabIndex={0}
            type="button"
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="service-tab-content">
        {services.find((s) => s.key === active)?.content}
      </div>
    </Layout>
  );
}