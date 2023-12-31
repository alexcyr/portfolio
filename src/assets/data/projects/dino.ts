import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const dino: Project = {
	id: "dino",
	title: "DinoFightinSaurs",
	description: `"DinoFightinSaurs" is a collaborative project developed within the MSU Game Design Specialization, drawing inspiration from the likes of Super Smash Bros.. The game provides a quick-paced and addictively engaging combat experience, amped up by numerous explosive weapons and platform building.`,
	previewMedia: { type: MediaType.video, src: "", alt: "" },
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
			type: ContentType.text,
			text: `As the contributor responsible for all 2D assets, including textures and icons, the most intriguing aspect of the project was envisioning and bringing the game's diverse levels to life. Players traverse environments that range from cascading waterfalls to the Earth's crust, with bubbling lava below. The project aimed to explore and implement varied level dynamics to enhance the fast pace combat.`,
			size: Size.md,
		},
		// {
		// 	type: ContentType.multimedia,
		// 	size: Size.lg,
		// 	media: [
		// 		{
		// 			type: MediaType.video,
		// 			src: "/video.mp4",
		// 			alt: "video description",
		// 			caption: "optional caption",
		// 		},
		// 	],
		// },
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
	],
};
