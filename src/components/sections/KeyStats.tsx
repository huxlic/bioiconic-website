import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import gsap from "gsap";

const KeyStats = () => {
	
	useGSAP(() => {
		const keystatDesc = SplitText.create("#keystat-desc", {
			type: "chars, words"
		})
		
		gsap.to(keystatDesc.chars, {
			color: "#0A0A0A",
			scrollTrigger: {
				trigger: "#key-stat",
				start: "top center",
				end: "bottom 70%",
				scrub: 0.5
			},
			stagger: 0.5,
			ease: "power2.inOut",
		})
	}, [])
	
	return (
		<section id={"key-stat"} className={"px-4 md:px-12 py-20"}>
			<div className={"flex flex-col lg:flex-row gap-6"}>
				<h2 className={"lg:flex-1 font-jetbrains-mono uppercase font-extrabold"}>key stats</h2>
				<p id="keystat-desc"
				   className={"lg:flex-4 text-faded-black text-[26px] sm:text-[30px] lg:text-[36px] font-medium leading-10 lg:leading-12"}>
					"From flyers to banners to branded apparel, every piece we deliver is built to make your brand seen,
					remembered, and trusted." </p>
			</div>
			
			<div className="">
			
			</div>
		</section>
	)
}
export default KeyStats
