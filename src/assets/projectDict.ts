import { cogniteLabs } from "./projects/cogniteLabs";
import { ford } from "./projects/ford";
import { gamestop } from "./projects/gamestop";
import { generativeArt } from "./projects/generativeArt";
import { interiorDesign } from "./projects/interiorDesign";
import { midniteOil } from "./projects/midniteOil";
import { shrine } from "./projects/shrine";
import { washiCon } from "./projects/washiCon";

export default {
	[gamestop.id]: gamestop,
	[ford.id]: ford,
	[shrine.id]: shrine,
	[midniteOil.id]: midniteOil,
	[cogniteLabs.id]: cogniteLabs,
	[generativeArt.id]: generativeArt,
	[interiorDesign.id]: interiorDesign,
	[washiCon.id]: washiCon,
};
