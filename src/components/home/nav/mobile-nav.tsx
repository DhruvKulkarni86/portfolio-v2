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
import { NavLinks } from "@/content/config/consts";
import { ChevronsUp, Settings2, X } from "lucide-react";
import Link from "next/link";

export const MobileNav = () => {
	return (
		<Drawer>
			<DrawerTrigger className="lg:hidden" asChild>
				<Button size="icon">
					<Settings2 className="h-4 w-4" />
				</Button>
			</DrawerTrigger>
			<DrawerContent className="lg:hidden">
				<div className="mx-auto w-full max-w-screen-xl">
					<div className="">
						<nav className="text-xl bg-background  font-semibold italic flex flex-col gap-2 w-full justify-center items-center my-5">
							{NavLinks.map((nav) => (
								<Link key={nav.name} href={nav.href}>
									<DrawerClose asChild>
										<p>{nav.name}</p>
									</DrawerClose>
								</Link>
							))}
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
