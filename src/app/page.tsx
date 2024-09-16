import { Background } from "@/components/home/background";
import { Header } from "@/components/home/header/header";
import { Main } from "@/components/home/main/Main";
import { Nav } from "@/components/home/nav/nav";

export default function Home() {
	return (
		<div>
			<Background />
			<div className="relative mx-auto min-h-screen  max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4 ">
					<Header />
					<div className="lg:hidden flex my-10 sticky top-0">
						<Nav />
					</div>
					<Main />
				</div>
			</div>
		</div>
	);
}
