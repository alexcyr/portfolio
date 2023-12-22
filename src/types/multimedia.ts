import { ContentType } from "./contentType";
import { Media } from "./media";
import { Size } from "./size";
import { Video } from "./video";

export interface MultiMedia {
	type: ContentType.multimedia;
	size: Size;
	media: (Media | Video)[];
}
