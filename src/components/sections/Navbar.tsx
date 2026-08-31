import navLinks from "../../data/navLinks.ts";

export const Navbar = () => {
	return (
		<>
			<header className={"fixed top-0 w-full py-3 px-8 z-50 font-jetbrains-mono bg-white/30 backdrop-blur-lg rounded-b-2xl "}>
				<nav className={"flex items-center justify-between"}>
					<a className={"text-[22px] bg-warm-black text-faded-black font-black tracking-tighter"} href="/">bio-iconic<span className={"text-reddish-browm text-[25px]"}>.</span> </a>
					
					<div className={"hidden md:flex items-center text-warm-black md:gap-8 lg:gap-16"}>
						{navLinks.map(({label, ref}) => (
							<a className={"uppercase leading-none text-[12px] font-semibold border-b-2 border-transparent hover:border-b-warm-black border-dotted transition-all duration-200"}
							   href={ref} key={label}>
								{label}
							</a>
						))}
					</div>
					
					<div className="hidden md:flex items-center gap-4 tracking-tighter text-[12px]">
						<a href="" className={"bg-faded-black hover:bg-faded-black/80 px-5 py-3 rounded-full uppercase font-semibold"}>
							request a quote
						</a>
						
						<a href="" className={"bg-warm-black hover:bg-warm-black/80 px-5 py-3 rounded-full uppercase font-semibold text-white"}>
							contact me
						</a>
					</div>
					
					<div className="relative group flex flex-col items-center justify-center gap-1 md:hidden bg-warm-black rounded-full w-10 h-10">
						<div className={"absolute w-5 h-px bg-white rounded-full group-hover:w-4 group-hover:-rotate-45 -translate-y-0.5 group-hover:translate-y-0 transition-transform"}></div>
						<div className={"absolute w-4 h-px bg-white rounded-full group-hover:rotate-45 translate-y-0.5 group-hover:translate-y-0 transition-transform"}></div>
					</div>
				
				</nav>
			</header>
		</>
	);
};