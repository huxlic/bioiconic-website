import services from "../../data/services.ts";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Services = () => {
	
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
			
			<div className={"w-full"}>
				<div id="services-list" className="relative w-full lg:w-[60%]">
					{services.map(({id, name, image}) => (
						<div key={id} className={"service flex items-center justify-between gap-6 py-6 text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-faded-black hover:text-white font-semibold border-b transition-colors duration-500"}>
							<span>0{id}.</span>
							<p>{name}</p>
						</div>
					))}
				{/*<div style={{backgroundImage: `url(${image})`}} className="w-[40%]">*/}
				
				{/*</div>*/}
				</div>
				
			</div>
		</section>
	)
}
export default Services
