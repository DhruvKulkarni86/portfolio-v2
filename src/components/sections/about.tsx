import { AboutData } from "@/content/json/about-data";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Badge } from "../ui/badge";

export const About = () => {
	return (
		<div id="about" className="flex flex-col gap-5 py-2">
			<div className="">
				<h1 className="text-xl mb-2 w-fit lg:text-2xl bg-background tracking-tight font-medium">
					About
				</h1>
				<p className="text-muted-foreground font-medium bg-background">
					{AboutData.about}
				</p>
			</div>
			<div className="">
				<h2 className="text-xl mb-2 w-fit bg-background tracking-tight font-medium">
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
								<div className="m-2" key={ic.name}>
									<Image
										src={`/icons/${ic.name}.svg`}
										width={30}
										height={30}
										alt={ic.name}
									/>
								</div>
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
								<div className="m-2" key={ic.name}>
									<Image
										src={`/icons/${ic.name}.svg`}
										width={30}
										height={30}
										alt={ic.name}
									/>
								</div>
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
								<div className="m-2" key={ic.name}>
									<Image
										src={`/icons/${ic.name}.svg`}
										width={30}
										height={30}
										alt={ic.name}
									/>
								</div>
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
								<Badge className="cursor-default" key={ic.name}>
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
