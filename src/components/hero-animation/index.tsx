import type { Transition, Variants } from "motion/react";
import { motion } from "motion/react";
import type { JSX } from "react";
import { cn } from "@/lib/utils";
import { Gradients, LegacyGradients } from "./colors";
import { PlatformBase } from "./platform-base";
import { RoofTop, TowerParapet } from "./roof";
import { SupportPillars } from "./support-pillars";
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

type LoopConfig = {
	animate: {
		opacity?: number[];
		x?: number[];
		y?: number[];
		rotate?: number[];
		scale?: number[];
	};
	transition: Transition;
	baseDelay?: number;
};

const LOOP_EFFECTS: Record<string, LoopConfig> = {
	"left-windows": {
		animate: {
			opacity: [1, 1, 0.4, 0.75, 1],
			x: [0, 0, -6, 5, 0],
			y: [0, 0, -3, 2, 0],
		},
		transition: {
			duration: 9,
			repeat: Infinity,
			repeatType: "loop",
			ease: "easeInOut",
		},
		baseDelay: 3.2,
	},
	"right-windows": {
		animate: {
			opacity: [1, 1, 0.45, 0.8, 1],
			x: [0, 0, 7, -4, 0],
			y: [0, 0, -2, 3, 0],
		},
		transition: {
			duration: 9.5,
			repeat: Infinity,
			repeatType: "loop",
			ease: "easeInOut",
		},
		baseDelay: 3.4,
	},
	"tower-parapet": {
		animate: {
			opacity: [1, 1, 0.6, 0.85, 1],
			x: [0, 0, 4, -3, 0],
			y: [0, 0, -5, 3, 0],
		},
		transition: {
			duration: 10.5,
			repeat: Infinity,
			repeatType: "loop",
			ease: "easeInOut",
		},
		baseDelay: 3.8,
	},
	"roof-top": {
		animate: {
			scale: [1, 1, 0.95, 1.03, 1],
			rotate: [0, 0, -1.2, 1, 0],
			opacity: [1, 1, 0.7, 0.9, 1],
		},
		transition: {
			duration: 11,
			repeat: Infinity,
			repeatType: "loop",
			ease: "easeInOut",
		},
		baseDelay: 4.2,
	},
	"support-pillars": {
		animate: {
			opacity: [1, 1, 0.5, 0.8, 1],
			y: [0, 0, 6, -4, 0],
		},
		transition: {
			duration: 8.5,
			repeat: Infinity,
			repeatType: "mirror",
			ease: "easeInOut",
		},
		baseDelay: 3.6,
	},
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
		id: "support-pillars",
		Component: SupportPillars,
		enter: { x: 0, y: 45, rotate: -2 },
	},
	{
		id: "tower-parapet",
		Component: TowerParapet,
		enter: { x: 22, y: -20, rotate: 3 },
	},
	{ id: "roof-top", Component: RoofTop, enter: { x: -25, y: -30, rotate: -3 } },
];

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
		return {
			opacity: 1,
			x: 0,
			y: 0,
			rotate: 0,
			scale: 1,
			transition: {
				delay: 0.2 + order * 0.5,
				duration: 0.65,
				ease: [0.19, 1, 0.22, 1],
				type: "spring",
				damping: 20,
				stiffness: 160,
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
					const loop = LOOP_EFFECTS[id];
					const loopDelay = (loop?.baseDelay ?? 3) + index * 0.12;
					return (
						<motion.g
							key={id}
							variants={layerVariants}
							initial="hidden"
							animate="visible"
							custom={{ enter, order: index }}
						>
							{loop ? (
								<motion.g
									animate={loop.animate}
									transition={{ ...loop.transition, delay: loopDelay }}
								>
									<Component />
								</motion.g>
							) : (
								<Component />
							)}
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
