interface EmailTemplateProps {
	name: string;
	email: string;
	phone: string;
	product: string;
	quantity: string;
	deadline: string;
	location: string;
	hasDesign: string;
	message: string;
}

const EmailTemplate = ({
	                       name,
	                       email,
	                       phone,
	                       product,
	                       quantity,
	                       deadline,
	                       location,
	                       hasDesign,
	                       message
                       }: EmailTemplateProps) => {
	return (
		<div>
		
		</div>
	)
}
export default EmailTemplate
