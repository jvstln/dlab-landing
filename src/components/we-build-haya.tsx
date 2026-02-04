import { motion } from "motion/react";
import { MotionButton } from "./ui/button";

const mockups: Array<{ imageUrl: string; name?: string; id: number }> = [
	{ imageUrl: "/images/haya-dashboard-mockup.webp" },
	{ imageUrl: "/images/portixel-homepage-mockup.webp" },
].map((item) => ({ ...item, id: Math.random() }));

export function WeBuildHaya() {
	return (
		<section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#0d0d0d] px-4 py-20 md:px-8 lg:px-16">
			{/* Background Element */}
			<div
				className="absolute size-135.5 rounded-full opacity-30"
				style={{
					left: "-109px",
					top: "calc(50% - 542px/2 - 112px)",
					background: "linear-gradient(259.04deg, #00F7FF 0%, #11FFA8 100%)",
					filter: "blur(115.812px)",
				}}
			/>
			<div
				className="absolute size-135.5 rounded-full opacity-30"
				style={{
					right: "-19px",
					top: "calc(50% - 542px/2 + 66px)",
					background: "linear-gradient(259.04deg, #00F7FF 0%, #11FFA8 100%)",
					filter: "blur(115.812px)",
				}}
			/>

			<div className="container mx-auto w-full">
				{/* Section Header */}
				<div className="grid grid-cols-1 justify-between gap-4 lg:grid-cols-2">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-12 font-bold text-4xl text-white md:text-5xl"
					>
						We build haya
					</motion.h2>

					{/* Right Content - Image */}
					<motion.div
						className="relative z-10 mr-10 hidden overflow-hidden rounded-xl border border-white/10 shadow-2xl lg:block"
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.4 }}
					>
						<img
							src="/images/haya-homepage-mockup.webp"
							alt="Haya Interface Dashboard"
							className="max-h-[400px] w-auto object-cover md:max-h-[500px]"
						/>
					</motion.div>
				</div>

				{/* Card Container */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="lg:-mt-[10%] relative mt-0 flex h-auto flex-col justify-center space-y-6 overflow-hidden rounded-[32px] border border-[#11FFA8]/30 bg-[#1C1C1B]/50 p-6 backdrop-blur-sm md:p-12 lg:h-114 lg:space-y-8 lg:p-16"
					style={{
						boxShadow: "0 0 40px -10px rgba(17, 255, 168, 0.1)",
					}}
				>
					<h3 className="font-bold text-5xl text-[#11FFA8] md:text-6xl lg:text-7xl">
						HAYA
					</h3>

					<p className="text-gray-300 text-lg leading-relaxed md:text-xl">
						Haya is onchain UX infrastructure that helps founders, teams
						understand and fix user hesitation before it kills adoption. It
						reveals where visitors hesitate, what confuses them, and what's
						stopping them from taking action.
					</p>

					<div className="flex flex-wrap gap-4">
						<MotionButton
							className="rounded-full border border-white/10 bg-[#272726] px-8 py-6 text-white hover:bg-[#3E3E3D]"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Doc
						</MotionButton>
						<MotionButton
							className="rounded-full border border-white/10 bg-[#272726] px-8 py-6 text-white hover:bg-[#3E3E3D]"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Use Haya
						</MotionButton>
					</div>
				</motion.div>

				{/* Featured Works Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mt-20"
				>
					{/* Header Row */}
					<div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
						<span className="font-medium text-gray-400 text-sm uppercase tracking-widest">
							Featured Works
						</span>
						<p className="max-w-xl text-right text-gray-400 text-sm leading-relaxed md:text-base">
							We help startups and growing teams design high-performing digital
							products and automate workflows using AI — so you ship faster,
							reduce cost, and grow smarter.
						</p>
					</div>

					{/* Marquee Gallery */}
					<div className="relative overflow-hidden">
						{/* Gradient Masks */}
						<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#0d0d0d] to-transparent" />
						<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#0d0d0d] to-transparent" />

						<div className="hover:paused flex animate-marquee gap-6">
							{/* First set of items */}
							{mockups.map((item, idx) => (
								<motion.div
									key={`a-${item.id}`}
									className="relative shrink-0 overflow-hidden rounded-2xl border border-white/10"
									whileHover={{ scale: 1.02, y: -4 }}
									transition={{ duration: 0.3 }}
								>
									<img
										src={item.imageUrl}
										alt={`Featured project ${item.name}`}
										className="h-[220px] w-[280px] object-cover md:h-[280px] md:w-[350px]"
										style={{
											objectPosition: `${idx * 25}% center`,
										}}
									/>
								</motion.div>
							))}
							{/* Duplicate set for seamless loop */}
							{mockups.map((item, idx) => (
								<motion.div
									key={`b-${item.id}`}
									className="relative shrink-0 overflow-hidden rounded-2xl border border-white/10"
									whileHover={{ scale: 1.02, y: -4 }}
									transition={{ duration: 0.3 }}
								>
									<img
										src={item.imageUrl}
										alt={`Featured project ${item.name}`}
										className="h-[220px] w-[280px] object-cover md:h-[280px] md:w-[350px]"
										style={{
											objectPosition: `${idx * 25}% center`,
										}}
									/>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
