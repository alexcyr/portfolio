import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const generativeArt: Project = {
	id: "generative-art",
	title: "Generative Art",
	description:
		"Experiments in creating generative art powered by p5.js, where algorithms feel alive as unique visual experiences, blending code and creativity. Explore procedurally generated pieces, dynamic flow fields, and interactive artworks. Each creation is minted as an NFT on the Tezos blockchain.",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {
		website: "https://objkt.com/profile/bigcatnft",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "Generative Art",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "Experiments in creating generative art powered by p5.js, where algorithms feel alive as unique visual experiences, blending code and creativity. Explore procedurally generated pieces, dynamic flow fields, and interactive artworks. Each creation is minted as an NFT on the Tezos blockchain.",
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
