import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const midniteOil: Project = {
	id: "midnite-oil",
	title: "Midnite Oil Creative - Brand & Print Design",
	description:
		"Production designer working on delivering impactful marketing and branding assets for high profile clients such as the Detroit Tigers and Dave & Busters, as well as regional/local eateries like Andiamo, Bagger Daves, and Roak Brewing.",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {
		date: "Mar 2018 - March 2019",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "Midnite Oil Creative - Brand & Print Design",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "Production designer working on delivering impactful marketing and branding assets for high profile clients such as the Detroit Tigers and Dave & Busters, as well as regional/local eateries like Andiamo, Bagger Daves, and Roak Brewing.",
			size: Size.lg,
		},
		{
			type: ContentType.title,
			title: "Detroit Tigers",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "As the main source for graphic design services for the Detroit Tigers, Midnite Oil has delivered various iconic promotional materials over the years such as brand guides, ticket books, and event collateral. Below is some work I contributed during my time at Midnite Oil.",
			size: Size.md,
		},
		{
			type: ContentType.title,
			title: "Dave & Buster's",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Midnite Oil enhances the energetic vibe of Dave & Buster’s, crafting lively assets for an immersive experience with their games, food, and sports bar. Assets such as menu designs, game signage, and seasonal promos are designed to be bold and elevate the fun.",
			size: Size.md,
		},
		{
			type: ContentType.title,
			title: "Additional Work",
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
