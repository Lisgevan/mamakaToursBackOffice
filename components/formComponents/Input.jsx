export default function Input({
	type,
	name,
	children,
	formData,
	handleChange = () => {},
	extraClasses = "",
	disabled = false,
	required = true,
}) {
	let placeholder;

	if (type === "text" && name === "arrivalDetails") {
		placeholder = "Arrival";
	} else if (type === "text" && name === "departureDetails") {
		placeholder = "Departure";
	} else if (type === "text") {
		placeholder = name;
	} else {
		placeholder = null;
	}

	return (
		<div>
			<label htmlFor={name}>{children}: </label>
			<input
				type={type}
				id={name}
				name={name}
				value={formData[name] || ""}
				onChange={handleChange}
				className={`text-gray-900 ps-2 ${extraClasses}`}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				step="0.50"
				min={required ? "1" : "0"}
			/>
		</div>
	);
}
