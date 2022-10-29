import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

//import { FeaturedPostCard } from "./FeaturedPostCard";
import { getFeaturedPosts } from "../services";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 1024 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 1024, min: 768 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 768, min: 640 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 640, min: 0 },
		items: 1,
	},
};

const FeaturedPosts = () => {
	const [featuredPosts, setFeaturedPosts] = useState([]);
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		getFeaturedPosts().then((result) => {
			setFeaturedPosts(result);
			console.log(featuredPosts);
			setDataLoaded(true);
		});
	}, []);

	const customLeftArrow = (
		<div className="absolute left-0 text-center py-3 cursor-pointer ">
			<ArrowCircleLeftIcon
				className="text-amber-500 rounded-full hover:text-gray-800"
				fontSize="large"
			/>
		</div>
	);

	const customRightArrow = (
		<div className="absolute right-0 py-3 cursor-pointer">
			<ArrowCircleRightIcon
				className="text-amber-500 rounded-full hover:text-gray-800"
				fontSize="large"
			/>
		</div>
	);

	return (
		<div className="my-8">
			<Carousel
				infinite
				customLeftArrow={customLeftArrow}
				customRightArrow={customRightArrow}
				responsive={responsive}
				itemClass="px-4"
			>
				{dataLoaded &&
					featuredPosts.map((post, index) => (
						<div className="relative h-72" key={index}>
							<div
								className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
								style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
							/>
							<div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
							<div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
								<p className="text-white mb-4 text-shadow font-semibold text-xs">
									{moment(post.createdAt).format("MMM DD, YYYY")}
								</p>
								<p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
									{post.title}
								</p>
								<div className="flex items-center absolute bottom-5 w-full justify-center">
									<Image
										unoptimized
										alt={post.author.name}
										height="30px"
										width="30px"
										className="align-middle drop-shadow-lg rounded-full"
										src={post.author.photo.url}
									/>
									<p className="inline align-middle text-white text-shadow ml-2 font-medium">
										{post.author.name}
									</p>
								</div>
							</div>
							<Link href={`/home/articles/${post.slug}`}>
								<span className="cursor-pointer absolute w-full h-full" />
							</Link>
						</div>
					))}
			</Carousel>
		</div>
	);
};

export default FeaturedPosts;
