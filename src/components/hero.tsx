import { Button } from "./ui/button";

export const Hero = () => {
	return (
		<section className="grid grow flex-col px-4 lg:px-9">
			<div className="mt-auto mb-18.75 flex items-center justify-between gap-6">
				<div className="z-10 max-w-[663px] space-y-6">
					<h1 className="font-lato text-5xl text-white leading-[1.47] lg:text-[46px]">
						<span className="font-black">We Design Products and </span>
						<span className="font-light">Automate Growth for Startups</span>
					</h1>
					<p className="max-w-[600px] text-base text-muted-foreground leading-5">
						We help early-stage and scaling teams build user-friendly products
						and remove manual work using smart automation.
					</p>
					<Button variant="primary" data-active>
						Let's Talk
					</Button>
				</div>

				<div className="z-10 hidden max-w-[325px] flex-col items-start gap-5 md:flex">
					<p className="text-base text-muted-foreground leading-5">
						We build HAYA, An AI Onchain UX Intelligence for Growth and
						Adaptability
					</p>
					<Button variant="primary">Audit with Haya</Button>
				</div>
			</div>
		</section>
	);
};
