import navLinks from "../../data/navLinks.ts";

const Navbar = () => {
	return (
		<>
			<header className={"w-full py-3 px-2 md:px-8 z-50 font-jetbrains-mono"}>
				<nav className={"flex items-center justify-between "}>
					<a className={"text-[22px] bg-vib-orange/50 text-olive-green font-black tracking-tighter"} href="/">bio-iconic<span className={"text-vib-orange text-[25px]"}>.</span> </a>
					
					<div className={"hidden md:flex items-center text-warm-black md:gap-8"}>
						{navLinks.map(({label, ref}) => (
							<a className={"uppercase leading-none text-[12px] hover:text-olive-green font-semibold border-b-2 border-transparent hover:border-b-warm-black border-dotted transition-all duration-200"}
							   href={ref} key={label}>
								{label}
							</a>
						))}
					</div>
					
					<div className="hidden md:flex items-center gap-4 tracking-tighter text-[12px]">
						
						<a href="#footer" className={"bg-olive-green hover:bg-olive-green/80 px-5 py-3 rounded-full uppercase font-semibold text-white"}>
							contact me
						</a>
					</div>
					
					<div className="relative group flex flex-col items-center justify-center gap-1 md:hidden h-8 w-8">
						<div className={"absolute w-6 h-0.5 bg-warm-black rounded-full group-hover:-rotate-45 -translate-y-0.5 group-hover:translate-y-0 transition-transform"}></div>
						<div className={"absolute w-6 h-0.5 bg-warm-black rounded-full group-hover:rotate-45 translate-y-0.5 group-hover:translate-y-0 transition-transform"}></div>
					</div>
				
				</nav>
			</header>
		</>
	);
};

export default Navbar;