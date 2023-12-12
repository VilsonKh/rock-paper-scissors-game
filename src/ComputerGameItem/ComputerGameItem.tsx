import { useEffect, useState } from "react";
import classes from "./ComputerGameItem.module.scss";
import { borderWidth, iconsConfig } from "../cost";

interface IComputerChoice {
  title: string;
  imgLink: string;
  color: string;
}

const ComputerGameItem = ({title, imgLink, color}: IComputerChoice) => {
	const [seconds, setSeconds] = useState<number>(3);

	interface IComputerChoice {
		color: string;
		imgLink: string;
		title: string;
	}

	useEffect(() => {
		if (seconds > 0) {
			setTimeout(() => setSeconds(seconds - 1), 1000);
		} 
	});
	
	return <div className={`${classes.computerGameItem}`} style={{ border: `${borderWidth}px solid ${seconds > 0 ? "gray" : color}`}}>{seconds > 0 ? seconds : <img src={imgLink} alt={title} />}</div>;
};

export default ComputerGameItem;
