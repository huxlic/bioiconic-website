import {useState} from "react";
import {Minus, Plus} from "lucide-react";
import type {Faq} from "../../data/faqs.ts";

const Accordion = ({question, answer}: Faq) => {
	const [accordion, setAccordion] = useState(false);
	return (
		<div className={"p-6 bg-warm-cream rounded-2xl flex flex-col gap-4"}>
			<div className="flex justify-between items-center gap-6">
				<p className={"sm:text-[18px] md:text-[20px] font-semibold"}>{question}</p>
				<button onClick={() => setAccordion(!accordion)}>
					{accordion ? <Minus/> : <Plus/>}
				</button>
			</div>
			<span className={`text-faded-black ${accordion ? "block" : "hidden"}`}>{answer}</span>
		</div>
	)
}
export default Accordion
