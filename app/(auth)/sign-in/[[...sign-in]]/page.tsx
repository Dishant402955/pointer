import { Loader } from "@/components/loader";
import { SignIn } from "@clerk/nextjs";

const Page = async () => {
	return <SignIn fallback={<Loader />} />;
};

export default Page;
