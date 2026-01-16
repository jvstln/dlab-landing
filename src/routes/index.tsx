import { createFileRoute } from "@tanstack/react-router";
import { ContactCard } from "@/components/contact-card";
import { Faqs } from "@/components/faqs";
import { FeaturedProjects } from "@/components/featured-projects";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ProblemSolution } from "@/components/problem-solution";
import { Services } from "@/components/services";
import { TrustedBy } from "@/components/trusted-by";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div>
			<div
				className="relative flex h-screen w-full flex-col"
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

			<TrustedBy />
			<ProblemSolution />
			<FeaturedProjects />
			<Services />
			<HowItWorks />
			<Faqs />
			<ContactCard />
			<Footer />
		</div>
	);
}
