import { useId } from "react";
import { Reveal } from "./motion/reveal";
import { Button } from "./ui/button";
import {
	Field,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const services = ["UXUI Design", "Development", "Branding", "Automation"];

// Custom input styles to maintain the original appearance
const inputStyles =
	"h-auto rounded-none border-0 border-b border-card bg-transparent px-0 py-6  shadow-none ring-0 transition-colors focus-visible:border-cyan-600 focus-visible:ring-0";

export const ContactCard = () => {
	const id = useId();
	const fullnameId = `${id}-fullname`;
	const companyId = `${id}-company`;
	const emailId = `${id}-email`;
	const phoneId = `${id}-phone`;
	const messageId = `${id}-message`;

	return (
		<section className="relative overflow-hidden bg-foreground py-10 text-background">
			{/* Background Elements */}
			<div
				className="absolute size-103.5 rounded-full opacity-30"
				style={{
					left: "-84px",
					top: "-88px",
					background: "linear-gradient(259.04deg, #00F7FF 0%, #11FFA8 100%)",
					filter: "blur(88.4615px)",
				}}
			/>
			<div
				className="absolute size-135.5 rounded-full opacity-30"
				style={{
					right: "-19px",
					top: "calc(50% - 542px/2 + 66px)",
					background: "linear-gradient(259.04deg, #00F7FF 0%, #11FFA8 100%)",
					filter: "blur(115.812px)",
				}}
			/>

			<div className="container mx-auto flex flex-col items-center gap-11 rounded-2xl bg-[#272726]/35 px-8 py-10 backdrop-blur-lg lg:flex-row lg:gap-20">
				{/* Left: Title */}
				<Reveal className="lg:w-6/12">
					<h2 className="font-bold text-4xl leading-tight lg:text-[54px]">
						Let's 10x Your Output, with a Blend of UX and Automation
					</h2>
				</Reveal>

				{/* Right: Form */}
				<Reveal asChild>
					<form className="w-full lg:w-6/12">
						<h3 className="mb-9 font-bold text-2xl">Let's Talk</h3>

						<FieldGroup className="gap-4">
							{/* Row 1 */}
							<div className="flex flex-col gap-6 md:flex-row">
								<Field className="flex-1">
									<FieldLabel htmlFor={fullnameId} className="sr-only">
										Full name
									</FieldLabel>
									<Input
										id={fullnameId}
										type="text"
										placeholder="Full name"
										className={inputStyles}
									/>
								</Field>
								<Field className="flex-1">
									<FieldLabel htmlFor={companyId} className="sr-only">
										Company
									</FieldLabel>
									<Input
										id={companyId}
										type="text"
										placeholder="Company"
										className={inputStyles}
									/>
								</Field>
							</div>

							{/* Row 2 */}
							<div className="flex flex-col gap-6 md:flex-row">
								<Field className="flex-1">
									<FieldLabel htmlFor={emailId} className="sr-only">
										Email
									</FieldLabel>
									<Input
										id={emailId}
										type="email"
										placeholder="Email"
										className={inputStyles}
									/>
								</Field>
								<Field className="flex-1">
									<FieldLabel htmlFor={phoneId} className="sr-only">
										Phone number
									</FieldLabel>
									<Input
										id={phoneId}
										type="tel"
										placeholder="Phone number"
										className={inputStyles}
									/>
								</Field>
							</div>

							{/* Service Selection */}
							<FieldSet className="pt-4">
								<FieldLegend className="mb-0 font-normal text-sm">
									Choose your service interest (Multiple selection available)
								</FieldLegend>
								<div className="flex flex-wrap gap-2">
									{services.map((service) => (
										<Button
											key={service}
											type="button"
											variant="outline"
											// data-active // Add to indicate service is selected
										>
											{service}
										</Button>
									))}
								</div>
							</FieldSet>

							{/* Message */}
							<Field className="pt-4">
								<FieldLabel htmlFor={messageId} className="sr-only">
									Message
								</FieldLabel>
								<Textarea
									id={messageId}
									placeholder="Tell us about your project"
									rows={5}
									className={`${inputStyles} min-h-0 resize-none`}
								/>
							</Field>

							<Button variant="primary" data-active>
								Send Message
							</Button>
						</FieldGroup>
					</form>
				</Reveal>
			</div>
		</section>
	);
};
