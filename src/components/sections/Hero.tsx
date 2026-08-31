import background_image from "../../assets/images/delivery-man-with-packages.jpg"
import {ArrowRight} from "lucide-react";

export const Hero = () => {
	return (
		<div className={""}>
			<section className={"relative w-full bg-fixed h-screen bg-cover bg-center overflow-hidden"}>
				<img src={background_image} alt="Bio-Iconic printed products" className="w-full h-full object-cover" />
				<div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
				
				<div className=" absolute inset-0 flex flex-col justify-end items-start px-6 py-10">
					<p className={"font-inter-tight text-[130px] text-faded-black font-extrabold leading-none"}>
						Bio-iconic <br/> Premier Solutions
					</p>
					
					<a className={"flex items-center gap-1 rounded-full bg-warm-black text-white font-semibold text-[12px] px-5 py-3"}>
						Request a Quote
						<ArrowRight size={16}/>
					</a>
				</div>
			</section>
		</div>
	);
};