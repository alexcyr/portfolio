import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const blackStar: Project = {
	id: "blackStar",
	title: "Black Star",
	description: `"Black Star" is a mobile game built with Unity where players draw cards featuring colored shapes. The objective is to strategically place cards on a grid, creating three-in-a-row sequences of matching colors and shapes, similar to tic-tac-toe. With strategic removal cards and wildcard black stars, the game combines skill and surprise for a dynamic and challenging experience. `,
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
			text: `"Black Star" is a mobile game built with Unity where players draw cards featuring colored shapes. The objective is to strategically place cards on a grid, creating three-in-a-row sequences of matching colors and shapes, similar to tic-tac-toe. With strategic removal cards and wildcard black stars, the game combines skill and surprise for a dynamic and challenging experience. `,
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
