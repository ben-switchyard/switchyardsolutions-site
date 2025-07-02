import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 700,
          margin: '3rem auto',
          padding: '2rem 1rem',
          background: '#fff',
          borderRadius: '1.25rem',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 24, marginBottom: 24 }}>
          <a
            href="mailto:ben@switchyardsolutions.com"
            aria-label="Email Ben Schatz"
            style={{ display: 'inline-block' }}
          >
            <img
              src="/benheadshot.jpg"
              alt="Benjamin Schatz"
              style={{
                width: 90,
                height: 90,
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                border: '3px solid #e6fffa',
                background: '#f7fafc'
              }}
            />
          </a>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>
              About Switchyard Solutions
            </h1>
            <div style={{ fontSize: '1.08rem', color: '#4fd1c5', marginTop: 4 }}>
              Benjamin Schatz, Founder
            </div>
            <a
              href="https://www.linkedin.com/in/benjaminschatz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                display: 'inline-block',
                width: 32,
                height: 32,
                marginTop: 4,
                marginRight: 8,
                verticalAlign: 'middle'
              }}
            >
              <svg
                fill="#0A66C2"
                style={{ width: '100%', height: '100%' }}
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452H17.21v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.07V9h3.112v1.561h.045c.434-.822 1.494-1.69 3.074-1.69 3.287 0 3.89 2.164 3.89 4.974v6.607zM5.337 7.433a1.804 1.804 0 1 1 0-3.608 1.804 1.804 0 0 1 0 3.608zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.54C0 23.224.792 24 1.771 24h20.451C23.2 24 24 23.224 24 22.27V1.73C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a
              href="mailto:ben@switchyardsolutions.com"
              style={{
                fontSize: '1rem',
                color: '#319795',
                textDecoration: 'underline',
                }}
            >
              ben@switchyardsolutions.com
            </a>
          </div>
        </div>
        <blockquote style={{
          fontStyle: 'italic',
          color: '#319795',
          background: '#e6fffa',
          borderLeft: '4px solid #38b2ac',
          padding: '1rem 1.2rem',
          borderRadius: '0.75rem',
          marginBottom: 28,
          fontSize: '1.13rem'
        }}>
          “Pretty pictures and fancy numbers can only get you so far. 
          Real change requires understanding of the why, when, and how.”
        </blockquote>
        <p style={{ fontSize: '1.13rem', marginBottom: 18 }}>
          Switchyard Solutions is built on one simple concept I stand behind: data is useless without people. 
          It's a powerful tool, but without the know-how and right application, it's just an expensive setpiece. 
        </p>
        <p style={{ fontSize: '1.13rem', marginBottom: 18 }}>
          I've spent years leading analytical teams, from startups to some of the biggest names in tech. 
          In each those roles, I saw how easy it was to get lost in the weeds and focused on the wrong things. 
          Brilliant minds and beautiful strategies burning countless hours on advanced tools no one used and insights that led to nothing. 
          Levers, buttons, and dials that were impressive in their design, but untimately not connected to actions.
        </p>
        <p style={{ fontSize: '1.13rem', marginBottom: 18 }}>
          I started Switchyard to fix that. My focus is on you and your specific needs, and driving action with each step.
          Let's build your toolbox and master it to turn your experience and insights into decisive action.
        </p>
        <p style={{ fontSize: '1.13rem', marginBottom: 18 }}>
          We start with deep dives into what makes your business tick, where we can make the biggest impact, and where the real opportunities lie.
          For those key drivers, we design practical, understandable systems that form a clear foundation for growth.
          My goal isn't just to deliver a solution, but to build up your team with a solid foundation and the knowledge to keep building on their own.
        </p>
        <p style={{ fontSize: '1.13rem', marginBottom: 18 }}>
          A well run workshop with a knowledgeable team will always outperform one with the shiniest, most expensive tools.
        </p>
        <p style={{ fontSize: '1.13rem', marginBottom: 18 }}>
          Let's build something great together,
        </p>
        <p style={{ fontSize: '1.13rem', marginBottom: 18 }}>
          Ben Schatz
        </p>

      </motion.section>
    </Layout>
    
  );
}