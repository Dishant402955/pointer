import { SignedIn, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-full w-full">
			{children}
			<Suspense fallback={<></>}>
				<SignedIn>
					<div className="absolute top-4 right-4">
						<UserButton
							fallback={
								<div className="size-10 rounded-full bg-accent-foreground " />
							}
						/>
					</div>
				</SignedIn>
			</Suspense>
		</div>
	);
}
