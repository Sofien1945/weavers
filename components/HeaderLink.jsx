import { useSession, signOut } from "next-auth/react";

const HeaderLink = ({ Icon, text, avatar, active, feed, hidden }) => {
	const { data: session } = useSession();
	return (
		<div
			className={`cursor-pointer flex flex-col justify-center items-center hover:text-amber-500 dark:hover:text-amber-500 ${
				hidden && "hidden md:inline-flex"
			} ${
				feed
					? "text-black/60 dark:text-white lg:mb-1.5 space-y-1"
					: "text-gray-500 dark:text-gray-700 "
			} ${active && "!text-amber-500"}`}
			onClick={() => {
				avatar && signOut();
			}}
		>
			{avatar ? (
				<Icon className="!h-7 !w-7 lg:!-mb-1" src={session?.user?.image} />
			) : (
				<Icon src={session?.user?.image} />
			)}

			<h4
				className={`text-sm ${
					feed && "hidden lg:flex justify-center w-full mx-auto"
				}`}
			>
				{text}
			</h4>
			{active && (
				<span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
			)}
		</div>
	);
};

export default HeaderLink;
