import { HeroAnimation } from "./hero-animation";
import { Reveal, Stagger, StaggerItem } from "./motion/reveal";
import { Button } from "./ui/button";

export const Hero = () => {
	return (
		<section className="flex grow relative min-h-screen flex-col px-4 py-10 lg:px-9">
			<div className="mt-24 flex w-full absolute inset-0 pointer-events-none flex-1 items-center justify-center opacity-50">
				<HeroAnimation className="h-full w-auto" />
			</div>
			<div className="mt-auto flex items-center justify-between gap-6">
				<Stagger className="z-10 max-w-[663px] space-y-6">
					<StaggerItem>
						<h1 className="font-lato text-3xl text-white leading-[1.47] md:text-5xl lg:text-[46px]">
							
							<span className="font-black">We Design, Build & Automate Systems </span> <br />
							<span className="font-light">That Scale Your Business On Autopilot.</span>
						</h1>
					</StaggerItem>
					<StaggerItem>
						<p className="max-w-[600px] text-base text-muted-foreground leading-5">
							We help early-stage and scaling teams build user-friendly products
							and remove manual work using smart automation.
						</p>
					</StaggerItem>
					<StaggerItem>
						<Button variant="primary" data-active>
							Let's Talk
						</Button>
					</StaggerItem>
				</Stagger>

				<Reveal
					delay={0.1}
					className="z-10 hidden max-w-[325px] flex-col items-start gap-5 md:flex"
				>
					<p className="text-base text-muted-foreground leading-5">
						We build HAYA, An AI Onchain UX Intelligence for Growth and
						Adaptability
					</p>
					<Button variant="primary">Audit with Haya</Button>
				</Reveal>
			</div>
		</section>
	);
};
