import { projects } from "@/types";

export const ProjData: projects = [
	{
		title: "Nursery Ecommerce Webapp",
		github: "https://github.com/DhruvKulkarni86/eCommerce_fullstack",
		hosted: "https://balajinursery.netlify.app/",
		description:
			"A Fullstack Ecommerce WebApp developed from scratch using the MERN stack. Features a minimal, responsive and performant storefront and a CMS for inventory and customer management.",
		tech: [
			"React",
			"Redux Toolkit",
			"MUI",
			"ExpressJS",
			"MongoDB",
			"Firebase",
			"Razorpay",
		],
		images: ["/projects/ecom/1.png", "/projects/ecom/2.png"],
	},
	{
		title: "GameTrakr - Track Game Prices",
		github: "https://github.com/DhruvKulkarni86/GameTrakr",
		hosted: "https://gametrakr.netlify.app/",
		description:
			"A webapp to search, shop, explore and keep track of deals on your favourite games across different stores.",
		tech: ["React", "ExpressJS", "MongoDB", "Vanilla CSS", "JWT"],
		images: ["/projects/gt/1.webp", "/projects/gt/2.png"],
	},
];
