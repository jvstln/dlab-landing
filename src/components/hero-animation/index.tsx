import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { JSX } from "react";
import { cn } from "@/lib/utils";
import { Gradients, LegacyGradients } from "./colors";
import { PlatformBase } from "./platform-base";
import { RoofTop, TowerParapet } from "./roof";
import { CenterSupportPillar, LeftSupportPillar, RightSupportPillar } from "./support-pillars";
import { PlatformWall, TowerBody } from "./tower-core";
import { LeftWindows, RightWindows } from "./windows";

type LayerEnter = { x: number; y: number; rotate: number };
type LayerConfig = {
	id: string;
	Component: () => JSX.Element;
	enter: LayerEnter;
};
type LayerCustom = { enter: LayerEnter; order: number };

const DEFAULT_ENTER: LayerEnter = { x: 0, y: 0, rotate: 0 };

type ParticleConfig = {
	animate: {
		opacity: number[];
		x: number[];
		y: number[];
		rotate: number[];
	};
	transition: {
		duration: number;
		repeat: number;
		repeatType: "loop" | "mirror";
		ease: "easeInOut";
		delay: number;
	};
};

// Configuration for cycling animation
const MAX_CONCURRENT_ANIMATIONS = 4;
const ANIMATION_CYCLE_DURATION = 5; // seconds per animation cycle
const ASSEMBLY_BATCH_SIZE = 3;
const ASSEMBLY_BATCH_DELAY = 0.8; // seconds between batches
const ASSEMBLY_START_DELAY = 6; // time for full assembly before breathing starts

// Generate particle effects - all layers animate but cycle so only ~4 at a time
const generateParticleEffect = (
	enter: LayerEnter,
	index: number,
): ParticleConfig => {
	// Vary the separation intensity
	const intensity = 0.4 + (index % 3) * 0.12;
	
	// Duration with slight variation
	const duration = ANIMATION_CYCLE_DURATION + (index % 3) * 0.8;
	
	// Calculate delay so only MAX_CONCURRENT_ANIMATIONS layers animate at once
	// Each layer starts at a different phase in the cycle
	const cyclePhase = index % MAX_CONCURRENT_ANIMATIONS;
	const cycleOffset = Math.floor(index / MAX_CONCURRENT_ANIMATIONS);
	const delay = ASSEMBLY_START_DELAY + cyclePhase * (duration / MAX_CONCURRENT_ANIMATIONS) + cycleOffset * 1.2;

	return {
		animate: {
			x: [0, enter.x * intensity, 0],
			y: [0, enter.y * intensity, 0],
			rotate: [0, enter.rotate * intensity * 0.5, 0],
			opacity: [1, 0.55, 1],
		},
		transition: {
			duration,
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "loop" as const,
			ease: "easeInOut" as const,
			delay,
		},
	};
};

const layers: LayerConfig[] = [
	{
		id: "platform-base",
		Component: PlatformBase,
		enter: { y: 40, x: 0, rotate: 0 },
	},
	{
		id: "left-windows",
		Component: LeftWindows,
		enter: { x: -35, y: 10, rotate: -2 },
	},
	{
		id: "right-windows",
		Component: RightWindows,
		enter: { x: 35, y: 10, rotate: 2 },
	},
	{ id: "tower-body", Component: TowerBody, enter: { y: 60, x: 0, rotate: 1 } },
	{
		id: "platform-wall",
		Component: PlatformWall,
		enter: { y: 50, x: -10, rotate: -1 },
	},
	{
		id: "right-support-pillar",
		Component: RightSupportPillar,
		enter: { x: 0, y: 45, rotate: -2 },
	},
	{
		id: "left-support-pillar",
		Component: LeftSupportPillar,
		enter: { x: 0, y: 45, rotate: -2 },
	},
	{
		id: "center-support-pillar",
		Component: CenterSupportPillar,
		enter: { x: 0, y: 45, rotate: -2 },
	},
	{
		id: "tower-parapet",
		Component: TowerParapet,
		enter: { x: 22, y: -20, rotate: 3 },
	},
	{ id: "roof-top", Component: RoofTop, enter: { x: -25, y: -30, rotate: -3 } },
] as const;

const layerVariants: Variants = {
	hidden: (custom?: LayerCustom) => {
		const { enter } = custom ?? { enter: DEFAULT_ENTER, order: 0 };
		return {
			opacity: 0,
			x: enter.x,
			y: enter.y,
			rotate: enter.rotate,
			scale: 0.96,
		};
	},
	visible: (custom?: LayerCustom) => {
		const order = custom?.order ?? 0;
		// Batch layers: 3 at a time assemble together
		const batch = Math.floor(order / ASSEMBLY_BATCH_SIZE);
		const positionInBatch = order % ASSEMBLY_BATCH_SIZE;
		return {
			opacity: 1,
			x: 0,
			y: 0,
			rotate: 0,
			scale: 1,
			transition: {
				delay: 0.3 + batch * ASSEMBLY_BATCH_DELAY + positionInBatch * 0.15,
				duration: 0.9,
				ease: [0.19, 1, 0.22, 1],
				type: "spring",
				damping: 16,
				stiffness: 100,
			},
		};
	},
};

const FLOAT_ANIMATION = {
	y: [0, -4, 0],
	rotate: [0, -0.3, 0.3, 0],
};

const FLOAT_TRANSITION = {
	duration: 12,
	repeat: Infinity,
	repeatType: "loop" as const,
	ease: "easeInOut" as const,
};

export const HeroAnimation = (
	props: React.ComponentProps<typeof motion.svg>,
) => {
	return (
		<motion.svg
			width="319"
			height="462"
			viewBox="0 0 319 462"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			initial={{ opacity: 0, scale: 0.9, translateY: 40 }}
			animate={{ opacity: 1, scale: 1, translateY: 0 }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
			{...props}
			className={cn(props.className)}
		>
			<title>Hero animation illustration</title>

			<motion.g animate={FLOAT_ANIMATION} transition={FLOAT_TRANSITION}>
				{layers.map(({ id, Component, enter }, index) => {
					const particleEffect = generateParticleEffect(enter, index);
					return (
						<motion.g
							key={id}
							variants={layerVariants}
							initial="hidden"
							animate="visible"
							custom={{ enter, order: index }}
						>
							<motion.g
								animate={particleEffect.animate}
								transition={particleEffect.transition}
							>
								<Component />
							</motion.g>
						</motion.g>
					);
				})}
			</motion.g>

			{/* Colors */}
			<Gradients />
			<LegacyGradients />
		</motion.svg>
	);
};
