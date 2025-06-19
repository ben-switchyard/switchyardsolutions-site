import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <h1>About Switchyard Solutions</h1>
      <img src="/business-network.svg" alt="Business Network Graphic" style={{maxWidth: '320px', display: 'block', margin: '1.5rem auto'}} />
      <p>
        Switchyard Solutions provides expert technical consulting for businesses seeking to transform and scale their digital presence.
      </p>
      <p>
        With years of experience in software engineering, cloud architecture, and digital strategy, we help organizations harness technology for growth.
      </p>
      <img 
        src="https://placecats.com/400/160" 
        alt="Playful Cat Graphic" 
        style={{borderRadius: 12, marginTop: 32, maxWidth: '100%'}}
      />
    </Layout>
  );
}