import { socials } from "./types";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa6";

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
