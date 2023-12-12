import classes from "./GameContent.module.scss";
import { iconsConfig } from "../cost";
import GameItem from "../GameItem/GameItem";
import { borderWidth } from "../cost";
import { useState } from "react";
import ComputerGameItem from "../ComputerGameItem/ComputerGameItem";
// import pentagon from "../../public/images/bg-pentagon.svg";

export interface IGameItem {
	title: string;
	imgLink: string;
	color: string;
	borderWidth?: number;
}

const GameContent = (): JSX.Element => {
	const [isPlaying, setIsPlaying] = useState<string>("");

	return (
		<>
			<div className={classes.gameContent}>
				{!isPlaying && <img className={classes.gameContent__background} src="./images/bg-pentagon.svg" alt="pentagon" />}
				{isPlaying && (
					<div className={classes.gameContent__heading}>
						<p className={classes.gameContent__title}>YOU PICKED</p>
						<p className={classes.gameContent__title}>THE HOUSE PICKED</p>
					</div>
				)}
				{isPlaying && <ComputerGameItem />}
				{iconsConfig.map((iconConfig: IGameItem, index) => {
					return (
						<GameItem
							isPlaying={isPlaying}
							setIsPlaying={setIsPlaying}
							key={index}
							title={iconConfig.title}
							imgLink={iconConfig.imgLink}
							color={iconConfig.color}
							borderWidth={borderWidth}
						/>
					);
				})}
			</div>
		</>
	);
};

export default GameContent;
