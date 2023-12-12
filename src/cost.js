export const iconsConfig = [
	{
		title: "scissors",
		color: "#eca922",
		imgLink: "./images/icon-scissors.svg",
	},
	{
		title: "rock",
		color: "#dd405d",
		imgLink: "./images/icon-rock.svg",
	},
	{
		title: "paper",
		color: "#5671f5",
		imgLink: "./images/icon-paper.svg",
	},
	{
		title: "lizard",
		color: "#a65aad",
		imgLink: "./images/icon-lizard.svg",
	},
	{
		title: "spock",
		color: "#56a8f5",
		imgLink: "./images/icon-spock.svg",
	},
];

export const borderWidth = 15;

export const gameRules = [
	{ icon: "paper", wins: ["rock", "spock"] },
	{ icon: "lizard", wins: ["spock", "paper"] },
	{ icon: "rock", wins: ["lizard", "scissors"] },
	{ icon: "spock", wins: ["scissors", "rock"] },
	{ icon: "scissors", wins: ["paper", "lizard"] },
];
