import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Image from "next/image";
import TimeAgo from "timeago-react";

const Widgets = ({ articles }) => {
	return (
		<div className="hidden xl:inline space-y-2 md:mt-1">
			<div className="bg-white dark:bg-gray-900 py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none">
				<div className="flex items-center justify-between font-bold px-2.5">
					<h4>Latest News</h4>
					<InfoRoundedIcon className="h-5 w-5" />
				</div>
				<div className="space-y-1 ">
					{articles.slice(0, 8).map((article) => (
						<a
							href={article.url}
							target="_blank"
							rel="noreferrer"
							key={article.url}
						>
							<div className="flex space-x-2 items-center cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-400 px-2.5 py-1">
								<FiberManualRecordRoundedIcon className="!h-2 !w-2" />
								<div className="hover:text-white dark:hover:text-black">
									<h5 className="max-w-xs font-medium text-sm truncate pr-10">
										{article.title}
									</h5>
									<TimeAgo
										datetime={article.publishedAt}
										className="text-xs mt-0.5 dark:text-white/75 opacity-80"
									/>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
			<div className="bg-gray-900 w-11/12 h-48 rounded-md sticky top-20 border border-gray-300 dark:border-none">
				<Image
					src="/images/ads.jpg"
					alt=""
					className="!w-full !h-full"
					layout="fill"
					objectFit="contain"
					priority
				/>
			</div>
		</div>
	);
};

export default Widgets;
