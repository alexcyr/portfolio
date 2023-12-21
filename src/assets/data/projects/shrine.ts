import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const shrine: Project = {
	id: "shrine",
	title: "Shrine Development - Web & App Dev Studio",
	description:
		"Frontend and mobile app developer, as well as designer for a number of local and national clients. It was exciting to work on a wide variety of projects and deliver impactful solutions. Tech focus includes Swift, React JS, React Native",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
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
			text: "Frontend and mobile app developer, as well as designer for a number of local and national clients. It was exciting to work on a wide variety of projects and deliver impactful solutions. Tech focus includes Swift, React JS, React Native",
			size: Size.lg,
		},
		{
			type: ContentType.title,
			title: "Freightroll",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Freightroll is an ios app to keep shippers and carriers connected. Using gps tracking and in app messaging, shippers and carriers are kept up-to-date at all times on the progress of a load. For this project, I worked closely on this app with a senior ios developer, while also maintaining close contact with the client.",
			size: Size.md,
		},
		{
			type: ContentType.title,
			title: "Wantify",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Wantify provides the inside scoop for all your local shopping needs. On this project I worked on branding, app design, ios development and front-end development. Wantify consists of a consumer side mobile app, and a merchant side web app. Merchants can post news and deals that can be seen in the app. Consumers can add and message merchants. There were a lot of people involved in this project working on everything from back-end api, sign-in with keycloak, a messaging service, stripe integration, and auto adding users through email invites.",
			size: Size.md,
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
			type: ContentType.title,
			title: "Mobile App Demos",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "We were always encouraged to train and improve ourselves at Shrine. Here are some of the mobile app demos I created while training. ",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.video,
					src: "/video.mp4",
					alt: "video description",
					caption: "optional caption",
				},
			],
		},
	],
};
