import Image from "next/image";
import React, { useState, useEffect } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HeaderLink from "./HeaderLink";
import { getProviders, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Head from "next/head";

const Layout = ({ title, children, providers }) => {
	const { data: session } = useSession();
	const [nav, setNav] = useState(false);
	const [navColor, setNavColor] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 120) {
				setNavColor(false);
			} else {
				setNavColor(true);
			}
		};

		window.addEventListener("scroll", changeColor);
	}, []);

	return (
		<div className="relative flex flex-col min-h-screen justify-between">
			<Head>
				<title>{`Weavers - ${title}`}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header
				className={`sticky top-0 z-40 bg-white ${
					navColor && "backdrop-filter backdrop-blur-lg bg-opacity-30"
				} flex justify-around items-center py-4 border-b-2 border-gray-300`}
			>
				<div className="flex flex-row items-center">
					<div className="flex flex-row relative w-[50px] h-[50px]">
						<Image
							src="/images/logo-weavers-final-removebg-preview.png"
							layout="fill"
							objectFit="contain"
							alt=""
						/>
					</div>
					<h1 className="text-4xl text-black font-bold pl-2 hover:scale-110 duration-300">
						Weavers
					</h1>
				</div>
				<div className="hidden md:flex items-center sm:divide-x divide-gray-300">
					<div className="hidden sm:flex space-x-8 pr-4">
						<Link href="/home">
							<a>
								<HeaderLink Icon={HomeRoundedIcon} text="Home" />
							</a>
						</Link>
						<Link href="/home/discover">
							<a>
								<HeaderLink Icon={ExploreIcon} text="Discover" />
							</a>
						</Link>
						<Link href="/home/offers">
							<a>
								<HeaderLink Icon={BusinessCenterIcon} text="offers" />
							</a>
						</Link>
					</div>

					<div className="p-2">
						<Link passHref href="/auth/signin">
							<a>
								<button className="cursor-pointer px-6 py-2 rounded-full text-white bg-gradient-to-r from-amber-700 to-yellow-400 hover:bg-gradient-to-r hover:from-black hover:to-black/20 active:bg-amber-600">
									Sign In
								</button>
							</a>
						</Link>
					</div>

					{session && (
						<Link href="/">
							<a className="hover:underline text-gray-500 hover:text-amber-500 ml-4 pl-5">
								Login
							</a>
						</Link>
					)}
				</div>
				{/* Hamburger menu */}
				<div onClick={handleNav} className="block md:hidden">
					{nav ? (
						<CloseIcon size={30} className="text-black" />
					) : (
						<MenuIcon size={30} className="text-black" />
					)}
				</div>
				{/* Mobile Menu */}
				<div
					className={
						nav
							? "w-full h-screen bg-black/60 text-white absolute top-[80px] left-0 flex flex-col items-center justify-start pt-16 text-center"
							: "absolute left-[-100%]"
					}
				>
					<ul className="space-y-6">
						<li className="text-2xl flex items-center justify-center">
							<Link href="/home">
								<a className="flex items-end active:text-amber-500">
									<HomeRoundedIcon fontSize="large" />
									<span className="pl-2">Home</span>
								</a>
							</Link>
						</li>
						<li className="text-2xl flex items-center justify-center">
							<Link href="/home/discover">
								<a className="flex items-end active:text-amber-500">
									<ExploreIcon fontSize="large" />
									<span className="pl-2">Discover</span>
								</a>
							</Link>
						</li>
						<li className="text-2xl flex items-center justify-center">
							<Link href="/home/offers">
								<a className="flex items-end active:text-amber-500">
									<BusinessCenterIcon fontSize="large" />
									<span className="pl-2">Tenders</span>
								</a>
							</Link>
						</li>
						<li>
							<div className="p-2">
								<Link passHref href="/auth/signin">
									<a>
										<button className="cursor-pointer px-6 py-2 rounded-full text-white bg-gradient-to-r from-amber-700 to-yellow-400 hover:bg-gradient-to-r hover:from-black hover:to-black/20 active:bg-amber-600">
											Sign In
										</button>
									</a>
								</Link>
							</div>
						</li>
						<li>
							{session && (
								<Link href="/">
									<a className="pl-4">
										<button className="rounded-full mt-2 px-8 py-2 border border-white active:bg-black">
											LogIn
										</button>
									</a>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</header>
			<main className="flex flex-col w-full min-h-screen">{children}</main>
			<footer className="flex flex-row items-center justify-center border-t p-2 md:p-5 h-10">
				<h2>Copyrights @weavers 2022</h2>
			</footer>
		</div>
	);
};

export default Layout;
