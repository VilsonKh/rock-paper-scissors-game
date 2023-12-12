import classes from "./GameContent.module.scss";
import { iconsConfig } from "../cost";
import GameItem from "../GameItem/GameItem";
import { borderWidth } from "../cost";
import { useState } from "react";
import ComputerGameItem from "../ComputerGameItem/ComputerGameItem";
import { gameRules } from "../cost";

export interface IGameItem {
	title: string;
	imgLink: string;
	color: string;
	borderWidth?: number;
}

const GameContent = (): JSX.Element => {
	const [isPlaying, setIsPlaying] = useState<string>("");

	function getRandomCard() {
		const cardsAmount = iconsConfig.length;
		const randomNumb = Math.floor(Math.random() * cardsAmount);
		console.log("computerChoice", iconsConfig[randomNumb])
		return iconsConfig[randomNumb];
	}

	const computerChoice = getRandomCard()

	function getResult() {
		for (let i = 0; i < gameRules.length; i++) {
			if (gameRules[i].icon === isPlaying) {
				console.log(gameRules[i].wins)
				if (gameRules[i].wins.indexOf(computerChoice.title) >= 0) {
					return "win";
				} else if (isPlaying === computerChoice.title) {
					return "draw";
				} else {
					return "lose";
				}
			}
		}
	}
	console.log(getResult());

	return (
		<>
			<div className={classes.gameContent}>
				{!isPlaying && <img className={classes.gameContent__background} src="./images/bg-pentagon.svg" alt="pentagon" />}
				{isPlaying && (
					<div className={classes.gameContent__heading}>
						<p className={classes.gameContent__title}>YOU PICKED</p>
						<p className={classes.gameContent__title}>THE HOUSE PICKED</p>
					</div>
				)}
				{isPlaying && <ComputerGameItem title={computerChoice.title} color={computerChoice.color} imgLink={computerChoice.imgLink} />}
					{isPlaying && getResult() && <p>{getResult()}</p>}
				{iconsConfig.map((iconConfig: IGameItem, index) => {
					return (
						<GameItem
							isPlaying={isPlaying}
							setIsPlaying={setIsPlaying}
							key={index}
							title={iconConfig.title}
							imgLink={iconConfig.imgLink}
							color={iconConfig.color}
							borderWidth={borderWidth}
						/>
					);
				})}
			</div>
		</>
	);
};

export default GameContent;
