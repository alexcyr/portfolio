import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const cogniteLabs: Project = {
	id: "cognite-labs",
	title: "Cognite Labs - Web Development & Design",
	description:
		"As a frontend developer and designer at Cognite Labs, I specialized in crafting web apps and static pages for businesses spanning local and diverse markets. I played a pivotal role in implementing marketing sales funnels, elevating online presence, and enhancing lead generation. My work highlighted the seamless integration of design and development, delivering impactful digital solutions.",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {
		date: "Mar 2018 - March 2019",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "Cognite Labs - Web Development & Design",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "As a frontend developer and designer at Cognite Labs, I specialized in crafting web apps and static pages for businesses spanning local and diverse markets. I played a pivotal role in implementing marketing sales funnels, elevating online presence, and enhancing lead generation. My work highlighted the seamless integration of design and development, delivering impactful digital solutions.",
			size: Size.lg,
		},
		{
			type: ContentType.title,
			title: "30 Clean",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "30 Clean connects clean eating challengers, giving them all the support they need in one place. Users can post photos, share stories, find tips and recipes, and be inspired by the successes of all the other challengers. Our team was brought in to supercharge their current process, introducing a marketing sales funnel and by developing a challenger dashboard application, including everything relevant to a users clean eating challenge.",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "The design direction of the dashboard needed to reflect and support the goal of creating healthy habits. The main aspects of the dashboard are the daily diary and gratitude journal, a recipes page to find and share healthy meal ideas, and a resources tab to make it easy to find all necessary information regarding their clean eating journey. Built with Ruby",
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
