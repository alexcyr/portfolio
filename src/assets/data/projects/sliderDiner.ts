import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import Banner from "assets/video/slider-diner/banner.mp4";
import BannerPoster from "assets/images/slider-diner/banner-poster.jpg";

import LevelSelect from "assets/video/slider-diner/level-select.mp4";
import LevelSelectPoster from "assets/images/slider-diner/level-select-poster.jpg";

import Stars from "assets/video/slider-diner/stars.mp4";
import StarsPoster from "assets/images/slider-diner/stars-poster.jpg";

import Fail from "assets/video/slider-diner/fail.mp4";
import FailPoster from "assets/images/slider-diner/fail-poster.jpg";

import World from "assets/video/slider-diner/world-load.mp4";
import WorldPoster from "assets/images/slider-diner/world-poster.jpg";

export const sliderDiner: Project = {
	id: "slider-diner",
	title: "Slider Diner",
	description: `"Slider Diner" is a Unity-built mobile game that merges the swiping intensity of Fruit Ninja with the culinary chaos of Diner Dash. Swiftly combine ingredients to construct recipes, aiming for a 1-3 star rating. Progress through themed worlds, unlocking new challenges by earning stars. Creating 'Slider Diner' was an enjoyable journey in combining swiping mechanics with culinary challenges. Prototyping this concept was a rewarding and fun experience.`,
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {},
	pageContent: [
		{
			type: ContentType.title,
			title: "Slider Diner",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: `"Slider Diner" is a Unity-built mobile game that merges the swiping intensity of Fruit Ninja with the culinary chaos of Diner Dash. Swiftly combine ingredients to construct recipes, aiming for a 1-3 star rating. Progress through themed worlds, unlocking new challenges by earning stars.`,
			size: Size.lg,
		},

		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.video,
					src: Banner,
					alt: "slider danner banner",
					posterSrc: BannerPoster,
					autoplay: true,
					preload: true,
					disable: true,
				},
			],
		},

		{
			type: ContentType.multimedia,
			size: Size.xs,
			isGrid: true,
			media: [
				{
					type: MediaType.video,
					src: LevelSelect,
					alt: "level select",
					posterSrc: LevelSelectPoster,
					autoplay: true,
				},
				{
					type: MediaType.video,
					src: Fail,
					alt: "food swipe fail",
					posterSrc: FailPoster,
					autoplay: true,
				},
				{
					type: MediaType.video,
					src: Stars,
					alt: "three stars",
					posterSrc: StarsPoster,
					autoplay: true,
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.video,
					src: World,
					alt: "world dev view",
					posterSrc: WorldPoster,
					autoplay: true,
				},
			],
		},
	],
};
