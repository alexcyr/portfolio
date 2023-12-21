import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const gamestop: Project = {
	id: "gamestop",
	title: "GameStop - Web3 and Ecommerce",
	description:
		"Frontend developer focused on delivering new features for gamestop.com and GameStop mobile app, as well as bootstrapping the GameStop NFT marketplace. Tech stack includes Salesforce Commerce Cloud on the web, react-native for mobile, and react for the nft marketplace.",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {
		date: "May 2021 - Present",
		website: "https://nft.gamestop.com",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "GameStop - Web3 and Ecommerce",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "Frontend developer focused on delivering new features for gamestop.com and GameStop mobile app, as well as bootstrapping the GameStop NFT marketplace. Tech stack includes Salesforce Commerce Cloud on the web, react-native for mobile, and react for the nft marketplace.",
			size: Size.lg,
		},
		{
			type: ContentType.title,
			title: "NFT Teaser Site",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "As the first frontend hire for the blockchain team, I was involved with development from the beginning, and was tasked with building the teaser site to announce our upcoming NFT marketplace. The main feature of the site is a scrolling animation (akin to Apple landing pages) showcasing a game cartridge and a handheld game system, designed by Syed Ibrahim. I also added a 'dead pixel' easter egg linking to a re-skinned version of the dino runner game, with art I made inspired by a GameStop exclusive Bananya cat plush pillow.",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: "https://source.unsplash.com/featured/400x400",
					alt: "img alt",
					caption: "optional caption",
				},
				{
					type: MediaType.image,
					src: "https://source.unsplash.com/featured/400x400",
					alt: "img alt 2",
					caption: "optional caption",
				},
			],
		},
		{
			type: ContentType.title,
			title: "NFT Marketplace",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "The [GameStop NFT Marketplace](https://nft.gamestop.com) is a website to enable the buying and selling of digital collectibles, secured by Ethereum blockchain. While layer 1 fees can be expensive, the GameStop marketplace was built using Loopring and Immutable X layer 2 technologies to make web3 cheaper more accessible for a wider audience. Working on the NFT marketplace was my first foray into the world of web3 development, offering many interesting challenges and opportunities to learn. There's too many work examples to list but out of all of them, connecting to wallets, the creator minting flow, and the product detail pages were the most exciting to work on. The site features a custom component library built with storybook and styled-components and full dark/light mode support.",
			size: Size.md,
		},
		{
			type: ContentType.title,
			title: "Internal Tools",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "After the initial launch we needed a way to screen nfts minted by our creators as content was being minted in breach of our Terms of Service. We ended up building a pipeline for the content team to moderate nfts as were created, allowing them to flag or reject certain fields before they were minted. Soon after that, we realized it wasn't scalable to have devs updating the homepage manually, so we built a portal to do timed update releases of featured content on the homepage.",
			size: Size.md,
		},
		{
			type: ContentType.title,
			title: "Cool Mentions",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: `One of most exciting perks of this job was the variety of work I was able to do in this position: 
				- I got to work in Unity 3D to build a game, showcasing the use of nfts as keys for unlockable assets (see Buckled In: A Bunny in Space for more info).
				- I got to make background music to enrich a number of GameStops own NFT drops
				- The coolest was I got to ghost produce the music and build the interactive elements for The Buck Album which sold out the first night of release. (3D art by Emily Switzer)`,
			size: Size.md,
		},
		{
			type: ContentType.title,
			title: "Ecommerce Team",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Soon after scaling back the nft marketplace efforts, I was pulled in to help with the gamestop.com website and mobile app. While here I've build initiatives to help boost sales margins such as Shop My Store which boosted in-store pickups from 15% to over 40%, and Shop Same Day to help customers find items close to them that available for same-day delivery, as well as numerous other UX improvements across the web and mobile apps.",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Lorem **ipsum** dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			size: Size.sm,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: "https://source.unsplash.com/featured/400x400",
					alt: "img alt",
					caption: "optional caption",
				},
				{
					type: MediaType.image,
					src: "https://source.unsplash.com/featured/400x400",
					alt: "img alt 2",
					caption: "optional caption",
				},
				{
					type: MediaType.image,
					src: "https://source.unsplash.com/featured/400x400",
					alt: "img alt 3",
					caption: "optional caption",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: "https://source.unsplash.com/featured/400x400",
					alt: "img alt",
					caption: "optional caption",
				},
				{
					type: MediaType.image,
					src: "https://source.unsplash.com/featured/400x400",
					alt: "img alt 2",
					caption: "optional caption",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.video,
					src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
					alt: "vid",
					caption: "optional caption",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.iframe,
					src: "https://assets.objkt.media/file/assets-003/QmVvvWaUYJf4arvTrmrSDxdHaTd7DZfpHCKmHdJRet75KE/artifact/index.html?objkt=428869&creator=tz1irpd3STXLP7PYLJz9xhS77vSYzHiyxSDA&viewer=tz1irpd3STXLP7PYLJz9xhS77vSYzHiyxSDA&danger=ignored",
					alt: "iframe",
					caption: "optional caption",
				},
			],
		},
	],
};
