import Layout from "../../components/Layout";
import { getProviders, signIn } from "next-auth/react";

const discover = ({ providers }) => {
	return (
		<Layout title="Discover" providers={providers}>
			<h1 className="text-black">discover page</h1>
		</Layout>
	);
};

export default discover;

export async function getServerSideProps(context) {
	const providers = await getProviders();
	console.log(providers);
	return {
		props: {
			providers,
		},
	};
}
