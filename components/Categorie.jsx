import { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import { getCategories } from "../services";
const Categorie = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		getCategories().then((newCategories) => {
			setCategories(newCategories);
		});
	}, []);

	return (
		<div className="bg-white text-black shadow-lg rounded-lg p-4 divide-y-2 flex flex-col justify-center">
			<h3 className="text-xl font-semibold  py-3">Categories</h3>
			{categories.map((category, index) => (
				<Link key={index} href={`/home/articles/categories/${category.slug}`}>
					<span className={`py-2 cursor-pointer hover:text-amber-500`}>
						{category.name}
					</span>
				</Link>
			))}
		</div>
	);
};

export default Categorie;
