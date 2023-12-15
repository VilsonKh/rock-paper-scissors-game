import { useContext, useEffect } from "react";
import classes from "./ComputerGameItem.module.scss";
import { borderWidth } from "../cost";
import ScoreContext from "../context/scoreContext";

interface IComputerChoice {
	title: string;
	imgLink: string;
	color: string;
	seconds: number;
	setSeconds: (value: number) => void;
}

const ComputerGameItem = ({ title, imgLink, color, seconds, setSeconds }: IComputerChoice) => {

	const {result} = useContext(ScoreContext)

	useEffect(() => {
		if (seconds > 0) {
			setTimeout(() => setSeconds(seconds - 1), 800);
		}
	});

	console.log(result)

	return (
		<div className={`${classes.computerGameItem} ${result === 'computer' ? "wins" : ''}`} style={{ border: `${borderWidth}px solid ${seconds > 0 ? "gray" : color}` }}>
			{seconds > 0 ? seconds : <img src={imgLink} alt={title} />}
		</div>
	);
};

export default ComputerGameItem;
