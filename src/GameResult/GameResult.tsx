import { useContext } from "react";
import { gameRules } from "../cost";
import classes from "./GameResult.module.scss";
import scoreContext from "../context/scoreContext";

interface IGameResult {
	setUserChoice: (value: string) => void;
	setSeconds: (value: number) => void;
	userChoice: string;
	computerChoice: { title: string; imgLink: string; color: string };
	score: number;
	setComputerChoice: (value: { title: string; imgLink: string; color: string }) => void;
}

const GameResult = ({ setUserChoice, setSeconds, userChoice, computerChoice, score, setComputerChoice }: IGameResult) => {
	const { increaseScore, decreaseScore } = useContext(scoreContext);

	function getUserResult() {
		console.log("считаю результат");
		console.log(computerChoice);
		for (let i = 0; i < gameRules.length; i++) {
			if (gameRules[i].icon === userChoice) {
				if (gameRules[i].wins.indexOf(computerChoice.title) >= 0) {
					increaseScore();
					return "win";
				} else if (userChoice === computerChoice.title) {
					return "draw";
				} else {
					decreaseScore();
					return "lose";
				}
			}
		}
	}

	function resetGame() {
		setUserChoice("");
		setSeconds(3);
		setComputerChoice({ title: "", imgLink: "", color: "" });
	}

	return (
		<div className={classes.result}>
			<p>{getUserResult()}</p>
			<button onClick={resetGame} className={classes.playAgain}>
				play again
			</button>
		</div>
	);
};

export default GameResult;
