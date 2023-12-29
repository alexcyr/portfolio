import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";
import FordBanner from "assets/images/ford/ford-banner.jpeg";

import NavigateImg from "assets/images/ford/ford_1.jpg";
import FordSpaceBookingImg from "assets/images/ford/ford-space-booking.jpg";

import FordCovidChartImg from "assets/images/ford/ford-covid-chart.jpg";
import FordCovidSurveyImg from "assets/images/ford/ford-covid-survey.jpg";

export const ford: Project = {
	id: "ford",
	title: "Ford Motor Company - Workplace Solutions",
	description:
		"Fullstack developer working on internal web applications to help employees throughout their day at work such as building navigation, room booking, and during quarantine built a COVID-19 screening survey with regional localization that supported 83k daily users as they returned to work. All of our apps were made with AngularJS frontends and Java Spring Boot backends.",
	previewMedia: { type: MediaType.video, src: "", alt: "" },
	info: {
		date: "April 2019 - April 2021",
	},
	pageContent: [
		{
			type: ContentType.title,
			title: "Ford Motor Company - Workplace Solutions",
			size: Size.lg,
		},
		{
			type: ContentType.text,
			text: "Fullstack developer working on internal web applications to help employees throughout their day at work such as building navigation, room booking, and during quarantine built a COVID-19 screening survey with regional localization that supported 83k daily users as they returned to work. All of our apps were made with AngularJS frontends and Java Spring Boot backends.",
			size: Size.lg,
		},
		{
			type: ContentType.multimedia,
			size: Size.lg,
			media: [
				{
					type: MediaType.image,
					src: FordBanner,
					alt: "ford logo banner",
				},
			],
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [
				{
					type: ContentType.title,
					title: "Navigate",
					size: Size.md,
				},
				{
					type: ContentType.text,
					text: "We built an interactive mapping solution using svg maintenance floorplans as a base, powered by LeafletJs. To make a richer experience, I parsed the svgs, extracting rooms and mapping to known entities, to paint interactive layers on top of the base floorplans. Employees can search for conference rooms or other key landmarks. We piloted this as a large touchscreen in the lobby of our building, and also available to access on the web and on the go.",
					size: Size.md,
				},
			],
		},

		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: NavigateImg,
					alt: "navigate wayfinding kiosk",
					caption: "Demoing our wayfinding prototype",
				},
			],
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [
				{
					type: ContentType.title,
					title: "Space Booking",
					size: Size.md,
				},
				{
					type: ContentType.text,
					text: "The existing method for booking rooms consisted of checking if rooms were available one by one, so we wanted ease friction by letting employees choose from a list of available rooms. Our first solution was to run a processor to fetch room availability and book rooms on behalf of users. This worked as an MVP, but was no where near scalable for all the building in Ford. Later we added integration with Office 365 so that requests for room availability happened from an employee's client as needed, and had up-to-date availability status. The added benefit was that the bookings were now generated and owned by the employee.",
					size: Size.md,
				},
			],
		},

		{
			type: ContentType.multimedia,
			size: Size.md,
			media: [
				{
					type: MediaType.image,
					src: FordSpaceBookingImg,
					alt: "space booking desktop and navigate mobile",
					caption: "Space Booking and Navigate",
				},
			],
		},
		{
			type: ContentType.title,
			title: "COVID-19 Screening Survey",
			size: Size.md,
		},
		{
			type: ContentType.text,
			text: "While the rest of Ford was shut down at the very beginning of quarantine, our team worked hard to build an attestation survey within two weeks, to help monitor and control the spread of COVID-19 as employees returned back to work. As time went on the survey evolved to support a unique survey for each geographic region, as well as multiple languages within each region with full admin customization and changelog auditing. Our survey serviced 83k users daily and helped to avoid large outbreaks and full shutdowns.",
			size: Size.md,
		},
		{
			type: ContentType.multimedia,
			size: Size.xs,
			media: [
				{
					type: MediaType.image,
					src: FordCovidChartImg,
					alt: "covid 19 screening badge",
					caption: "Daily Email Badge",
				},
			],
		},
		{
			type: ContentType.multimedia,
			size: Size.sm,
			media: [
				{
					type: MediaType.image,
					src: FordCovidSurveyImg,
					alt: "covid 19 screening survey",
					caption: "Covid Survey",
				},
			],
		},
	],
};
