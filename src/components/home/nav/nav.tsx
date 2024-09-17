import { ModeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const Nav = () => {
	return (
		<div className="flex  flex-row justify-between items-center lg:w-full w-full bg-background lg:bg-transparent ">
			<nav className="text-xl bg-background  font-semibold italic flex gap-0 lg:gap-1 my-5">
				<Link href="/#about">
					<p>About</p>
				</Link>
				<Separator className="mx-2 " orientation="vertical" />
				<Link href="/#experience">
					<p>Experience</p>
				</Link>
				<Separator className="mx-2" orientation="vertical" />
				<Link href="/#projects">
					<p>Projects</p>
				</Link>
			</nav>
			<div className="flex lg:hidden">
				<ModeToggle />
			</div>
		</div>
	);
};

// ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
// [&>p]:bg-background
