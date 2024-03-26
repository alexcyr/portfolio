import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import GenArtVid from "assets/video/gen-art/banner.mp4";
import VidPoster from "assets/images/gen-art/banner-poster.jpg";

import Abstract from "assets/images/gen-art/abstract.jpg";

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
		"Experiments in **creating generative art** with **p5.js** and **minting NFTs** on the **Tezos blockchain**. Explore **procedurally generated** pieces, **dynamic flow fields**, and **interactive artworks**. Algorithms feel alive as organic visual experiences, blending code and creativity. ",
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
			text: "Experiments in **creating generative art** with **p5.js** and **minting NFTs** on the **Tezos blockchain**. Explore **procedurally generated** pieces, **dynamic flow fields**, and **interactive artworks**. Algorithms feel alive as organic visual experiences, blending code and creativity. ",
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
			title: "The Nature of Code",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "An incredibly exciting youtube series by Daniel Shiffman aka The Coding Train, [The Nature of Code](https://www.youtube.com/watch?v=70MQ-FugwbI) explores coding representations of natural phenomena and I can't recommend enough. What fascinates me most about generative art is how lively and organic art can feel from something that is rigidly procedural and directive.",
			size: Size.md,
		},
		{
			type: ContentType.section,
			size: Size.sm,
			content: [],
		},
		{
			type: ContentType.text,
			text: `These projects I've created offer unique energetic visual experiences and interactivity: 
- **Ebb and Flow** features vibrant flocking patterns generated within a six-layer Perlin noise flow field
- **Connections** celebrates community growth through swirling particles each representing Twitter followers
- **Shadowmaker 2.0** allows users to manipulate dynamic shadows
- **Roy G. Blob** provides interactive control over RGB color blobs
`,
			size: Size.md,
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [],
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
					caption: "Ebb and Flow [[Link]](https://objkt.com/tokens/hicetnunc/295121)",
				},
				{
					type: MediaType.iframe,
					src: "https://assets.objkt.media/file/assets-003/QmXaBZhViDRNCt82ErFv67GoRqSvRdV4TeMzGT6qtaU1cE/artifact/index.html?objkt=354199&creator=tz1irpd3STXLP7PYLJz9xhS77vSYzHiyxSDA&viewer=null&danger=ignored",
					alt: "connections",
					posterSrc: Connections,
					caption: "Connections [[Link]](https://objkt.com/tokens/hicetnunc/354199)",
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
					caption: "Shadowmaker 2.0 [[Link]](https://objkt.com/tokens/hicetnunc/389808)",
				},
				{
					type: MediaType.iframe,
					src: "https://assets.objkt.media/file/assets-003/QmVvvWaUYJf4arvTrmrSDxdHaTd7DZfpHCKmHdJRet75KE/artifact/index.html?objkt=428869&creator=tz1irpd3STXLP7PYLJz9xhS77vSYzHiyxSDA&viewer=null&danger=ignored",
					alt: "roy g blob",
					posterSrc: Blob,
					caption: "Roy G. Blob (WASD) [[Link]](https://objkt.com/tokens/hicetnunc/428869)",
				},
			],
		},
		{
			type: ContentType.title,
			title: "Block x Block",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "While learning about p5.js, I soon discovered the style of long form generative art, made popular by NFT sites such as Art Blocks. There is an art to crafting a single chunk of code that can generate an an entire collection of thematically similar yet distinctly unique art pieces.",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Around the same time I was getting into generative art, I was also playing with MagicaVoxel making 3D voxel art. I developed a style of creating 2D art from 3D blocks, which then evolved to take on a more abstract feel. This next piece became the source of my inspiration for Block x Block:",
			size: Size.md,
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [
				{
					type: ContentType.multimedia,
					size: Size.xxs,
					media: [
						{
							type: MediaType.image,
							src: Abstract,
							alt: "abstract block gen 1",
							caption: "Handmade block by block in MagicaVoxel",
						},
					],
				},
			],
		},
		{
			type: ContentType.text,
			text: `"It's a random bunch of blocks. So what?!" But there's also a delicate balance in the distribution of color and variation in scale and depth. Building from the background-forward, each unit within the <x,y,z> space evaluates whether it should render a block or not based on a deterministic 3D smooth random noise. There is a fun push and pull of code and artistic adjustment to get all the weightings for block size and color just right. [Block x Block](https://www.fxhash.xyz/generative/slug/block-x-block) was minted on fxHash in November 2021, and has 40 unique editions.`,
			size: Size.md,
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [
				{
					type: ContentType.multimedia,
					size: Size.sm,
					isGrid: true,
					media: [
						{
							type: MediaType.image,
							src: Block2,
							alt: "gen block 2",
							caption:
								"[#10](https://www.fxhash.xyz/gentk/KT1KEa8z6vWXDJrVqtMrAeDVzsvxat3kHaCE-20597)",
						},
						{
							type: MediaType.image,
							src: Block1,
							alt: "gen block 1",
							caption:
								"[#38](https://www.fxhash.xyz/gentk/KT1KEa8z6vWXDJrVqtMrAeDVzsvxat3kHaCE-515809)",
						},
						{
							type: MediaType.image,
							src: Block3,
							alt: "gen block 3",
							caption:
								"[#24](https://www.fxhash.xyz/gentk/KT1KEa8z6vWXDJrVqtMrAeDVzsvxat3kHaCE-30439)",
						},
					],
				},
			],
		},
	],
};
