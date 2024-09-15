import { Button } from "@/components/ui/button";
import { Social } from "@/consts";

export const Socials = () => {
	return (
		<div className="flex flex-col gap-2 max-w-[80%]">
			<h2 className="font-medium bg-background  tracking-tight">
				Want to get in touch?{" "}
				<span className="font-bold italic hover:underline">
					<a
						href="mailto:dhruvkulkarni96@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Write to me
					</a>
				</span>{" "}
				or connect with me on:
			</h2>
			<span className="w-full flex gap-2">
				{Social.map((sc) => (
					<a
						key={sc.name}
						href={sc.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="outline" size="icon">
							{sc.icon}
						</Button>
					</a>
				))}
			</span>
		</div>
	);
};
