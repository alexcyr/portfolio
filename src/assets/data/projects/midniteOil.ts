import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";
import MidniteOilBanner from "assets/images/midnite-oil/midnite-oil-banner.jpeg";

import Shirt from "assets/images/midnite-oil/tigers-shirt.jpg";
import JV2k from "assets/images/midnite-oil/tigers-jv2k.jpg";
import AllStar from "assets/images/midnite-oil/tigers-all-star.jpg";
import KROD from "assets/images/midnite-oil/tigers-krod.jpg";

import Paws1 from "assets/images/midnite-oil/tigers-paws1.jpg";
// import Paws2 from "assets/images/midnite-oil/tigers-paws2.jpg";
import Paws3 from "assets/images/midnite-oil/tigers-paws3.jpg";
import Paws4 from "assets/images/midnite-oil/tigers-paws4.jpg";

import KKITG1 from "assets/images/midnite-oil/tigers-kkitg1.jpg";
// import KKITG2 from "assets/images/midnite-oil/tigers-kkitg2.jpg";
// import KKITG3 from "assets/images/midnite-oil/tigers-kkitg3.jpg";
// import KKITG4 from "assets/images/midnite-oil/tigers-kkitg4.jpg";

import DBLeftWall from "assets/images/midnite-oil/db-wall-left.jpg";
import DBRightWall from "assets/images/midnite-oil/db-wall-right.jpg";

import DBTech from "assets/images/midnite-oil/db-tech.jpg";
import DBAYCEW from "assets/images/midnite-oil/db-aycew.jpg";
import DBTimesSquare from "assets/images/midnite-oil/db-ad.jpg";

import SmashTails from "assets/images/midnite-oil/db-cocktail-logo.jpg";
import DBSummer from "assets/images/midnite-oil/db-summer.jpg";
import TechSticker from "assets/images/midnite-oil/db-tech-sticker.jpg";
import DBIslands from "assets/images/midnite-oil/db-punch.jpg";

import RoakLive from "assets/images/midnite-oil/roak-live1.jpg";
import RoakPowerboat from "assets/images/midnite-oil/roak-powerboat.jpg";

import BaggerDaves from "assets/images/midnite-oil/bd-ad.jpg";
// import AIGiftcard from "assets/images/midnite-oil/ai-gift-card.jpg";

export const midniteOil: Project = {
	id: "midnite-oil",
	title: "Midnite Oil Creative - Brand & Print Design",
	description:
		"Production designer working on delivering impactful marketing and branding assets for high profile clients such as the Detroit Tigers and Dave & Busters, as well as regional/local eateries like Andiamo, Bagger Daves, and Roak Brewing.",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {
		date: "Mar 2018 - March 2019",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "Midnite Oil Creative - Brand & Print Design",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "Production designer working on delivering impactful marketing and branding assets for high profile clients such as the Detroit Tigers and Dave & Busters, as well as regional/local eateries like Andiamo, Bagger Daves, and Roak Brewing.",
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: MidniteOilBanner,
					alt: "midnite oil logo banner",
				},
			],
		},
		{
			type: ContentType.title,
			title: "Detroit Tigers",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "As the main source for graphic design services for the Detroit Tigers, Midnite Oil has delivered various iconic promotional materials over the years such as brand guides, ticket books, and event collateral. Below is some work I contributed during my time at Midnite Oil.",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.image,
					src: KROD,
					alt: "K-Rod 500 hits",
				},
				{
					type: MediaType.image,
					src: AllStar,
					alt: "Miguel Cabrera 2016 all star",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			isGrid: true,
			media: [
				{
					type: MediaType.image,
					src: JV2k,
					alt: "paws prints fall 2016",
				},
				{
					type: MediaType.image,
					src: Shirt,
					alt: "paws prints fall 2016",
				},
				{
					type: MediaType.image,
					src: KKITG1,
					alt: "keeping kids in the game cover",
				},

				// {
				// 	type: MediaType.image,
				// 	src: KKITG2,
				// 	alt: "keeping kids innner spread 1",
				// },
				// {
				// 	type: MediaType.image,
				// 	src: KKITG3,
				// 	alt: "keeping kids innner spread 2",
				// },
				// {
				// 	type: MediaType.image,
				// 	src: KKITG4,
				// 	alt: "keeping kids in the game schedule",
				// },
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.image,
					src: Paws3,
					alt: "paws prints fall 2016",
				},
				{
					type: MediaType.image,
					src: Paws4,
					alt: "paws prints winter 2016",
				},
				{
					type: MediaType.image,
					src: Paws1,
					alt: "paws prints spring 2017",
				},
				// {
				// 	type: MediaType.image,
				// 	src: Paws2,
				// 	alt: "paws prints fall 2017",
				// },
			],
		},

		{
			type: ContentType.title,
			title: "Dave & Buster's",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Midnite Oil enhances the energetic vibe of Dave & Buster’s, crafting lively assets for an immersive experience with their games, food, and sports bar. Assets such as menu designs, game signage, and seasonal promos are designed to be bold and elevate the fun.",
			size: Size.md,
		},

		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.image,
					src: SmashTails,
					alt: "D&B smash tails cocktail logo",
				},
				{
					type: MediaType.image,
					src: DBSummer,
					alt: "D&B summer hours signage",
				},
				{
					type: MediaType.image,
					src: DBIslands,
					alt: "D&B islands cocktail logo",
				},
				{
					type: MediaType.image,
					src: TechSticker,
					alt: "D&B Tech Sticker",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: DBLeftWall,
					alt: "Woodbridge Coming Soon Left Wall",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: DBRightWall,
					alt: "Woodbridge Coming Soon Right Wall",
					caption: "Woodbridge Wall Signage",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.image,
					src: DBTech,
					alt: "D&B tech",
				},
				{
					type: MediaType.image,
					src: DBTimesSquare,
					alt: "D&B Times square ad",
				},
				{
					type: MediaType.image,
					src: DBAYCEW,
					alt: "D&B All you can eat wings",
				},
			],
		},
		{
			type: ContentType.title,
			title: "Additional Work",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.image,
					src: BaggerDaves,
					alt: "D&B tech",
				},
				{
					type: MediaType.image,
					src: RoakLive,
					alt: "D&B tech",
				},
				{
					type: MediaType.image,
					src: RoakPowerboat,
					alt: "D&B Times square ad",
				},
			],
		},
	],
};
