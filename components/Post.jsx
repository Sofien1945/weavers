import { Avatar, IconButton } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import { useRecoilState } from "recoil";
import { handlePostState, getPostState } from "../atoms/postAtom";
import { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import TimeAgo from "timeago-react";
import { useSession } from "next-auth/react";

function Post({ post, modalPost }) {
	const { data: session } = useSession();
	const [update, setUpdate] = useState(false);
	const [input, setInput] = useState("");
	const [photoUrl, setPhotoUrl] = useState("");
	const [modalOpen, setModalOpen] = useRecoilState(modalState);
	const [modalType, setModalType] = useRecoilState(modalTypeState);
	const [postState, setPostState] = useRecoilState(getPostState);
	const [showInput, setShowInput] = useState(false);
	const [liked, setLiked] = useState(false);
	const [handlePost, setHandlePost] = useRecoilState(handlePostState);

	const truncate = (string, n) =>
		string?.length > n ? string.substr(0, n - 1) + "...see more" : string;

	const deletePost = async () => {
		const response = await fetch(`/api/posts/${post._id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		});

		setHandlePost(true);
		setModalOpen(false);
	};

	const updatePost = async (e) => {
		e.preventDefault();
		const response = await fetch(`/api/posts/${post._id}`, {
			method: "PUT",
			body: JSON.stringify({
				input: input,
				photoUrl: photoUrl,
				username: session.user.name,
				email: session.user.email,
				userImg: session.user.image,
				createdAt: new Date().toString(),
			}),
			headers: { "Content-Type": "application/json" },
		});

		setHandlePost(true);
		setModalOpen(false);
		setUpdate(false);
	};

	return (
		<div
			className={`bg-white dark:bg-gray-900 ${
				modalPost ? "rounded-r-lg" : "rounded-lg"
			} space-y-2 py-2.5 border border-gray-300 dark:border-none`}
		>
			<div className="flex items-center px-2.5 cursor-pointer">
				<Avatar src={post.userImg} className="!h-10 !w-10 cursor-pointer" />
				<div className="mr-auto ml-2 leading-none">
					<h6 className="font-medium hover:text-blue-500 hover:underline">
						{post.username}
					</h6>
					<p className="text-sm dark:text-white/75 opacity-80">{post.email}</p>
					<TimeAgo
						datetime={post.createdAt}
						className="text-xs dark:text-white/75 opacity-80"
					/>
				</div>
				{modalPost ? (
					<IconButton onClick={() => setModalOpen(false)}>
						<CloseRoundedIcon className="dark:text-white/75 h-7 w-7" />
					</IconButton>
				) : (
					<IconButton>
						<MoreHorizRoundedIcon
							className="dark:text-white/75 h-7 w-7"
							onClick={() => setUpdate(true)}
						/>
					</IconButton>
				)}
			</div>

			{post.input && (
				<div className="px-2.5 break-all md:break-normal">
					{modalPost || showInput ? (
						<p onClick={() => setShowInput(false)}>{post.input}</p>
					) : (
						<p onClick={() => setShowInput(true)}>
							{truncate(post.input, 150)}
						</p>
					)}
				</div>
			)}

			{post.photoUrl && !modalPost && (
				<img
					src={post.photoUrl}
					alt=""
					className="w-full cursor-pointer"
					onClick={() => {
						setModalOpen(true);
						setModalType("gifYouUp");
						setPostState(post);
					}}
				/>
			)}

			<div className="flex justify-evenly items-center dark:border-t border-gray-600/80 mx-2.5 pt-2 text-black/60 dark:text-white/75">
				{modalPost ? (
					<button className="postButton">
						<CommentOutlinedIcon />
						<h4>Comment</h4>
					</button>
				) : (
					<button
						className={`postButton ${liked && "text-blue-500"}`}
						onClick={() => setLiked(!liked)}
					>
						{liked ? (
							<ThumbUpOffAltRoundedIcon className="-scale-x-100" />
						) : (
							<ThumbUpOffAltOutlinedIcon className="-scale-x-100" />
						)}

						<h4>Like</h4>
					</button>
				)}

				{session?.user?.email === post.email ? (
					<button
						className="postButton focus:text-red-400"
						onClick={deletePost}
					>
						<DeleteRoundedIcon />
						<h4>Delete post</h4>
					</button>
				) : (
					<button className="postButton ">
						<ReplyRoundedIcon className="-scale-x-100" />
						<h4>Share</h4>
					</button>
				)}
			</div>
			{update && (
				<form className="flex flex-col relative space-y-3 text-black dark:text-white/75 p-5">
					<textarea
						placeholder="Share with us your journey"
						value={input}
						rows="4"
						className="bg-transparent px-1 border focus:border-black rounded-md focus:outline-none placeholder-dark/80 dark:placeholder-white/75"
						onChange={(e) => setInput(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Add a photo URL (optional)"
						className="bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75"
						value={photoUrl}
						onChange={(e) => setPhotoUrl(e.target.value)}
					/>
					<button
						className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1 mr-5"
						type="submit"
						onClick={updatePost}
						disabled={!input.trim() && !photoUrl.trim()}
					>
						Update
					</button>
				</form>
			)}
		</div>
	);
}

export default Post;
