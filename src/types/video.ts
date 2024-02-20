import { MediaType } from "./mediaType";

export interface Video {
	type: MediaType;
	src: string;
	alt: string;
	caption?: string;
	autoplay?: boolean;
	controls?: boolean;
	posterSrc?: string;
	preload?: boolean;
}
