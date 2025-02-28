"use client";

function Button({ colorClasses, type = "button", onClick = () => {}, children }) {
	return (
		<>
			<button
				type={type}
				className={`hover:text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${colorClasses}`}
				onClick={onClick}
			>
				{children}
			</button>
		</>
	);
}

export default Button;
