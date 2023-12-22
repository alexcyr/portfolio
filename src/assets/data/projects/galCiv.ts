import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

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
			text: `In collaboration with Stardock game studios, my team and I had the privilege of adapting the ship editor from Galactic Civilizations III for a mobile iPad application as part of our college capstone course. Over a three-month span, my role as a UI designer was centered on refining the shipbuilding process. Key enhancements include highlighting essential elements, clear indicators for attaching parts, and an intuitive touch-based rotate UI, ensuring an optimal and immersive editing experience on the iPad.`,
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
