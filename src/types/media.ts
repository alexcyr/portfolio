import { MediaType } from "./mediaType";

export interface Media {
	type: MediaType;
	src: string;
	alt: string;
	caption?: string;
	preload?: boolean;
	disable?: boolean;
	fullscreenSrc?: string;
}
