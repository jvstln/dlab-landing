import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "What does Dlab do?",
		answer:
			"Dlab is a design and automation agency that helps startups and businesses build intuitive products and automate workflows for scale.",
	},
	{
		question: "Who do you work with?",
		answer:
			"We work with early-stage startups, growing teams, and established companies across fintech, SaaS, Web3, and other industries.",
	},
	{
		question: "What services do you offer?",
		answer:
			"We offer Product & UX Design, AI Automation, Workflow Integration, Design Systems, and Strategic Product Consulting.",
	},
	{
		question: "How does automation help my business?",
		answer:
			"Automation reduces manual work, eliminates errors, speeds up processes, and frees your team to focus on high-value activities.",
	},
	{
		question: "Do you handle both design and automation?",
		answer:
			"Yes! We combine UX design and intelligent automation to create comprehensive solutions that work seamlessly together.",
	},
	{
		question: "How do we get started?",
		answer:
			"Simply reach out through our contact form or email us. We'll schedule a discovery call to understand your needs and propose a tailored solution.",
	},
];

export const Faqs = () => {
	return (
		<section className="bg-white py-20">
			<div className="container mx-auto px-8">
				{/* Header */}
				<div className="mb-16 flex flex-col items-start justify-between gap-12 lg:flex-row">
					<h2 className="max-w-[676px] font-bold text-4xl text-foreground leading-tight lg:text-[54px]">
						We have a Question, We Provide the Answer
					</h2>
					<p className="max-w-[470px] text-base text-card leading-5">
						Got questions? We've answered the most common ones to help you get
						started with confidence.
					</p>
				</div>

				{/* FAQ List */}
				<Accordion type="single" collapsible defaultValue="item-0">
					{faqs.map((faq, i) => (
						<AccordionItem
							key={faq.question}
							value={`item-${i}`}
							className="border-[#CFD1C9] border-b last:border-b"
						>
							<AccordionTrigger className="w-full gap-8 px-6 py-8 text-left transition-colors hover:bg-slate-50 hover:no-underline [&>svg]:size-6">
								<h3 className="flex-1 font-bold text-2xl text-[#1B1139] opacity-88">
									{faq.question}
								</h3>
							</AccordionTrigger>
							<AccordionContent className="px-6 pt-4 pb-8">
								<p className="text-xl leading-[105%] opacity-70">
									{faq.answer}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};
