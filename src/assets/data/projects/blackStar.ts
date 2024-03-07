import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import Banner from "assets/images/black-star/banner3.jpeg";

import IntroVid from "assets/video/black-star/blackstar-intro.mp4";
import IntroPoster from "assets/images/black-star/intro-poster.jpg";

import RemoveVid from "assets/video/black-star/blackstar-remove.mp4";
import RemovePoster from "assets/images/black-star/remove-poster.jpg";

import VictoryVid from "assets/video/black-star/blackstar-victory.mp4";
import VictoryPoster from "assets/images/black-star/victory-poster.jpg";

export const blackStar: Project = {
	id: "blackStar",
	title: "Black Star",
	description: `"Black Star" is a prototype for a mobile game built with Unity where players draw cards featuring colored shapes. The objective is to strategically place cards on a grid, creating three-in-a-row sequences of matching colors and shapes, similar to tic-tac-toe. With strategic removal cards and wildcard black stars, the game combines skill and surprise for a dynamic and challenging experience. `,
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Black Star",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: `"Black Star" is a prototype for a mobile game built with Unity where players draw cards featuring colored shapes. The objective is to strategically place cards on a grid, creating three-in-a-row sequences of matching colors and shapes, similar to tic-tac-toe. With strategic removal cards and wildcard black stars, the game combines skill and surprise for a dynamic and challenging experience. `,
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: Banner,
					alt: "black star icon banner",
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.title,
			title: "Rules",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: `1. Each player is dealt three cards  
2. A player can play any card that matches the board shape and color  
3. Black stars are wild and can be played on any shape  
4. Remove cards remove any opponent tile that are not already in a sequence  
5. Objective is to make rows of three tiles  
6. Player with the most rows wins when there are no moves left  
7. If the game is tied, a sudden death round with the first to make a row wins.`,
			size: Size.md,
		},
		{
			type: ContentType.title,
			title: "Playing against a computer",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.video,
					src: IntroVid,
					alt: "black star intro screen",
					caption: "Intro Deal",
					autoplay: true,
					posterSrc: IntroPoster,
				},
				{
					type: MediaType.video,
					src: RemoveVid,
					alt: "black star remove card",
					caption: "Remove Card",
					posterSrc: RemovePoster,
					autoplay: true,
				},
				{
					type: MediaType.video,
					src: VictoryVid,
					alt: "black star victory screen",
					caption: "Sudden Death Victory",
					autoplay: true,
					posterSrc: VictoryPoster,
				},
			],
		},
	],
};
