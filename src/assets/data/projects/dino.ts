import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import Banner from "assets/images/dino/banner.jpeg";

import Dino1 from "assets/images/dino/dino_1.png";
import Dino2 from "assets/images/dino/dino_2.png";
import Dino3 from "assets/images/dino/dino_4.png";

import DinoThumbPoster from "assets/images/dino/dino-thumb-poster.jpg";
import DinoThumb from "assets/video/dino/dino-thumb.mp4";

export const dino: Project = {
	id: "dino",
	title: "DinoFightinSaurs",
	description: `"DinoFightinSaurs" is a collaborative project developed within the MSU Game Design Specialization, drawing inspiration from the likes of Super Smash Bros.. The game provides a quick-paced and addictively engaging combat experience, amped up by numerous explosive weapons and platform building.`,
	previewMedia: {
		type: MediaType.video,
		src: DinoThumb,
		alt: "dino preview",
		posterSrc: DinoThumbPoster,
		autoplay: true,
		disable: true,
	},
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "DinoFightinSaurs",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: `"DinoFightinSaurs" is a collaborative project developed within the MSU Game Design Specialization, drawing inspiration from the likes of Super Smash Bros.. The game provides a quick-paced and addictively engaging combat experience, amped up by numerous explosive weapons and platform building.`,
			size: Size.lg,
		},

		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: Banner,
					alt: "dino banner",
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.embed,
					src: `<iframe width="560" height="315" src="https://www.youtube.com/embed/wQ2Q_jWHskM?si=O7wDXwJ4bJqbkp8M" title="Dinofightinsaurs trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
					alt: "dinofightinsaurs trailer",
				},
			],
		},
		{
			type: ContentType.text,
			text: `As the contributor responsible for all 2D assets, including textures and icons, the most intriguing aspect of the project was envisioning and bringing the game's diverse levels to life. Players traverse environments that range from cascading waterfalls to the Earth's crust, with bubbling lava below. The project aimed to explore and implement varied level dynamics to enhance the fast pace combat.`,
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			isGrid: true,
			media: [
				{
					type: MediaType.image,
					src: Dino1,
					alt: "dino 1",
				},
				{
					type: MediaType.image,
					src: Dino2,
					alt: "dino 2",
				},
				{
					type: MediaType.image,
					src: Dino3,
					alt: "dino 3",
				},
			],
		},
	],
};
