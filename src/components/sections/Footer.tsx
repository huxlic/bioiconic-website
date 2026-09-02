const Footer = () => {
	const year = new Date().getFullYear();
	
	return (
		<>
			<footer id={"footer"} className={"bg-warm-black rounded-t-3xl overflow-hidden"}>
				
				<div className="w-full flex items-center justify-center">
					<h3 className={"font-black text-[200px] text-white uppercase"}>Bio-iconic</h3>
				</div>
				<div className={"text-white border-t"}><p>© {year} Bio-Iconic Premier Solutions Nigeria Ltd · RC: 8888112</p>
					<a href="https://github.com/huxlic">Website by Hux</a></div>
			</footer>
		</>
	);
};

export default Footer;