import { Loader2Icon } from "lucide-react";

interface LoaderProps {
	size?: number;
}

export const Loader = ({ size = 30 }: LoaderProps) => {
	return (
		<div className="h-full w-full flex justify-center items-center">
			<Loader2Icon className="animate-spin" size={size} />
		</div>
	);
};
