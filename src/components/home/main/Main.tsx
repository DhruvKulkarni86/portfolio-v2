import { Sections } from "@/content/config/consts";
import { Footer } from "../footer/footer";

export const Main = () => {
	return (
		<main className="lg:w-1/2 py-24 max-lg:py-20 flex flex-col gap-20">
			{Sections.map((section) => (
				<section key={section.name}>{section.section}</section>
			))}
			<Footer />
		</main>
	);
};
