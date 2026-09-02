
const Works = () => {
	return (
		<section id={"works"} className={"px-4 md:px-12 py-20 flex flex-col gap-10"}>
			<div className={"flex flex-col lg:flex-row gap-6"}>
				<div className="lg:flex-1 flex gap-1">
					<span className={"bg-vib-orange p-2 rounded-full h-max"}></span>
					<h2 className={"font-jetbrains-mono uppercase font-extrabold"}>projects</h2>
				</div>
				<p
					className={"lg:flex-4 leading-none text-[26px] sm:text-[50px] lg:text-[60px] font-medium"}>
					Work We're Proud Of
				</p>
			</div>
		</section>
	)
}
export default Works
