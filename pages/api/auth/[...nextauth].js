import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		}),
		InstagramProvider({
			clientId: process.env.INSTAGRAM_CLIENT_ID,
			clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),

		/* 		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
		}), */
	],
	secret: process.env.JWT_SECRET,
	adapter: MongoDBAdapter(clientPromise),
	pages: {
		signIn: "/auth/signin",
	},
	session: {
		strategy: "jwt",
	},
};

export default NextAuth(authOptions);
