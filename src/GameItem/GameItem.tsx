import classes from "./GameItem.module.scss";

export interface IGameItem {
	title: string;
	imgLink: string;
	color: string;
	borderWidth?: number;
	setIsPlaying?: (value: string) => void;
	isPlaying: string;
	clazzName?: string;
}

const GameItem = ({ title, imgLink, color, borderWidth, setIsPlaying, clazzName, isPlaying }: IGameItem): JSX.Element => {
	function onIconClick(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.currentTarget as HTMLElement;
		console.log(target.getAttribute("data-choice"));
		if (setIsPlaying) {
			setIsPlaying(target.getAttribute("data-choice") as string);
		}
	}

	return (
		<>
			{!isPlaying || isPlaying === title ? (
				<div onClick={(e) => onIconClick(e)} className={`${classes.gameItem} ${title} ${isPlaying ? "active" : ''}`} style={{ border: `${borderWidth}px solid ${color}` }} data-choice={title}>
					<img src={imgLink} alt={title} />
				</div>
			) : null}
		</>
	);
};

export default GameItem;
