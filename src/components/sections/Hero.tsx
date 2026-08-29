import background_image from "../../assets/images/delivery-man-with-packages.jpg"

export const Hero = () => {
	return (
		<>
			<section className={"relative w-full rounded-t-2xl bg-fixed h-screen bg-cover bg-center grayscale overflow-hidden"} style={{backgroundImage: `url(${background_image})`}}>
				<div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/20 to-transparent" />
				
				<div className="absolute inset-0 pl-10 py-10">
					<p className={"text-[150px] font-semibold text-white leading-none"}>
						Bio-iconic <br/> Premier Solutions
					</p>
				</div>
			</section>
		</>
	);
};