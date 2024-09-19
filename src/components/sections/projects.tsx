import { ProjData } from "@/content/json/project-data";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";

export const Projects = () => {
	return (
		<div
			id="projects"
			className="flex flex-col scroll-mt-16 l:scroll-mt-24  lg:pt-10 pt-2 "
		>
			<div className="max-w-xl max-lg:max-w-lg">
				<h1 className="text-2xl mb-0 w-fit  bg-background tracking-tight font-medium">
					Projects
				</h1>
				{ProjData.map((proj) => (
					<div
						key={proj.title}
						className="flex group cursor-pointer flex-col gap-4 pb-5 rounded-md my-5 "
					>
						<div className="flex items-center justify-between">
							<a
								href={proj.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								<h2 className="font-semibold bg-background w-fit lg:group-hover:underline text-xl tracking-tight lg:text-xl ">
									{proj.title}{" "}
								</h2>
							</a>
							<a
								href={proj.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="link to git repository"
							>
								<Button
									name="github link"
									variant="outline"
									aria-label="github"
									size="icon"
								>
									<FaGithub className="text-xl" />
								</Button>
							</a>
						</div>
						<div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-between gap-4">
							<div className="w-[250px] lg:w-[250px]">
								<AspectRatio ratio={16 / 9}>
									<Image
										src={proj.images[0]}
										alt={proj.title}
										className="rounded-md object-cover"
										width={800}
										height={600}
									/>
								</AspectRatio>
							</div>
							<p className="text-muted-foreground bg-background  lg:w-[70%]">
								{proj.description}
							</p>
						</div>
						<div className="flex flex-wrap gap-2 lg:mt-5 mt-2 text-primary">
							{proj.tech.map((tc) => (
								<Badge
									variant="secondary"
									className="text-primary text-badge dark:bg-secondary bg-texture"
									key={tc}
								>
									{tc}
								</Badge>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
