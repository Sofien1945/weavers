import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { handlePostState } from "../atoms/postAtom";

const Form = () => {
	const { data: session } = useSession();
	const [input, setInput] = useState("");
	const [photoUrl, setPhotoUrl] = useState("");
	const [modalOpen, setModalOpen] = useRecoilState(modalState);
	const [handlePost, setHandlePost] = useRecoilState(handlePostState);

	const uploadPost = async (e) => {
		e.preventDefault();

		const response = await fetch("api/posts", {
			method: "POST",
			body: JSON.stringify({
				input: input,
				photoUrl: photoUrl,
				username: session.user.name,
				email: session.user.email,
				userImg: session.user.image,
				createdAt: new Date().toString(),
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const responseData = await response.json();
		const { acknowledged, insertedId } = await responseData;
		console.log(insertedId);

		setHandlePost(true);
		setModalOpen(false);
	};
	return (
		<form className="flex flex-col relative space-y-3 text-black dark:text-white/75">
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
				className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
				type="submit"
				onClick={uploadPost}
				disabled={!input.trim() && !photoUrl.trim()}
			>
				Post
			</button>
		</form>
	);
};

export default Form;
