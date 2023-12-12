import { useEffect, useState } from "react";
import classes from "./ComputerGameItem.module.scss";
import { borderWidth, iconsConfig } from "../cost";

const ComputerGameItem = () => {
	const [seconds, setSeconds] = useState<number>(3);

  let computerChoice = getRandomCard();

	useEffect(() => {
		if (seconds > 0) {
			setTimeout(() => setSeconds(seconds - 1), 1000);
		} else {

		}
	});

	function getRandomCard() {
		const cardsAmout = iconsConfig.length;
		const randomNumb = Math.floor(Math.random() * cardsAmout);
		return iconsConfig[randomNumb];
	}



	return (
  <div className={`${classes.computerGameItem}`} 	style={{ border: `${borderWidth}px solid ${computerChoice.color}`}}>
    {seconds > 0 ? seconds : <img src={computerChoice.imgLink} alt={computerChoice.title} />}
  </div>);
};

export default ComputerGameItem;
