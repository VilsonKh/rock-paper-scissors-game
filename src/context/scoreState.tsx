import { useReducer } from "react";
import scoreReducer, { IComputerChoice, initialState } from "./scoreReducer";
import ScoreContext from "./scoreContext";
import { DECREASE_SCORE, INCREASE_SCORE, RESET_GAME_RESULT, SET_COMPUTER_CHOICE, SET_GAME_RESULT, SET_USER_CHOICE } from "./cases";

const ScoreState = ({ children }: { children: JSX.Element }) => {
	const [state, dispatch] = useReducer(scoreReducer, initialState);

	const increaseScore = () => {
		dispatch({
			type: INCREASE_SCORE,
		});
	};

	const decreaseScore = () => {
		dispatch({
			type: DECREASE_SCORE,
		});
	};

	const setGameResult = (result: string) => {
		dispatch({
			type: SET_GAME_RESULT,
			payload: result,
		});
	};

	const resetGameResult = () => {
		dispatch({
			type: RESET_GAME_RESULT,
		});
	};

	const setUserChoice = (value: string) => {
		dispatch({
			type: SET_USER_CHOICE,
			payload: value,
		});
	};

  const setComputerChoice = (data: IComputerChoice) => {
    dispatch({
      type: SET_COMPUTER_CHOICE,
      payload: data
    })
  }
	const value = {
		score: state.score,
		result: state.result,
		userChoice: state.userChoice,
    computerChoice: state.computerChoice,
		increaseScore,
		decreaseScore,
		setGameResult,
		resetGameResult,
		setUserChoice,
    setComputerChoice
	};

	return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
};

export default ScoreState;
