import { useContext, useEffect, useState } from "react";
import { gameRules } from "../cost";
import styles from "./GameResult.module.scss";
import scoreContext from "../context/scoreContext";

interface IGameResult {
	setSeconds: (value: number) => void;
	userChoice: string;
	computerChoice: { title: string; imgLink: string; color: string };
	score: number;
	setComputerChoice: (value: { title: string; imgLink: string; color: string }) => void;
}

const GameResult = ({ userChoice, computerChoice, score, setComputerChoice, setSeconds }: IGameResult) => {
	const { increaseScore, decreaseScore, setGameResult, resetGameResult, setUserChoice} = useContext(scoreContext);
	const [result, setResult] = useState<string>('')

	function getUserResult() {
		for (let i = 0; i < gameRules.length; i++) {
			if (gameRules[i].icon === userChoice) {
				if (gameRules[i].wins.indexOf(computerChoice.title) >= 0) {
					increaseScore();
					setGameResult('user')
					return "win";
				} else if (userChoice === computerChoice.title) {
					return "draw";
				} else {
					decreaseScore();
					setGameResult('computer')
					return "lose";
				}
			}
		}
	}


	useEffect(() => {
		setResult(getUserResult() as string)
	}, [userChoice])

	function resetGame() {
		setUserChoice("");
		setSeconds(3);
		setComputerChoice({ title: "", imgLink: "", color: "" });
		resetGameResult();
		setResult('')
	}

	return (
		<div className={styles.result}>
			<p className={styles.result__text}>{result}</p>
			<button onClick={resetGame} className={styles.playAgain}>
				play again
			</button>
		</div>
	);
};

export default GameResult;
