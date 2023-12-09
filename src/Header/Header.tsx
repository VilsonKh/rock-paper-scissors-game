import classes from "./Header.module.scss";
const Header = () => {
  return (
    <div className={classes.header}>
      <img src="./images/logo-bonus.svg" alt="logo" />
      <div className={classes.header__scoreCounter}>
        <p className={classes.header__scoreTitle}>SCORE</p>
        <p className={classes.header__counter}>0</p>

      </div>
    </div>
  )
}

export default Header