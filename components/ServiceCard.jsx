import React from "react";

const ServiceCard = ({ srcImage, name, hashtag, children }) => {
	return (
		<div className="hover:rotate-12 duration-300 mx-auto w- relative h-72 text-white">
			<div className="absolute h-full shadow-lg">
				<img
					src={srcImage}
					alt="Mountain"
					className="rounded-lg w-fit h-full object-cover overflow-hidden"
				/>
			</div>
			<div className="relative mx-8 md:mx-4 mt-36 bg-black/60 rounded-lg shadow-lg">
				<div className="px-6 pt-4 ">
					<span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{hashtag}
					</span>
				</div>
				<div className="px-6 py-2">
					<div className="font-bold text-xl mb-2 text-white">{name}</div>
					<p className="text-white">{children}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
