import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import Banner from "assets/images/cyber/banner.jpg";
import AceVid from "assets/video/cyber/ace.mp4";
import AcePoster from "assets/images/cyber/ace-poster.jpg";

import FlythroughVid from "assets/video/cyber/flythrough.mp4";
import FlythroughPoster from "assets/images/cyber/flythrough-poster.jpg";

import Cyber2 from "assets/images/cyber/cyber_2.png";
import Cyber4 from "assets/images/cyber/cyber_4.png";

import ThumbPoster from "assets/images/cyber/cyber-thumb-poster.jpg";
import Thumb from "assets/video/cyber/cyber-thumb.mp4";

export const cyberSlice: Project = {
	id: "cyber-slice",
	title: "Cyber Slice",
	description: `Whether playing **solo or with friends**, players tackle **18 holes** filled with **traps**, **jumps**, **teleporters**, and **diverse obstacles**, demanding precision and strategic finesse. In a mere **5 weeks**, Cyber Slice took shape as a contemporary **miniature golf adventure**. In my role as **artist** and **designer**, I crafted 3D assets and meticulously determined the flow of each hole and level.`,
	previewMedia: {
		type: MediaType.video,
		src: Thumb,
		alt: "cyber slice preview",
		posterSrc: ThumbPoster,
		autoplay: true,
		disable: true,
	},
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Cyber Slice",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: `Whether playing **solo or with friends**, players tackle **18 holes** filled with **traps**, **jumps**, **teleporters**, and **diverse obstacles**, demanding precision and strategic finesse. In a mere **5 weeks**, Cyber Slice took shape as a contemporary **miniature golf adventure**. In my role as **artist** and **designer**, I crafted 3D assets and meticulously determined the flow of each hole and level.`,
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: Banner,
					alt: "cyber banner",
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.text,
			text: `Team: **Kyle Ghafari** - *Designer*, **Alex Cyr** - *Designer*, **Michael Ware** - *Artist & Music*, **Jose Sanchez** - *Artist*, **Anthony Kazyaka** - *Developer*, **David Ward** - *Developer*`,
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.embed,
					src: `<iframe style="width: 100%;" src="https://player.vimeo.com/video/65090057?h=578481765a" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`,
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
					src: Cyber4,
					alt: "cyber 4",
				},
				{
					type: MediaType.video,
					src: FlythroughVid,
					alt: "cyber flythrough",
					posterSrc: FlythroughPoster,
					autoplay: true,
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.video,
					src: AceVid,
					alt: "cyber hole-in-one",
					posterSrc: AcePoster,
					autoplay: true,
				},
				{
					type: MediaType.image,
					src: Cyber2,
					alt: "cyber 2",
				},
			],
		},
	],
};
