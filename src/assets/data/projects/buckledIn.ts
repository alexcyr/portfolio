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

export const buckledIn: Project = {
	id: "buckled-in",
	title: "Buckled In: A Bunny in Space",
	description:
		'In "Buckled In: A Bunny in Space," I was one of three team members working on a unique project highlighting the potential of digital ownership in gaming. My multifaceted role included creating collectible power-ups, implementing special effects particles, designing sound systems, crafting UI menus, and developing a system for selecting and swapping sprites. These sprites, representing purchasable NFT character outfits, were available on our dedicated marketplace.',
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Buckled In: A Bunny in Space",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: 'In "Buckled In: A Bunny in Space," I was one of three team members working on a unique project highlighting the potential of digital ownership in gaming.',
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
				},
			],
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
			text: "My multifaceted role included creating collectible power-ups, implementing special effects particles, designing sound systems, crafting UI menus, and developing a system for selecting and swapping sprites. These sprites, representing purchasable NFT character outfits, were available on our dedicated marketplace.",
			size: Size.md,
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
