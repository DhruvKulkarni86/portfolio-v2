import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dhruv Kulkarni",
	description: "Dhruv Kulkarni is a frontend developer based in India",
	authors: [{ name: "Dhruv", url: "https://dhruvk.xyz" }],
	creator: "Dhruv Kulkarni",
	openGraph: {
		title: "Dhruv Kulkarni - Frontend Developer",
		description: "Crafting beautiful web experiences.",
		url: "https://nextjs.org",
		siteName: "Next.js",
		locale: "en_IN",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth" suppressHydrationWarning>
			<body className={inter.className}>
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
