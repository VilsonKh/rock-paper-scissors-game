import classes from "./GameHeading.module.scss";

const GameHeading = () => {
	return (
		<div className={classes.gameContent__heading}>
			<p className={classes.gameContent__title}>YOU PICKED</p>
			<p className={classes.gameContent__title}>THE HOUSE PICKED</p>
		</div>
	);
};

export default GameHeading;
