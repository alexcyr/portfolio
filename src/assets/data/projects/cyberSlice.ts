import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import Cyber1 from "assets/images/cyber/cyber_1.png";

import Cyber2 from "assets/images/cyber/cyber_2.png";
import Cyber3 from "assets/images/cyber/cyber_3.png";
import Cyber4 from "assets/images/cyber/cyber_4.png";

export const cyberSlice: Project = {
	id: "cyber-slice",
	title: "Cyber Slice",
	description: `Whether playing solo or with friends, players tackle 18 holes filled with traps, jumps, teleporters, and diverse obstacles, demanding precision and strategic finesse. In a mere 5 weeks, Cyber Slice took shape as a contemporary miniature golf adventure. In my role as artist and designer, I crafted 3D assets and meticulously determined the flow of each hole and level.`,
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Cyber Slice",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: `Whether playing solo or with friends, players tackle 18 holes filled with traps, jumps, teleporters, and diverse obstacles, demanding precision and strategic finesse. In a mere 5 weeks, Cyber Slice took shape as a contemporary miniature golf adventure. In my role as artist and designer, I crafted 3D assets and meticulously determined the flow of each hole and level.`,
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.embed,
					src: `<iframe src="https://player.vimeo.com/video/65090057?h=578481765a" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`,
					alt: "cyber slice trailer",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: Cyber1,
					alt: "cyber 1",
				},
				{
					type: MediaType.image,
					src: Cyber2,
					alt: "cyber 2",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: Cyber3,
					alt: "cyber 3",
				},
				{
					type: MediaType.image,
					src: Cyber4,
					alt: "cyber 4",
				},
			],
		},
	],
};
