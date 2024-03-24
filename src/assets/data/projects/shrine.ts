import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import ShrineHeader from "assets/video/shrine/shrine-header.mp4";
import ShrineHeaderPoster from "assets/images/shrine/shrine-header-poster.jpg";

import FreightImg1 from "assets/images/shrine/shrine-freight-1.png";
import FreightImg2 from "assets/images/shrine/shrine-freight-2.png";
import FreightImg3 from "assets/images/shrine/shrine-freight-3.jpg";

import WantifyImg1 from "assets/images/shrine/wantify-1.jpg";
import WantifyImg2 from "assets/images/shrine/wantify-2.jpg";
import WantifyImg3 from "assets/images/shrine/wantify-3.jpg";
import WantifyFull from "assets/images/shrine/wantify-full.jpg";

import BudRunner1 from "assets/images/shrine/budrunner-1.jpg";
import BudRunner2 from "assets/images/shrine/budrunner-2.jpg";
import BudRunner3 from "assets/images/shrine/budrunner-3.jpg";

import PlainSight1 from "assets/images/shrine/plainsight-1.jpg";
import PlainSight2 from "assets/images/shrine/plainsight-2.jpg";
import PlainSight3 from "assets/images/shrine/plainsight-3.jpg";

import ShrineMenuVid from "assets/video/shrine/shrine-menu.mp4";
import ShrineMenuPoster from "assets/images/shrine/shrine-menu-poster.jpg";
import ShrineTransitionVid from "assets/video/shrine/shrine-transition.mp4";
import ShrineTransitionPoster from "assets/images/shrine/shrine-transition-poster.jpg";

import HotDogApp from "assets/images/shrine/hotdog-app.webp";
import FlowerApp from "assets/images/shrine/flower-app.webp";
import TodoListApp from "assets/images/shrine/todo-app.webp";
import WeatherApp from "assets/images/shrine/weather-app.webp";

import ARDicePoster from "assets/images/shrine/ar-dice-poster.jpg";
import ARPokePoster from "assets/images/shrine/ar-poke-poster.jpg";
import ARRulerPoster from "assets/images/shrine/ar-ruler-poster.jpg";

import ARDiceVid from "assets/video/shrine/ar-dice.mp4";
import ARPokeVid from "assets/video/shrine/ar-poke.mp4";
import ARRulerVid from "assets/video/shrine/ar-ruler.mp4";

import ShrineThumbPoster from "assets/images/shrine/shrine-thumb-poster.jpg";
import ShrineThumb from "assets/images/shrine/shrine-thumb.gif";

export const shrine: Project = {
	id: "shrine",
	title: "Shrine Development - Web & App Dev Studio",
	description:
		"**Frontend** and **mobile app developer/designer** for a number of local and national clients, working with tech such as **Swift iOS**, **React**, and **React Native**. It was exciting to work on such a wide variety of projects and deliver creative solutions.",
	previewMedia: {
		type: MediaType.image,
		src: ShrineThumb,
		alt: "shrine preview",
		posterSrc: ShrineThumbPoster,
		autoplay: true,
		disable: true,
	},
	info: {
		date: "Mar 2018 - March 2019",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "Shrine Development - Web & App Dev Studio",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "**Frontend** and **mobile app developer/designer** for a number of local and national clients, working with tech such as **Swift iOS**, **React**, and **React Native**. It was exciting to work on such a wide variety of projects and deliver creative solutions.",
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.video,
					src: ShrineHeader,
					alt: "shrine main image",
					posterSrc: ShrineHeaderPoster,
					autoplay: true,
					preload: true,
					disable: true,
				},
			],
		},

		{
			type: ContentType.section,
			size: Size.lg,
			content: [
				{
					type: ContentType.title,
					title: "Freightroll",
					size: Size.md,
				},
				{
					type: ContentType.text,
					text: "Freightroll is an iOS application to keep shippers and carriers connected. Using GPS tracking and in-app messaging, shippers and carriers are kept up-to-date at all times on the progress of a load. While on this project, I got to work closely with a senior iOS developer, while also maintaining close contact with the client.",
					size: Size.md,
				},
				{
					type: ContentType.section,
					size: Size.md,
					content: [
						{
							type: ContentType.multimedia,
							size: Size.sm,
							isGrid: true,
							media: [
								{
									type: MediaType.image,
									src: FreightImg1,
									alt: "Live Shipments",
									caption: "Live Shipments",
								},
								{
									type: MediaType.image,
									src: FreightImg2,
									alt: "chat",
									caption: "Chat",
								},
								{
									type: MediaType.image,
									src: FreightImg3,
									alt: "Shipment Detail",
									caption: "Shipment Detail",
								},
							],
						},
					],
				},
			],
		},

		{
			type: ContentType.title,
			title: "Wantify",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Wantify provides the inside scoop for all your local shopping needs. On this project I worked on branding, app design, iOS development and frontend development. Wantify consists of a consumer side mobile app, and a merchant side web app. Merchants can post news and deals that can be seen in the app. Consumers can add and message merchants. There were a lot of people involved in this project working on everything from back-end api, sign-in with keycloak, a messaging service, stripe integration, and auto adding users through email invites.",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.image,
					src: WantifyImg1,
					alt: "Wantify App Login",
					caption: "Login",
				},
				{
					type: MediaType.image,
					src: WantifyImg2,
					alt: "Wantify List View",
					caption: "List View",
				},
				{
					type: MediaType.image,
					src: WantifyImg3,
					alt: "Wantify Map View",
					caption: "Map View",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.image,
					src: WantifyFull,
					alt: "Merchant Portal & Store Page",
					caption: "Merchant Portal & Store Page",
				},
			],
		},
		{
			type: ContentType.title,
			title: "Shrine Dev Website",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "While working at Shrine Development, it was decided their site needed a little touch up. Some of the important goals were to showcase a portfolio of work, provide plenty of content regarding Shrine's work ethics, and include multiple points for lead generation. On this project I was able to tackle everything from design to development, as well as content.",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.video,
					src: ShrineMenuVid,
					alt: "Shrine Menu Pages",
					posterSrc: ShrineMenuPoster,
					autoplay: true,
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.video,
					src: ShrineTransitionVid,
					alt: "Shrine Page Transition",
					posterSrc: ShrineTransitionPoster,
					autoplay: true,
				},
			],
		},
		{
			type: ContentType.title,
			title: "BudRunner",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Invision Prototype Designs for a marijuana delivery service",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.image,
					src: BudRunner1,
					alt: "BudRunner Store View",
					caption: "Store View",
				},
				{
					type: MediaType.image,
					src: BudRunner2,
					alt: "BudRunner Product Detail",
					caption: "Product Detail",
				},
				{
					type: MediaType.image,
					src: BudRunner3,
					alt: "BudRunner Checkout",
					caption: "Checkout",
				},
			],
		},
		{
			type: ContentType.title,
			title: "Plain Sight",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "UX/UI design and React Native development",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.image,
					src: PlainSight1,
					alt: "Plain Sight List",
					caption: "List View",
				},
				{
					type: MediaType.image,
					src: PlainSight2,
					alt: "Plain Sight Detail",
					caption: "Location Detail",
				},
				{
					type: MediaType.image,
					src: PlainSight3,
					alt: "Plain Sight User",
					caption: "User Profile",
				},
			],
		},
		{
			type: ContentType.title,
			title: "Mobile App Demos",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "We were always encouraged to train and improve ourselves at Shrine. Here are some of the mobile app demos I created while training: ",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.image,
					src: WeatherApp,
					alt: "weather app",
					caption: "Weather",
				},
				{
					type: MediaType.image,
					src: TodoListApp,
					alt: "todo list app",
					caption: "Todo List",
				},
				{
					type: MediaType.image,
					src: HotDogApp,
					alt: "Hotdog/Not Hotdog ml app",
					caption: "Hotdog/Not Hotdog",
				},
				{
					type: MediaType.image,
					src: FlowerApp,
					alt: "Flower ML Classification app",
					caption: "Flower ML Classification",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.video,
					src: ARDiceVid,
					alt: "AR Dice",
					caption: "AR Dice",
					posterSrc: ARDicePoster,
					autoplay: true,
				},
				{
					type: MediaType.video,
					src: ARRulerVid,
					alt: "AR Ruler",
					caption: "AR Ruler",
					posterSrc: ARRulerPoster,
					autoplay: true,
				},
				{
					type: MediaType.video,
					src: ARPokeVid,
					alt: "AR Poke",
					caption: "AR Poke",
					posterSrc: ARPokePoster,
					autoplay: true,
				},
			],
		},
	],
};
