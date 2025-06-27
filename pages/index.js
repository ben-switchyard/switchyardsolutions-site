import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const pillars = [
	{
		title: 'Strategy',
		desc: 'Practical plans that connect business goals to data actions that guide smarter decisions.',
		icon: '/switchyardtransparent.png',
	},
	{
		title: 'Analytics',
		desc: 'Reliable, scalable systems that turn messy data into clear, actionable insights.',
		icon: '/switchyardtransparent.png',
	},
	{
		title: 'Execution',
		desc: 'Automation and workflow fixes that free your team to focus on what matters.',
		icon: '/switchyardtransparent.png',
	},
];

function PillarsRow({ pillars }) {
	const [isMobile, setIsMobile] = useState(false);
	const [openIdx, setOpenIdx] = useState(null);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 700);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	if (!isMobile) {
		// Desktop: three cards in a row, no outer box
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'stretch',
					gap: '2rem',
					width: '100%',
					maxWidth: 1100,
					margin: '2rem auto 3rem auto',
				}}
			>
				{pillars.map((pillar) => (
					<div
						key={pillar.title}
						style={{
							background: '#fff',
							borderRadius: '1.25rem',
							boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
							padding: '2rem 1.5rem',
							width: 320,
							minWidth: 0,
							maxWidth: 320,
							minHeight: 220,
							textAlign: 'center',
							flex: '1 1 0',
							cursor: 'pointer',
						}}
					>
						<img
							src={pillar.icon}
							alt={pillar.title}
							style={{ height: 48, marginBottom: 16 }}
						/>
						<h3
							style={{
								fontSize: '1.25rem',
								fontWeight: 600,
								marginBottom: 12,
							}}
						>
							{pillar.title}
						</h3>
						<p style={{ fontSize: '1rem', color: '#444' }}>
							{pillar.desc}
						</p>
					</div>
				))}
			</div>
		);
	}

	// Mobile: accordion
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				margin: '2rem 0',
			}}
		>
			{pillars.map((pillar, idx) => (
				<div
					key={pillar.title}
					style={{
						background: '#fff',
						borderRadius: '1.25rem',
						boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
						padding: '1rem 1rem',
						textAlign: 'center',
						cursor: 'pointer',
					}}
					onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
				>
					<img
						src={pillar.icon}
						alt={pillar.title}
						style={{ height: 40, marginBottom: 8 }}
					/>
					<h3
						style={{
							fontSize: '1.1rem',
							fontWeight: 600,
							marginBottom: 0,
						}}
					>
						{pillar.title}
					</h3>
					{openIdx === idx && (
						<div style={{ marginTop: 10, fontSize: '0.98rem', color: '#444' }}>
							{pillar.desc}
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default function Home() {
	return (
		<Layout>
			{/* HERO */}
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.7 }}
				style={{
					fontSize: '2.5rem',
					fontWeight: 700,
					background: 'linear-gradient(90deg, #0ec6d5 30%, #4fd1c5 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					margin: '3rem auto 1.5rem auto',
					textAlign: 'center',
				}}
			>
				Empowering Smarter Business Strategy Through Analytics
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.7 }}
				style={{
					fontSize: '1.25rem',
					maxWidth: 600,
					margin: '0 auto 2.5rem auto',
					textAlign: 'center',
				}}
			>
				Switchyard helps businesses break down barriers between data and action. 
				Cut through noise, deliver clear insights, and build tools that grow with your business. No nonsense, no wasted effort.
			</motion.p>
			<div
				className="hero-buttons"
				style={{
					marginBottom: '2.5rem',
					display: 'flex',
					justifyContent: 'center',
					gap: 16,
					flexWrap: 'wrap',
					width: '100%',
				}}
			>
				<a href="/about" className="button">
					Meet Your Partner
				</a>
				<a href="/services" className="button button-outline">
					Explore Services
				</a>
			</div>

			{/* PILLARS - NO OUTER BOX */}
			<PillarsRow pillars={pillars} />

			{/* WHY WORK WITH US */}
			<motion.section
				initial={{ opacity: 0, y: 0 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2, duration: 0.7 }}
				style={{
					maxWidth: 700,
					margin: '3rem auto',
					textAlign: 'center',
				}}
			>
				<h2
					style={{
						fontSize: '1.3rem',
						marginBottom: '1rem',
					}}
				>
					Why Work With Us
				</h2>
				<ul
					style={{
						listStyle: 'disc',
						marginLeft: '1.5rem',
						textAlign: 'left',
						display: 'inline-block',
					}}
				>
					<li>Real partnership. From problem to solution, no handoffs.</li>
					<li>Solutions built around your exact challenges, not cookie-cutter pre-builts.</li>
					<li>Focus on building your team’s skills and independence, not just numbers.</li>
					<li>Straight talk. Clear, actionable, and practical advice.</li>
				</ul>
			</motion.section>

			{/* ABOUT */}
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.3, duration: 0.7 }}
				style={{
					maxWidth: 700,
					margin: '3rem auto',
					textAlign: 'center',
				}}
			>
				<h2>About</h2>
				<img
					src="/benheadshot.jpg"
					alt="Benjamin Schatz"
					style={{
						width: 120,
						height: 120,
						borderRadius: '50%',
						objectFit: 'cover',
						margin: '0 auto 1rem auto',
						boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
						border: '2px solid #e6fffa',
						background: '#f7fafc',
					}}
				/>
				<p>
					Ben Schatz is a seasoned analytics leader with a passion for turning complex data into clear business value. 
					Blending deep analytics experience with practical consulting to get teams unstuck and results in action.
				</p>
				<blockquote style={{
					fontStyle: 'italic',
					color: '#319795',
					background: '#e6fffa',
					borderLeft: '4px solid #38b2ac',
					padding: '1rem 1.2rem',
					borderRadius: '0.75rem',
					margin: '1.5rem auto 0 auto',
					fontSize: '1.08rem',
					maxWidth: 500
				}}>
					“Keep it simple: use what you have, know what matters, get things moving, and keep iterating.”
				</blockquote>
			</motion.section>
		</Layout>
	);
}