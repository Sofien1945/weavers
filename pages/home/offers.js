import Layout from "../../components/Layout";
import { getProviders, signIn } from "next-auth/react";

const offers = ({ providers }) => {
	return (
		<Layout title="Offers" providers={providers}>
			<h1 className="text-black">Offers page</h1>
		</Layout>
	);
};

export default offers;

export async function getServerSideProps(context) {
	const providers = await getProviders();
	console.log(providers);
	return {
		props: {
			providers,
		},
	};
}
