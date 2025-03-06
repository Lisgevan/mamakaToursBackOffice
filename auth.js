import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

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
		async signIn({ profile }) {
			const acceptedMails = ["vkaramarias@gmail.com", "mamakatours@gmail.com"];
			const user = acceptedMails.includes(profile.email);
			if (user) {
				return {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
				};
			} else {
				return null;
			}
		},
	},
	pages: {
		error: "/reservations",
	},
	secret: process.env.NEXTAUTH_SECRET,
});

export { handlers, auth, signIn, signOut };
