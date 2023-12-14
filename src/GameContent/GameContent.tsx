import classes from "./GameContent.module.scss";
import { iconsConfig } from "../cost";
import GameItem from "../GameItem/GameItem";
import { borderWidth } from "../cost";
import { useContext, useEffect, useState } from "react";
import ComputerGameItem from "../ComputerGameItem/ComputerGameItem";
import GameResult from "../GameResult/GameResult";
import GameHeading from "../GameHeading/GameHeading";
import scoreContext from "../context/scoreContext";

export interface IGameItem {
	title: string;
	imgLink: string;
	color: string;
	borderWidth?: number;
}

const GameContent = () => {

	const {score} = useContext(scoreContext)

	const [userChoice, setUserChoice] = useState<string>("");
	const [seconds, setSeconds] = useState<number>(3);
	const [computerChoice, setComputerChoice] = useState({ title: "", imgLink: "", color: "" });

	function getRandomCard() {
		console.log("получаю рандомную карточку");
		const cardsAmount = iconsConfig.length;
		const randomNumb = Math.floor(Math.random() * cardsAmount);
		return iconsConfig[randomNumb];
	}

	useEffect(() => {
		setComputerChoice(getRandomCard());
	}, [userChoice]);

	const ComputerGameItemProps = {
		seconds: seconds,
		setSeconds: setSeconds,
		title: computerChoice.title,
		color: computerChoice.color,
		imgLink: computerChoice.imgLink,
	};

	const GameResultProps = {
		userChoice: userChoice,
		setUserChoice: setUserChoice,
		setSeconds: setSeconds,
		computerChoice: computerChoice,
		setComputerChoice: setComputerChoice,
		score: score
	};

	return (
		<>
			<div className={classes.gameContent}>
				{!userChoice && <img className={classes.gameContent__background} src="./images/bg-pentagon.svg" alt="pentagon" />}
				{userChoice && (
					<>
						<GameHeading />
						<ComputerGameItem {...ComputerGameItemProps} />
					</>
				)}
				{userChoice && seconds < 1 && <GameResult {...GameResultProps} />}
				{iconsConfig.map((iconConfig: IGameItem, index) => {
					return <GameItem userChoice={userChoice} setUserChoice={setUserChoice} key={index} {...iconConfig} borderWidth={borderWidth} />;
				})}
			</div>
		</>
	);
};

export default GameContent;
