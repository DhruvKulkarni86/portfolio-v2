import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Dhruv Kulkarni - Frontend Developer",
		short_name: "Dhruv Kulkarni",
		description: "Dhruv Kulkarni is a frontend developer based in India",
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		theme_color: "#facc15",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
