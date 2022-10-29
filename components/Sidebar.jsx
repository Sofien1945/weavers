import { Avatar } from "@mui/material";
import Image from "next/image";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
	const { data: session } = useSession();
	return (
		<div className="space-y-2 ">
			<div className="bg-white dark:bg-gray-900 overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none md:w-60">
				<div className="relative w-full h-14">
					<Image src="/images/futureart.jpg" layout="fill" priority alt="" />
				</div>
				<Avatar
					onClick={signOut}
					src={session?.user?.image}
					className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
				/>
				<div className="mt-5 py-4 px-5 space-x-0.5 space-y-2">
					<h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
						{session?.user?.name}
					</h4>
					<p className="text-black/60 dark:text-white/75 text-sm">
						{session?.user?.email}
					</p>
				</div>
				<div className="hidden md:inline text-left dark:text-white/75 text-sm">
					<div className="font-medium sidebarButton space-y-2">
						<div className="flex justify-between sapce-x-2">
							<h4>Visitors: </h4>
							<span className="text-blue-500">500</span>
						</div>
						<div className="flex justify-between space-x-2">
							<h4>Post Viewers: </h4>
							<span className="text-blue-500">1000</span>
						</div>
					</div>
					<div className="sidebarButton space-y-2">
						<h4 className="leading-4 text-xs">Access Effective Tools</h4>
						<h4 className="dark:text-white font-medium">
							<span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
							Explore New Paradigm
						</h4>
					</div>
				</div>
			</div>
			<div className="hidden md:flex bg-white dark:bg-gray-900 text-black/70 dark:text-white/75 overflow-hidden flex-col space-y-2 p-2.5 sticky top-20 border border-gray-300 dark:border-none">
				<div className="border-b border-gray-300 py-3 px-4 opacity-80 flex items-center space-x-1.5">
					<BookmarkOutlinedIcon />
					<h4 className="dark:text-white font-medium">Premium Services</h4>
				</div>
				<div className="space-y-2">
					<p className="sidebarLink">Digital Card</p>
					<p className="sidebarLink">Branding</p>
					<p className="sidebarLink">Profiling</p>
				</div>
			</div>
			<div className="hidden md:flex bg-white dark:bg-gray-900 text-black/70 dark:text-white/75 overflow-hidden flex-col space-y-2 p-2.5 sticky top-64 border border-gray-300 dark:border-none">
				<p className="sidebarLink">Community</p>
				<div className="flex items-center justify-between">
					<p className="sidebarLink">Events</p>
					<AddRoundedIcon className="!h-5 border rounded-full border-gray-500 bg-gray-500 hover:bg-amber-500 text-white" />
				</div>
				<p className="sidebarLink">Followed Hashtags</p>
				<div className="sidebarButton text-center">
					<h4 className="dark:text-white font-medium text-sm">Discover More</h4>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
