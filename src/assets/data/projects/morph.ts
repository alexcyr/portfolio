import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import Banner from "assets/images/morph/morph_1.jpeg";

import Video from "assets/video/morph/morph-rolling.mp4";
import VideoPoster from "assets/images/morph/vid-poster.jpg";

import Morph1 from "assets/images/morph/morph_2.png";
import Morph2 from "assets/images/morph/morph_4.png";
import Morph3 from "assets/images/morph/morph_5.png";

import MorphThumbPoster from "assets/images/morph/morph-thumb-poster.jpg";
import MorphThumb from "assets/video/morph/morph-thumb.mp4";

export const morph: Project = {
	id: "morph",
	title: "Morph",
	description: `Experience the thrill of Morph, a game where **quick thinking** and **reflexes are paramount**. In this **5-week** project, race down challenging slopes, **collecting coins** and **morphing between shapes**—a ball for **rolling**, a cone for **jumping**, a cube for **breaking obstacles**, and a star for **gliding** through the air. Dash through **hoops and loops**, aiming for the **fastest time** while collecting coins for the **highest score**.`,
	previewMedia: {
		type: MediaType.video,
		src: MorphThumb,
		alt: "morph preview",
		posterSrc: MorphThumbPoster,
		autoplay: true,
		disable: true,
	},
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Morph",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: `Experience the thrill of Morph, a game where **quick thinking** and **reflexes are paramount**. In this **5-week** project, race down challenging slopes, **collecting coins** and **morphing between shapes**—a ball for **rolling**, a cone for **jumping**, a cube for **breaking obstacles**, and a star for **gliding** through the air. Dash through **hoops and loops**, aiming for the **fastest time** while collecting coins for the **highest score**.`,
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: Banner,
					alt: "morph loop",
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.text,
			text: `Team: **Greg Kozma** - *Designer*, **Xavier Durand-Hollis** - *Designer & Developer*, **Anthony Kazyaka** - *Developer*, **Alex Cyr** - *Artist*`,
			size: Size.lg,
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [],
		},
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.video,
					src: Video,
					alt: "morph video",
					autoplay: true,
					posterSrc: VideoPoster,
				},
			],
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [],
		},
		{
			type: ContentType.text,
			text: `Morph demands quick reactions and decision-making, providing a challenging and rapidly replayable adventure. My role in the project involved learning Maya to construct dynamic levels and design vibrant bonus skins for the in-game shop. Crafting user experiences through meticulous testing ensures that Morph, despite its concise development period, delivers an engaging and enjoyable gameplay experience.`,
			size: Size.md,
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [],
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			isGrid: true,
			media: [
				{
					type: MediaType.image,
					src: Morph1,
					alt: "morph 1",
				},
				{
					type: MediaType.image,
					src: Morph2,
					alt: "morph 2",
				},
				{
					type: MediaType.image,
					src: Morph3,
					alt: "morph 3",
				},
			],
		},
	],
};
