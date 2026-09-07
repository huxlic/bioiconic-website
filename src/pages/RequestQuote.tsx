import { useState } from "react";
import * as React from "react";
import Input from "../components/ui/Input.tsx";
import Navbar from "../components/sections/Navbar.tsx";

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
		console.log(formData)
		
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
			
			if (!response.ok) {
				throw new Error("Failed to send")
			}
			
			setStatus("success");
			setFormData(initialFormData);
		} catch {
			setStatus("error");
		}
	};
	
	return (
		<>
			<Navbar show={false}/>
			<section className="min-h-screen w-full flex justify-center items-center py-16 px-4 bg-warm-black">
				<div className="w-full max-w-150 flex flex-col gap-6">
					<div className="text-center">
						<h2 className="font-jetbrains-mono text-[32px] sm:text-[40px] font-black text-white leading-none uppercase">
							Request a Quote
						</h2>
						<p className="text-faded-black mt-2 text-[14px]">
							Tell us what you need and we'll get back to you.
						</p>
					</div>
					
					<form onSubmit={handleSubmit} className="flex flex-col gap-5">
						<Input label={"Full name"} id={"name"} name={"name"} type={"text"} value={formData.name} onChange={handleChange} placeholder={"John Doe"} />
						
						<div className="flex gap-4 flex-col sm:flex-row">
							<Input label={"Email"} id={"email"} name={"email"} type={"email"} value={formData.email} onChange={handleChange} placeholder={"johndoe@gmail.com"} />
							<Input label={"Phone / WhatsApp"} id={"phone"} name={"phone"} type={"tel"} value={formData.phone} onChange={handleChange} />
						</div>
						
						<div className="flex flex-col gap-2">
							<label htmlFor="product" className="text-[14px] font-medium text-faded-black">
								Product needed
							</label>
							<select
								id="product"
								name="product"
								value={formData.product}
								onChange={handleChange}
								required
								className="py-3 px-5 rounded-xl bg-warm-cream border border-black/10 outline-none"
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
							<Input label={"Quantity"} id={"quantity"} name={"quantity"} type={"number"} value={formData.quantity} onChange={handleChange} placeholder={"1xxx"} />
							<Input label={"Needed by"} id={"deadline"} name={"deadline"} type={"date"} value={formData.deadline} onChange={handleChange} />
						</div>
						
						<Input label={"Delivery location (or pickup)"} id={"location"} name={"location"} type={"text"} value={formData.location} onChange={handleChange} />
						
						<div className="flex flex-col gap-2">
							<label htmlFor="hasDesign" className=" text-[14px] font-medium text-faded-black">
								Do you have a design ready?
							</label>
							<select
								id="hasDesign"
								name="hasDesign"
								value={formData.hasDesign}
								onChange={handleChange}
								className="py-3 px-5 rounded-xl bg-warm-cream border border-black/10 outline-none"
							>
								<option value="">Select an option</option>
								<option value="yes">Yes, I have my own design</option>
								<option value="no">No, I need help with design</option>
							</select>
						</div>
						
						<div className="flex flex-col gap-2">
							<label htmlFor="message" className="text-[14px] font-medium text-faded-black">
								Additional details (optional)
							</label>
							<textarea
								placeholder={"And what if..."}
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								rows={4}
								className="py-3 px-5 rounded-xl bg-warm-cream border border-black/10 resize-none outline-none"
							/>
						</div>
						
						<button
							type="submit"
							disabled={status === "loading"}
							className="p-3 rounded-2xl bg-vib-orange text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
						>
							{status === "loading" ? "Sending..." : "Send Request"}
						</button>
						
						{status === "success" && (
							<p className="text-green-700 text-center font-medium">
								Request sent! We'll get back to you shortly.
							</p>
						)}
						{status === "error" && (
							<p className="text-red-600 text-center font-medium">
								Something went wrong. Please try again or reach us on WhatsApp.
							</p>
						)}
					</form>
				</div>
			</section>
		</>
	);
};

export default RequestQuote;