"use client";

import { useState } from "react";

function DatePicker({ primaryColor }) {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	});

	const handleValueChange = newValue => {
		console.log("newValue:", newValue);
		setValue(newValue);
	};
}

export default DatePicker;
