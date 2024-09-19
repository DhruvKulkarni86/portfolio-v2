import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://dhruvk.xyz",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://dhruvk.xyz/#about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://dhruvk.xyz/#experience",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5,
		},
		{
			url: "https://dhruvk.xyz/#projects",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
	];
}
