import { useReducer } from "react";
import scoreReducer, { initialState }  from "./scoreReducer";
import ScoreContext from "./scoreContext";
import { DECREASE_SCORE, INCREASE_SCORE } from "./cases";

const ScoreState = ({children}: {children: JSX.Element}) => {

  const [state, dispatch] = useReducer(scoreReducer, initialState)



  const increaseScore = () => {
    dispatch({
      type: INCREASE_SCORE
    })
  }

  const decreaseScore = () => {
    dispatch({
      type: DECREASE_SCORE
    })
  }

  const value = {
    score: state.score,
    increaseScore,
    decreaseScore
  }

  return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
}

export default ScoreState;