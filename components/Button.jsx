"use client";

function Button({ colorClasses, type = "button", onClick = () => {}, disabled = false, children }) {
	return (
		<>
			<button
				type={type}
				className={`hover:text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${colorClasses}`}
				onClick={onClick}
				disabled={disabled}
			>
				{children}
			</button>
		</>
	);
}

export default Button;
