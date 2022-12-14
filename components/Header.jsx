import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderLink from "./HeaderLink";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};

const Header = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme, theme } = useTheme();
	console.log(theme);
	useEffect(() => setMounted(true), []);

	return (
		<header className="sticky top-0 z-40 bg-white dark:bg-gray-900 flex flex-row items-center justify-around py-1.5 px-3 focus-within:shadow-lg">
			<div className="flex items-center space-x-2 w-full max-w-xs">
				{mounted && (
					<>
						{resolvedTheme === "dark" ? (
							<Image
								src="/images/weavers_icon.png"
								width={60}
								height={60}
								alt=""
							/>
						) : (
							<Image
								src="/images/logo-weavers-final-removebg-preview.png"
								width={60}
								height={60}
								alt=""
							/>
						)}
					</>
				)}
				<div className="flex items-center space-x-1 bg-none md:bg-gray-500 md:dark:bg-gray-200 py-2.5 px-4 rounded-md w-full text-black dark:text-white md:dark:text-black">
					<SearchRoundedIcon />
					<input
						type="text"
						placeholder="Search"
						className="hidden md:inline-flex bg-transparent text-sm placeholder-white/75 dark:placeholder-gray-900 flex-grow p-1"
					/>
				</div>
			</div>
			<div className="flex items-center space-x-3 mx-4">
				<HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
				<HeaderLink Icon={GroupIcon} text="My Network" feed />
				<HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
				<HeaderLink Icon={ChatIcon} text="Messaging" feed />
				<HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
				<HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
				<HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />
				{mounted && (
					<div
						className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
							resolvedTheme === "dark" ? "justify-end" : "justify-start"
						}`}
						onClick={() =>
							setTheme(resolvedTheme === "dark" ? "light" : "dark")
						}
					>
						<span className="absolute left-0">????</span>
						<motion.div
							className="w-5 h-5 bg-white rounded-full z-40"
							layout
							transition={spring}
						/>
						<span className="absolute right-0.5">????</span>
					</div>
				)}
				<button className="cursor-pointer px-6 py-1 rounded-full text-white bg-gradient-to-r from-amber-700 to-yellow-400 hover:bg-gradient-to-r hover:from-black hover:to-black/20 active:bg-amber-600">
					<a
						href="https://weavers-dashboard.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						CPM
					</a>
				</button>
			</div>
		</header>
	);
};

export default Header;
