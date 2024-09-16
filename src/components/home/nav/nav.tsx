import { ModeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";

export const Nav = () => {
	return (
		<div className="flex  flex-row justify-between items-center lg:w-full w-screen bg-background lg:bg-transparent ">
			<nav className="text-xl bg-background  font-semibold italic flex gap-0 lg:gap-1 my-5">
				<p>About</p>
				<Separator className="mx-2 " orientation="vertical" />
				<p>Experience</p>
				<Separator className="mx-2" orientation="vertical" />
				<p>Projects</p>
			</nav>
			<div className="flex lg:hidden">
				<ModeToggle />
			</div>
		</div>
	);
};

// ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
