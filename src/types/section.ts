import { ContentType } from "./contentType";
import { MultiMedia } from "./multimedia";
import { Size } from "./size";
import { Title } from "./title";
import { Text } from "./text";

export interface Section {
	type: ContentType.section;
	size: Size;
	content?: (Title | Text | MultiMedia | Section)[];
}
