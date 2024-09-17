"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronsUp, ChevronUp, X } from "lucide-react";
import Link from "next/link";

export const MobileNav = () => {
	return (
		<Drawer>
			<DrawerTrigger className="lg:hidden" asChild>
				<Button size="icon">
					<ChevronUp className="h-4 w-4" />
				</Button>
			</DrawerTrigger>
			<DrawerContent className="lg:hidden">
				<div className="mx-auto w-full max-w-screen-xl">
					<div className="">
						<nav className="text-xl bg-background  font-semibold italic flex flex-col gap-2 w-full justify-center items-center my-5">
							<Link href="/#about">
								<DrawerClose asChild>
									<p>About</p>
								</DrawerClose>
							</Link>

							<Link href="/#experience">
								<DrawerClose asChild>
									<p>Experience</p>
								</DrawerClose>
							</Link>
							<Link href="/#projects">
								<DrawerClose asChild>
									<p>Projects</p>
								</DrawerClose>
							</Link>
						</nav>
					</div>
					<DrawerFooter>
						<div className="flex gap-5  justify-end">
							<ModeToggle />
							<DrawerClose asChild>
								<Button
									onClick={() => {
										window.scrollTo(0, 0);
									}}
									variant="outline"
									size="icon"
								>
									<ChevronsUp className="h-4 w-4" />
								</Button>
							</DrawerClose>

							<DrawerClose asChild>
								<Button size="icon" className="self-end">
									<X className="h-4 w-4" />
								</Button>
							</DrawerClose>
						</div>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
};
