import { useId } from "react";
import { cn } from "@/lib/utils";
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
	"h-auto rounded-none border-0 border-b border-card bg-transparent px-0 py-6 text-card shadow-none ring-0 placeholder:text-card transition-colors focus-visible:border-cyan-600 focus-visible:ring-0";

export const ContactCard = () => {
	const id = useId();
	const fullnameId = `${id}-fullname`;
	const companyId = `${id}-company`;
	const emailId = `${id}-email`;
	const phoneId = `${id}-phone`;
	const messageId = `${id}-message`;

	return (
		<section className="bg-[#00F7FF] py-20">
			<div className="container mx-auto flex flex-col items-center gap-12 px-8 lg:flex-row lg:gap-20">
				{/* Left: Title */}
				<div className="lg:w-5/12">
					<h2 className="font-bold text-4xl text-foreground leading-tight lg:text-[54px]">
						Let's 10x Your Output, with a Blend of UX and Automation
					</h2>
				</div>

				{/* Right: Form */}
				<form className="w-full lg:w-7/12">
					<h3 className="mb-9 font-bold text-2xl text-card">Let's Talk</h3>

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
							<FieldLegend className="mb-0 font-normal text-card text-sm">
								Choose your service interest (Multiple selection available)
							</FieldLegend>
							<div className="flex flex-wrap gap-2">
								{services.map((service) => (
									<Button
										key={service}
										type="button"
										className={cn(
											"border-2 border-card not-hover:bg-none!",
											"data-active:text-transparent! data-active:[background:linear-gradient(to_right,var(--gradient-cyan),var(--gradient-green))_text,linear-gradient(var(--color-card),var(--color-card))]!",
										)}
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

						<Button>Send Message</Button>
					</FieldGroup>
				</form>
			</div>
		</section>
	);
};
