import { Button } from "./ui/button";

export const TrustedBy = () => {
	return (
		<section className="bg-white py-12">
			<div className="container mx-auto flex flex-col items-center gap-6 px-8">
				<p className="max-w-[648px] text-center font-light text-card text-sm leading-snug">
					Trusted by startups, founders, and product teams across fintech, SaaS,
					and Web3.
				</p>

				<div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
					{[1, 2, 3, 4].map((i) => (
						<div
							key={i}
							className="flex items-center gap-2 opacity-60 transition-opacity hover:opacity-100"
						>
							<svg
								width="30"
								height="34"
								viewBox="0 0 30 34"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Haya icon</title>
								<path
									d="M6.306 21.433L5.518 17.764H16.169L18.13 21.433H6.306Z"
									fill="#9C9C9B"
								/>
								<path
									d="M16.075 5.425L7.914 4.222L20.1 30.315L29.362 33.018L16.075 5.425Z"
									fill="#9C9C9B"
								/>
								<path
									d="M0 4.441L6.897 0V27.805L0 32.922V4.441Z"
									fill="#9C9C9B"
								/>
							</svg>
							<span className="font-black text-[#9C9C9B] text-xl">Haya</span>
						</div>
					))}

					<Button variant="secondary">+10 More</Button>
				</div>
			</div>
		</section>
	);
};
