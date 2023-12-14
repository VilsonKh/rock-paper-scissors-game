import { DECREASE_SCORE, INCREASE_SCORE } from "./cases"

export const initialState = {
  score: 0,
  increaseScore: () => {console.log('increase')},
  decreaseScore: () => {console.log('decrease')}
}

export interface IInitialState {
  score: number,
  increaseScore?: () => void
}

interface IAction {
  type: "INCREASE_SCORE" | "DECREASE_SCORE",
  payload?: any
}

const scoreReducer = (state: IInitialState, action: IAction): {score: number} => {

  switch(action.type) {
    case INCREASE_SCORE:
      return { score: state.score + 1 }
    case DECREASE_SCORE:
      return{ score: state.score - 1} 
    default: 
      throw new Error(`No case for type ${action.type} found in shopReducer`)
  }

}

export default scoreReducer;