import navLinks from "../../data/navLinks.ts";
import {ArrowUpRight} from "lucide-react";

export const Navbar = () => {
	return (
		<>
			<header className={"w-full py-4 px-6"}>
				<nav className={"flex items-center justify-between"}>
					<a className={"text-[20px] font-bold"}  href="/">bio-iconic</a>
					
					<div className={"flex text-ink-black items-center gap-2"}>
						<div className={"flex items-center"}>
							{navLinks.map(({label, ref}) => (
								<a className={"text-[14px] font-medium flex items-center gap-1 group px-2 "} href={ref} key={label}>
									<span className={"p-0.75 rounded-full bg-ink-black group-hover:p-2 group-hover:bg-reddish-browm transition-all duration-500"}></span>
									{label}
								</a>
							))}
						</div>
						
						<button className={"flex items-center gap-2 px-4 py-1 pr-1 bg-reddish-browm hover:bg-dark-walnut transition-colors text-white text-[14px] rounded-full font-medium"}>
							<span>Contact me</span>
							<div className={"p-1 rounded-full flex bg-white text-black"}>
								<ArrowUpRight size={17} />
							</div>
						</button>
					</div>
				</nav>
			</header>
		</>
	);
};