import Head from "next/head";
import Image from "next/image";
import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import HeaderLink from "../components/HeaderLink";
import { getProviders, signIn } from "next-auth/react";

const home = ({ providers }) => {
	console.log(providers);
	return (
		<div className="space-y-10 relative">
			<Head>
				<title>Weavers - Home Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="bg-white flex justify-around items-center py-4 border-b-2 border-gray-400">
				<div className="flex flex-row items-center">
					<div className="flex flex-row relative w-[50px] h-[50px]">
						<Image
							src="/images/logo-weavers-final-removebg-preview.png"
							layout="fill"
							objectFit="contain"
							alt=""
						/>
					</div>
					<h1 className="text-4xl text-black font-bold pl-2">Weavers</h1>
				</div>
				<div className="flex items-center sm:divide-x divide-gray-300">
					<div className="hidden sm:flex space-x-8 pr-4">
						<HeaderLink Icon={ExploreIcon} text="Discover" />
						<HeaderLink Icon={GroupIcon} text="People" />
						<HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
						<HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
					</div>
					{Object.values(providers).map((provider) => (
						<div key={provider.name} className="pl-4">
							<button
								className="cursor-pointer rounded  px-5 py-2 border border-amber-500 hover:bg-amber-500 text-gray-500 hover:text-white active:bg-amber-600"
								onClick={() => signIn(provider.id, { callbackUrl: "/" })}
							>
								Sign In
							</button>
						</div>
					))}
				</div>
			</header>
			<main className="flex flex-col xl:flex-row items-center max-w-screen-lg space-y-4 px-2 md:mx-auto">
				<div className="space-y-4 md:space-y-10 space-x-2 md:space-x-10">
					<h1 className="text-3xl md:text-5xl text-amber-700/80 max-w-xl !leading-snug">
						Welcome to the Construction Community
					</h1>
					<div className="space-y-4">
						<div className="intent">
							<h2 className="text-xl">Search for a Professional</h2>
							<ArrowForwardIosRoundedIcon className="text-gray-700" />
						</div>
						<div className="intent">
							<h2 className="text-xl">Find a person you know</h2>
							<ArrowForwardIosRoundedIcon className="text-gray-700" />
						</div>
						<div className="intent">
							<h2 className="text-xl">Learn a new skill</h2>
							<ArrowForwardIosRoundedIcon className="text-gray-700" />
						</div>
					</div>
				</div>
				<div className="relative xl:absolute w-80 h-80 xl:w-[380px] xl:h-[380px] xl:top-[100px] right-5">
					<Image
						src="/images/pattern_nextjs.png"
						layout="fill"
						priority
						alt=""
					/>
				</div>
			</main>
			<footer className="flex flex-row items-center justify-center border-t p-2 md:p-5">
				<h2>Copyrights @weavers 2022</h2>
			</footer>
		</div>
	);
};

export default home;

export async function getServerSideProps(context) {
	const providers = await getProviders();
	console.log(providers);
	return {
		props: {
			providers,
		},
	};
}
