import { Title } from "./title";
import { Text } from "./text";
import { Media } from "./media";
import { MultiMedia } from "./multimedia";
import { Section } from "./section";

export interface Project {
	id: string;
	title: string;
	description: string;
	previewMedia: Media;
	info: {
		date?: string;
		website?: string;
	};
	pageContent: (Title | Text | MultiMedia | Section)[];
}
