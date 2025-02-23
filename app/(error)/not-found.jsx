import Link from "next/link";

export default function NotFound() {
	return (
		<main className="grid w-screen h-screen place-items-center bg-gray-700 px-6 py-24 sm:py-32 lg:px-8 ">
			<div className="text-center">
				<p className="text-9xl font-semibold text-indigo-200">404</p>
				<h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-500 sm:text-7xl">
					Page not found
				</h1>
				<p className="mt-6 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="/"
						className="border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center text-gray-200 border-gray-500 hover:bg-gray-500 hover:text-gray-900"
					>
						Go back home
					</Link>
				</div>
			</div>
		</main>
	);
}
