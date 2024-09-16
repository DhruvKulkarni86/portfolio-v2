import { about } from "@/types";
import { FaJava, FaJs, FaPython, FaReact } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import {
	SiFigma,
	SiJavascript,
	SiMongodb,
	SiMui,
	SiNextdotjs,
	SiPostgresql,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

export const AboutData: about = {
	about: "I create dynamic and performant Web Applications using the MERN stack and NextJS. Passionate about UIs, I'm on a journey to constantly refine and optimize the visual and interactive aspects of my projects. I love to experiment and integrate the latest web dev trends in my projects. Curerently exploring the domain of cloud computing.",
	tooling: {
		languages: [
			{
				name: "Typescript",
				icon: <SiTypescript />,
			},
			{
				name: "Javascript",
				icon: <SiJavascript />,
			},
			{
				name: "Java",
				icon: <FaJava />,
			},
			{
				name: "Python",
				icon: <FaPython />,
			},
		],
		library: [
			{
				name: "React",
				icon: <FaReact />,
			},
			{
				name: "NextJS",
				icon: <SiNextdotjs />,
			},
			{
				name: "TailwindCSS",
				icon: <SiTailwindcss />,
			},
			{
				name: "MUI",
				icon: <SiMui />,
			},
		],
		tools: [
			{
				name: "Supabase",
				icon: <SiSupabase />,
			},
			{
				name: "Postgresql",
				icon: <SiPostgresql />,
			},
			{
				name: "Firebase",
				icon: <IoLogoFirebase />,
			},
			{
				name: "MongoDB",
				icon: <SiMongodb />,
			},
			{
				name: "Figma",
				icon: <SiFigma />,
			},
		],
		rpa: [
			{
				name: "Automation Anywhere",
			},
			{
				name: "VBA",
			},
			{
				name: "SAP",
			},
		],
	},
};
