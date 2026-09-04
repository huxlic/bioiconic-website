import { useState } from "react";
import * as React from "react";

interface QuoteFormData {
	name: string;
	email: string;
	phone: string;
	product: string;
	quantity: string;
	deadline: string;
	location: string;
	hasDesign: string;
	message: string;
}

const initialFormData: QuoteFormData = {
	name: "",
	email: "",
	phone: "",
	product: "",
	quantity: "",
	deadline: "",
	location: "",
	hasDesign: "",
	message: "",
};

const RequestQuote = () => {
	const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	
	const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("loading");
		
		try {
			const response = await fetch("/api/quote", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			
			if (!response.ok) throw new Error("Failed to send");
			
			setStatus("success");
			setFormData(initialFormData);
		} catch {
			setStatus("error");
		}
	};
	
	return (
		<section className="min-h-screen w-full flex justify-center items-center py-16 px-4 bg-warm-black">
			<div className="w-full max-w-150 flex flex-col gap-6">
				<div className="text-center">
					<h2 className="text-[32px] sm:text-[40px] font-black text-white">
						Request a Quote
					</h2>
					<p className="text-faded-black mt-2">
						Tell us what you need and we'll get back to you.
					</p>
				</div>
				
				<form onSubmit={handleSubmit} className="flex flex-col gap-5">
					<div className="flex flex-col gap-2">
						<label htmlFor="name" className="font-semibold text-faded-black">
							Full name
						</label>
						<input
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="p-4 rounded-xl bg-warm-cream border border-black/10"
						/>
					</div>
					
					<div className="flex gap-4 flex-col sm:flex-row">
						<div className="flex flex-col gap-2 flex-1">
							<label htmlFor="email" className="font-semibold text-faded-black">
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="p-4 rounded-xl bg-warm-cream border border-black/10"
							/>
						</div>
						<div className="flex flex-col gap-2 flex-1">
							<label htmlFor="phone" className="font-semibold text-faded-black">
								Phone / WhatsApp
							</label>
							<input
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								required
								className="p-4 rounded-xl bg-warm-cream border border-black/10"
							/>
						</div>
					</div>
					
					<div className="flex flex-col gap-2">
						<label htmlFor="product" className="font-semibold text-faded-black">
							Product needed
						</label>
						<select
							id="product"
							name="product"
							value={formData.product}
							onChange={handleChange}
							required
							className="p-4 rounded-xl bg-warm-cream border border-black/10"
						>
							<option value="">Select a product</option>
							<option value="flyers">Flyers & Posters</option>
							<option value="banners">Banners & Signage</option>
							<option value="apparel">Branded Apparel (vests, caps)</option>
							<option value="printing">Custom Printing</option>
							<option value="merchandise">Corporate Merchandise</option>
							<option value="other">Other</option>
						</select>
					</div>
					
					<div className="flex gap-4 flex-col sm:flex-row">
						<div className="flex flex-col gap-2 flex-1">
							<label htmlFor="quantity" className="font-semibold text-faded-black">
								Quantity
							</label>
							<input
								id="quantity"
								name="quantity"
								value={formData.quantity}
								onChange={handleChange}
								required
								className="p-4 rounded-xl bg-warm-cream border border-black/10"
							/>
						</div>
						<div className="flex flex-col gap-2 flex-1">
							<label htmlFor="deadline" className="font-semibold text-faded-black">
								Needed by
							</label>
							<input
								id="deadline"
								name="deadline"
								type="date"
								value={formData.deadline}
								onChange={handleChange}
								className="p-4 rounded-xl bg-warm-cream border border-black/10"
							/>
						</div>
					</div>
					
					<div className="flex flex-col gap-2">
						<label htmlFor="location" className="font-semibold text-faded-black">
							Delivery location (or pickup)
						</label>
						<input
							id="location"
							name="location"
							value={formData.location}
							onChange={handleChange}
							className="p-4 rounded-xl bg-warm-cream border border-black/10"
						/>
					</div>
					
					<div className="flex flex-col gap-2">
						<label htmlFor="hasDesign" className="font-semibold text-faded-black">
							Do you have a design ready?
						</label>
						<select
							id="hasDesign"
							name="hasDesign"
							value={formData.hasDesign}
							onChange={handleChange}
							className="p-4 rounded-xl bg-warm-cream border border-black/10"
						>
							<option value="">Select an option</option>
							<option value="yes">Yes, I have my own design</option>
							<option value="no">No, I need help with design</option>
						</select>
					</div>
					
					<div className="flex flex-col gap-2">
						<label htmlFor="message" className="font-semibold text-faded-black">
							Additional details (optional)
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows={4}
							className="p-4 rounded-xl bg-warm-cream border border-black/10 resize-none"
						/>
					</div>
					
					<button
						type="submit"
						disabled={status === "loading"}
						className="p-4 rounded-xl bg-[#F2872E] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
					>
						{status === "loading" ? "Sending..." : "Send Request"}
					</button>
					
					{status === "success" && (
						<p className="text-green-700 text-center">
							Request sent! We'll get back to you shortly.
						</p>
					)}
					{status === "error" && (
						<p className="text-red-600 text-center">
							Something went wrong. Please try again or reach us on WhatsApp.
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default RequestQuote;