import { AboutData } from "@/content/json/about-data";
import { Separator } from "@/components/ui/separator";
import { Badge } from "../ui/badge";

export const About = () => {
	return (
		<div id="about" className="flex flex-col gap-10 py-2">
			<div className="">
				<h2 className="text-2xl mb-2 w-fit  bg-background tracking-tight font-medium">
					About
				</h2>
				<p className="text-muted-foreground font-medium bg-background">
					{AboutData.about}
				</p>
			</div>
			<div className="">
				<h2 className="lg:text-xl text-base  mb-2 w-fit bg-background tracking-tight font-medium">
					Tooling
				</h2>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col w-fit">
						<p className="italic font-medium text-muted-foreground">
							Languages
						</p>
						<Separator className="w-[90%]" />
						<div className="flex flex-row gap-2 lg:gap-5 mt-2 flex-wrap">
							{AboutData.tooling.languages.map((ic) => (
								<Badge
									variant="secondary"
									className="text-primary "
									key={ic.name}
								>
									{ic.name}
								</Badge>
							))}
						</div>
					</div>
					<div className="flex flex-col w-fit">
						<p className="italic font-medium text-muted-foreground">
							Frontend
						</p>
						<Separator className="w-[90%]" />
						<div className="flex flex-row gap-2 lg:gap-5 mt-2 flex-wrap">
							{AboutData.tooling.frontend.map((ic) => (
								<Badge
									variant="secondary"
									className="text-primary"
									key={ic.name}
								>
									{ic.name}
								</Badge>
							))}
						</div>
					</div>
					<div className="flex flex-col w-fit">
						<p className="italic font-medium text-muted-foreground">
							Backend
						</p>
						<Separator className="w-[90%]" />
						<div className="flex flex-row gap-2 lg:gap-5 mt-2 flex-wrap">
							{AboutData.tooling.backend.map((ic) => (
								<Badge
									variant="secondary"
									className="text-primary "
									key={ic.name}
								>
									{ic.name}
								</Badge>
							))}
						</div>
					</div>
					<div className="flex flex-col w-fit">
						<p className="italic font-medium text-muted-foreground">
							RPA
						</p>
						<Separator className="w-[90%]" />
						<div className="flex flex-row gap-2 lg:gap-5 mt-2 flex-wrap">
							{AboutData.tooling.rpa.map((ic) => (
								<Badge
									className="text-primary"
									variant="secondary"
									key={ic.name}
								>
									{ic.name}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
