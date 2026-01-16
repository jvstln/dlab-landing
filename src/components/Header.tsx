import { Link, linkOptions } from "@tanstack/react-router";
import { Button } from "./ui/button";

const links = linkOptions([
	{ label: "Works", to: "/" },
	{ label: "Services", to: "." },
	{ label: "Projects", to: "." },
	{ label: "FAQ", to: "." },
]);

export const Header = () => {
	return (
		<nav className="fixed inset-x-0 top-0 z-50 h-16 bg-foreground text-background">
			<div className="container mx-auto flex h-full items-center justify-between px-4">
				<Link to="/" className="flex items-center gap-2">
					<img src="/brand/logo.svg" alt="DLab Agency Logo" />
				</Link>

				{/* Nav Links */}
				<div className="hidden items-center gap-1 md:flex">
					{links.map((link) => (
						<Link
							key={link.label}
							{...link}
							className="rounded-lg px-6 py-2 text-[#CACAC8] text-sm transition-colors hover:bg-white/5 hover:text-white"
						>
							{link.label}
						</Link>
					))}
				</div>

				<Button variant="primary">Let's Talk</Button>
			</div>
		</nav>
	);
};
