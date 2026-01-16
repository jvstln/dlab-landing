import { Link, linkOptions } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const links = linkOptions([
	{ label: "Works", to: "/" },
	{ label: "Services", to: "." },
	{ label: "Projects", to: "." },
	{ label: "FAQ", to: "." },
]);

export default function Footer() {
	return (
		<footer className="bg-foreground py-20">
			<div className="container mx-auto space-y-14 px-8">
				{/* Main Text */}
				<h2 className="max-w-5xl font-normal text-3xl text-white lg:text-[34px]">
					Leveraging UX Principles, AI automation and strategic business models
					to drive innovation and sustainable business growth.
				</h2>

				{/* Email & Nav */}
				<div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
					<a
						href="mailto:dlab@gmail.com"
						className="bg-linear-to-r from-gradient-cyan to-gradient-green bg-clip-text font-bold text-2xl text-transparent underline transition-opacity hover:opacity-80"
					>
						dlab@gmail.com
					</a>

					<nav className="flex flex-wrap gap-4">
						{links.map((link) => (
							<Link
								key={link.label}
								{...link}
								className="px-8 py-3 text-[#CACAC8] transition-colors hover:text-white"
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>

				<DLabText />
			</div>
		</footer>
	);
}

const DLabText = (props: React.ComponentProps<"svg">) => (
	<svg
		viewBox="0 0 1354 364"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
		className={cn("w-full text-white", props.className)}
	>
		<title>DLab text</title>
		<path
			d="M139.193 18.5879C170.125 18.5879 198.021 24.8032 222.882 37.2337C248.033 49.6642 267.835 67.8764 282.289 91.8703C296.743 115.575 303.97 143.905 303.97 176.86C303.97 209.816 296.743 238.29 282.289 262.284C267.835 286.278 248.177 304.635 223.316 317.354C198.455 329.785 170.414 336 139.193 336H33.3889V18.5879H139.193ZM131.821 282.231C165.933 282.231 192.095 273.125 210.307 254.913C228.519 236.701 237.626 210.683 237.626 176.86C237.626 143.616 228.375 117.888 209.874 99.6755C191.661 81.1742 165.644 71.9236 131.821 71.9236H96.2643V282.231H131.821Z"
			fill="currentColor"
		/>
		<path
			d="M401 18.5879H463.875V279.629H608.272V336H401V18.5879Z"
			fill="currentColor"
		/>
		<path
			d="M874.52 18.5879L1002.87 336H936.095L908.343 263.585H784.76L757.876 336H695L819.45 18.5879H874.52ZM887.963 209.816L845.468 98.3746L804.273 209.816H887.963Z"
			fill="currentColor"
		/>
		<path
			d="M1263.83 171.223C1298.81 183.654 1316.3 208.081 1316.3 244.506C1316.3 273.125 1305.75 295.529 1284.64 311.717C1263.83 327.906 1234.49 336 1196.62 336H1070V18.5879H1184.91C1218.73 18.5879 1246.2 26.3931 1267.3 42.0036C1288.69 57.3249 1299.39 79.0061 1299.39 107.047C1299.39 136.244 1287.53 157.636 1263.83 171.223ZM1131.57 73.2245V148.241H1178.84C1195.9 148.241 1209.34 144.772 1219.17 137.834C1229.28 130.607 1234.34 121.068 1234.34 109.215C1234.34 97.6519 1229.43 88.8349 1219.6 82.7642C1209.77 76.4044 1196.18 73.2245 1178.84 73.2245H1131.57ZM1191.41 281.364C1210.49 281.364 1225.09 277.895 1235.21 270.957C1245.62 264.019 1250.82 254.19 1250.82 241.47C1250.82 228.751 1245.62 218.777 1235.21 211.55C1225.09 204.323 1210.35 200.71 1190.98 200.71H1131.57V281.364H1191.41Z"
			fill="currentColor"
		/>
	</svg>
);
