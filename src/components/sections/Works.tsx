import works from "../../data/works.ts";

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
			
			<div className="columns-3">
				{works.slice(0, 8).map(({id, title, image}) => (
					<div
						className="overflow-hidden rounded-3xl mb-4 break-inside-avoid"
						key={id}
					>
						<img src={image} alt={title} className="w-full h-auto" />
					</div>
				))}
			</div>
		</section>
	)
}
export default Works
