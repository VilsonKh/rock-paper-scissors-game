import classes from "./GameItem.module.scss";

export interface IGameItem {
	title: string;
	imgLink: string;
	color: string;
	borderWidth?: number;
	setUserChoice?: (value: string) => void;
	userChoice: string;
	clazzName?: string;
}

const GameItem = ({ title, imgLink, color, borderWidth, setUserChoice, clazzName, userChoice }: IGameItem): JSX.Element => {
	function onIconClick(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.currentTarget as HTMLElement;
		console.log(target.getAttribute("data-choice"));
		if (setUserChoice) {
			setUserChoice(target.getAttribute("data-choice") as string);
		}
	}

	return (
		<>
			{!userChoice || userChoice === title ? (
				<div onClick={(e) => onIconClick(e)} className={`${classes.gameItem} ${title} ${userChoice ? "active" : ''}`} style={{ border: `${borderWidth}px solid ${color}` }} data-choice={title}>
					<img src={imgLink} alt={title} />
				</div>
			) : null}
		</>
	);
};

export default GameItem;
