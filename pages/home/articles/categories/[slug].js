import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCategoriesPosts, getCategories } from "../../../../services";
import { Layout, PostCards, Categorie, Loader } from "../../../../components";
const Slug = ({ posts }) => {
	//console.log(posts);
	const router = useRouter();
	const { slug } = router.query;
	if (router.isFallback) {
		return <Loader />;
	}
	return (
		<Layout title={`Catarory: ${slug}`}>
			<div className="container mx-auto pt-4 px-10 mb-8">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
					<div className="col-span-1 md:col-span-8">
						{posts.map((post, index) => (
							<PostCards post={post.node} key={post.node.title} />
						))}
					</div>
					<div className="col-span-1 md:col-span-4 -order-1 md:order-last">
						<div className="sticky top-20 md:top-24 ">
							<Categorie />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export async function getStaticPaths() {
	const categories = await getCategories();

	return {
		paths: categories.map(({ slug }) => ({ params: { slug } })),
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const posts = await getCategoriesPosts(params.slug);
	console.log(params.slug);
	return {
		props: { posts },
		revalidate: 1,
	};
}

export default Slug;
