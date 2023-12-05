import classes from './GameItem.module.scss'

export interface IGameItem {
  title: string,
  imgLink: string,
  color: string,
  borderWidth?: number
}

const GameItem= ({title, imgLink, color, borderWidth}: IGameItem): JSX.Element => {


	return (
		<div className={`${classes.gameItem} ${title}`} style={{border: `${borderWidth}px solid ${color}`}}>
			<img src={imgLink} alt={title} />
		</div>
	);
};

export default GameItem;
