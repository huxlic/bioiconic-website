import background_image from "../../assets/images/delivery-man-with-packages.jpg"
import {ArrowRight} from "lucide-react";

export const Hero = () => {
	return (
		<div className={"px-2"}>
			<section className={"relative w-full bg-fixed h-screen bg-cover bg-center overflow-hidden rounded-lg"}>
				<img src={background_image} alt="Bio-Iconic printed products"
				     className="grayscale w-full h-full object-cover"/>
				<div className="absolute inset-0 bg-black/40 backdrop-blur-xs"/>
				
				<div className=" absolute inset-0 flex flex-col items-start px-6 py-10">
					<div>
						<h1 className={"font-jetbrains-mono tracking-tighter text-[150px] leading-none font-bold text-white"}>Bio-iconic </h1>
						<p className={"text-white text-[24px] leading-none"}>Premier Solutions</p>
					</div>
					
					<a className={"flex items-center gap-1 rounded-full bg-warm-black text-white font-semibold text-[12px] px-5 py-3"}>
						Request a Quote
						<ArrowRight size={16}/>
					</a>
				</div>
			</section>
		</div>
	);
};