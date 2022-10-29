import Layout from "../../../components/Layout";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";
import { Categorie, PostCards, PostWidget } from "../../../components";
import { getPosts } from "../../../services";

const articles = ({ posts }) => {
	//console.log(posts);
	return (
		<Layout title="Articles">
			<div className="container grid grid-cols-1 md:grid-cols-12 gap-8 mx-auto p-2">
				<div className="md:col-span-8 col-span-1 ">
					{posts.map((post) => (
						<PostCards post={post.node} key={post.node.title} />
					))}
				</div>
				<div className="md:col-span-4 col-span-1 -order-1 md:order-last">
					<PostWidget />
					<Categorie />
				</div>
			</div>
		</Layout>
	);
};

export default articles;

export async function getStaticProps() {
	const posts = (await getPosts()) || [];
	return {
		props: { posts },
	};
}
