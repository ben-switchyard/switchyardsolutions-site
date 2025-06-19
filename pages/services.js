import Layout from '../components/Layout';

export default function Services() {
  return (
    <Layout>
      <h1>Our Services</h1>
      <img src="/analytics-graph.svg" alt="Analytics Bar Chart" style={{maxWidth: '320px', display: 'block', margin: '1.5rem auto'}} />
      <ul>
        <li>Technical Consulting & Strategy</li>
        <li>Cloud Architecture & Migration</li>
        <li>Custom Software Development</li>
        <li>DevOps & Process Automation</li>
        <li>Training & Mentoring</li>
      </ul>
      <img 
        src="https://placecats.com/350/140" 
        alt="Analytical Cat" 
        style={{borderRadius: 12, marginTop: 32, maxWidth: '100%'}}
      />
    </Layout>
  );
}