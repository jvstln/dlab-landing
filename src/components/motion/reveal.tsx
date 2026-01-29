import { Slot } from "@radix-ui/react-slot";
import { motion } from "motion/react";
import * as React from "react";
import { cn } from "@/lib/utils";

function usePrefersReducedMotion() {
	const [reduced, setReduced] = React.useState(false);

	React.useEffect(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReduced(query.matches);
		update();
		query.addEventListener("change", update);
		return () => query.removeEventListener("change", update);
	}, []);

	return reduced;
}

type RevealProps = React.ComponentProps<typeof motion.div> & {
	delay?: number;
	y?: number;
	duration?: number;
	once?: boolean;
	asChild?: boolean;
};

export function Reveal({
	delay = 0,
	y = 14,
	duration = 0.6,
	once = true,
	className,
	children,
	asChild,
	...props
}: RevealProps) {
	const reduced = usePrefersReducedMotion();
	const Component = asChild ? motion.create(Slot) : motion.div;

	return (
		<Component
			initial={reduced ? false : { opacity: 0, y }}
			whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
			viewport={{ once, amount: 0.35 }}
			transition={
				reduced ? undefined : { duration, delay, ease: [0.19, 1, 0.22, 1] }
			}
			className={cn(className)}
			{...props}
		>
			{children}
		</Component>
	);
}

type StaggerProps = React.ComponentProps<typeof motion.div> & {
	delayChildren?: number;
	staggerChildren?: number;
};

export function Stagger({
	delayChildren = 0.05,
	staggerChildren = 0.08,
	className,
	children,
	...props
}: StaggerProps) {
	const reduced = usePrefersReducedMotion();
	return (
		<motion.div
			variants={
				reduced
					? undefined
					: {
							hidden: {},
							show: {
								transition: {
									delayChildren,
									staggerChildren,
								},
							},
						}
			}
			initial={reduced ? false : "hidden"}
			whileInView={reduced ? undefined : "show"}
			viewport={{ once: true, amount: 0.35 }}
			className={cn(className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}

type ItemProps = React.ComponentProps<typeof motion.div> & {
	y?: number;
};

export function StaggerItem({
	y = 10,
	className,
	children,
	...props
}: ItemProps) {
	const reduced = usePrefersReducedMotion();
	return (
		<motion.div
			variants={
				reduced
					? undefined
					: {
							hidden: { opacity: 0, y },
							show: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.55, ease: [0.19, 1, 0.22, 1] },
							},
						}
			}
			className={cn(className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}
