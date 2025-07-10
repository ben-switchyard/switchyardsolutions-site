import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const tools = [
	{
		name: 'Google Cloud Platform',
		logo: '/logos/googlecloud.svg',
		url: 'https://cloud.google.com/',
	},
	{
		name: 'BigQuery',
		logo: '/logos/googlebigquery.svg',
		url: 'https://cloud.google.com/bigquery',
	},
    {
		name: 'Databricks',
		logo: '/logos/databricks.svg',
		url: 'https://databricks.com/',
	},
	{
		name: 'dbt',
		logo: '/logos/dbt.svg',
		url: 'https://www.getdbt.com/',
	},
	{
		name: 'Looker',
		logo: '/logos/looker.svg',
		url: 'https://looker.com/',
	},
	{
		name: 'Power BI',
		logo: '/logos/powerbi.svg',
		url: 'https://powerbi.microsoft.com/',
	},
	{
		name: 'Tableau',
		logo: '/logos/tableau.svg',
		url: 'https://www.tableau.com/',
	},
];

export default function Tools() {
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
					We build with the best tool for the job. <br></br>Factoring in cost, simplicity and accessibility we built a tooling system just for you.
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
					{tools.map((tool) => (
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
								padding: '2rem 1rem .7rem 1rem',
								textDecoration: 'none',
								color: '#222',
								opacity: 0.95,
                                minHeight: 100,
								transition: 'opacity 0.2s, box-shadow 0.2s',
							}}
							onMouseOver={e => {
								e.currentTarget.style.opacity = 1;
								e.currentTarget.style.boxShadow = '0 4px 24px rgba(44,62,80,0.13)';
							}}
							onMouseOut={e => {
								e.currentTarget.style.opacity = 0.95;
								e.currentTarget.style.boxShadow = '0 2px 12px rgba(44,62,80,0.07)';
							}}
						>
							<img
								src={tool.logo}
								alt={tool.name + ' logo'}
								style={{
									height: 60,
									width: 180,
									marginBottom: 0,
									objectFit: 'contain',
									borderRadius: 10,
									padding: 0,
									boxShadow: '0 1px 4px rgba(44,62,80,0.04)',
								}}
							/>
							<span style={{ fontWeight: 300, fontSize: '0.85rem', marginTop: 2, textAlign: 'center' }}>
								{tool.name}
							</span>
						</a>
					))}
				</div>
				<p style={{ color: '#319795', fontSize: '1.08rem', marginTop: 24 }}>
					We have more in our toolbox but selecting the right tool is a complex decision. 
				</p>
				<p style={{ color: '#319795', fontSize: '1.08rem', marginTop: 12 }}>
					Reach out and we can discuss your ecosystem and their pros/conssni. 
				</p>
			</motion.section>
		</Layout>
	);
}