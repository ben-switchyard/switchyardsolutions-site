import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <h1>Contact Us</h1>
      <img 
        src="https://placecats.com/300/100?contact" 
        alt="Contact Cat" 
        style={{borderRadius: 12, margin: '1rem 0 2rem 0', maxWidth: '100%'}}
      />
      <p>
        Interested in working together? Reach out via email:
        <br />
        <a href="mailto:info@switchyardsolutions.com">info@switchyardsolutions.com</a>
      </p>
    </Layout>
  );
}