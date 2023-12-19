import { cogniteLabs } from "./projects/cogniteLabs";
import { ford } from "./projects/ford";
import { gamestop } from "./projects/gamestop";
import { generativeArt } from "./projects/generativeArt";
import { interiorDesign } from "./projects/interiorDesign";
import { midniteOil } from "./projects/midniteOil";
import { shrine } from "./projects/shrine";
import { washiCon } from "./projects/washiCon";

export default {
	sections: [
		{
			label: "professional work",
			projects: [gamestop, ford, shrine, midniteOil, cogniteLabs],
		},
		{
			label: "side projects",
			projects: [generativeArt, interiorDesign, washiCon],
		},
		{
			label: "games",
			projects: [generativeArt, interiorDesign, washiCon],
		},
	],
};
