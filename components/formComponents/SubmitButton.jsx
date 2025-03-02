"use client";

const { useFormStatus } = require("react-dom");

export default function SubmitButton({ children }) {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className={`hover:text-white border font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-gray-700 border-gray-700 hover:bg-green-500 w-full text-2xl`}
			disabled={pending}
		>
			{pending ? `Saving ${children}` : `Save ${children}`}
		</button>
	);
}
