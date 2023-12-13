import { gameRules } from "../cost";
import classes from "./GameResult.module.scss";

interface IGameResult {
  setUserChoice: (value: string) => void;
  setSeconds: (value: number) => void;
  userChoice: string;
}

const GameResult = ({setUserChoice, setSeconds, userChoice}: IGameResult) => {

  // function getUserResult() {
	// 	console.log("считаю результат")
	// 	for (let i = 0; i < gameRules.length; i++) {
	// 		if (gameRules[i].icon === userChoice) {
	// 			if (gameRules[i].wins.indexOf(computerChoice.title) >= 0) {
	// 				return "win";
	// 			} else if (userChoice === computerChoice.title) {
	// 				return "draw";
	// 			} else {
	// 				return "lose";
	// 			}
	// 		}
	// 	}
	// }

  function resetGame() {
		setUserChoice("");
		setSeconds(3);
	}

	return (
		<div className={classes.result}>
			{/* <p>{getUserResult()}</p> */}
			<button onClick={resetGame} className={classes.playAgain}>
				play again
			</button>
		</div>
	);
};

export default GameResult;
