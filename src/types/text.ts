import { Content } from "./content";
import { ContentType } from "./contentType";
import { Size } from "./size";

export interface Text extends Content {
	type: ContentType.text;
	text: string;
	size: Size;
}
