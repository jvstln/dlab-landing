const uxServices = [
	{
		title: "Product strategy & UX research",
		description:
			"We uncover real user problems through research, insights, and testing, then translate them into clear product strategies that drive adoption, trust, and growth.",
	},
	{
		title: "UI design systems",
		description:
			"We design scalable, consistent UI systems that help teams move faster, maintain visual clarity, and ship products without design debt.",
	},
	{
		title: "Web & mobile app design",
		description:
			"We craft intuitive, high-performing web and mobile experiences focused on usability, accessibility, and conversion across devices.",
	},
	{
		title: "SaaS, fintech & Web3 product design",
		description:
			"We design complex products with clarity—simplifying flows, reducing friction, and building trust for SaaS platforms, fintech tools, and onchain products.",
	},
];

const automationServices = [
	{
		title: "AI Agents & Assistants",
		description:
			"We design and integrate AI agents that assist users, automate decisions, and create smarter, more responsive product experiences.",
	},
	{
		title: "CRM, Operations & Marketing Automation",
		description:
			"We connect tools, workflows, and data to automate sales, operations, and marketing—reducing manual work and improving efficiency.",
	},
	{
		title: "Process Automation (No-code & custom)",
		description:
			"We automate repetitive processes using no-code tools and custom logic, helping teams scale operations without scaling complexity.",
	},
	{
		title: "Internal Tools Powered by AI",
		description:
			"We build custom internal tools enhanced with AI to improve decision-making, streamline workflows, and boost team productivity.",
	},
];

interface ServiceItemProps {
	title: string;
	description: string;
}

const ServiceItem = ({ title, description }: ServiceItemProps) => {
	return (
		<div className="group border-[#CFD1C9] border-b py-10 opacity-80 transition-opacity hover:opacity-100">
			<div className="flex items-center justify-between gap-8">
				<div className="flex-1">
					<h3 className="font-bold text-[32px] text-card opacity-50 transition-opacity group-hover:opacity-100">
						{title}
					</h3>
				</div>
				<p className="max-w-[412px] text-card text-sm leading-[18px] opacity-30 group-hover:opacity-100">
					{description}
				</p>
			</div>
		</div>
	);
};

export const Services = () => {
	return (
		<>
			{/* UX Design Services */}
			<section className="bg-white py-20">
				<div className="container mx-auto px-8">
					<div className="mb-16 flex flex-col items-start justify-between gap-12 lg:flex-row">
						<h2 className="max-w-[483px] font-bold text-4xl text-foreground leading-tight lg:text-[54px]">
							Product & UX Design Services
						</h2>
						<p className="max-w-[470px] text-base text-card leading-5">
							We design user-centered digital products by combining strategy,
							research, and thoughtful design—turning complex ideas into
							intuitive, scalable, and impactful experiences.
						</p>
					</div>

					<div className="space-y-0">
						{uxServices.map((service) => (
							<ServiceItem key={service.title} {...service} />
						))}
					</div>
				</div>
			</section>

			{/* AI Automation Services */}
			<section className="bg-white py-20">
				<div className="container mx-auto px-8">
					<div className="mb-16 flex flex-col items-start justify-between gap-12 lg:flex-row">
						<h2 className="max-w-[676px] font-bold text-4xl text-foreground leading-tight lg:text-[54px]">
							AI Automation & Workflow Services
						</h2>
						<p className="max-w-[470px] text-base text-card leading-5">
							We design and implement AI-powered workflows that automate tasks,
							connect systems, and optimize operations—helping teams work
							faster, smarter, and with less manual effort.
						</p>
					</div>

					<div className="space-y-0">
						{automationServices.map((service) => (
							<ServiceItem key={service.title} {...service} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};
