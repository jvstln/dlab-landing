import type { ReactNode } from "react";
import { steps } from "@/lib/data/how-it-works";
import { Reveal, Stagger, StaggerItem } from "./motion/reveal";

interface StepCardProps {
	title: string;
	description: string;
	image: ReactNode;
	stepNumber: number;
}

const StepCard = ({ title, description, image, stepNumber }: StepCardProps) => (
	<div className="group motion-safe:hover:-translate-y-1 relative h-[341px] w-full overflow-hidden rounded-[15px] border border-muted-foreground motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out">
		{/* Background with radial gradient */}
		<div
			className="absolute inset-2"
			style={{
				background:
					"radial-gradient(ellipse at center, rgba(200, 230, 240, 0.8) 0%, rgba(230, 245, 250, 0.6) 40%, rgba(255, 255, 255, 1) 100%)",
			}}
		/>

		{/* SVG Image container */}
		<div className="absolute inset-2 flex items-center justify-center p-8 pb-32 transition-transform duration-300 group-hover:scale-105">
			{image}
		</div>

		{/* Step number badge */}
		<div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 font-bold text-foreground text-sm shadow-sm backdrop-blur-sm">
			{stepNumber}
		</div>

		{/* Content */}
		<div className="absolute inset-x-0 bottom-0 bg-white p-5">
			<h3 className="mb-2 font-bold text-lg">{title}</h3>
			<p className="text-sm leading-5">{description}</p>
		</div>
	</div>
);

export const HowItWorks = () => {
	return (
		<section className="bg-white py-20 lg:py-32">
			<div className="container mx-auto px-8">
				{/* Header */}
				<Stagger className="mb-16 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
					<StaggerItem>
						<h2 className="max-w-[676px] font-bold text-4xl text-foreground leading-tight lg:text-[54px]">
							How it Works
						</h2>
					</StaggerItem>
					<StaggerItem>
						<p className="max-w-[470px] text-base text-card leading-5">
							We start by understanding your product, users, and goals. From
							there, we design, build, and automate solutions that solve real
							problems, integrate seamlessly into your workflow, and scale as
							your business grows. Every step is collaborative, transparent, and
							focused on measurable impact.
						</p>
					</StaggerItem>
				</Stagger>

				{/* Cards Grid - 1 col mobile, 2 cols tablet, 4 cols desktop */}
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
					{steps.map((step) => (
						<Reveal key={step.id}>
							<StepCard
								title={step.title}
								description={step.description}
								image={step.image}
								stepNumber={step.id}
							/>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
