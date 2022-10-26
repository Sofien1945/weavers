import { getProviders, signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button } from "@mui/material";

export default function SignIn({ providers }) {
	return (
		<div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
			<div className="flex flex-col w-4/5 min-h-fit text-white bg-gradient-to-tr from-black to-gray-500 shadow-2xl shadow-emerald-800 max-w-lg mx-auto rounded-lg items-center p-5 space-y-4">
				<h1 className="font-bold underline mb-4">Sign In to WEAVERS</h1>
				<img src="/images/nextauth.png" alt="auth" className="w-20 h-24" />
				<div className="flex flex-col items-center justify-center w-full h-full space-y-4">
					{Object.values(providers).map((provider) => (
						<div key={provider.name} className="flex flex-col">
							<Button
								onClick={() => signIn(provider.id, { callbackUrl: "/" })}
								startIcon={
									provider.name === "Facebook" ? (
										<FacebookIcon />
									) : provider.name === "Instagram" ? (
										<InstagramIcon />
									) : provider.name === "Google" ? (
										<GoogleIcon />
									) : provider.name === "GitHub" ? (
										<GitHubIcon />
									) : (
										<EmailIcon />
									)
								}
								variant="outlined"
								color="info"
								size="medium"
								className="w-60"
							>
								Sign in with {provider.name}
							</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
