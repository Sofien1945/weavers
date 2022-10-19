import Head from "next/head";
import { Header, Sidebar, Feed, Widgets, Modal } from "../components";
import { AnimatePresence } from "framer-motion";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ posts, articles }) {
	const router = useRouter();
	const [modalOpen, setModalOpen] = useRecoilState(modalState);
	const [modalType, setModalType] = useRecoilState(modalTypeState);
	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			// The user is not authenticated, handle it here.
			router.push("/home");
		},
	});
	return (
		<div className=" dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
			<Head>
				<title>Weavers</title>
				<meta name="description" content="Weavers Construction Management" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex justify-center gap-x-5 px-4 sm:px-12">
				<div className="flex flex-col md:flex-row mt-5 md:mt-1 px-1 md:px-1 w-screen md:max-w-fit  gap-5">
					<Sidebar />
					<Feed posts={posts} />
				</div>
				<Widgets articles={articles} />
				<AnimatePresence>
					{modalOpen && (
						<Modal handleClose={() => setModalOpen(false)} type={modalType} />
					)}
				</AnimatePresence>
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	//GetSession is for serverside
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				permanent: false,
				destination: "/home",
			},
		};
	}

	const news = await fetch(
		`https://newsapi.org/v2/top-headlines?country=fr&apiKey=${process.env.NEWS_API_KEY}`
	).then((res) => res.json());

	const { db } = await connectToDatabase();
	const posts = await db
		.collection("posts")
		.find()
		.sort({ timestamp: -1 })
		.toArray();
	return {
		props: {
			session,
			articles: news.articles,
			posts: posts.map((post) => ({
				_id: post._id.toString(),
				input: post.input,
				photoUrl: post.photoUrl,
				username: post.username,
				email: post.email,
				userImg: post.userImg,
				createdAt: post.createdAt,
			})),
		},
	};
}
