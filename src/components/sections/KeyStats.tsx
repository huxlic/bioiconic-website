import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import stats from "../../data/stats.ts";
import achievements from "../../assets/images/achievements.jpg"

gsap.registerPlugin(SplitText, ScrollTrigger);

const KeyStats = () => {
	
	useGSAP(() => {
		const keystatDesc = SplitText.create("#keystat-desc", {
			type: "chars, words"
		})
		
		const stats = gsap.utils.toArray(".stat");
		
		gsap.to(keystatDesc.chars, {
			color: "#0A0A0A",
			scrollTrigger: {
				trigger: "#key-stats",
				start: "top bottom",
				end: "top top",
				scrub: 0.5
			},
			stagger: 0.5,
			ease: "power2.inOut",
		})
		
		gsap.from(stats, {
			opacity: 0,
			yPercent: 50,
			stagger: 0.2,
			scrollTrigger: {
				trigger: "#stats-holder",
				start: "top bottom",
			}
		})
		gsap.from("#achievement-image", {
			opacity: 0,
			scrollTrigger: {
				trigger: "#achievement-image",
				start: "top bottom",
			}
		})
		
	}, [])
	
	return (
		<section id={"key-stats"} className={"px-4 md:px-12 py-20 flex flex-col gap-10"}>
			<div className={"flex flex-col lg:flex-row gap-6"}>
				<div className="lg:flex-1 flex gap-1">
					<span className={"bg-vib-orange p-2 rounded-full h-max"}></span>
					<h2 className={"font-jetbrains-mono uppercase font-extrabold"}>key stats</h2>
				</div>
				<p id="keystat-desc"
				   className={"lg:flex-4 text-faded-black text-[26px] sm:text-[30px] lg:text-[36px] font-medium leading-10 lg:leading-12"}>
					"From flyers to banners to branded apparel, every piece we deliver is built to make your brand seen,
					remembered, and trusted." </p>
			</div>
			
			<div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
				<div id="stats-holder" className="lg:flex-1 grid grid-cols-2 gap-10">
					{stats.map(({id, number, description}) => (
						<div key={id} className={"stat"}>
							<p className={"text-[50px] md:text-[60px] leading-none font-bold font-jetbrains-mono"}>{number}</p>
							<span className={"text-[14px] md:text-[16px] text-faded-black"}>{description}</span>
						</div>
					))}
				</div>
				
				<div id="achievement-image" className="lg:flex-1 h-80 bg-cover rounded-2xl grayscale"
				     style={{backgroundImage: `url(${achievements})`}}></div>
			</div>
		</section>
	)
}
export default KeyStats
