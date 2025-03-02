"use client";
import { useState, useActionState, startTransition } from "react";
import { addData } from "@/app/actions/addActions/addData";
import Input from "./Input";
import Button from "../Button";
import SubmitButton from "./SubmitButton";

export default function AddDataForm({ dataType }) {
	const [formState, formAction] = useActionState(addData, null);
	const [show, setShow] = useState(false);
	const [formData, setFormData] = useState({});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	function handletoggle() {
		setShow(show => !show);
	}

	// ✅ Handle form submission properly
	const handleSubmit = e => {
		e.preventDefault();

		const newFormData = new FormData();
		newFormData.append("dataType", dataType); // ✅ Ensure dataType is sent
		newFormData.append("name", formData.name.toUpperCase());

		if (dataType === "transferMean") {
			newFormData.append("fullName", formData.fullName.toUpperCase() || "");
		}

		startTransition(() => {
			formAction(newFormData); // ✅ Pass correctly formatted FormData
			setShow(show => !show);
			setFormData({});
		});
	};

	return (
		<>
			{!show && (
				<Button
					colorClasses={`text-yellow-500 border-yellow-500 hover:bg-yellow-500`}
					onClick={handletoggle}
					type="button"
				>
					Add Data
				</Button>
			)}
			{show && (
				<form onSubmit={handleSubmit} className="flex items-center gap-4 justify-between">
					<input type="hidden" name={dataType} value={dataType} readOnly />
					<Input type="text" name="name" formData={formData} handleChange={handleChange} extraClasses="text-gray-800">
						Name
					</Input>
					{dataType === "transferMean" && (
						<Input
							type="text"
							name="fullName"
							formData={formData}
							handleChange={handleChange}
							extraClasses="text-gray-800"
						>
							Full Name
						</Input>
					)}
					<SubmitButton>Data</SubmitButton>
					<Button
						type="button"
						onClick={handletoggle}
						colorClasses="text-yellow-700 border-yellow-700 hover:bg-yellow-500 text-2xl"
					>
						Cancel
					</Button>
				</form>
			)}
		</>
	);
}
