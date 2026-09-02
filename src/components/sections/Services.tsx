import services from "../../data/services.ts";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useState} from "react";

import flyers from "../../assets/images/flyers.jpg";

gsap.registerPlugin(ScrollTrigger)



const Services = () => {
	const [serviceImage, setServiceImage] = useState<string | null>(flyers);
	
	useGSAP(() => {
	const serviceList = gsap.utils.toArray(".service");
	gsap.from(serviceList, {
		yPercent: 50,
		opacity: 0,
		stagger: 0.05,
		scrollTrigger: {
			trigger: "#services-list",
		}
		
	})
		
	}, [])
	
	return (
		<section id="service" className={"bg-warm-black rounded-b-2xl px-4 md:px-12 py-20 flex flex-col gap-14"}>
			<div className={"flex flex-col lg:flex-row gap-6"}>
				<h2 className={"lg:flex-1 font-jetbrains-mono uppercase font-extrabold text-white"}>Service</h2>
				<p className={"lg:flex-4 text-white leading-none text-[26px] sm:text-[50px] lg:text-[60px] font-medium"}>
					Ideas to impressions
				</p>
			</div>
			
			<div className={"w-full flex"}>
				<div id="services-list" className="relative w-full lg:w-[60%]">
					{services.map(({id, name, image}) => (
						<div onMouseOver={() => setServiceImage(image)} key={id} className={"service flex items-center justify-between gap-6 py-6 text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-faded-black hover:text-white font-semibold border-b transition-colors duration-500 cursor-pointer"}>
							<span>0{id}.</span>
							<p>{name}</p>
						</div>
					))}
				</div>
				<div className={"hidden lg:block lg:w-[40%] px-8 overflow-hidden h-max"}>
					<div style={{backgroundImage: `url(${serviceImage})`}} className="h-50 rounded-2xl bg-cover transition-all"/>
				</div>
				
			</div>
		</section>
	)
}
export default Services
