import { useContext } from "react";
import classes from "./GameItem.module.scss";
import ScoreContext from "../context/scoreContext";

export interface IGameItem {
	title: string;
	imgLink: string;
	color: string;
	borderWidth?: number;
	userChoice: string;
}

const GameItem = ({ title, imgLink, color, borderWidth, userChoice }: IGameItem): JSX.Element => {
	
	const {result, setUserChoice} = useContext(ScoreContext)

	function onIconClick(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.currentTarget as HTMLElement;
		console.log(target.getAttribute("data-choice"));
		if (setUserChoice) {
			setUserChoice(target.getAttribute("data-choice") as string);
		}
	}

	const iconStyleClasses = `${classes.gameItem} ${title} ${userChoice ? "active" : ""} ${result === "user" ? "wins" : ""}`

	return (
		<>
			{!userChoice || userChoice === title ? (
				<div onClick={(e) => onIconClick(e)} className={iconStyleClasses} style={{ border: `${borderWidth}px solid ${color}` }} data-choice={title}>
					<img src={imgLink} alt={title} />
				</div>
			) : null}
		</>
	);
};

export default GameItem;
