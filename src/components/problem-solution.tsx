import { Reveal, Stagger, StaggerItem } from "./motion/reveal";

const problemItems = [
	{ id: 1, text: "Poor UX that hurts adoption and retention" },
	{ id: 2, text: "Manual workflows that waste time and money" },
	{ id: 3, text: "AI hype with no real business impact" },
	{ id: 4, text: "Tools that don't talk to each other" },
];

const solutionItems = [
	{ id: 1, text: "Intuitive interfaces that drive engagement" },
	{ id: 2, text: "Automated workflows that save time and money" },
	{ id: 3, text: "AI solutions with measurable business impact" },
	{ id: 4, text: "Integrated tools that work seamlessly together" },
];

const radialAccents = {
	cyan: `
		rgba(150, 220, 240, 0.6) 0%,
		rgba(220, 235, 245, 0.3) 40%,
		rgba(245, 248, 250, 1) 70%
	`,
	orange: `
		rgba(255, 210, 140, 0.6) 0%,
		rgba(250, 235, 210, 0.3) 40%,
		rgba(250, 248, 245, 1) 70%
	`,
};

const getGradientBgStyles = (accent: keyof typeof radialAccents = "cyan") => {
	return `
		repeating-linear-gradient(
			0deg,
			transparent,
			transparent 39px,
			rgba(200, 220, 230, 0.4) 39px,
			rgba(200, 220, 230, 0.4) 40px
		),
		repeating-linear-gradient(
			90deg,
			transparent,
			transparent 39px,
			rgba(200, 220, 230, 0.4) 39px,
			rgba(200, 220, 230, 0.4) 40px
		),
		radial-gradient(
			ellipse 80% 80% at center,
			${radialAccents[accent]}
		)
	`;
};

type CardItem = { id: number; text: string };

interface ProblemSolutionCardProps {
	title: string;
	accent: keyof typeof radialAccents;
	ringColor: string;
	items: CardItem[];
	summary: {
		heading: string;
		description: string;
	};
}

const ProblemSolutionCard = ({
	title,
	accent,
	ringColor,
	items,
	summary,
}: ProblemSolutionCardProps) => (
	<Reveal className="motion-safe:hover:-translate-y-1 w-full rounded-3xl border border-muted-foreground bg-white motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out lg:w-1/2">
		<div
			className="relative m-px h-[350px] overflow-hidden rounded-t-3xl p-5"
			style={{
				background: getGradientBgStyles(accent),
			}}
		>
			<span className="rounded-3xl bg-white/70 px-4 py-2 font-bold text-base text-card backdrop-blur-md">
				{title}
			</span>

			<div className="mt-7 space-y-6">
				{items.map(({ id, text }) => (
					<div key={id} className="flex items-center gap-4">
						<div className="relative shrink-0">
							<div
								className="h-6 w-6 rounded-full"
								style={{ backgroundColor: ringColor }}
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="h-4 w-4 rounded-full bg-background" />
							</div>
						</div>
						<div className="flex-1 rounded border border-cyan-400/20 bg-linear-to-r from-white to-[#F9FFFC] px-3 py-2">
							<p className="text-card text-sm">{text}</p>
						</div>
					</div>
				))}
			</div>

			{/* Fade overlay */}
			<div className="-mt-16 pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-30% from-background to-transparent" />
		</div>

		<div className="bg-background px-5 pb-7">
			<h3 className="mb-4 font-bold text-card text-lg">{summary.heading}</h3>
			<p className="text-base text-card leading-5">{summary.description}</p>
		</div>
	</Reveal>
);
export const ProblemSolution = () => {
	return (
		<section className="bg-white py-20 lg:py-32">
			<div className="container mx-auto px-8">
				{/* Header */}
				<Stagger className="mx-auto mb-16 max-w-4xl space-y-6 text-center">
					<StaggerItem>
						<h2 className="font-bold text-4xl text-foreground leading-tight lg:text-[54px]">
							We are Empowering Innovation with UX Engineering
						</h2>
					</StaggerItem>
					<StaggerItem>
						<p className="mx-auto max-w-[643px] text-base text-card leading-5">
							We design and build infrastructure, providing UX analytics,
							empower builders to identify and fix friction points in minutes,
							not weeks.
						</p>
					</StaggerItem>
				</Stagger>

				{/* Problem & Solution Cards */}
				<div className="mx-auto flex max-w-7xl flex-col items-center lg:flex-row">
					<ProblemSolutionCard
						title="The Problem"
						accent="cyan"
						ringColor="#2458F9"
						items={problemItems}
						summary={{
							heading: "Great ideas fail because execution breaks down",
							description:
								"Teams lose users and momentum due to poor UX, fragmented tools, and manual workflows that slow everything down, even when the product itself is promising.",
						}}
					/>

					{/* Divider - vertical on mobile, horizontal on desktop */}
					<div className="flex flex-row gap-1 lg:flex-col">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="relative h-14 w-2 overflow-hidden rounded-full bg-[#EBEEEE] lg:h-2 lg:w-56"
							>
								{/* Mobile: gradient flows top to bottom */}
								<div className="absolute top-0 h-10 w-full rounded-full bg-linear-to-b from-[#EBEEEE] to-[#01FFFF] lg:hidden" />
								{/* Desktop: gradient flows left to right */}
								<div className="absolute left-0 hidden h-full w-10 rounded-full bg-linear-to-r from-[#EBEEEE] to-[#01FFFF] lg:block" />
							</div>
						))}
					</div>

					<ProblemSolutionCard
						title="The Solution"
						accent="orange"
						ringColor="#FFC179"
						items={solutionItems}
						summary={{
							heading: "Design clarity meets intelligent automation",
							description:
								"We design user-centered product systems and power them with AI automation, helping teams move faster, reduce friction, and scale without chaos.",
						}}
					/>
				</div>
			</div>
		</section>
	);
};
