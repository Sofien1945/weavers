import React, { useEffect, useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import founders from "../util/data";

const Quote = () => {
	const [founder, setFounder] = useState(founders);
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const lastIndex = founder.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, founder]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	return (
		<section className="flex flex-col max-w-screen px-4">
			<div className="flex justify-center pb-5">
				<h2 className="text-2xl font-semibold underline">
					<span>Founders</span>
				</h2>
			</div>
			<div className="flex justify-between items center">
				<button onClick={() => setIndex(index - 1)}>
					<ArrowCircleLeftIcon
						className="text-amber-500 rounded-full hover:text-gray-800"
						fontSize="large"
					/>
				</button>
				{founder.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;

					let position = "flex";
					if (personIndex === index) {
						position = "flex";
					}
					if (
						personIndex !== index ||
						(index === 0 && personIndex === founder.length - 1)
					) {
						position = "hidden";
					}
					console.log(index);
					return (
						<article
							className={`flex flex-col items-center justify-center space-y-2 ${position}`}
							key={id}
						>
							<img
								src={image}
								alt={name}
								className="rounded-full h-[120px] w-[120px]"
							/>
							<h4 className="text-bold text-amber-500">{name}</h4>
							<p>{title}</p>
							<FormatQuoteIcon
								fontSize="large"
								className="text-amber-500 rounded-full"
							/>
							<p className="text-center">{quote}</p>
						</article>
					);
				})}

				<button onClick={() => setIndex(index + 1)}>
					<ArrowCircleRightIcon
						className="text-amber-500 rounded-full hover:text-gray-800"
						fontSize="large"
					/>
				</button>
			</div>
		</section>
	);
};

export default Quote;
