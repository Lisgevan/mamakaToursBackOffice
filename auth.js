import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
// import Users from "./models/Users";
// import connectToDatabase from "@/lib/mongodb";

const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		Google({
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
	callbacks: {
		// async signIn({ profile }) {
		// 	await connectToDatabase();
		// 	// console.log("Searching for user with email:", profile.email);
		// 	const user = await Users.findOne({ email: profile.email });
		// 	// console.log("User found:", user);
		// 	if (user) {
		// 		return {
		// 			id: profile.sub,
		// 			name: profile.name,
		// 			email: profile.email,
		// 		};
		// 	} else {
		// 		return null;
		// 	}
		// },
	},
	secret: process.env.NEXTAUTH_SECRET,
});

export { handlers, auth, signIn, signOut };
