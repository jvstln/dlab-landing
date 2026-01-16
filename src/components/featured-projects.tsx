import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const projects = [
	{
		title: "HAYA",
		description:
			"Haya is onchain UX infrastructure that helps founders, teams understand and fix user hesitation before it kills adoption. It reveals where visitors hesitate, what confuses them, and what's stopping them from taking action.",
		image:
			"https://api.builder.io/api/v1/image/assets/TEMP/e5d19e0025ff2c6d7cec29485949d9024602e5e7?width=1215",
		gradient: "from-slate-300/35 to-slate-400/35",
	},
	{
		title: "Portixiel AI",
		description:
			"Creatives, say goodbye to the struggle of crafting portfolios. With Portixel, you now have an AI-powered tool that helps you build, manage, and share your design portfolio effortlessly!",
		image:
			"https://api.builder.io/api/v1/image/assets/TEMP/74cc50cdbab52e0cc00517928bac2f5beabc9116?width=1155",
		gradient: "from-slate-300/35 to-slate-400/35",
	},
];

const galleryItems = [
	{
		image:
			"https://api.builder.io/api/v1/image/assets/TEMP/1691fc0cc9c9e49e8768d6a3854502a4290d3924?width=590",
		gradient: "from-slate-200/100 to-black/8",
	},
	{
		image:
			"https://api.builder.io/api/v1/image/assets/TEMP/fbb168f78598d87d1ca2695893f59bce170ad061?width=590",
		gradient: "from-slate-200/100 to-black/8",
	},
	{
		image:
			"https://api.builder.io/api/v1/image/assets/TEMP/057ff31648c377daa27ad781b42e54cc0923520a?width=590",
		gradient: "from-purple-100/100 to-purple-500/39",
	},
	{
		image:
			"https://api.builder.io/api/v1/image/assets/TEMP/5cb92b4d1b8bc15f02ff95c1d14f8a04afc59593?width=590",
		gradient: "from-blue-500/35 to-blue-800/35",
	},
	{
		image:
			"https://api.builder.io/api/v1/image/assets/TEMP/42bdd36e1d3bb5353592e40bfad26a051a6fe7eb?width=590",
		gradient: "from-teal-700/27 to-emerald-400/27",
	},
	{
		image:
			"https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=590",
		gradient: "from-teal-700/27 to-emerald-400/27",
	},
];

export const FeaturedProjects = () => {
	return (
		<section className="overflow-hidden bg-white py-20">
			<div className="container mx-auto px-8">
				{/* Header */}
				<div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
					<h2 className="max-w-[483px] font-bold text-4xl text-foreground leading-tight lg:text-[54px]">
						Featured Projects
					</h2>
					<p className="max-w-[470px] text-base text-card leading-5">
						We help startups and growing teams design high-performing digital
						products and automate workflows using AI — so you ship faster,
						reduce cost, and grow smarter.
					</p>
				</div>

				{/* Main Projects */}
				<div className="mb-16 flex flex-col gap-8 lg:flex-row lg:gap-16">
					{projects.map((project) => (
						<div key={project.title} className="flex-1 space-y-6">
							<div
								className={`rounded-[35px] bg-linear-to-br ${project.gradient} p-7`}
							>
								<img
									src={project.image}
									alt={project.title}
									className="aspect-607/405 w-full rounded-[17px] object-cover"
								/>
							</div>

							<div className="flex items-start justify-between gap-8">
								<div className="flex-1 space-y-4">
									<h3 className="font-bold text-2xl text-card">
										{project.title}
									</h3>
									<p className="text-base text-card leading-5">
										{project.description}
									</p>
								</div>

								<Button
									size="xl"
									variant="primary"
									className="size-16 rounded-full bg-transparent! text-foreground!"
								>
									<ArrowUpRight className="size-6" />
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* Gallery Scroll */}
				<div className="relative overflow-hidden">
					<div className="hover:paused flex animate-scroll gap-3">
						{galleryItems.concat(galleryItems).map((item, i) => (
							<div
								key={item.image}
								className={cn(
									"w-[318px] shrink-0 rounded-[18px] bg-linear-to-br p-3",
									item.gradient,
								)}
							>
								<img
									src={item.image}
									alt={`Gallery ${i}`}
									className="h-[239px] w-full rounded-md object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
