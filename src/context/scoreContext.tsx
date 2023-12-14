import {createContext} from "react";
import { initialState } from "./scoreReducer";



const ScoreContext = createContext(initialState)

export default ScoreContext;

