const Footer = () => {
	const year = new Date().getFullYear();
	
	return (
		<>
			<footer className={"bg-warm-black rounded-t-2xl overflow-hidden"}>
				<div className={"text-white border-t"}><p>© {year} Bio-Iconic Premier Solutions Nigeria Ltd · RC: 8888112</p>
					<a href="https://github.com/huxlic">Website by Hux</a></div>
			</footer>
		</>
	);
};

export default Footer;