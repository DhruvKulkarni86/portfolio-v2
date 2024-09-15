"use client";

import { Header } from "@/components/home/header/header";
import { useTheme } from "next-themes";

export default function Home() {
	const bg =
		"absolute inset-0  h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]";

	const bgDark =
		"absolute inset-0  h-full w-full bg-background bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]";
	const { theme } = useTheme();
	console.log("THEME", theme);
	return (
		<div className={theme === "light" ? bg : bgDark}>
			<div className="mx-auto min-h-screen  max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex  min-h-screen lg:justify-between lg:gap-4 lg:py-24">
					<Header />
				</div>
			</div>
		</div>
	);
}
