import { Button } from "@/components/ui/button";
import { Social } from "@/content/config/consts";
import { FileDown } from "lucide-react";
import Link from "next/link";

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
			<div className="flex justify-between items-center w-full max-lg:max-w-[60%]">
				<span className="w-full flex gap-5">
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
				<Link href="/resume.pdf" target="_blank">
					<Button className="text-base ml-10 rounded-sm lg:ml-0">
						<FileDown className="mr-2 h-4 w-4" /> Resume
					</Button>
				</Link>
			</div>
		</div>
	);
};
