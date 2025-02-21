export default function GlobalLoading() {
	return (
		<div className="flex justify-center items-center h-screen gap-5">
			<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-yellow-500 self-center"></div>
			<p className="">Loading Data...</p>
		</div>
	);
}
