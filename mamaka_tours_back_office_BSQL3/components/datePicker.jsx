"use client";

import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function DatePicker({ primaryColor }) {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});

	const handleValueChange = newValue => {
		console.log("newValue:", newValue);
		setValue(newValue);
	};

	return <Datepicker primaryColor={primaryColor} value={value} onChange={handleValueChange} />;
}

export default DatePicker;
