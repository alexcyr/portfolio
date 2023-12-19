import { ContentType } from "./contentType";
import { Media } from "./media";
import { Size } from "./size";

export interface MultiMedia {
	type: ContentType.multimedia;
	size: Size;
	media: Media[];
}
