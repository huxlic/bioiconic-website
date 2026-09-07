import award from "../assets/bioiconic-images/award.jpeg";
import balancee from "../assets/bioiconic-images/balancee.jpeg";
import balanceeBack from "../assets/bioiconic-images/balancee-back.jpeg";
import birthdayFan from "../assets/bioiconic-images/birthday-fan.jpeg";
import clientWeySabi from "../assets/bioiconic-images/client-wey-sabi.jpeg";
import cruate from "../assets/bioiconic-images/cruate.jpeg";
import cruateBottom from "../assets/bioiconic-images/cruate-bottom.jpeg";
import fasu from "../assets/bioiconic-images/fasu.jpeg";
import harvest from "../assets/bioiconic-images/harvest.jpeg";
import sgs from "../assets/bioiconic-images/sgs.jpeg";
import unilagNigeria from "../assets/bioiconic-images/unilag-nigeria.jpeg";

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