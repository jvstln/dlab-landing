// Tower structure components
export const TowerBlock = ({
	width,
	height,
	transform,
	fill,
	fillOpacity,
}: {
	width: number;
	height: number;
	transform: string;
	fill: string;
	fillOpacity?: number;
}) => (
	<rect
		width={width}
		height={height}
		transform={transform}
		fill={fill}
		fillOpacity={fillOpacity}
	/>
);

// Tower wall glow components
export const GlowBase = ({
	d,
	fill,
	fillOpacity,
}: {
	d: string;
	fill: string;
	fillOpacity?: number;
}) => <path d={d} fill={fill} fillOpacity={fillOpacity} />;

export const GlowPanel = ({
	width,
	height,
	transform,
	fill,
	fillOpacity,
}: {
	width: number;
	height: number;
	transform: string;
	fill: string;
	fillOpacity?: number;
}) => (
	<rect
		width={width}
		height={height}
		transform={transform}
		fill={fill}
		fillOpacity={fillOpacity}
	/>
);

/** Tower main body */
export const TowerBody = () => (
	<>
		<TowerBlock
			width={54.67}
			height={54.67}
			transform="matrix(0.866025 0.5 -0.866025 0.5 158.87 153.076)"
			fill="#BDCBFD"
		/>
		<TowerBlock
			width={54.67}
			height={156.2}
			transform="matrix(0.866025 0.5 0 1 111.524 180.411)"
			fill="#076035"
			fillOpacity={0.23}
		/>
		<TowerBlock
			width={54.67}
			height={156.2}
			transform="matrix(0.866025 -0.5 0 1 158.87 207.746)"
			fill="#08492A"
			fillOpacity={0.25}
		/>
	</>
);

export const PlatformWall = () => (
	<g opacity="0.1">
		<GlowBase
			d="M168.72 384.726C163.117 387.961 154.032 387.961 148.429 384.726L67.2653 337.866C61.6621 334.631 61.6621 329.386 67.2653 326.151L148.429 279.291C154.032 276.056 163.117 276.056 168.72 279.291L249.884 326.151C255.487 329.386 255.487 334.631 249.884 337.866L168.72 384.726Z"
			fill="#11FFA8"
			fillOpacity={0.27}
		/>
		<GlowPanel
			width={93.72}
			height={273.35}
			transform="matrix(-0.866025 -0.5 0 -1 249.884 326.151)"
			fill="#11FFA8"
			fillOpacity={0.27}
		/>
		<GlowPanel
			width={93.72}
			height={273.35}
			transform="matrix(-0.866025 0.5 0 -1 148.429 279.291)"
			fill="#11FFA8"
			fillOpacity={0.27}
		/>
		<GlowBase
			d="M254.086 332.008C254.086 329.721 252.481 327.65 249.884 326.151V52.8007C252.481 54.2998 254.086 56.3707 254.086 58.6582V332.008Z"
			fill="#11FFA8"
			fillOpacity={0.27}
		/>
		<GlowBase
			d="M168.72 279.291C163.117 276.056 154.032 276.056 148.429 279.291V5.9407C154.032 2.70571 163.117 2.70571 168.72 5.9407V279.291Z"
			fill="url(#paint1_linear_80_199)"
		/>
		<GlowBase
			d="M63.0629 332.008C63.0629 329.721 64.6689 327.65 67.2653 326.151V52.8007C64.6689 54.2998 63.0629 56.3707 63.0629 58.6582V332.008Z"
			fill="#11FFA8"
			fillOpacity={0.27}
		/>
	</g>
);
