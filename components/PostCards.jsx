import React from "react";
import moment from "moment/moment";
import Link from "next/link";
import Image from "next/image";
const PostCards = ({ post }) => {
	//console.log(post);
	const grpahCMSImageLoader = ({ src }) => src;

	return (
		<div className="bg-white shadow-lg p-0 md:p-4 pb-12 mb-8 rounded-lg">
			<div className="relative overflow-hidden">
				<img
					src={post.featuredImage.url}
					alt=""
					className="object-top h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg text-3xl font-bold"
				/>
			</div>
			<h1 className="transition duration-300 text-center my-4 cursor-pointer hover:text-amber-500 text-black text-xl">
				<Link href={`/home/articles/${post.slug}`}>
					<a>{post.title}</a>
				</Link>
			</h1>
			<div className="block lg:flex text-center items-center justify-center mb-8 w-full">
				<div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
					<Image
						unoptimized
						loader={grpahCMSImageLoader}
						alt={post.author.name}
						height="30px"
						width="30px"
						className="align-middle rounded-full"
						src={post.author.photo.url}
					/>
					<p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
						{post.author.name}
					</p>
				</div>
				<div className="font-medium text-gray-700">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 inline mr-2 text-red-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<span className="align-middle">
						{moment(post.createdAt).format("MMM DD, YYYY")}
					</span>
				</div>
			</div>
			<p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
				{post.excerpt}
			</p>
			<div className="text-center">
				<Link href={`/home/articles/${post.slug}`}>
					<span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-gradient-to-tr from-amber-700 to-yellow-400 text-lg font-medium rounded-full text-white px-10 py-2 cursor-pointer">
						Continue Reading
					</span>
				</Link>
			</div>
		</div>
	);
};

export default PostCards;
