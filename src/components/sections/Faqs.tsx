import faqs from "../../data/faqs.ts";
import Accordion from "../ui/Accordion.tsx";

const Faqs = () => {
	
	return (
		<>
			<section id="about" className={"px-4 md:px-12 py-20 flex flex-col gap-6"}>
				<div className={"flex flex-col lg:flex-row gap-6"}>
					<h2 className={"lg:flex-1 font-jetbrains-mono uppercase font-extrabold"}>FAQs</h2>
					<div className={"lg:flex-4 flex flex-col gap-10"}>
						<p
							className={"leading-none text-[26px] sm:text-[50px] lg:text-[60px] font-medium"}>
							Frequently Asked Questions
						</p>
						
						<div className="flex flex-col gap-4">
							{faqs.map(({id, question, answer}) => (
									<Accordion key={question} id={id} question={question} answer={answer} />
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Faqs
