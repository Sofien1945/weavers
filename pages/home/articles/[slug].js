import Layout from "../../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

import {
	PostDetail,
	Categorie,
	PostWidget,
	Author,
	Comments,
	CommentsForm,
	Loader,
} from "../../../components";
import { getPosts, getPostDetails } from "../../../services";

const PostDetails = ({ post }) => {
	const router = useRouter();
	const { slug } = router.query;
	//console.log(post);
	return (
		<Layout title={`Article: ${slug}`}>
			<div className="container mx-auto px-10 mb-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					<div className="col-span-1 lg:col-span-8">
						<PostDetail post={post} />
						<Author author={post.author} />
					</div>
					<div className="col-span-1 lg:col-span-4">
						<div className="relative lg:sticky top-8">
							<PostWidget
								slug={post.slug}
								categories={post.categories.map((category) => category.slug)}
							/>
							<Categorie />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default PostDetails;

export async function getStaticPaths() {
	const posts = await getPosts();
	//console.log(posts);
	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: true,
	};
}
export async function getStaticProps({ params }) {
	console.log(params);
	const data = await getPostDetails(params.slug);
	return {
		props: {
			post: data,
		},
	};
}
