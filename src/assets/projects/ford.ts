import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const ford: Project = {
	id: "ford",
	title: "Ford Motor Company - Workplace Solutions",
	description:
		"Fullstack developer working on internal web applications to help employees throughout their day at work such as building navigation, room booking, and during quarantine built a COVID-19 screening survey with regional localization that supported 83k daily users as they returned to work. All of our apps were made with AngularJS frontends and Java Spring Boot backends.",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {
		date: "April 2019 - April 2021",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "Ford Motor Company - Workplace Solutions",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "Fullstack developer working on internal web applications to help employees throughout their day at work such as building navigation, room booking, and during quarantine built a COVID-19 screening survey with regional localization that supported 83k daily users as they returned to work. All of our apps were made with AngularJS frontends and Java Spring Boot backends.",
			size: Size.lg,
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
