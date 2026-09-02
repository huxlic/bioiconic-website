import flyers from "../assets/images/flyers.jpg";
import signage from "../assets/images/signage.jpg";
import branded_apparel from "../assets/images/branded-apparel.jpg";
import custom_printing from "../assets/images/modern-printing.jpg";
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
		image: flyers,
	},
	{
		id: 2,
		name: "Banners & Signage",
		image: signage,
	},
	{
		id: 3,
		name: "Branded Apparel",
		image: branded_apparel,
	},
	{
		id: 4,
		name: "Custom Printing",
		image: custom_printing,
	},
	{
		id: 5,
		name: "Corporate Merchandise",
		image: corporate_merchandise,
	}
];

export default services;