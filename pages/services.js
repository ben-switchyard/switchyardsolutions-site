import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import services from '../data/services';
import caseStudies from '../data/caseStudies';

function ResponsiveAccordion({ services }) {
	const [openIdx, setOpenIdx] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 700);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	if (isMobile) {
		const visibleServices = showAll ? services : services.slice(0, 4);

		return (
			<div className="responsive-accordion">
				{visibleServices.map((service, idx) => (
					<div key={service.title} className="accordion-row">
						<div
							className={`accordion-header${
								openIdx === idx ? ' open' : ''
							}`}
							onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
						>
							<img
								src={service.icon}
								alt={service.title}
								style={{ height: 32, marginRight: 12 }}
							/>
							{service.title}
						</div>
						<AnimatePresence initial={false}>
							{openIdx === idx && (
								<motion.div
									key="desc"
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="accordion-desc"
								>
									{service.desc}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
				{services.length > 4 && (
					<button
						className="show-more-btn"
						onClick={() => setShowAll((v) => !v)}
						style={{
							margin: '1rem auto',
							display: 'block',
							background: '#e6fffa',
							border: 'none',
							borderRadius: '1rem',
							padding: '0.6rem 1.2rem',
							fontWeight: 600,
							cursor: 'pointer',
							boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
						}}
					>
						{showAll ? 'Show less' : 'Show more'}
					</button>
				)}
			</div>
		);
	}

	// DESKTOP: two columns, scrollable list
	return (
		<div className="services-two-col">
			<div className="services-list">
				{services.map((service, idx) => (
					<div
						key={service.title}
						className={`accordion-header${
							openIdx === idx ? ' open' : ''
						}`}
						onClick={() => setOpenIdx(idx)}
					>
						<img
							src={service.icon}
							alt={service.title}
							style={{ height: 32, marginRight: 12 }}
						/>
						{service.title}
					</div>
				))}
			</div>
			<motion.div
				key={openIdx}
				className="services-desc"
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
			>
				{services[openIdx] && (
					<div>
						<div
							style={{
								fontWeight: 600,
								fontSize: '1.15rem',
								marginBottom: 8,
							}}
						>
							{services[openIdx].title}
						</div>
						<div style={{ fontSize: '1rem', color: '#222' }}>
							{services[openIdx].desc}
						</div>
					</div>
				)}
			</motion.div>
		</div>
	);
}

function CaseStudiesTabs({ studies }) {
	const [selected, setSelected] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [openIdx, setOpenIdx] = useState(null);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 700);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	if (isMobile) {
		// Mobile: accordion style
		return (
			<div className="case-studies-accordion">
				{studies.map((cs, idx) => (
					<div key={cs.title} className="case-row">
						<div
							className={`case-header${openIdx === idx ? ' open' : ''}`}
							onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
						>
							<img
								src={cs.icon}
								alt={cs.title}
								style={{ height: 20, marginRight: 8 }}
							/>
							<span>{cs.title}</span>
						</div>
						<AnimatePresence initial={false}>
							{openIdx === idx && (
								<motion.div
									key="desc"
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="case-desc"
								>
									<div className="case-mobile-category">
										<strong>Challenge:</strong>
										<div>{cs.challenge}</div>
									</div>
									<div className="case-mobile-category">
										<strong>Approach:</strong>
										<div>{cs.approach}</div>
									</div>
									<div className="case-mobile-category">
										<strong>Result:</strong>
										<div>{cs.result}</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
		);
	}

	// Desktop: sidebar list + details
	return (
		<div className="case-studies-split">
			<div className="case-studies-sidebar">
				{studies.map((cs, idx) => (
					<button
						key={cs.title}
						className={`case-study-title${
							selected === idx ? ' active' : ''
						}`}
						onClick={() => setSelected(idx)}
						aria-selected={selected === idx}
					>
						<img
							src={cs.icon}
							alt={cs.title}
							style={{ height: 20, marginRight: 10 }}
						/>
						<span>{cs.title}</span>
					</button>
				))}
			</div>
			<div className="case-studies-details">
				<div className="case-tabs-headings">
					<div>Challenge</div>
					<div>Approach</div>
					<div>Result</div>
				</div>
				<motion.div
					key={selected}
					className="case-tabs-details"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55 }}
				>
					<div>{studies[selected].challenge}</div>
					<div>{studies[selected].approach}</div>
					<div>{studies[selected].result}</div>
				</motion.div>
			</div>
		</div>
	);
}

export default function Services() {
	return (
		<Layout>
			{/* Intro */}
			<motion.h1
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
			>
				Services & Case Studies
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.7 }}
				style={{
					maxWidth: 700,
					margin: '0 auto 2rem auto',
					textAlign: 'center',
				}}
			>
				We help organizations move from uncertainty to clarity by defining clear strategies,
				building robust analytics, and delivering real business results. Here's how we can help:
			</motion.p>
			{/* Services */}
			<ResponsiveAccordion services={services} />
			{/* Case Studies */}
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2, duration: 0.7 }}
				style={{
					maxWidth: 900,
					margin: '3rem auto',
					textAlign: 'center',
				}}
			>
				<h2>Case Studies</h2>
				<CaseStudiesTabs studies={caseStudies} />
			</motion.section>
		</Layout>
	);
}