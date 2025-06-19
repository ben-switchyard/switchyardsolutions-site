import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const sections = [
	{
		key: 'business-strategy',
		label: 'Business Strategy & Guidance',
		categories: [
			{
				key: 'project-design',
				label: 'Project Design',
				content: (
					<>
						<h2>Project Design</h2>
						<p>
							Projects get messy fast when the plan doesn’t match reality. We cut through
							the noise with clear, practical project designs that lay out scope, call out
							risks early, and bring the right people in at the right time. That way, you’re
							set up to move forward without surprises.
						</p>
						<p>
							Pinpoint what’s really needed to untangle complexity. Scope projects clearly,
							flag risks before they bite, and map out realistic plans that keep teams moving
							forward without the usual chaos.
						</p>
					</>
				),
			},
			{
				key: 'team-alignment',
				label: 'Team Alignment',
				content: (
					<>
						<h2>Team Alignment</h2>
						<p>
							Nothing kills progress like teams pulling in different directions. Bringing all
							key players onto the same page establishes shared goals and clear communication.
							When people know what’s expected and why, momentum builds naturally.
						</p>
						<p>
							Get all the key players heading in the same direction. Facilitate focused
							collaboration, clear goals, and open communication so progress does not stall on
							internal friction.
						</p>
					</>
				),
			},
			{
				key: 'actionable-roadmaps',
				label: 'Actionable Roadmaps',
				content: (
					<>
						<h2>Actionable Roadmaps</h2>
						<p>
							Big-picture goals need real-world plans. We break strategy into bite-sized,
							prioritized steps that make tracking progress simple and keep resources focused.
							It is about having a roadmap that is flexible enough to handle change but solid
							enough to get things done.
						</p>
						<p>
							Turn big ideas into a step-by-step playbook. Prioritize what matters, plan
							resources smartly, and set checkpoints that make it easy to see how far you have
							come and where to go next.
						</p>
					</>
				),
			},
		],
	},
	{
		key: 'analytics',
		label: 'Analytics',
		categories: [
			{
				key: 'scalable-data-platforms',
				label: 'Scalable Data Platforms',
				content: (
					<>
						<h2>Scalable Data Platforms</h2>
						<p>
							Your data platform should grow with you, not hold you back. Building solid,
							scalable setups keeps your data clean, accessible, and fast no matter how much
							you throw at it. Reliable data means confident decisions and less firefighting.
						</p>
						<p>
							Build data systems that grow with the business, handle more complexity, and keep
							information flowing clean and fast. Avoid the usual platform bottlenecks that
							slow down insight.
						</p>
					</>
				),
			},
			{
				key: 'insight-generation',
				label: 'Insight Generation',
				content: (
					<>
						<h2>Insight Generation</h2>
						<p>
							Data is useless if it does not lead somewhere. We dig into the numbers, find the
							root causes, and tell the story that matters. The goal is insights that help you
							make smarter choices and spot opportunities before they are obvious.
						</p>
						<p>
							Dive deep into the data to find the story nobody else sees. Deliver reports and
							dashboards that do not just inform but drive better decisions and uncover
							opportunities before they become obvious.
						</p>
					</>
				),
			},
			{
				key: 'measurement-frameworks',
				label: 'Measurement Frameworks',
				content: (
					<>
						<h2>Measurement Frameworks</h2>
						<p>
							If you cannot measure it, you cannot improve it. We set up frameworks that make
							it easy to know what is working so you can double down on success and
							course-correct when needed. Learning fast keeps you ahead.
						</p>
						<p>
							Design clear ways to know what is working and what is not. Set up experiments,
							define metrics that matter, and build repeatable systems to learn fast and
							optimize relentlessly.
						</p>
					</>
				),
			},
		],
	},
	{
		key: 'execution',
		label: 'Execution',
		categories: [
			{
				key: 'workflow-automation',
				label: 'Workflow Automation',
				content: (
					<>
						<h2>Workflow Automation</h2>
						<p>
							Manual work slows everyone down and invites mistakes. Automating data pipelines
							and reporting frees your team to focus on what really matters: analysis,
							strategy, and growth. Automation is the backbone of speed and reliability.
						</p>
						<p>
							Cut out tedious, repetitive tasks and replace them with smooth, automated
							processes. Get data moving automatically so teams can focus on analysis,
							strategy, and growth, not manual work.
						</p>
					</>
				),
			},
			{
				key: 'operations-optimization',
				label: 'Operations and Optimization',
				content: (
					<>
						<h2>Operations and Optimization</h2>
						<p>
							Operations problems do not always scream for attention but quietly sap
							efficiency. Using data to find bottlenecks and fix what is broken cuts costs,
							improves processes, and makes your operation smoother and more scalable.
						</p>
						<p>
							Spot the slowdowns and inefficiencies hiding in plain sight. Use data-driven
							insights to tighten processes, trim waste, and scale operations without breaking
							a sweat.
						</p>
					</>
				),
			},
			{
				key: 'process-recovery',
				label: 'Process Recovery',
				content: (
					<>
						<h2>Process Recovery</h2>
						<p>
							Sometimes projects hit walls or fall apart. When that happens, you need a
							clear-eyed reset. We get to the bottom of what is going wrong, realign
							stakeholders, and implement fixes that get things back on track. No drama, just
							results.
						</p>
						<p>
							When projects get stuck or hit a wall, jump in with clear-eyed diagnosis and
							targeted fixes. Realign teams, clear blockers, and get momentum back fast. No
							drama, just results.
						</p>
					</>
				),
			},
		],
	},
];

function SectionTabs({ sections, activeSection, setActiveSection }) {
	return (
		<div className="section-tabs">
			{sections.map((section) => (
				<button
					key={section.key}
					id={section.key} // Add this line for anchor support
					className={`section-tab${
						activeSection === section.key ? ' active' : ''
					}`}
					onClick={() => setActiveSection(section.key)}
					type="button"
				>
					{section.label}
				</button>
			))}
		</div>
	);
}

function CategoryTabs({ categories, activeCategory, setActiveCategory }) {
	return (
		<div>
			<div className="category-tabs">
				{categories.map((cat) => (
					<button
						key={cat.key}
						className={`category-tab${
							activeCategory === cat.key ? ' active' : ''
						}`}
						onClick={() => setActiveCategory(cat.key)}
						type="button"
					>
						{cat.label}
					</button>
				))}
			</div>
			<div className="category-content">
				{categories.find((cat) => cat.key === activeCategory)?.content}
			</div>
		</div>
	);
}

export default function Services() {
	const [activeSection, setActiveSection] = useState(sections[0].key);
	const currentSection = sections.find((s) => s.key === activeSection);
	const [activeCategory, setActiveCategory] = useState(currentSection.categories[0].key);

	// When section changes, reset category to first in that section
	const handleSectionChange = (sectionKey) => {
		setActiveSection(sectionKey);
		const newSection = sections.find((s) => s.key === sectionKey);
		setActiveCategory(newSection.categories[0].key);
	};

	// Scroll to section if hash is present
	useEffect(() => {
		if (typeof window !== 'undefined' && window.location.hash) {
			const hash = window.location.hash.replace('#', '');
			const section = sections.find((s) => s.key === hash);
			if (section) {
				handleSectionChange(section.key);
				const el = document.getElementById(section.key);
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		}
		// eslint-disable-next-line
	}, []);

	return (
		<Layout>
			<h1>Our Services</h1>
			<SectionTabs
				sections={sections}
				activeSection={activeSection}
				setActiveSection={handleSectionChange}
			/>
			<div className="services-section-content">
				<CategoryTabs
					categories={currentSection.categories}
					activeCategory={activeCategory}
					setActiveCategory={setActiveCategory}
				/>
			</div>
		</Layout>
	);
}