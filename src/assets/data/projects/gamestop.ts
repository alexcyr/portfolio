import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";
import NFTHeaderVid from "assets/video/gamestop/nft-header.mp4";
import NFTTeaserVid from "assets/video/gamestop/nft-teaser.mp4";
import NFTRunnerVid from "assets/video/gamestop/nft-runner.mp4";
import NFTDarkMode from "assets/video/gamestop/nft-dark.mp4";
import GSHeaderVid from "assets/video/gamestop/gs-header.mp4";
import NFTPDP from "assets/video/gamestop/nft-pdp.mp4";
import NFTCollection from "assets/images/gamestop/nft-collection.jpg";
import NFTExplore from "assets/images/gamestop/nft-explore.jpg";
import NFTGames from "assets/images/gamestop/nft-games.jpg";

import NFTHeaderPoster from "assets/images/gamestop/nft-header-poster.jpg";
import NFTTeaserPoster from "assets/images/gamestop/nft-teaser-poster.jpg";
import NFTRunerPoster from "assets/images/gamestop/nft-runner-poster.jpg";
import NFTDarkPoster from "assets/images/gamestop/nft-dark-poster.jpg";
import NFTPDPPoster from "assets/images/gamestop/nft-pdp-poster.jpg";
import GSHeaderPoster from "assets/images/gamestop/gs-header-poster.jpg";
import GSShopMyStore from "assets/images/gamestop/gs-shop-my-store.jpg";
import GSSameDay from "assets/images/gamestop/gs-same-day-delivery.jpg";

import GSThumb from "assets/video/gamestop/gs-thumb.mp4";
import GSThumbPoster from "assets/images/gamestop/gs-thumb-poster.jpg";

import AlbumPoster from "assets/images/gamestop/buck-album-cover.jpg";

export const gamestop: Project = {
	id: "gamestop",
	title: "GameStop - Web3 & Ecommerce",
	description:
		"**Frontend developer** focused on delivering new features for **gamestop.com** and **GameStop mobile app**, as well as bootstrapping the **GameStop NFT marketplace**. Tech stack includes **Salesforce Commerce Cloud** on the web, **React Native** for mobile, and **React** for the nft marketplace.",
	previewMedia: {
		type: MediaType.video,
		src: GSThumb,
		alt: "gs preview",
		posterSrc: GSThumbPoster,
		autoplay: true,
		disable: true,
	},
	info: {
		date: "May 2021 - Present",
		website: "https://nft.gamestop.com",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "GameStop - Web3 & Ecommerce",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "**Frontend developer** focused on delivering new features for **gamestop.com** and **GameStop mobile app**, as well as bootstrapping the **GameStop NFT marketplace**. Tech stack includes **Salesforce Commerce Cloud** on the web, **React Native** for mobile, and **React** for the nft marketplace.",
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.video,
					src: NFTHeaderVid,
					alt: "nft marketplace header",
					autoplay: true,
					posterSrc: NFTHeaderPoster,
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.title,
			title: "NFT Teaser Site",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "As the initial frontend hire for the blockchain team, I was involved with development from the beginning, and was first tasked with building the teaser site to announce our upcoming NFT marketplace. The main feature of the site is a scrolling animation (akin to Apple landing pages) showcasing a game cartridge and a handheld game system, designed by [Syed Ibrahim](https://www.linkedin.com/in/sy%CE%BEd-ibrahim-a8773533/). The site also features a 'dead pixel' easter-egg linking to a re-skinned version of the dino runner game with art I created inspired by a GameStop exclusive Bananya cat plush pillow.",
			size: Size.md,
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [
				{
					type: ContentType.multimedia,
					size: Size.md,
					media: [
						{
							type: MediaType.video,
							src: NFTTeaserVid,
							alt: "nft teaser site",
							caption: "NFT Teaser Site",
							autoplay: true,
							posterSrc: NFTTeaserPoster,
						},
						{
							type: MediaType.video,
							src: NFTRunnerVid,
							alt: "bannanya runner game",
							caption: "Bannanya Runner game easter-egg",
							autoplay: true,
							preload: true,
							posterSrc: NFTRunerPoster,
							fullscreenSrc: "./runner.html",
						},
					],
				},
			],
		},

		{
			type: ContentType.section,
			size: Size.lg,
			content: [
				{
					type: ContentType.title,
					title: "NFT Marketplace",
					size: Size.md,
				},
				{
					type: ContentType.text,
					text: "The [GameStop NFT Marketplace](https://nft.gamestop.com) is a website to enable the buying and selling of digital collectibles, secured by the Ethereum blockchain. While layer 1 fees can be expensive, the GameStop marketplace was built using Loopring and Immutable X layer 2 technologies to make web3 cheaper and more accessible for a wider audience. Working on the NFT marketplace was my first foray into the world of web3 development, offering many interesting challenges and opportunities to learn. There's too many work examples to list but out of all of them, connecting to wallets, the creator minting flow, and the product detail pages were the most exciting to work on. The site features a custom component library built with Storybook and styled-components featuring full dark/light mode support.",
					size: Size.md,
				},
			],
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [
				{
					type: ContentType.multimedia,
					size: Size.md,
					media: [
						{
							type: MediaType.video,
							src: NFTDarkMode,
							alt: "nft dark/light mode",
							caption: "Dark/Light Mode",
							autoplay: true,
							posterSrc: NFTDarkPoster,
						},
						{
							type: MediaType.video,
							src: NFTPDP,
							alt: "product detail page",
							caption: "Product Detail Page",
							autoplay: true,
							posterSrc: NFTPDPPoster,
						},
					],
				},
				{
					type: ContentType.multimedia,
					size: Size.md,
					media: [
						{
							type: MediaType.image,
							src: NFTCollection,
							alt: "nft collection page",
							caption: "Collection Page",
						},
						{
							type: MediaType.image,
							src: NFTExplore,
							alt: "nft explore",
							caption: "Explore NFTs",
						},
						{
							type: MediaType.image,
							src: NFTGames,
							alt: "nft games",
							caption: "NFT Games",
							autoplay: true,
						},
					],
				},
			],
		},

		// {
		// 	type: ContentType.title,
		// 	title: "Internal Tools",
		// 	size: Size.md,
		// },
		// {
		// 	type: ContentType.text,
		// 	text: "After the initial launch we needed a way to screen nfts minted by our creators as content was being minted in breach of our Terms of Service. We ended up building a pipeline for the content team to moderate nfts as were created, allowing them to flag or reject certain fields before they were minted. Soon after that, we realized it wasn't scalable to have devs updating the homepage manually, so we built a portal to do timed update releases of featured content on the homepage.",
		// 	size: Size.md,
		// },
		// {
		// 	type: ContentType.title,
		// 	title: "Cool Mentions",
		// 	size: Size.md,
		// },
		{
			type: ContentType.text,
			text: `One of most exciting perks of this job was the variety of work I was able to do in this position:  
- Built a game in Unity 3D, showcasing the use of nfts as keys for unlockable assets (see [Buckled In: A Bunny in Space](/project/buckled-in))
- Made background music to enrich a number of GameStops own NFT drops  
- Ghost produced the music and built the interactive elements for The Buck Album NFT which sold out the first night of release (3D art by [Emily Switzer](https://www.linkedin.com/in/emily-switzer/))`,
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
					type: MediaType.iframe,
					src: "https://www.gstop-content.com/ipfs/QmSzmoQCZbQZXdEH5EKnj9MZrT2sCiauVVXLH5ULt4HkYr",
					alt: "Buck: The Album",
					caption: `Buck: The Album [[Link]](https://nft.gamestop.com/token/0x0c589fcd20f99a4a1fe031f50079cfc630015184/0x57f2d99e4ba4bb2283b698e89116851f7b06fa8431548e8bae1791fde14ee982)`,
					posterSrc: AlbumPoster,
				},
			],
		},
		{
			type: ContentType.title,
			title: "Ecommerce Team",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Soon after scaling back the nft marketplace efforts, I was pulled in to help with the gamestop.com website and mobile app. In my time I worked on initiatives to help boost sales margins such as Shop My Store which boosted in-store pickups from 15% to over 40%, and Shop Same Day to help customers find products close to them that are available for same-day delivery, as well as numerous other UX improvements across the web and mobile apps.",
			size: Size.md,
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [
				{
					type: ContentType.multimedia,
					size: Size.md,
					media: [
						{
							type: MediaType.video,
							src: GSHeaderVid,
							alt: "gamestop header new",
							caption: "Header w/ Hiding Sub-Nav and Rotating Dismissable Banners",
							autoplay: true,
							posterSrc: GSHeaderPoster,
						},
					],
				},
				{
					type: ContentType.multimedia,
					size: Size.md,
					media: [
						{
							type: MediaType.image,
							src: GSShopMyStore,
							alt: "gamestop shop my store",
							caption: "Shop My Store - Instore Pickup",
						},
						{
							type: MediaType.image,
							src: GSSameDay,
							alt: "gamestop same day delivery",
							caption: "Same Day Delivery",
						},
					],
				},
			],
		},
	],
};
