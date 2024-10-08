import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// const inter = Inter({ subsets: ["latin"] });
const scGro = Schibsted_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dhruv Kulkarni",
	description: "Dhruv Kulkarni is a frontend developer based in India",
	authors: [{ name: "Dhruv", url: "https://dhruvk.xyz" }],
	creator: "Dhruv Kulkarni",
	openGraph: {
		title: "Dhruv Kulkarni - Frontend Developer",
		description: "Crafting beautiful web experiences.",
		url: "https://dhruvk.xyz/",
		siteName: "dhruvk.xyz",
		locale: "en_IN",
		type: "website",
		images: [
			{
				url: "https://dhruvk.xyz/og.png",
				width: 512,
				height: 512,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth" suppressHydrationWarning>
			<body className={scGro.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
