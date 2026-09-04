import navLinks from "../../data/navLinks.ts";
import {useState} from "react";

const Navbar = ({show}: {show: boolean}) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	
	return (
		<>
			<header
				className={`w-full bg-[#E4E4E4] ${isNavOpen ? "h-[90vh]" : "h-auto"} flex flex-col gap-10 fixed md:relative py-3 px-2 md:px-8 z-50 font-jetbrains-mono`}>
				<nav className={"flex items-center justify-between "}>
					<a className={"text-[22px] bg-vib-orange/50 text-olive-green font-black tracking-tighter"} href="/">bio-iconic<span
						className={"text-vib-orange text-[25px]"}>.</span> </a>
					
					{show && (<>
						<div className={"hidden md:flex items-center text-warm-black md:gap-8"}>
							{navLinks.map(({label, ref}) => (
								<a className={"uppercase leading-none text-[12px] hover:text-olive-green font-semibold border-b-2 border-transparent hover:border-b-warm-black border-dotted transition-all duration-200"}
								   href={ref} key={label}>
									{label}
								</a>
							))}
						</div>
						
						<div className="hidden md:flex items-center gap-4 tracking-tighter text-[12px]">
							
							<a href="#footer"
							   className={"bg-olive-green hover:bg-olive-green/80 px-5 py-3 rounded-full uppercase font-semibold text-white"}>
								contact me
							</a>
						</div>
						
						<button onClick={() => setIsNavOpen(!isNavOpen)}
						        className="relative group flex flex-col items-center justify-center gap-1 md:hidden h-8 w-8 cursor-pointer">
							{
								isNavOpen ? (
									<>
									<span
										className={"absolute w-7 h-0.75 bg-vib-orange rounded-full rotate-45"}></span>
										<span
											className={"absolute w-7 h-0.75 bg-vib-orange rounded-full -rotate-45"}></span>
									</>
								) : (
									<>
									<span
										className={"absolute w-7 h-0.75 bg-vib-orange rounded-full -translate-y-0.5 "}></span>
										<span
											className={"absolute w-7 h-0.75 bg-vib-orange rounded-full  translate-y-0.5"}></span>
									</>
								)
							}
						</button>
					</>)}
				
				</nav>
				
				{isNavOpen && (
					<div className="font-inter-tight md:hidden h-full flex flex-col justify-between gap-5 mb-4">
						<ul>
							{navLinks.map(({label, ref}) => (
								<li key={label} className="py-2">
									<a onClick={() => setIsNavOpen(false)} className="text-warm-black hover:text-olive-green font-semibold text-[18px]" href={ref}>
										{label}
									</a>
								</li>
							))}
						</ul>
						<a onClick={() => setIsNavOpen(false)} href="#footer"
						   className={"bg-olive-green hover:bg-olive-green/80 px-5 py-3 rounded-full capitalize font-semibold text-white flex items-center justify-center"}>
							contact me
						</a>
					</div>
				)}
			</header>
			
			<div className="md:hidden h-20"></div>
		</>
	);
};

export default Navbar;