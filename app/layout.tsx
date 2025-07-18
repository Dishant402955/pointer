import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pointer",
	description: "Create Pointers better way!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
				captcha: {
					theme: "dark",
					size: "flexible",
				},
				variables: {
					colorBackground: "#101010",
				},
				layout: {
					animations: true,
				},
			}}
			afterSignOutUrl={"/sign-in"}
		>
			<html lang="en" suppressHydrationWarning className="dark">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
