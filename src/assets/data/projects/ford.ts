import { ContentType } from "types/contentType";
import { MediaType } from "types/mediaType";
import { Project } from "types/project";
import { Size } from "types/size";
import FordBanner from "assets/images/ford/ford-banner.jpeg";

import NavigateImg from "assets/images/ford/ford_1.jpg";
import FordSpaceBookingImg from "assets/images/ford/ford-space-booking.jpg";

import FordCovidChartImg from "assets/images/ford/ford-covid-chart.jpg";
import FordCovidSurveyImg from "assets/images/ford/ford-covid-survey.jpg";

import FordThumbPoster from "assets/images/ford/ford-thumb-poster.jpg";
import FordThumb from "assets/images/ford/ford-thumb.gif";

export const ford: Project = {
	id: "ford",
	title: "Ford Motor Company - Workplace Solutions",
	description:
		"**Fullstack developer** building internal web applications with **Angular JS** and **Java Spring Boot** to help employees throughout their day at work such as **building navigation**, **room booking**, and during quarantine built a **COVID-19 screening survey** with regional localization that supported 83k daily users as they returned to work.",
	previewMedia: {
		type: MediaType.image,
		src: FordThumb,
		alt: "ford preview",
		posterSrc: FordThumbPoster,
		autoplay: true,
		disable: true,
	},
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
			text: "**Fullstack developer** building internal web applications with **Angular JS** and **Java Spring Boot** to help employees throughout their day at work such as **building navigation**, **room booking**, and during quarantine built a **COVID-19 screening survey** with regional localization that supported 83k daily users as they returned to work.",
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
					preload: true,
					disable: true,
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
					text: "To help employees navigate unfamiliar buildings, we built an interactive mapping solution powered by LeafletJs, using svg maintenance floorplans as a base. To make for a richer user experience, I built a tool to parse the floorplan svgs, extracting rooms and mapping them to known entities, which would then be used to paint interactive layers on top of the base floorplans. Employees can search for conference rooms or other key landmarks. We piloted this as a large touchscreen in the lobby of our building, and also made it available to access on the web for on the go.",
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
					text: "The existing method for booking rooms required employees to use their email client to manually check room availability one room at a time, so we wanted ease friction by letting employees choose from a list of available rooms. Our first solution was to run a processor to fetch room availability and book rooms on behalf of users. This worked as an MVP, but was nowhere near scalable for all the buildings in Ford. Later we added integration with Office 365 so that room availability requests happened from an employee's client as needed, and had up-to-date availability status. The added benefit was that the bookings were now generated and owned by the employee.",
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
			text: "While most of Ford was shutdown at the very beginning of quarantine, our team worked hard to build an attestation survey within two weeks to help monitor and control the spread of COVID-19 as employees returned back to work. Safety and security was the main priority and foundation of the app, which also meant we needed to safely handle the encryption and storage of employee HIPPA info. As time went on the survey evolved to support a unique survey for each geographic region, as well as multiple languages within each region with full admin customization and changelog auditing. Our survey serviced 83k users daily and helped to mitigate outbreaks and avoid full shutdowns.",
			size: Size.md,
		},
		{
			type: ContentType.section,
			size: Size.md,
			content: [],
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
