import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const cyberSlice: Project = {
	id: "cyber-slice",
	title: "Cyber Slice",
	description: `In a mere 5 weeks, Cyber Slice took shape as a contemporary miniature golf adventure. In my role as artist and designer, I crafted 3D assets and meticulously determined the flow of each hole and level. Whether playing solo or with friends, players tackle 18 holes filled with traps, jumps, teleporters, and diverse obstacles, demanding precision and strategic finesse. This rapid development process seamlessly blends classic gameplay with a touch of cyber-themed fun, delivering a captivating mini-golf journey.`,
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
			text: `In a mere 5 weeks, Cyber Slice took shape as a contemporary miniature golf adventure. In my role as artist and designer, I crafted 3D assets and meticulously determined the flow of each hole and level. Whether playing solo or with friends, players tackle 18 holes filled with traps, jumps, teleporters, and diverse obstacles, demanding precision and strategic finesse. This rapid development process seamlessly blends classic gameplay with a touch of cyber-themed fun, delivering a captivating mini-golf journey.`,
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.video,
					src: "/video.mp4",
					alt: "video description",
					caption: "optional caption",
				},
			],
		},
	],
};
