// Platform base components
const PlatformHexagon = () => (
	<g filter="url(#filter0_d_80_199)">
		<path
			d="M148.599 278.231C154.389 274.888 163.777 274.888 169.566 278.231L266.963 334.463C272.753 337.806 272.753 343.226 266.963 346.569L169.567 402.801C163.777 406.144 154.389 406.144 148.599 402.801L51.2025 346.569C45.4125 343.226 45.4125 337.806 51.2025 334.463L148.599 278.231Z"
			fill="#BDCBFD"
		/>
	</g>
);

const MainBase = () => (
	<path
		d="M148.599 270.421C154.389 267.078 163.777 267.078 169.566 270.421L266.963 326.653C272.753 329.996 272.753 335.416 266.963 338.759L169.567 394.991C163.777 398.334 154.389 398.334 148.599 394.991L51.2025 338.759C45.4125 335.416 45.4125 329.996 51.2025 326.653L148.599 270.421Z"
		fill="#1B2725"
	/>
);

const PlatformEdge = ({
	transform,
	fill,
	fillOpacity,
}: {
	transform: string;
	fill: string;
	fillOpacity?: number;
}) => (
	<rect
		width="112.464"
		height="7.81"
		transform={transform}
		fill={fill}
		fillOpacity={fillOpacity}
	/>
);

const PlatformSide = ({
	d,
	fill,
	fillOpacity,
}: {
	d: string;
	fill: string;
	fillOpacity?: number;
}) => <path d={d} fill={fill} fillOpacity={fillOpacity} />;

export const PlatformBase = () => (
	<>
		<PlatformHexagon />
		<MainBase />
		<PlatformEdge
			transform="matrix(0.866025 0.5 0 1 51.2025 338.759)"
			fill="#09B475"
			fillOpacity={0.27}
		/>
		<PlatformEdge
			transform="matrix(0.866025 -0.5 0 1 169.567 394.991)"
			fill="#069661"
			fillOpacity={0.27}
		/>
		<PlatformSide
			d="M46.86 332.706C46.86 335.07 48.5195 337.21 51.2025 338.759V346.569C48.5195 345.02 46.86 342.88 46.86 340.516V332.706Z"
			fill="#09B475"
			fillOpacity={0.27}
		/>
		<PlatformSide
			d="M148.599 394.991C154.389 398.334 163.777 398.334 169.567 394.991V402.801C163.777 406.144 154.389 406.144 148.599 402.801V394.991Z"
			fill="url(#paint0_linear_80_199)"
		/>
		<PlatformSide
			d="M271.306 332.706C271.306 335.07 269.646 337.21 266.963 338.759V346.569C269.646 345.02 271.306 342.88 271.306 340.516V332.706Z"
			fill="#069661"
			fillOpacity={0.27}
		/>
	</>
);
