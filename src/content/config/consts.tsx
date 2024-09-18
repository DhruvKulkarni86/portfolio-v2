import { About } from "@/components/sections/about";
import { nav, sections, socials } from "../../types";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa6";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";

export const Social: socials = [
	{
		name: "linkedin",
		href: "https://www.linkedin.com/in/dhruvkulkarn1/",
		icon: <FaLinkedin className="text-xl" />,
	},
	{
		name: "github",
		href: "https://github.com/DhruvKulkarni86/",
		icon: <FaGithub className="text-xl" />,
	},
	{
		name: "stackoverflow",
		href: "https://stackoverflow.com/users/16339491/doomguy096",
		icon: <FaStackOverflow className="text-xl" />,
	},
];

export const NavLinks: nav = [
	{
		name: "About",
		href: "/#about",
	},
	{
		name: "Experience",
		href: "/#experience",
	},
	{
		name: "Projects",
		href: "/#projects",
	},
];

export const Sections: sections = [
	{
		name: "About",
		section: <About />,
	},
	{
		name: "Experience",
		section: <Experience />,
	},
	{
		name: "Projects",
		section: <Projects />,
	},
];
