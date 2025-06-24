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
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>
              About Switchyard Solutions
            </h1>
            <div style={{ fontSize: '1.08rem', color: '#4fd1c5', marginTop: 4 }}>
              Benjamin Schatz, Founder
            </div>
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
          “The greatest value often comes from leveraging the assets you already have.”
        </blockquote>
        <p style={{ fontSize: '1.13rem', marginBottom: 18 }}>
          At Switchyard Solutions, data is more than just numbers. It’s the key to unlocking smarter decisions and sustainable growth. Founded by Benjamin Schatz, a seasoned analytics leader with over a decade of experience guiding organizations through complexity, Switchyard is built around one simple idea: making data work for you.
        </p>
        <p style={{ fontSize: '1.13rem', marginBottom: 18 }}>
          Ben’s background spans leading analytics teams at startups and tech giants alike, driving strategic transformation through clear frameworks, scalable systems, and actionable insights. What sets Switchyard apart is its blend of technical expertise and business pragmatism—not just building dashboards, but helping you cut through the noise, align teams, and solve problems that matter.
        </p>
        <p style={{ fontSize: '1.13rem', marginBottom: 18 }}>
          Switchyard works closely with small and medium businesses who feel stuck in their data or overwhelmed by the growing complexity of analytics. Whether it’s untangling operational workflows, designing reliable data pipelines, or shaping the roadmap for growth, the goal is the same: turn analytics into a competitive advantage that is practical, scalable, and easy to adopt.
        </p>
        <p style={{ fontSize: '1.13rem', marginBottom: 0 }}>
          Here, you won’t get a one-size-fits-all solution. Instead, you get a trusted partner who understands the challenges of modern business and helps you move forward with confidence.
        </p>
      </motion.section>
    </Layout>
  );
}