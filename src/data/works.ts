import award from "../assets/premium-images/award.jpeg";
import balancee from "../assets/premium-images/balancee.jpeg";
import balanceeBack from "../assets/premium-images/balancee-back.jpeg";
import birthdayFan from "../assets/premium-images/birthday-fan.jpeg";
import clientWeySabi from "../assets/premium-images/client-wey-sabi.jpeg";
import cruate from "../assets/premium-images/cruate.jpeg";
import cruateBottom from "../assets/premium-images/cruate-bottom.jpeg";
import fasu from "../assets/premium-images/fasu.jpeg";
import harvest from "../assets/premium-images/harvest.jpeg";
import sgs from "../assets/premium-images/sgs.jpeg";
import unilagNigeria from "../assets/premium-images/unilag-nigeria.jpeg";

interface  Work {
	id: number;
	title: string;
	image: string;
}

const works: Work[] = [
	{ id: 1, title: "Cruate Jotter", image: cruate },
	{ id: 2, title: "Cruate Mug", image: cruateBottom },
	{ id: 3, title: "Fasu Lagos 2024", image: fasu },
	{ id: 4, title: "Client Wey Sabi", image: clientWeySabi },
	{ id: 5, title: "Birthday Fan", image: birthdayFan },
	{ id: 6, title: "Ace @10", image: award },
	{ id: 7, title: "Balanceé", image: balancee },
	{ id: 8, title: "Balanceé (Back)", image: balanceeBack },
	{ id: 9, title: "Harvest Fan", image: harvest },
	{ id: 10, title: "SGS", image: sgs },
	{ id: 11, title: "Unilag Nigeria", image: unilagNigeria },
];

export default works;