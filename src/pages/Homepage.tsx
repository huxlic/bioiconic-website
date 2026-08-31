import Hero from "../components/sections/Hero.tsx";
import Navbar from "../components/sections/Navbar.tsx";
import About from "../components/sections/About.tsx";
import Services from "../components/sections/Services.tsx";

export const Homepage = () => {
	return (
		<>
			<div className="">
				<Navbar/>
				<Hero/>
				<About/>
				<Services/>
			</div>
		</>
	);
};