import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import type * as React from "react";
import { cn } from "@/lib/utils";

// Define the color and appearance types for type safety
// type ColorKey = VariantProps<typeof buttonVariants>["color"];
// type AppearanceKey = VariantProps<typeof buttonVariants>["appearance"];
// type VariantKey = `${ColorKey}-${AppearanceKey}`;

/**
 * Button component with separated color and appearance variants.
 *
 * Usage options:
 * 1. Separate props: <Button color="primary" appearance="outline" />
 * 2. Combined variant: <Button variant="primary-outline" />
 * 3. Gradient button: <Button color="gradient" /> (always solid appearance)
 */
const buttonVariants = cva(
	"inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-all focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:active:scale-[0.98] motion-safe:hover:scale-[1.02] [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			// Color defines the CSS variables for --bg, --fg, and --border
			// color: {
			// 	primary:
			// 		"[--bg:var(--color-primary)] [--border:var(--color-primary)] [--fg:var(--color-primary-foreground)]",
			// 	secondary:
			// 		"[--bg:var(--color-secondary)] [--border:var(--color-secondary)] [--fg:var(--color-secondary-foreground)]",
			// 	destructive:
			// 		"[--bg:var(--color-destructive)] [--border:var(--color-destructive)] [--fg:white]",
			// 	muted:
			// 		"[--bg:var(--color-muted)] [--border:var(--color-border)] [--fg:var(--color-muted-foreground)]",
			// 	accent:
			// 		"[--bg:var(--color-accent)] [--border:var(--color-accent)] [--fg:var(--color-accent-foreground)]",
			// 	// Gradient uses direct styles instead of CSS variables
			// 	gradient:
			// 		"rounded-full bg-[linear-gradient(259deg,#00F7FF_0%,#11FFA8_100%)] font-semibold text-[#1C1C1B] hover:opacity-90",
			// },
			// Appearance defines how the colors are applied
			// appearance: {
			// 	solid: "bg-(--bg) text-(--fg) shadow-sm hover:bg-(--bg)/90",
			// 	outline:
			// 		"border border-border bg-transparent text-(--bg) hover:bg-(--bg) hover:text-(--fg)",
			// 	ghost: "bg-transparent text-(--bg) hover:bg-(--bg)/10",
			// 	link: "h-auto bg-transparent p-0 text-(--bg) underline-offset-4 hover:underline",
			// 	soft: "bg-(--bg)/15 text-(--bg) hover:bg-(--bg)/25",
			// },
			variant: {
				// primary:
				// 	"rounded-full bg-[linear-gradient(259deg,#00F7FF_0%,#11FFA8_100%)] font-semibold text-[#1C1C1B] hover:opacity-90",
				primary:
					"button-primary-color rounded-full font-semibold hover:opacity-90",
				secondary:
					"rounded-full bg-muted-foreground font-semibold hover:opacity-90",
				outline:
					"rounded-full border-2 border-current bg-transparent font-semibold shadow-sm hover:bg-accent hover:text-accent-foreground",
			},
			size: {
				default: "h-12 px-7 py-2 has-[>svg]:px-3",
				sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				xl: "h-12 rounded-lg px-8 text-base has-[>svg]:px-6",
				icon: "size-9",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			// color: "primary",
			// appearance: "solid",
			variant: "primary",
			size: "default",
		},
	},
);

// Helper to parse variant string into color and appearance
// function parseVariant(variant: VariantKey): {
// 	color: ColorKey;
// 	appearance: AppearanceKey;
// } {
// 	const parts = variant.split("-") as [ColorKey, AppearanceKey];
// 	return { color: parts[0], appearance: parts[1] };
// }

// type ButtonProps = React.ComponentProps<"button"> &
// 	Omit<VariantProps<typeof buttonVariants>, "color" | "appearance"> & {
// 		asChild?: boolean;
// 	} & ( // Either use variant OR color/appearance, not both
// 		| { variant: VariantKey; color?: never; appearance?: never }
// 		| { variant?: never; color?: ColorKey; appearance?: AppearanceKey }
// 	);

type ButtonProps = React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({
	className,
	// color: colorProp,
	// appearance: appearanceProp,
	variant,
	size = "default",
	asChild = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			data-size={size}
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

const MotionButton = motion.create(Button);

export { Button, buttonVariants, MotionButton };
