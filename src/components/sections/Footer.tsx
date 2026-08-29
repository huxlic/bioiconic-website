export const Footer = () => {
	const year = new Date().getFullYear();
	
	return (
		<>
			<footer>
				<p>© {year} Bio-Iconic Premier Solutions Nigeria Ltd · RC: 8888112</p>
				<a href="https://github.com/huxlic">Website by Hux</a>
			</footer>
		</>
	);
};