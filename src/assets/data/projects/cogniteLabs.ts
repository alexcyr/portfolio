import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";

import CogniteBanner from "assets/images/cognite/cognite-labs-banner.jpeg";

import CleanDash from "assets/images/cognite/30clean_dash.jpeg";
import CleanLogin from "assets/images/cognite/30clean_login.jpeg";

import CleanProfile from "assets/images/cognite/30clean_profile.jpg";
import CleanFeed from "assets/images/cognite/30clean_feed.jpg";
import CleanRecipes from "assets/images/cognite/30clean_recipes.jpg";

import IHPHome from "assets/images/cognite/ihp.jpg";
import IHPPage from "assets/images/cognite/ihp_page.jpg";
import IHPMobile from "assets/images/cognite/ihp-mobile.png";

import Preuss from "assets/images/cognite/preuss-home.jpg";
import EAM from "assets/images/cognite/eam.jpg";
import CommonWealth from "assets/images/cognite/commonwealth.jpg";

export const cogniteLabs: Project = {
	id: "cognite-labs",
	title: "Cognite Labs - Web Development & Design",
	description:
		"As a frontend developer and designer at Cognite Labs, I specialized in crafting web apps and static pages for businesses spanning local and diverse markets. I played a pivotal role in implementing marketing sales funnels, elevating online presence, and enhancing lead generation. My work highlighted the seamless integration of design and development, delivering impactful digital solutions.",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {
		date: "Mar 2018 - March 2019",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "Cognite Labs - Web Development & Design",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "As a frontend developer and designer at Cognite Labs, I specialized in crafting web apps and static pages for businesses spanning local and diverse markets. I played a pivotal role in implementing marketing sales funnels, elevating online presence, and enhancing lead generation. My work highlighted the seamless integration of design and development, delivering impactful digital solutions.",
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: CogniteBanner,
					alt: "cognite labs header",
					preload: true,
					disable: true,
				},
			],
		},
		{
			type: ContentType.title,
			title: "30 Clean",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "30 Clean connects clean eating challengers, giving them all the support they need in one place. Users can post photos, share stories, find tips and recipes, and be inspired by the successes of all the other challengers. Our team was brought in to supercharge their current process, introducing a marketing sales funnel and by developing a challenger dashboard application, including everything relevant to a users clean eating challenge.",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: CleanLogin,
					alt: "30Clean login",
				},
				{
					type: MediaType.image,
					src: CleanDash,
					alt: "30Clean dashboard",
				},
			],
		},
		{
			type: ContentType.text,
			text: "The design direction of the dashboard needed to reflect and support the goal of creating healthy habits. The main aspects of the dashboard are the daily diary and gratitude journal, a recipes page to find and share healthy meal ideas, and a resources tab to make it easy to find all necessary information regarding their clean eating journey. Built with Ruby",
			size: Size.md,
		},

		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: CleanProfile,
					alt: "30Clean profile",
				},
				{
					type: MediaType.image,
					src: CleanFeed,
					alt: "30Clean feed",
				},
				{
					type: MediaType.image,
					src: CleanRecipes,
					alt: "30Clean recipes",
				},
			],
		},
		{
			type: ContentType.title,
			title: "Ingham Health Plan",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Ingham Health Plan(IHP) is a site redesign for community health access programs. The main goal of the redesign was to connect all various sub divisions of IHP in a way that is easy to navigate and understand.",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: IHPHome,
					alt: "ihp home",
				},
				{
					type: MediaType.image,
					src: IHPMobile,
					alt: "IHP mobile",
				},
				{
					type: MediaType.image,
					src: IHPPage,
					alt: "IHP page",
				},
			],
		},
		{
			type: ContentType.title,
			title: "SuperWebPros",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "Super Web Pros makes getting a new website quick, easy, and affordable. Sites are optimized to generate leads and created in just under 3 weeks. Getting started is as simple as filling out a quick form, and in moments, business owners have a quote for a brand new website.",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: EAM,
					alt: "EAM Staffing",
					caption: "EAM Staffing",
				},
				{
					type: MediaType.image,
					src: Preuss,
					alt: "pruess pets",
					caption: "Pruess Pets",
				},
				{
					type: MediaType.image,
					src: CommonWealth,
					alt: "CommonWealth",
					caption: "CommonWealth",
				},
			],
		},
	],
};
