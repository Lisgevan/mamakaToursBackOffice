// export { auth as middleware } from "@/auth";

// app/middleware.js
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function middleware(req) {
	const session = await auth();
	const pathname = req.nextUrl.pathname;

	// Allow access to the homepage (/) regardless of authentication status
	if (pathname === "/") {
		return NextResponse.next();
	}

	// If not logged in, redirect to the homepage
	if (!session) {
		return NextResponse.redirect(new URL("/", req.url));
	}

	// User is logged in, allow access to other routes
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
