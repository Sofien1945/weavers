import Head from "next/head";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import HeaderLink from "../../components/HeaderLink";
import { getProviders, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Layout from "../../components/Layout";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import FolderSharedRoundedIcon from "@mui/icons-material/FolderSharedRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import AboutCard from "../../components/AboutCard";
import { ServiceCard, Quote, FeaturedPosts } from "../../components";

const home = (/* { providers } */) => {
	//console.log(providers);
	//providers={providers}
	return (
		<Layout title="Home">
			<div className="flex flex-col items-center justify-center md:flex-row w-full h-[80vh] top-[80px] space-y-10 drop-shadow-2xl">
				<video
					className="object-cover h-screen w-screen absolute -z-10 "
					src="/videos/network.mp4"
					autoPlay
					loop
					muted
				/>
				<div className="w-full flex flex-col justify-center items-center text-black px-4 text-center">
					<h1 className="text-2xl">Next Generation</h1>
					<h1 className="text-2xl py-2">
						<span className="text-amber-500">Construction</span> Plateform
					</h1>
					<p className="text-3xl py-4">
						For better construction journey, we aim to digitilize effectively
						project monitoring process and to bring all the ecosystem in one
						specialised social network{" "}
					</p>
					<div className="flex flex-col sm:flex-row">
						<div className="relative group">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-500 rounded-full blur opacity-80 group-hover:opacity-100 transition duration-500" />
							<button className="relative px-5 py-2 rounded-full text-white m-2 bg-gradient-to-r from-amber-700 to-yellow-400 group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black/20">
								Look for Professionnal
							</button>
						</div>

						<button className="px-5 py-2 rounded-full text-white m-2 bg-gray-800 hover:bg-black/40">
							Place Tender
						</button>
					</div>
				</div>
			</div>
			<div className="w-full text-black text-center pt-16">
				<div className="max-w-[1240px] mx-auto px-4 py-16 ">
					<div className="text-gray-900">
						<h1 className="py-4 text-3xl">Construction Social Network</h1>
						<p className="py-4 text-xl">
							Be part of new construction ecosystem pargigm where everyone
							contribute to improve project performance and insure client
							satisfaction
						</p>

						{/* Card Container */}
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
							{/* Card */}
							<AboutCard
								icon={<ShareRoundedIcon size={40} />}
								heading="Network"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis nihil voluptate dolorem animi corporis asperiores repellendus itaque in neque!"
							/>

							<AboutCard
								icon={<FolderSharedRoundedIcon size={40} />}
								heading="Design"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis nihil voluptate dolorem animi corporis asperiores repellendus itaque in neque!"
							/>
							<AboutCard
								icon={<CreditScoreRoundedIcon size={40} />}
								heading="Execution"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis nihil voluptate dolorem animi corporis asperiores repellendus itaque in neque!"
							/>
							<AboutCard
								icon={<AssignmentIndRoundedIcon size={40} />}
								heading="Assistance"
								text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis nihil voluptate dolorem animi corporis asperiores repellendus itaque in neque!"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full text-black">
				<div className="max-w-[1240px] mx-auto px-4 py-5 md:flex items-center">
					<div className="text-gray-900">
						<h1 className="font-bold text-2xl leading-10">
							Close Monitoring Projects Progress.
						</h1>
						<p>
							Checkout the <span className="blue">documentation</span>, the{" "}
							<span className="blue">quick start</span> or a guide below to
							integrate your project with many features that will imporve
							project KPIs.
						</p>
					</div>
					<div className="flex justify-center w-full py-5">
						<img
							className="md:max-w-[512px] shadow-2xl rounded-lg"
							src="/images/pattern_nextjs.png"
							alt="/"
						/>
					</div>
				</div>
			</div>
			<div className="px-10 text-2xl flex items-center justify-center ">
				<h2 className="text-gray-900 font-bold underline">Our Mission</h2>
			</div>
			<div className="max-w-screen p-4 grid grid-cols-1 md:grid-cols-4 gap-36 md:gap-12 h-full items-center justify-center mb-24">
				{/*     <!--Card 1--> */}
				<ServiceCard
					srcImage="/images/ecofriendly.jpg"
					name="Eco-Friendly Buildings"
					hashtag="#Construction Network"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea debitis
					consectetur velit, tempore ratione architecto? Illo itaque molestias
					ducimus harum!
				</ServiceCard>
				{/*     <!--Card 2--> */}
				<ServiceCard
					srcImage="/images/futureart.jpg"
					name="Modern Architecture"
					hashtag="#Architecture"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea debitis
					consectetur velit, tempore ratione architecto? Illo itaque molestias
					ducimus harum!
				</ServiceCard>

				{/*   <!--Card 3--> */}
				<ServiceCard
					srcImage="/images/construct.jpg"
					name="New Construction Approches"
					hashtag="#Contractors"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea debitis
					consectetur velit, tempore ratione architecto? Illo itaque molestias
					ducimus harum!
				</ServiceCard>

				{/*   <!--Card 4--> */}
				<ServiceCard
					srcImage="/images/toolbox.jpg"
					name="Assistance"
					hashtag="#Technical Assistance"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea debitis
					consectetur velit, tempore ratione architecto? Illo itaque molestias
					ducimus harum!
				</ServiceCard>
			</div>
			<div className="flex flex-col md:flex-row justify-around p-5 space-y-6">
				<div className="border-l-2 border-gray-500" />
				<div className="flex flex-col text-gray-900">
					<h2 className="font-semibold leading-10">
						Realtime Project Managment{" "}
					</h2>
					<p className="max-w-sm">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
						eligendi quam cumque, magni omnis excepturi minus distinctio vitae
						cupiditate quo.
					</p>
				</div>
				<div className="border border-l-2 border-dashed border-gray-500" />

				<div className="grid grid-cols-2 gap-10 text-gray-900">
					<div className="p-5 shadow-lg rounded-lg space-x-5 ">
						<ShareRoundedIcon
							className="text-amber-500 rounded-full"
							fontSize="large"
						/>
						<span>Estimation</span>
					</div>
					<div className="p-5 shadow-lg rounded-lg space-x-5 ">
						<FolderSharedRoundedIcon
							className="text-amber-500 rounded-full"
							fontSize="large"
						/>
						<span>Planning</span>
					</div>
					<div className="p-5 shadow-lg rounded-lg space-x-5 ">
						<CreditScoreRoundedIcon
							className="text-amber-500 rounded-full"
							fontSize="large"
						/>
						<span>Execution</span>
					</div>
				</div>
				<div className="border-r-2 border-gray-500" />
			</div>
			<div className="px-10 text-2xl flex items-center justify-center ">
				<h2 className="text-gray-900 font-bold underline">Our Stories</h2>
			</div>
			<FeaturedPosts />
			<Quote />
		</Layout>
	);
};

export default home;

/* export async function getServerSideProps(context) {
	const providers = await getProviders();
	console.log(providers);
	return {
		props: {
			providers,
		},
	};
} */
