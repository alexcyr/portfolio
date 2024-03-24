import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import BuckBanner from "assets/images/buck/buck-banner.jpeg";
import BuckBuy from "assets/video/buck/buck-buy.mp4";
import BuckBuyPoster from "assets/images/buck/buy-poster.jpg";

import BuckCoin from "assets/video/buck/buck-coin-wall.mp4";
import BuckCoinPoster from "assets/images/buck/buck-coin-wall-poster.jpeg";

import BuckFlip from "assets/video/buck/buck-flip.mp4";
import BuckFlipPoster from "assets/images/buck/flip-poster.jpg";

import BuckThumbPoster from "assets/images/buck/buck-thumb-poster.jpg";
import BuckThumb from "assets/video/buck/buck-thumb.mp4";

export const buckledIn: Project = {
	id: "buckled-in",
	title: "Buckled In: A Bunny in Space",
	description: `An **endless runner game** featuring **Buck the Bunny** built for **GameStop NFT Marketplace** to explore the **utility and potential** of **digital ownership** in gaming. Run, jump, and power up to collect as many coins as possible for as long as you can.`,
	previewMedia: {
		type: MediaType.video,
		src: BuckThumb,
		alt: "buckled in preview",
		posterSrc: BuckThumbPoster,
		autoplay: true,
		disable: true,
	},
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Buckled In: A Bunny in Space",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "An **endless runner game** featuring **Buck the Bunny** built for **GameStop NFT Marketplace** to explore the **utility and potential** of **digital ownership** in gaming. Run, jump, and power up to collect as many coins as possible for as long as you can.",
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: BuckBanner,
					alt: "buckled in banner",
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.text,
			text: `Team: **Chris Bell** - *Project Manager*, **Jason Morano** - *Developer*, **Griffin Park** - *Developer*, **Alex Cyr** - *Developer & Music*, **Antoine Bonnin** - *Designer*, **Emily Switzer** - *Artist*, **Annie Nguyen** - *Content Writer*`,
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.video,
					src: BuckBuy,
					alt: "costume purchase flow",
					posterSrc: BuckBuyPoster,
					autoplay: true,
					controls: true,
				},
			],
		},
		{
			type: ContentType.text,
			text: "My multifaceted role included creating collectible power-ups, implementing special effects particles, music and sound systems, crafting UI menus, and developing a system for selecting and swapping sprites. These sprites, representing purchasable NFT character outfits, were available on our dedicated marketplace.",
			size: Size.md,
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [],
		},
		// {
		// 	type: ContentType.text,
		// 	text: "Throughout the game's development, I also focused on optimizing our asset pipeline. My efforts streamlined the outfit deliverable, reducing it from 40+ animation frames to a single sprite sheet. This not only enhanced efficiency but also facilitated collaboration with external vendors through the implementation of a rigged skeleton, minimizing the asset footprint.",
		// 	size: Size.md,
		// },
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.video,
					src: BuckFlip,
					alt: "attacking enemies",
					posterSrc: BuckFlipPoster,
					autoplay: true,
				},
			],
		},
		{
			type: ContentType.text,
			text: `Despite work being halted on the game, our team's efforts made a substantial impact, resulting in more than 60 ETH in primary sales for GameStop through the sale of in-game assets.`,
			size: Size.md,
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
					src: BuckCoin,
					alt: "coin collection",
					posterSrc: BuckCoinPoster,
					autoplay: true,
				},
			],
		},
	],
};
