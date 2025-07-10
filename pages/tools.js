import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const tools = [
	{
		name: 'Google Cloud Platform',
		logo: '/logos/googlecloud.svg',
		url: 'https://cloud.google.com/',
		desc: 'Cloud infrastructure for scalable analytics and apps.',
	},
	{
		name: 'BigQuery',
		logo: '/logos/googlebigquery.svg',
		url: 'https://cloud.google.com/bigquery',
		desc: 'Cost-effective cloud data warehouse.',
	},
    {
		name: 'Databricks',
		logo: '/logos/databricks.svg',
		url: 'https://databricks.com/',
		desc: 'Unified analytics platform analytics and AI workloads.',
	},
	{
		name: 'dbt',
		logo: '/logos/dbt.svg',
		url: 'https://www.getdbt.com/',
		desc: 'Data warehousing and analytics engineering tool.',
	},
	{
		name: 'Looker',
		logo: '/logos/looker.svg',
		url: 'https://looker.com/',
		desc: 'Sleek BI and Visualization platform for data exploration.',
	},
	{
		name: 'Power BI',
		logo: '/logos/powerbi.svg',
		url: 'https://powerbi.microsoft.com/',
		desc: 'Powerhouse of business analytics and visualization.',
	},
	{
		name: 'Tableau',
		logo: '/logos/tableau.svg',
		url: 'https://www.tableau.com/',
		desc: 'Polished and powerful data visualization tool.',
	},
	{
		name: 'Zapier',
		logo: '/logos/zapier.svg',
		url: 'https://www.zapier.com/',
		desc: 'Multi-service automation platform.',
	},
];

export default function Tools() {
	const [hovered, setHovered] = useState(null);

	return (
		<Layout>
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				style={{
					maxWidth: 900,
					margin: '3rem auto',
					padding: '2.5rem 1.5rem',
					background: '#fff',
					borderRadius: '1.25rem',
					boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
					textAlign: 'center',
				}}
			>
				<h1 style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: 12 }}>
					Tools & Technology
				</h1>
				<p style={{ fontSize: '1.18rem', color: '#2d3748', marginBottom: 32 }}>
					We build with the best tool for the job. <br></br>Factoring in cost, features and accessibility we build a tooling system just for you.
				</p>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
						gap: '2rem',
						margin: '0 auto 2.5rem auto',
						maxWidth: 900,
					}}
				>
					{tools.map((tool, idx) => (
						<a
							key={tool.name}
							href={tool.url}
							target="_blank"
							rel="noopener noreferrer"
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								background: '#f7fafc',
								borderRadius: 16,
								boxShadow: '0 2px 12px rgba(44,62,80,0.07)',
								padding: '1.1rem 0.5rem 0.7rem 0.5rem',
								textDecoration: 'none',
								color: '#222',
								opacity: 0.95,
                                minHeight: 140,
								transition: 'opacity 0.2s, box-shadow 0.2s',
								position: 'relative',
							}}
							onMouseEnter={() => setHovered(idx)}
							onMouseLeave={() => setHovered(null)}
						>
							<div style={{ minHeight: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								{hovered !== idx ? (
									<img
										src={tool.logo}
										alt={tool.name + ' logo'}
										style={{
											height: 60,
											width: 120,
											objectFit: 'contain',
											borderRadius: 10,
											padding: 0,
											boxShadow: '0 1px 4px rgba(44,62,80,0.04)',
											transition: 'opacity 0.2s',
										}}
									/>
								) : (
									<span
										style={{
											fontSize: '0.93rem',
											color: '#319795',
											margin: '0.5rem 0 0 0',
											minHeight: 60,
											display: 'block',
											textAlign: 'center',
											fontWeight: 400,
											lineHeight: 1.3,
										}}
									>
										{tool.desc}
									</span>
								)}
							</div>
							<span style={{ fontWeight: 500, fontSize: '0.85rem', marginTop: 8, textAlign: 'center' }}>
								{tool.name}
							</span>
						</a>
					))}
				</div>
				<p style={{ color: '#319795', fontSize: '1.08rem', marginTop: 24 }}>
					We have more in our toolbox but selecting the right tool is a complex decision. 
				</p>
				<p style={{ color: '#319795', fontSize: '1.08rem', marginTop: 12 }}>
					Not sure which tools fit your needs? Reach out and we’ll help you design the right ecosystem for your business.
				</p>
				<a
					href="mailto:ben@switchyardsolutions.com"
					style={{
						display: 'inline-block',
						marginTop: 24,
						padding: '0.75rem 2rem',
						background: '#4fd1c5',
						color: '#fff',
						borderRadius: 8,
						fontWeight: 600,
						fontSize: '1.08rem',
						textDecoration: 'none',
						boxShadow: '0 2px 8px rgba(44,62,80,0.07)',
						transition: 'background 0.2s, color 0.2s',
					}}
				>
					Contact Us
				</a>
			</motion.section>
		</Layout>
	);
}