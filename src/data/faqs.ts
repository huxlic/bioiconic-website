export interface Faq {
	
	id: number;
	question: string;
	answer: string;
}

const faqs: Faq[] = [
	{
		id: 1,
		question: "What kind of products can you help with?",
		answer:
			"Flyers, banners, vests, caps, and other branded promotional materials — from single-item orders to full branded merchandise for your team or event.",
	},
	{
		id: 2,
		question: "Do I need my own design, or can you help with that?",
		answer:
			"If you already have a design, we work directly with it. If not, let us know what you need and we'll guide you through getting something ready for print.",
	},
	{
		id: 3,
		question: "How long does an order typically take?",
		answer:
			"Turnaround depends on the product and quantity — reach out with your specific request and we'll give you an accurate timeline before you commit.",
	},
	{
		id: 4,
		question: "Is there a minimum order quantity?",
		answer:
			"This varies by product. Send us your requirements and we'll let you know what works best for your order size.",
	},
	{
		id: 5,
		question: "How do I get a quote?",
		answer:
			"Fill out the quote request form with your product, quantity, and deadline — we'll get back to you with pricing and next steps.",
	},
	{
		id: 6,
		question: "Do you deliver, or do I need to pick up?",
		answer:
			"Let us know your location when requesting a quote, and we'll confirm delivery or pickup options for your order.",
	},
];

export default faqs;