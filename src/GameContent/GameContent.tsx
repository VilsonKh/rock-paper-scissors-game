import classes from "./GameContent.module.scss";
import { iconsConfig } from "../cost";
import GameItem from "../GameItem/GameItem";
import { borderWidth } from "../cost";
import { useState } from "react";
// import pentagon from "../../public/images/bg-pentagon.svg";

export interface IGameItem {
	title: string;
	imgLink: string;
	color: string;
	borderWidth?: number;
}

const GameContent = (): JSX.Element => {
	const [isPlaying, setIsPlaying] = useState<string>("");

	function findCurrentIcon() {
		iconsConfig.find((item) => {
			if (item.title === isPlaying) {
				console.log(item);
				return item;
			}

			return null;
		});
	}

	let currentIcon = undefined;

	if (isPlaying) {
		currentIcon = findCurrentIcon();
	}

	return (
		<>
			<div className={classes.gameContent}>
				{
					<div className={classes.gameContent__container}>
						{!isPlaying && <img className={classes.gameContent__background} src="./images/bg-pentagon.svg" alt="pentagon" />}
						{isPlaying && (
							<div className={classes.gameContent__heading}>
								<p className={classes.gameContent__title}>YOU PICKED</p>
								<p className={classes.gameContent__title}>THE HOUSE PICKED</p>
							</div>
						)}
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
				}
			</div>
		</>
	);
};

export default GameContent;
