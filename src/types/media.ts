import { MediaType } from "./mediaType";

export interface Media {
	type: MediaType;
	src: string;
	alt: string;
	caption?: string;
}
