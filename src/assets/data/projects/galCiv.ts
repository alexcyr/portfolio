import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import Banner from "assets/images/gal-civ/banner.jpeg";
import GalCiv1 from "assets/images/gal-civ/galciv_3.jpg";
import GalCiv2 from "assets/images/gal-civ/galciv_4.jpg";
import GalCiv3 from "assets/images/gal-civ/galciv_5.jpg";

import Ipad from "assets/images/gal-civ/galciv_22.jpg";

export const galCiv: Project = {
	id: "gal-civ",
	title: "Galactic Civilizations III: Ship Builder",
	description: `In collaboration with Stardock game studios, my team and I had the privilege of adapting the ship editor from Galactic Civilizations III for a mobile iPad application as part of our college capstone course. Over a three-month span, my role as a UI designer was centered on refining the shipbuilding process. Key enhancements include highlighting essential elements, clear indicators for attaching parts, and an intuitive touch-based rotate UI, ensuring an optimal and immersive editing experience on the iPad.`,
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Galactic Civilizations III: Ship Builder",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: `In collaboration with Stardock game studios, my team and I had the privilege of adapting the ship editor from Galactic Civilizations III for a mobile iPad application as part of our college capstone course. `,
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: Banner,
					alt: "gal civ III banner",
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.image,
					src: Ipad,
					alt: "gal civ III ipad",
				},
			],
		},
		{
			type: ContentType.text,
			text: `Over a three-month span, my role as a UI designer was centered on refining the shipbuilding process. Key enhancements include highlighting essential elements, clear indicators for attaching parts, and an intuitive touch-based rotate UI, ensuring an optimal and immersive editing experience on the iPad.`,
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			isGrid: true,
			media: [
				{
					type: MediaType.image,
					src: GalCiv1,
					alt: "gal civ III create ship",
				},
				{
					type: MediaType.image,
					src: GalCiv3,
					alt: "gal civ III rotate ui",
				},
				{
					type: MediaType.image,
					src: GalCiv2,
					alt: "gal civ III ship select",
				},
			],
		},
	],
};
