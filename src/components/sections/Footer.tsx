import navLinks from "../../data/navLinks.ts";
import services from "../../data/services.ts";

const Footer = () => {
	const year = new Date().getFullYear();
	
	return (
		<>
		<footer id="footer" className="bg-warm-black rounded-t-3xl overflow-hidden">
			<div className="w-full flex items-center justify-center px-4 pt-12">
				<h3 className="font-black text-[80px] sm:text-[120px] lg:text-[200px] text-white uppercase text-center leading-none">
					Bio-iconic
				</h3>
			</div>
			
			<div className="flex flex-col lg:grid lg:grid-cols-6 gap-10 lg:gap-20 p-6">
				<div className="text-white col-span-3">
					<p className={"text-[14px] md:text-[16px] text-[#f9f9f999]"}>From flyers to banners to branded apparel, every piece we deliver is built to make your brand seen, remembered, and trusted.</p>
					<a className={"text-[30px] md:text-[50px] font-semibold border-b"} href="mailto:hello@bioiconic.com">hello@bioiconic.com</a>
				</div>
				
				<div className={"lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 "}>
					<div className="text-white flex flex-col gap-2">
						<p className={"capitalize text-[16px] md:text-[18px] font-semibold"}>navigation</p>
						<ul className={"flex flex-col gap-2"}>
							{
								navLinks.map(({label, ref}) => (
									<li className={"text-[12px] md:text-[16px] text-[#f9f9f999] hover:text-white font-medium transition-colors duration-300"}
									    key={ref}>
										<a href={ref}>{label}</a>
									</li>
								))
							}
						</ul>
					</div>
					
					<div className="text-white flex flex-col gap-2">
						<p className={"capitalize text-[16px] md:text-[18px] font-semibold"}>services</p>
						<ul className={"flex flex-col gap-2"}>
							{
								services.map(({id, name}) => (
									<li className={"text-[12px] md:text-[16px] text-[#f9f9f999] hover:text-white font-medium transition-colors duration-300"}
									    key={id}>
										{name}
									</li>
								))
							}
						</ul>
					</div>
					
					<div className="text-white flex flex-col gap-2">
						<p className={"capitalize text-[16px] md:text-[18px] font-semibold"}>contact us</p>
						<ul className={"flex flex-col gap-2"}>
							<li className={"text-[12px] md:text-[16px] text-[#f9f9f999] hover:text-white font-medium transition-colors duration-300"}>
								<a href="tel:+2348031101873">08031101873</a>
							</li>
							<li className={"text-[12px] md:text-[16px] text-[#f9f9f999] hover:text-white font-medium transition-colors duration-300"}>
								<a href="tel:+2348024244234">08024244234</a>
							</li>
							<li className={"text-[12px] md:text-[16px] text-[#f9f9f999] hover:text-white font-medium transition-colors duration-300"}>
								<a href="mailto:hello@bioiconic.com">hello@bioiconic.com</a>
							</li>
						</ul>
					</div>
				</div>
				
			</div>
			
			<div className="text-white border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-2 px-6 py-6">
				<p className="text-sm text-white/80">
					© {year} Bio-Iconic Premier Solutions Nigeria Ltd · RC: 8888112
				</p>
				<a
				href="https://github.com/huxlic"
				target="_blank"
				rel="noopener noreferrer"
				className="text-sm text-white/80 hover:text-white transition-colors"
				>
				Website by Hux
			</a>
		</div>
		</footer>
		</>
	);
};

export default Footer;