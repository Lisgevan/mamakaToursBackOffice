function Button({ colorClasses, children }) {
	return (
		<>
			<button
				type="button"
				className={`hover:text-white border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${colorClasses}`}
			>
				{children}
			</button>
		</>
	);
}

export default Button;
