import { ExpData } from "@/content/json/exp-data";
import { Dot } from "lucide-react";
import { Badge } from "../ui/badge";

export const Experience = () => {
	return (
		<section
			id="experience"
			className="flex flex-col scroll-mt-16 l:scroll-mt-24 h-screen gap-5 py-2"
		>
			<div className="">
				<h1 className="text-2xl mb-0 w-fit  bg-background tracking-tight font-medium">
					Experience
				</h1>
				{ExpData.map((exp) => (
					<div
						key={exp.company}
						className="flex group flex-col gap-1 py-5"
					>
						<h2 className="font-medium text-xl tracking-tight lg:text-xl">
							{exp.role}
						</h2>
						<span className="flex w-full group-hover:text-primary justify-between lg:justify-normal lg:gap-5 items-center">
							<a
								href={exp.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center"
							>
								<p className="tracking-tight group-hover:underline">
									{exp.company}
								</p>
							</a>
							<Dot className="h-10 w-10 text-primary" />
							<p className="italic">{exp.duration}</p>
						</span>
						<ul className="list-disc px-2 text-muted-foreground bg-background">
							{exp.description.map((li) => (
								<li key={li}>{li}</li>
							))}
						</ul>
						<div className="flex flex-wrap gap-2 lg:mt-5 mt-2 text-primary">
							{exp.tech.map((tc) => (
								<Badge
									variant="secondary"
									className="text-primary"
									key={tc}
								>
									{tc}
								</Badge>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
