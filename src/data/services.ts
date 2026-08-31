import corporate_merchandise from "../assets/images/corporate-merchandise.jpg"

interface Service {
	id: number;
	name: string;
	image: string;
}

const services: Service[] = [
	{
		id: 1,
		name: "Flyers & Posters",
		image: corporate_merchandise,
	},
	{
		id: 2,
		name: "Banners & Signage",
		image: corporate_merchandise,
	},
	{
		id: 3,
		name: "Branded Apparel",
		image: corporate_merchandise,
	},
	{
		id: 4,
		name: "Custom Printing",
		image: corporate_merchandise,
	},
	{
		id: 5,
		name: "Corporate Merchandise",
		image: corporate_merchandise,
	}
];

export default services;