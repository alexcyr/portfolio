import { Media } from "./media";
import { MediaType } from "./mediaType";

export interface Video extends Media {
	type: MediaType;
	src: string;
	alt: string;
	caption?: string;
	autoplay?: boolean;
	controls?: boolean;
	posterSrc?: string;
	preload?: boolean;
}
