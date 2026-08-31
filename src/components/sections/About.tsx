import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

const About = () => {
	
	useGSAP(() => {
		const aboutDesc = SplitText.create("#about-desc", {
			type: "chars, words"
		})
		
		gsap.to(aboutDesc.chars, {
			color: "#0A0A0A",
			scrollTrigger: {
				trigger: "#about",
				start: "top center",
				end: "bottom 70%",
				scrub: 0.5
			},
			stagger: 0.5,
			ease: "power2.inOut",
		})
	}, [])
	
	return (
		<>
			<section id="about" className={"px-4 md:px-12 py-20 flex flex-col lg:flex-row gap-6"}>
				<h2 className={"lg:flex-1 font-jetbrains-mono uppercase font-extrabold"}>About</h2>
				<p id="about-desc" className={"lg:flex-4 text-faded-black text-[26px] sm:text-[30px] lg:text-[36px] font-medium leading-10 lg:leading-12"}>
					"We believe great branding goes beyond a logo — it shows up on every flyer, banner, and uniform your business puts out. As your print and branding partner, we deliver flyers, banners, vests, caps, and promotional materials that build your brand."
				</p>
			</section>
		</>
	);
};

export default About;