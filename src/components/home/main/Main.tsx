import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";

export const Main = () => {
	return (
		<main className="lg:w-1/2 py-24 flex flex-col gap-20">
			<About />
			<Experience />
		</main>
	);
};
