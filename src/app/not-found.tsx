import { Background } from "@/components/home/background";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="h-screen w-screen gap-5 flex flex-col items-center justify-center">
			<Background />
			<h2>404 - Not Found</h2>
			<p>Could not find requested page</p>
			<Link
				href="/"
				className="italic bg-background underline font-semibold text-primary text-xl"
			>
				Return Home
			</Link>
		</div>
	);
}
