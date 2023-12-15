import { DECREASE_SCORE, INCREASE_SCORE, RESET_GAME_RESULT, SET_COMPUTER_CHOICE, SET_GAME_RESULT, SET_USER_CHOICE } from "./cases";

export const initialState = {
	score: 0,
	result: "",
	userChoice: "",
	computerChoice: {
    title: '',
    color: "",
    imgLink: ''
  },
	increaseScore: () => {
		return;
	},
	decreaseScore: () => {
		return;
	},
	setGameResult: (value: string) => {
		return;
	},
	resetGameResult: () => {
		return;
	},
	setUserChoice: (value: string) => {
		return;
	},
	setComputerChoice: (value: IComputerChoice) => {
		return;
	},
};

export interface IComputerChoice {
  title: string,
  color: string,
  imgLink: string
}

export interface IInitialState {
	score: number;
	result: string;
	userChoice: string;
  computerChoice: IComputerChoice;
	increaseScore?: () => void;
	setGameResult?: (value: string) => void;
	resetGameResult?: () => void;
	setUserChoice?: (value: string) => void;
  setComputerChoice?: (value: string) => void;
}

interface IAction {
	type: "INCREASE_SCORE" | "DECREASE_SCORE" | "SET_GAME_RESULT" | "RESET_GAME_RESULT" | "SET_USER_CHOICE" | "SET_COMPUTER_CHOICE";
	payload?: any;
}

const scoreReducer = (state: IInitialState, action: IAction): { score: number; result: string; userChoice: string ; computerChoice: IComputerChoice} => {
	switch (action.type) {
		case INCREASE_SCORE:
			return { ...state, score: state.score + 1 };
		case DECREASE_SCORE:
			return { ...state, score: state.score - 1 };
		case SET_GAME_RESULT:
			return { ...state, result: action.payload };
		case RESET_GAME_RESULT:
			return { ...state, result: "" };
		case SET_USER_CHOICE:
			return { ...state, userChoice: action.payload };
    case SET_COMPUTER_CHOICE:
      return {...state, computerChoice: action.payload}
		default:
			throw new Error(`No case for type ${action.type} found in shopReducer`);
	}
};

export default scoreReducer;
