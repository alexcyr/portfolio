import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import GenArtVid from "assets/video/gen-art/banner.mp4";
import VidPoster from "assets/images/gen-art/banner-poster.jpg";

import Block1 from "assets/images/gen-art/block1.webp";
import Block2 from "assets/images/gen-art/block2.webp";
import Block3 from "assets/images/gen-art/block3.webp";

import Ebb from "assets/images/gen-art/ebb.jpg";
import Connections from "assets/images/gen-art/connections.jpg";
import Shadow from "assets/images/gen-art/shadow.jpg";
import Blob from "assets/images/gen-art/blob.jpg";

import GenThumbPoster from "assets/images/gen-art/gen-thumb-poster.jpg";
import GenThumb from "assets/video/gen-art/gen-thumb.mp4";

export const generativeArt: Project = {
	id: "generative-art",
	title: "Generative Art",
	description:
		"Experiments in creating generative art powered by p5.js, where algorithms feel alive as unique visual experiences, blending code and creativity. Explore procedurally generated pieces, dynamic flow fields, and interactive artworks. Each creation is minted as an NFT on the Tezos blockchain.",
	previewMedia: {
		type: MediaType.video,
		src: GenThumb,
		alt: "gen art preview",
		posterSrc: GenThumbPoster,
		autoplay: true,
		disable: true,
	},
	info: {
		website: "https://objkt.com/profile/bigcatnft",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "Generative Art",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "Experiments in creating generative art powered by p5.js, where algorithms feel alive as unique visual experiences, blending code and creativity. Explore procedurally generated pieces, dynamic flow fields, and interactive artworks. Each creation is minted as an NFT on the Tezos blockchain.",
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.video,
					src: GenArtVid,
					alt: "gen art banner",
					autoplay: true,
					posterSrc: VidPoster,
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.title,
			title: "Deterministic",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Experiments in creating generative art powered by p5.js, where algorithms feel alive as unique visual experiences, blending code and creativity. Explore procedurally generated pieces, dynamic flow fields, and interactive artworks. Each creation is minted as an NFT on the Tezos blockchain.",
			size: Size.md,
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [
				{
					type: ContentType.multimedia,
					size: Size.sm,
					media: [
						{
							type: MediaType.image,
							src: Block2,
							alt: "gen block 2",
						},
						{
							type: MediaType.image,
							src: Block1,
							alt: "gen block 1",
						},
						{
							type: MediaType.image,
							src: Block3,
							alt: "gen block 3",
						},
					],
				},
			],
		},

		{
			type: ContentType.multimedia,
			size: Size.md,
			column: true,
			media: [
				{
					type: MediaType.iframe,
					src: "https://assets.objkt.media/file/assets-003/QmY9mmMYKrubP2cG6ySXZFpeZbAifNdzdPHTRjEP2spD9s/artifact/index.html?objkt=295121&creator=tz1irpd3STXLP7PYLJz9xhS77vSYzHiyxSDA&viewer=null&danger=ignored",
					alt: "ebb n flow",
					posterSrc: Ebb,
				},
				{
					type: MediaType.iframe,
					src: "https://assets.objkt.media/file/assets-003/QmXaBZhViDRNCt82ErFv67GoRqSvRdV4TeMzGT6qtaU1cE/artifact/index.html?objkt=354199&creator=tz1irpd3STXLP7PYLJz9xhS77vSYzHiyxSDA&viewer=null&danger=ignored",
					alt: "connections",
					posterSrc: Connections,
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			column: true,
			media: [
				{
					type: MediaType.iframe,
					src: "https://assets.objkt.media/file/assets-003/QmYZU8tnD9PpQo2PsmLpX69vkquLsB3hW8GeEAZ3DaDhPA/artifact/index.html?objkt=389808&creator=tz1irpd3STXLP7PYLJz9xhS77vSYzHiyxSDA&viewer=null&danger=ignored",
					alt: "shadowmaker",
					posterSrc: Shadow,
				},
				{
					type: MediaType.iframe,
					src: "https://assets.objkt.media/file/assets-003/QmVvvWaUYJf4arvTrmrSDxdHaTd7DZfpHCKmHdJRet75KE/artifact/index.html?objkt=428869&creator=tz1irpd3STXLP7PYLJz9xhS77vSYzHiyxSDA&viewer=null&danger=ignored",
					alt: "roy g blob",
					posterSrc: Blob,
				},
			],
		},
	],
};
