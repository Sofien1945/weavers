import React from "react";

const ServiceCard = ({ srcImage, name, hashtag, children }) => {
	return (
		<div className="rounded overflow-hidden shadow-lg hover:scale-105 hover:rotate-12 duration-300 px-2">
			<img className="w-full" src={srcImage} alt="Mountain" />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 text-black">{name}</div>
				<p className="text-gray-700 text-base">{children}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					{hashtag}
				</span>
			</div>
		</div>
	);
};

export default ServiceCard;
