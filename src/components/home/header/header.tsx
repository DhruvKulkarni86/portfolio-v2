import { ModeToggle } from "@/components/theme-toggle";
import { Socials } from "./socials";
import { Nav } from "../nav/nav";
import Link from "next/link";

export const Header = () => {
	return (
		<header
			id="top"
			className="lg:sticky lg:top-0 flex flex-col lg:max-h-screen lg:justify-between gap-10 lg:py-24"
		>
			<div className="flex flex-col gap-5">
				<div className="flex flex-col items-start w-full">
					<Link href="">
						<h1 className="text-3xl bg-background  lg:text-4xl font-bold tracking-tight">
							Dhruv Kulkarni
						</h1>
					</Link>
					<h2 className="text-xl bg-background  font-semibold tracking-tight">
						Frontend Developer | RPA Developer
					</h2>
					<p className="font-medium bg-background  w-[80%] text-muted-foreground">
						I love all things web and crafting beautiful web
						experiences.
					</p>
					<div className="hidden mt-5 lg:flex">
						<ModeToggle />
					</div>
				</div>
				<div className="hidden lg:flex">
					<Nav />
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<Socials />
			</div>
		</header>
	);
};
