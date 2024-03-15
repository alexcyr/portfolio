import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import RoomVid from "assets/video/interior/interior-capture.mp4";
import VidPoster from "assets/images/interior/banner-poster.jpg";
import EditMode from "assets/images/interior/interior-design-8.jpg";
import Content1 from "assets/images/interior/interior-design-1.jpg";
import Content2 from "assets/images/interior/interior-design-2.jpg";

import Content3 from "assets/images/interior/interior-design-3.jpg";
import Content4 from "assets/images/interior/interior-design-4.jpg";
import Content5 from "assets/images/interior/interior-design-5.jpg";

import InteriorThumbPoster from "assets/images/interior/interior-thumb-poster.jpg";
import InteriorThumb from "assets/video/interior/interior-thumb.mp4";

export const interiorDesign: Project = {
	id: "interior-design",
	title: "interiordesignideasforho.me",
	description:
		"Embarking on the mission to turn an idea into a passive income stream through affiliate marketing led to the creation of interiordesignideasforho.me. This unique website offers an immersive exploration of interior design styles, seamlessly connecting users with carefully selected products from Wayfair through affiliate links.",
	previewMedia: {
		type: MediaType.video,
		src: InteriorThumb,
		alt: "interior preview",
		posterSrc: InteriorThumbPoster,
		autoplay: true,
		disable: true,
	},
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
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.video,
					src: RoomVid,
					alt: "interior room capture banner",
					autoplay: true,
					posterSrc: VidPoster,
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: Content1,
					alt: "interior room selection",
				},
				{
					type: MediaType.image,
					src: Content2,
					alt: "interior room 2",
				},
			],
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
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.image,
					src: EditMode,
					alt: "interior room edit mode",
				},
			],
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
			size: Size.xs,
			media: [
				{
					type: MediaType.image,
					src: Content3,
					alt: "interior room product page",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: Content4,
					alt: "interior room blog home",
				},
				{
					type: MediaType.image,
					src: Content5,
					alt: "interior room blog page",
				},
			],
		},
	],
};
