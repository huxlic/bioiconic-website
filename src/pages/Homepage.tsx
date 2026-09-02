import Hero from "../components/sections/Hero.tsx";
import Navbar from "../components/sections/Navbar.tsx";
import About from "../components/sections/About.tsx";
import Services from "../components/sections/Services.tsx";
import KeyStats from "../components/sections/KeyStats.tsx";
import Faqs from "../components/sections/Faqs.tsx";
import Footer from "../components/sections/Footer.tsx";

export const Homepage = () => {
	return (
		<>
			<div className="">
				<Navbar/>
				<Hero/>
				<About/>
				<Services/>
				<KeyStats/>
				<Faqs/>
				<Footer/>
			</div>
		</>
	);
};