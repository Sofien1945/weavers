import React from "react";

const ServiceCard = ({ srcImage, name, hashtag, children }) => {
	return (
		<div className="hover:rotate-12 duration-300 mx-5 max-w-full ml-2">
			<div className="relative h-full">
				<img
					src={srcImage}
					alt="Mountain"
					className="rounded-lg w-fit h-full object-cover"
				/>
			</div>
			<div className="relative mx-24 md:mx-4 -mt-16 bg-white rounded-lg shadow-lg">
				<div className="px-6 pt-4 ">
					<span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{hashtag}
					</span>
				</div>
				<div className="px-6 py-2">
					<div className="font-bold text-xl mb-2 text-black">{name}</div>
					<p className="text-gray-700 text-base">{children}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
