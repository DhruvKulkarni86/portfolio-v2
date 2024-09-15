import { ModeToggle } from "@/components/theme-toggle";
import { Separator } from "../../ui/separator";
import { Socials } from "./socials";

export const Header = () => {
	return (
		<header className="flex flex-col max-h-screen lg:justify-between gap-5 ">
			<div className="flex flex-col  gap-5">
				<div className="flex gap-1 flex-col items-start w-full">
					<h1 className="text-3xl bg-background  lg:text-4xl font-bold tracking-tight">
						Dhruv Kulkarni
					</h1>
					<h2 className="text-xl bg-background  font-semibold tracking-tight">
						Frontend Developer
					</h2>
					<p className="font-medium bg-background  w-[80%] text-muted-foreground">
						I love all things web and crafting beautiful web
						experiences.
					</p>
					<ModeToggle />
				</div>
				<nav className="text-xl bg-background  font-semibold italic flex gap-1 my-5">
					<p>About</p>
					<Separator className="mx-2 " orientation="vertical" />
					<p>Experience</p>
					<Separator className="mx-2" orientation="vertical" />
					<p>Projects</p>
				</nav>
			</div>
			<Socials />
		</header>
	);
};
