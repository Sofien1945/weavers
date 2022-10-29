import Layout from "../../../components/Layout";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";
import {
	Categorie,
	PostCards,
	PostWidget,
	FeaturedPosts,
} from "../../../components";
import { getPosts } from "../../../services";

const articles = ({ posts }) => {
	//console.log(posts);
	return (
		<Layout title="Articles">
			<div className="container mx-auto px-10 mb-8">
				<FeaturedPosts />
				<div className="container grid grid-cols-1 md:grid-cols-12 gap-8 mx-auto p-2">
					<div className="md:col-span-8 col-span-1 ">
						{posts.map((post) => (
							<PostCards post={post.node} key={post.node.title} />
						))}
					</div>
					<div className="md:col-span-4 col-span-1 -order-1 md:order-last">
						<div className="text-center mb-4">
							<Link href="https://app.hygraph.com/95836f8fded1404891287c55f0cc0eb6/master/content/87e2c268a5ca48e8ab433b7fee4dde5d/view/3a42460e894740c39890b7972624c5b7">
								<span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-gradient-to-tr from-amber-700 to-yellow-400 text-lg font-medium rounded-full text-white px-16 py-2 cursor-pointer">
									New Article
								</span>
							</Link>
						</div>
						<PostWidget />
						<Categorie />
					</div>
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
