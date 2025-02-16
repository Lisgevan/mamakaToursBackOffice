"use client";
import { useEffect, useState } from "react";

export default function Select({
	dataType,
	dataItem,
	name,
	children,
	extraClasses = "",
	required = true,
	onChange = () => {},
}) {
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	let selectValue;
	if (name === "agent") {
		selectValue = dataItem?.agent || name;
	} else if (name === "accommodation") {
		selectValue = dataItem?.accommodation || name;
	} else if (name === "transferMean") {
		selectValue = dataItem?.transferMean || name;
	} else if (name === "transferType") {
		selectValue = dataItem?.transferType || name;
	} else if (name === "locationFrom") {
		selectValue = dataItem?.locationFrom || name;
	} else if (name === "locationTo") {
		selectValue = dataItem?.locationTo || name;
	}

	useEffect(() => {
		let isMounted = true; // ✅ Prevent unnecessary updates

		async function fetchData() {
			try {
				if (dataType !== "transferType") {
					console.log(`Fetching data for ${dataType}...`); // ✅ Debugging

					const res = await fetch(`/api/transfers/reports?dataType=${dataType}`);
					const result = await res.json();

					console.log("API Response:", result); // ✅ Check the response

					if (isMounted) {
						if (result.success) {
							setOptions(result.data);
						} else {
							setError(result.message);
						}
						setLoading(false);
					}
				} else if (dataType === "transferType") {
					setOptions([
						{ _id: "1", name: "Land Transfer" },
						{ _id: "2", name: "See Transfer" },
					]);
					setLoading(false);
				}
			} catch (err) {
				if (isMounted) {
					setError("Failed to load data.");
					setLoading(false);
				}
			}
		}

		fetchData();

		return () => {
			isMounted = false; // ✅ Cleanup to avoid memory leaks
		};
	}, [dataType]); // ✅ Only re-fetch when `dataType` changes

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p className="text-red-500">{error}</p>
			) : (
				<>
					<label htmlFor={name}>{children}</label>
					<select
						name={name}
						id={name}
						value={selectValue}
						className={`text-gray-900 ps-2 ${extraClasses}`}
						onChange={onChange}
						required={required}
					>
						<option value="">Select . . .</option>
						{options.map(item => (
							<option key={item._id} value={item.name}>
								{item.name}
							</option>
						))}
					</select>
				</>
			)}
		</div>
	);
}
