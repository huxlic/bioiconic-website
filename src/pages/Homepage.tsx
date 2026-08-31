import Hero from "../components/sections/Hero.tsx";
import Navbar from "../components/sections/Navbar.tsx";
import About from "../components/sections/About.tsx";

export const Homepage = () => {
	return (
		<>
			<div className="">
				<Navbar/>
				<Hero/>
				<About/>
			</div>
		</>
	);
};