import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import Banner from "assets/images/scribble/banner.jpg";
import Scribble1 from "assets/images/scribble/scribble1.jpg";
import Scribble2 from "assets/images/scribble/scribble2.jpg";
import Scribble3 from "assets/images/scribble/scribble3.jpg";
import Scribble4 from "assets/images/scribble/scribble4.jpg";
import Scribble5 from "assets/images/scribble/scribble5.jpg";
import Scribble6 from "assets/images/scribble/scribble6.jpg";

import ScribbleThumbPoster from "assets/images/scribble/scribble-thumb-poster.jpg";
import ScribbleThumb from "assets/images/scribble/scribble-thumb.gif";

export const scribbleStacks: Project = {
	id: "scribble-stacks",
	title: "Scribble Stacks",
	description: `Built with Swift for iOS and powered by the Firebase API, Scribble Stacks is a collaborative multiplayer drawing game, blending Pictionary and Telephone . Players take turns drawing or phrasing, passing their creations in a cycle, causing the drawing outcome to naturally evolve each round.`,
	previewMedia: {
		type: MediaType.image,
		src: ScribbleThumb,
		alt: "scribble stacks preview",
		posterSrc: ScribbleThumbPoster,
		autoplay: true,
		disable: true,
	},
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Scribble Stacks",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: `Built with Swift for iOS and powered by the Firebase API, Scribble Stacks is a collaborative multiplayer drawing game, blending Pictionary and Telephone . Players take turns drawing or phrasing, passing their creations in a cycle, causing the drawing outcome to naturally evolve each round.`,
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: Banner,
					alt: "scribble banner",
					disable: true,
				},
			],
		},
		{
			type: ContentType.text,
			text: `Features include team invites via Google Invites, the ability to unlock themed wordpacks using in-game coins, and a versatile gameplay structure allowing for team play, public games, and local pass-and-play sessions. `,
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: Scribble4,

					alt: "scribble 4",
				},
				{
					type: MediaType.image,
					src: Scribble1,
					alt: "scribble 1",
				},
				{
					type: MediaType.image,
					src: Scribble3,
					alt: "scribble 3",
				},
			],
		},
		{
			type: ContentType.text,
			text: `While the launch was not as successful as I'd hoped, it holds a special place in my journey from designer to developer, playing a key role in securing my first coding job. The process of crafting "Scribble Stacks" was, above all, a fun and fulfilling experience that contributed to my growth in the world of development.`,
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: Scribble2,
					alt: "scribble 2",
				},
				{
					type: MediaType.image,
					src: Scribble5,
					alt: "scribble 5",
				},
				{
					type: MediaType.image,
					src: Scribble6,
					alt: "scribble 6",
				},
			],
		},
	],
};
