import { blackStar } from "./projects/blackStar";
import { buckledIn } from "./projects/buckledIn";
import { cogniteLabs } from "./projects/cogniteLabs";
import { cyberSlice } from "./projects/cyberSlice";
import { dino } from "./projects/dino";
import { ford } from "./projects/ford";
import { galCiv } from "./projects/galCiv";
import { gamestop } from "./projects/gamestop";
import { generativeArt } from "./projects/generativeArt";
import { interiorDesign } from "./projects/interiorDesign";
import { midniteOil } from "./projects/midniteOil";
import { morph } from "./projects/morph";
import { scribbleStacks } from "./projects/scribbleStacks";
import { shrine } from "./projects/shrine";
import { sliderDiner } from "./projects/sliderDiner";
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
			projects: [
				buckledIn,
				blackStar,
				sliderDiner,
				scribbleStacks,
				galCiv,
				dino,
				cyberSlice,
				morph,
			],
		},
	],
};
