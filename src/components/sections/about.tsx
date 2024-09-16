import { AboutData } from "@/content/json/about-data";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

export const About = () => {
	return (
		<div id="about" className="flex flex-col gap-10 py-2">
			<div className="gap-5 flex flex-col">
				<h1 className="text-xl w-fit lg:text-2xl bg-background tracking-tight font-medium">
					About
				</h1>
				<p className="text-muted-foreground bg-background">
					{AboutData.about}
				</p>
			</div>
			<div className="gap-5 flex flex-col">
				<h2 className="text-xl w-fit lg:text-2xl bg-background tracking-tight font-medium">
					Tooling
				</h2>
				<div className="flex flex-col gap-5">
					<div className="flex flex-row gap-5 flex-wrap">
						{AboutData.tooling.languages.map((ic) => (
							<Button
								variant="outline"
								className="items-center text-sky-500 font-light text-sm lg:text-base gap-2 "
								key={ic.name}
							>
								{ic.icon} {ic.name}
							</Button>
						))}
						{AboutData.tooling.library.map((ic) => (
							<Button
								variant="outline"
								className="items-center text-amber-500 font-light text-sm lg:text-base  gap-2"
								key={ic.name}
							>
								{ic.icon} {ic.name}
							</Button>
						))}
						{AboutData.tooling.tools.map((ic) => (
							<Button
								variant="outline"
								className="items-center text-primary font-light text-sm lg:text-base  gap-2"
								key={ic.name}
							>
								{ic.icon} {ic.name}
							</Button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
