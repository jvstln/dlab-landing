import { createFileRoute } from "@tanstack/react-router";
import { ContactCard } from "@/components/contact-card";
import { Faqs } from "@/components/faqs";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Reveal } from "@/components/motion/reveal";
import { Services } from "@/components/services";
import { TrustedBy } from "@/components/trusted-by";
import { WeBuildHaya } from "@/components/we-build-haya";
import { WhatWeBuild } from "@/components/what-we-build";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div>
			<div
				className="relative flex h-full max-h-screen w-full flex-col"
				style={{
					background: `
					repeating-linear-gradient(
						30deg,
						transparent,
						transparent 20px,
						color-mix(in srgb, var(--gradient-cyan) 8%, transparent) 20px,
						color-mix(in srgb, var(--gradient-cyan) 8%, transparent) 21px
					),
					repeating-linear-gradient(
						-30deg,
						transparent,
						transparent 20px,
						color-mix(in srgb, var(--gradient-green) 8%, transparent) 20px,
						color-mix(in srgb, var(--gradient-green) 8%, transparent) 21px
					),
					var(--color-foreground)
				`,
				}}
			>
				<Header />
				<Hero />
			</div>

			<Reveal>
				<TrustedBy />
			</Reveal>
			<Reveal>
				<WhatWeBuild />
			</Reveal>
			<Reveal>
				<WeBuildHaya />
			</Reveal>
			<Reveal>
				<Services />
			</Reveal>
			<Reveal>
				<HowItWorks />
			</Reveal>
			<Reveal>
				<Faqs />
			</Reveal>
			<Reveal>
				<ContactCard />
			</Reveal>
			<Reveal>
				<Footer />
			</Reveal>
		</div>
	);
}
