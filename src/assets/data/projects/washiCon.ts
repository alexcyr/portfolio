import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const washiCon: Project = {
	id: "washi-con",
	title: "Washi Con",
	description:
		"For four consecutive years (2016-2019), I had the honor of contributing unique illustrations for Washi Con, an anime convention hosted at Eastern Michigan University. Each illustration was crafted for the official event T-shirt, revolving around the convention's mascots: Washi (eagle in Japanese), Mountain, and Eggplant.",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Washi Con",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "For four consecutive years (2016-2019), I had the honor of contributing unique illustrations for Washi Con, an anime convention hosted at Eastern Michigan University. Each illustration was crafted for the official event T-shirt, revolving around the convention's mascots: Washi (eagle in Japanese), Mountain, and Eggplant.",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "The designs captured the spirit of the convention, blending elements of Japanese culture with the whimsical nature of anime. Through vibrant and imaginative compositions, the illustrations aimed to resonate with attendees and become a memorable emblem of each Washi Con edition.",
			size: Size.md,
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
