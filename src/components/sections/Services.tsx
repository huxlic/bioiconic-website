import services from "../../data/services.ts";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useState} from "react";

gsap.registerPlugin(ScrollTrigger)



const Services = () => {
	const servicesImage = services.map(service => service.image);
	const [activeImage, setActiveImage] = useState(0);
	
	const translate = (index: number) => {
		return setActiveImage(index * 200);
	}
	
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
		<section id="services" className={"bg-warm-black rounded-b-3xl px-4 md:px-12 py-20 flex flex-col gap-14"}>
			<div className={"flex flex-col lg:flex-row gap-6"}>
				<div className="lg:flex-1 flex gap-1">
					<span className={"bg-vib-orange p-2 rounded-full h-max"}></span>
					<h2 className={"font-jetbrains-mono uppercase font-extrabold text-white"}>Service</h2>
				</div>
				<p className={"lg:flex-4 text-white leading-none text-[26px] sm:text-[50px] lg:text-[60px] font-medium"}>
					Ideas to impressions
				</p>
			</div>
			
			<div className={"w-full flex"}>
				<div id="services-list" className="relative w-full lg:w-[60%]">
					{services.map(({id, name}, i) => (
						<div onMouseEnter={() => translate(i)} key={id} className={"service flex items-center justify-between gap-6 py-6 text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-faded-black hover:text-[#F2872E] font-semibold border-b transition-colors duration-500 cursor-pointer"}>
							<span>0{id}.</span>
							<p>{name}</p>
						</div>
					))}
				</div>
				<div className={"hidden lg:block lg:w-[40%] px-8 overflow-hidden h-50"}>
					<div style={{transform: `translateY(-${activeImage}px)`}} className={"h-max transition-transform ease-in-out"}>{servicesImage.map((image, index) => (
						<div key={index} style={{backgroundImage: `url(${image})`}}
						     className="rounded-2xl h-50 bg-cover transition-all"/>
					))}</div>
				</div>
			</div>
		</section>
	)
}
export default Services
