import { ModeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { NavLinks } from "@/content/config/consts";
import Link from "next/link";

export const Nav = () => {
	return (
		<div className="flex flex-row justify-between items-center  w-full bg-background lg:bg-transparent ">
			<nav className="text-xl bg-background  font-semibold italic flex gap-0 lg:gap-1 my-5">
				{NavLinks.map((nav, index) => (
					<div className="flex" key={nav.name}>
						<Link href={nav.href}>
							<p className="hover:underline">{nav.name}</p>
						</Link>
						{index < NavLinks.length - 1 && (
							<Separator
								className="mx-2"
								orientation="vertical"
							/>
						)}
					</div>
				))}
			</nav>
			<div className="flex lg:hidden">
				<ModeToggle />
			</div>
		</div>
	);
};

// ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
// [&>p]:bg-background
