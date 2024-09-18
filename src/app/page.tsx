import { Background } from "@/components/home/background";
import { Header } from "@/components/home/header/header";
import { Main } from "@/components/home/main/Main";
import { MobileNav } from "@/components/home/nav/mobile-nav";

export default function Home() {
	return (
		<div className="cursor-default ">
			<Background />
			<div className="relative mx-auto min-h-screen  lg:max-w-screen-xl max-w-screen-md px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4 ">
					<Header />
					<div className="fixed m-4 lg:hidden bottom-0 right-0">
						<MobileNav />
					</div>
					<Main />
				</div>
			</div>
		</div>
	);
}
