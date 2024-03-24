import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import Banner from "assets/images/washi/banner.jpg";
import Poster from "assets/images/washi/promo-1.jpeg";
import Program from "assets/images/washi/promo-2.jpg";
import Shirt1 from "assets/images/washi/shirt-1.png";
import Shirt2 from "assets/images/washi/shirt-2.jpg";
import Shirt3 from "assets/images/washi/shirt-3.jpeg";
import Shirt4 from "assets/images/washi/shirt-4.jpeg";

import WashiThumbPoster from "assets/images/washi/washi-thumb-poster.jpg";
import WashiThumb from "assets/images/washi/washi-thumb.gif";

export const washiCon: Project = {
	id: "washi-con",
	title: "Washi Con",
	description:
		"For four consecutive years (**2016 - 2019**), I had the honor of contributing **unique illustrations** for Washi Con, an **anime convention** hosted at **Eastern Michigan University**. Each illustration was crafted for the **official event T-shirt**, revolving around the convention's mascots: **Washi** (eagle in Japanese), **Mountain**, and **Eggplant**.",
	previewMedia: {
		type: MediaType.image,
		src: WashiThumb,
		alt: "washi preview",
		posterSrc: WashiThumbPoster,
		autoplay: true,
		disable: true,
	},
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Washi Con",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "For four consecutive years (**2016 - 2019**), I had the honor of contributing **unique illustrations** for Washi Con, an **anime convention** hosted at **Eastern Michigan University**. Each illustration was crafted for the **official event T-shirt**, revolving around the convention's mascots: **Washi** (eagle in Japanese), **Mountain**, and **Eggplant**.",
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: Banner,
					alt: "washi banner",
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [
				{
					type: ContentType.text,
					text: "The designs were meant to capture the spirit of the convention, blending elements of Japanese culture with the whimsical nature of anime. Through vibrant and imaginative compositions, the illustrations aimed to interest attendees and become a memorable emblem of each Washi Con edition.",
					size: Size.md,
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.image,
					src: Poster,
					alt: "washi poster",
				},
				{
					type: MediaType.image,
					src: Program,
					alt: "washi program",
				},
			],
		},
		{
			type: ContentType.title,
			title: "Yearly shirt designs",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			isGrid: true,
			media: [
				{
					type: MediaType.image,
					src: Shirt1,
					alt: "washi shirt 2016",
					caption: "2016",
				},
				{
					type: MediaType.image,
					src: Shirt3,
					alt: "washi shirt 2018",
					caption: "2018",
				},
				{
					type: MediaType.image,
					src: Shirt2,
					alt: "washi shirt 2017",
					caption: "2017",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.image,
					src: Shirt4,
					alt: "washi shirt 2019",
					caption: "2019",
				},
			],
		},
	],
};
