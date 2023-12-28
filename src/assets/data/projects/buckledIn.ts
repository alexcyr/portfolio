import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import BuckBanner from "assets/images/buck/buck-banner.jpeg";

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
			text: 'In "Buckled In: A Bunny in Space," I was one of three team members working on a unique project highlighting the potential of digital ownership in gaming. My multifaceted role included creating collectible power-ups, implementing special effects particles, designing sound systems, crafting UI menus, and developing a system for selecting and swapping sprites. These sprites, representing purchasable NFT character outfits, were available on our dedicated marketplace.',
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
				},
			],
		},
		{
			type: ContentType.text,
			text: "Throughout the game's development, I also focused on optimizing our asset pipeline. My efforts streamlined the outfit deliverable, reducing it from 40+ animation frames to a single sprite sheet. This not only enhanced efficiency but also facilitated collaboration with external vendors through the implementation of a rigged skeleton, minimizing the asset footprint.",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: `Despite work being halted on the game, our team's efforts made a substantial impact, resulting in more than 60 ETH in primary sales for GameStop through the sale of in-game assets.`,
			size: Size.md,
		},
	],
};
