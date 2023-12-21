import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const interiorDesign: Project = {
	id: "interior-design",
	title: "interiordesignideasforho.me",
	description:
		"Embarking on the mission to turn an idea into a passive income stream through affiliate marketing led to the creation of interiordesignideasforho.me. This unique website offers an immersive exploration of interior design styles, seamlessly connecting users with carefully selected products from Wayfair through affiliate links.",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {
		date: "May 2021",
		website: "interiordesignideasforho.me",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "interiordesignideasforho.me",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "Embarking on the mission to turn an idea into a passive income stream through affiliate marketing led to the creation of interiordesignideasforho.me. This unique website offers an immersive exploration of interior design styles, seamlessly connecting users with carefully selected products from Wayfair through affiliate links.",
			size: Size.lg,
		},
		{
			type: ContentType.title,
			title: "Efficient Pipeline",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Establishing the rooms with hoverable items presented an intriguing challenge, defining the boundaries when hovering and easily updating product information and attributes. To address this, an editor mode was developed, offering a solution that involves drawing polygonal shapes to outline active regions on items within images. This editor not only facilitates the easy management of item data but also leverages Firebase for storing and retrieving relevant information.",
			size: Size.md,
		},
		{
			type: ContentType.title,
			title: "SEO and Content Driven Marketing",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "A strong strategy for SEO is important for any affiliate marketing venture. To facilitate easier crawling of a single-page application, I devised a strategy that involved creating distinct entry routes for each product, and from that generated each as individual HTML pages during deployment. Concurrently, a content-driven approach was embraced, featuring the development of a dedicated markdown blog with interior design insights. Additionally, an Instagram page was established to enhance visual appeal.",
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
