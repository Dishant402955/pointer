import { Loader } from "@/components/loader";
import { SignUp } from "@clerk/nextjs";

const Page = async () => {
	return <SignUp fallback={<Loader />} />;
};

export default Page;
