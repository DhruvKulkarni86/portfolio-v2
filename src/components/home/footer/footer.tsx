export const Footer = () => {
	return (
		<div className="flex flex-col scroll-mt-16 l:scroll-mt-24 lg:pt-10 pt-2 text-sm text-muted-foreground  ">
			<p className="bg-background w-fit">
				Developed by Dhruv Kulkarni 🇮🇳
			</p>
			<p className="bg-background w-fit">
				Created using{" "}
				<a
					href="https://nextjs.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<b>NextJS</b>
				</a>
				,{" "}
				<a
					href="https://tailwindcss.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<b>TailwindCSS</b>
				</a>{" "}
				and{" "}
				<a
					href="https://ui.shadcn.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<b>shadcn/ui</b>
				</a>
				.
			</p>
		</div>
	);
};
