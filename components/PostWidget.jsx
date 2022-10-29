import { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
	const [relatedPosts, setRelatedPosts] = useState([]);
	const grpahCMSImageLoader = ({ src }) => src;
	useEffect(() => {
		if (slug) {
			getSimilarPosts(categories, slug).then((results) =>
				setRelatedPosts(results)
			);
		} else {
			getRecentPosts(categories, slug).then((results) =>
				setRelatedPosts(results)
			);
		}
		console.log(relatedPosts);
	}, [slug]);
	return (
		<div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 md:sticky top-20 md:top-24">
			<h3 className="text-xl mb-8 font-semibold border-b pb-4 text-black">
				{slug ? "Realted Post" : "Recent Post"}
			</h3>
			<div className="flex flex-col w-full mb-4 space-y-4">
				{relatedPosts.map((post, index) => (
					<div key={index} className="flex">
						<div className="w-16 flex items-center">
							<Image
								loader={grpahCMSImageLoader}
								alt={post.title}
								height="60px"
								width="60px"
								unoptimized
								className="align-middle rounded-full"
								src={post.featuredImage.url}
							/>
						</div>
						<div className="flex-grow ml-4">
							<p className="text-gray-500 font-xs">
								{moment(post.createdAt).format("MMM DD, YYYY")}
							</p>
							<Link
								href={`/home/articles/${post.slug}`}
								className="text-md text-black"
								key={index}
							>
								<a>
									<span className="text-black hover:text-amber-500">
										{post.title}
									</span>
								</a>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostWidget;
