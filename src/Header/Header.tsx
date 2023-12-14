import { useContext } from "react";
import classes from "./Header.module.scss";
import scoreContext from "../context/scoreContext";
const Header = () => {
  const {score} = useContext(scoreContext)
  return (
    <div className={classes.header}>
      <img src="./images/logo-bonus.svg" alt="logo" />
      <div className={classes.header__scoreCounter}>
        <p className={classes.header__scoreTitle}>SCORE</p>
        <p className={classes.header__counter}>{score}</p>

      </div>
    </div>
  )
}

export default Header