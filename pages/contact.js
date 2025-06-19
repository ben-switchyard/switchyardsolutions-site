import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <h2>Contact Us</h2>
      <p>
        Ready to discuss your project or have questions? Fill out the form below and we’ll get back to you soon.
      </p>
      <form style={{maxWidth: 480, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
        <input type="text" name="name" placeholder="Your Name" required style={{padding: '0.8rem', borderRadius: 6, border: '1px solid #ccc'}} />
        <input type="email" name="email" placeholder="Your Email" required style={{padding: '0.8rem', borderRadius: 6, border: '1px solid #ccc'}} />
        <textarea name="message" placeholder="How can we help you?" rows={5} required style={{padding: '0.8rem', borderRadius: 6, border: '1px solid #ccc'}} />
        <button type="submit" className="button" style={{width: 'fit-content'}}>Send Message</button>
      </form>
      <div style={{textAlign: 'center', marginTop: '2rem', color: '#888'}}>
        Or email us at <a href="mailto:info@switchyardsolutions.com" style={{color: '#4fd1c5'}}>info@switchyardsolutions.com</a>
      </div>
    </Layout>
  );
}