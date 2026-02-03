import { motion, type Variant } from "motion/react";
import type React from "react";
import { useEffect, useState } from "react";
import { cn, getRandomFloat } from "@/lib/utils";
import { MotionButton } from "./ui/button";

type FloatingTagProps = React.ComponentProps<typeof motion.div> & {
	text: string;
	delay: number;
};

const tags = [
	{
		text: "Workflow Automation",
		delay: 0,
		position: { top: "25%", left: "22.71%" },
	},
	{
		text: "UX/UI Audit/Design",
		delay: 1,
		position: { top: "20.22%", left: "59.31%" },
	},
	{
		text: "Strategy Workshop",
		delay: 2,
		position: { top: "47.48%", left: "72.64%" },
	},
	{
		text: "Brand Design",
		delay: 3,
		position: { top: "69.33%", left: "63.06%" },
	},
	{
		text: "Sales Automation",
		delay: 1.5,
		position: { top: "70.22%", left: "28.75%" },
	},
].map((tag) => ({ id: Math.random(), ...tag }));

const contentVariants: Record<"initial" | "animate", Variant> = {
	initial: { opacity: 0, y: 30 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

const backgroundVariants: Record<"initial" | "animate", Variant> = {
	initial: { opacity: 0, scale: 0.8 },
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1.2,
			ease: "easeOut",
		},
	},
};

const generateRandomPositions = () => ({
	y: [
		0,
		getRandomFloat(8, 20),
		getRandomFloat(8, 20),
		getRandomFloat(8, 20),
		getRandomFloat(8, 20),
		0,
	],
	x: [
		0,
		getRandomFloat(8, 20),
		getRandomFloat(8, 20),
		getRandomFloat(8, 20),
		getRandomFloat(8, 20),
		0,
	],
});

function FloatingTag({ text, delay, ...props }: FloatingTagProps) {
	const [animationKeyframes, setAnimationKeyframes] = useState(
		generateRandomPositions,
	);

	return (
		<motion.div
			initial={{ x: 0, y: 0 }}
			animate={{
				x: animationKeyframes.x,
				y: animationKeyframes.y,
				transition: {
					duration: 6 + delay * 1.5,
					ease: "easeInOut",
				},
			}}
			onAnimationComplete={() => {
				setAnimationKeyframes(generateRandomPositions());
			}}
			{...props}
			className={cn(
				"absolute flex items-center justify-center gap-1 rounded-full border border-[#00F7FF] bg-white/57 px-4 py-2 backdrop-blur-md max-md:opacity-50",
				props.className,
			)}
		>
			<span className="whitespace-nowrap text-center font-normal text-black text-xs lg:text-sm">
				{text}
			</span>
		</motion.div>
	);
}

export function WhatWeBuild() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
			{/* Background Elements */}
			<motion.div
				variants={backgroundVariants}
				initial="initial"
				animate={isVisible ? "animate" : "initial"}
				className="absolute size-247 rounded-full border"
				style={{
					background:
						"radial-gradient(50% 50% at 50% 50%, rgba(244, 252, 249, 0) 0%, rgba(17, 255, 168, 0.3) 100%)",
					filter: "blur(22.2397px)",
				}}
			/>
			<motion.div
				variants={backgroundVariants}
				initial="initial"
				animate={isVisible ? "animate" : "initial"}
				className="absolute size-214 rounded-full"
				style={{
					background:
						"radial-gradient(50% 50% at 50% 50%, rgba(244, 252, 249, 0) 0%, rgba(222, 245, 237, 0.27) 100%)",
				}}
			/>
			<img
				src="/images/dlab-noise-animation-transparent.webp"
				className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 rounded-b-full"
				alt="DLAB Noise Animation"
			/>

			{/* Floating Tags */}
			{tags.map((tag) => (
				<FloatingTag
					key={tag.id}
					text={tag.text}
					delay={tag.delay}
					style={tag.position}
				/>
			))}

			{/* Center Content */}
			<motion.div
				className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
				variants={contentVariants}
				initial="initial"
				animate={isVisible ? "animate" : "initial"}
			>
				<div className="flex max-w-3xl flex-col items-center gap-8">
					{/* Main Heading */}
					<h1 className="font-bold text-4xl text-[#1C1C1B] leading-tight md:text-5xl lg:text-6xl">
						Building for Founders Who Refuse to Stay Small
					</h1>

					{/* Subtitle */}
					<p className="mx-auto max-w-2xl text-[#272726] text-lg leading-relaxed md:text-xl">
						From strategy to execution, we build world-class digital products
						and systems that turns ambitious brands into market leaders.
					</p>

					<FloatingTag
						text="Web/Mobile Development"
						delay={2.5}
						className="static"
					/>

					{/* CTA Button */}
					<MotionButton
						className="inline-flex h-auto rounded-full border border-[#272726] bg-[#272726] bg-linear-to-r from-[#00F7FF] to-[#11FFA8] bg-clip-text px-12 py-4 font-semibold text-lg text-transparent transition-all duration-300 hover:border-cyan-400 hover:opacity-100"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Book a Call
					</MotionButton>
				</div>
			</motion.div>
		</section>
	);
}
