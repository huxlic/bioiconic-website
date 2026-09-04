import works from "../data/works.ts";
import Footer from "../components/sections/Footer.tsx";
import Navbar from "../components/sections/Navbar.tsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorksPage = () => {
	useGSAP(() => {
		const projects = gsap.utils.toArray(".project");
		
		gsap.from(projects, {
			yPercent: 20,
			opacity: 0,
			stagger: {
				each: 0.1,
				from: "start"
			},
			scrollTrigger: {
				trigger: ".projects",
				start: "top center",
			},
			ease: "power1.inOut"
		})
	}, [])
	return (
		<div>
			<Navbar show={false} />
			<section id={"works"} className={"px-4 md:px-12 pt-10 pb-20 flex flex-col gap-10"}>
				<div className={"flex flex-col lg:flex-row gap-6"}>
					<div className="lg:flex-1 flex gap-1">
						<span className={"bg-vib-orange p-2 rounded-full h-max"}></span>
						<h2 className={"font-jetbrains-mono uppercase font-extrabold"}>projects</h2>
					</div>
					<p
						className={"lg:flex-4 leading-none text-[26px] sm:text-[50px] lg:text-[60px] font-medium"}>
						Work We're Proud Of
					</p>
				</div>
				
				<div className="projects columns-3">
					{works.map(({id, title, image}) => (
						<div key={id} className={"project flex flex-col gap-1 mb-4 break-inside-avoid"}>
							<div
								className="overflow-hidden rounded-2xl md:rounded-3xl"
							>
								<img src={image} alt={title} className="w-full h-auto hover:scale-105 transition-transform duration-500"/>
							</div>
							<p className={"text-[14px] md:text-[16px] lg:text-[22px] tracking-tighter font-semibold"}>{title}</p>
						</div>
					))}
				</div>
			</section>
			
			<Footer/>
		</div>
	)
}
export default WorksPage
