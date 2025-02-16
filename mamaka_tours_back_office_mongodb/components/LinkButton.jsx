import Link from "next/link";

export default function LinkButton({ href, cssClasses, children }) {
	return (
		<Link
			href={href}
			className={`hover:text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center ${cssClasses}`}
		>
			{children}
		</Link>
	);
}
