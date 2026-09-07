import type {ChangeEvent} from "react";

interface InputProps {
	label: string;
	id: string;
	name: string;
	type: string;
	value: string | number;
	placeholder?: string;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, Element>) => void;
}

const Input = ({label, id, name, type, value, placeholder, ...props}: InputProps) => {
	// const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
	//
	// const handleChange = (
	// 	e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	// ) => {
	// 	setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
	// };
	
	return (
		<div className="w-full flex flex-col gap-1">
			<label htmlFor={name} className="font-medium text-faded-black text-[14px]">
				{label}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				value={value}
				placeholder={placeholder}
				{...props}
				required
				className="py-3 px-5 rounded-xl bg-warm-cream border outline-none placeholder:text-[15px]"
			/>
		</div>
	)
}
export default Input
