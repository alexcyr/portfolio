import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

export const morph: Project = {
	id: "morph",
	title: "Morph",
	description: `Experience the thrill of Morph, a game where quick thinking and reflexes are paramount. In this 5-week project, race down challenging slopes, collecting coins and morphing between shapes—a ball for rolling, a cone for jumping, a cube for breaking obstacles, and a star for gliding through the air. Dash through hoops and loops, aiming for the fastest time while collecting coins for the highest score.`,
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Morph",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: `Experience the thrill of Morph, a game where quick thinking and reflexes are paramount. In this 5-week project, race down challenging slopes, collecting coins and morphing between shapes—a ball for rolling, a cone for jumping, a cube for breaking obstacles, and a star for gliding through the air. Dash through hoops and loops, aiming for the fastest time while collecting coins for the highest score.`,
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: `Morph demands quick reactions and decision-making, providing a challenging and rapidly replayable adventure. My role in the project involved learning Maya to construct dynamic levels and design vibrant bonus skins for the in-game shop. Crafting user experiences through meticulous testing ensures that Morph, despite its concise development period, delivers an engaging and enjoyable gameplay experience.`,
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
