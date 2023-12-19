import { Content } from "./content";
import { ContentType } from "./contentType";
import { Size } from "./size";

export interface Title extends Content {
	type: ContentType.title;
	title: string;
	size: Size;
}
