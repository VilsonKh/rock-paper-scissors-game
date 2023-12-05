import classes from "./GameContent.module.scss";
import { iconsConfig } from "../cost";
import GameItem from "../GameItem/GameItem";
import { borderWidth } from "../cost";
import { IGameItem } from "../GameItem/GameItem";


const GameContent = (): JSX.Element=> {
	return (
		<div className={classes.gameContent} >
			<div className={classes.gameContent__container}>
				{iconsConfig.map((iconConfig: IGameItem, index) => {
					return <GameItem key={index} title={iconConfig.title} imgLink={iconConfig.imgLink} color={iconConfig.color} borderWidth={borderWidth}/>
				})}
			</div>
		</div>
	);
};

export default GameContent;
