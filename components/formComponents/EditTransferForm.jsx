"use client";

import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addTransfers } from "@/app/actions/addActions/addTransfers";
import { getTransferMean } from "@/app/actions/getActions/getTransferMean";
import { editTransfers } from "@/app/actions/editActions/editTransfers";
import Input from "./Input";
import Select from "./Select";
import TransferDetails from "../TransferDetails";
import { toast } from "react-toastify";
import SubmitButton from "./SubmitButton";

export default function EditTransfernForm({ transfer }) {
	const updateTransferById = editTransfers.bind(null, transfer._id);

	const [formState, formAction] = useActionState(addTransfers, null);
	const [selectedTransferId, setSelectedTransferId] = useState(""); // ID of the selected transfer
	const [fullName, setFullName] = useState(""); // Auto-filled value
	const [transferDetails, setTransferDetails] = useState([]);
	const [formData, setFormData] = useState({
		...transfer,
		transferDate: transfer.transferDate ? transfer.transferDate.split("T")[0] : "",
		transferTime: transfer.transferTime || "00:00",
	});

	const router = useRouter();
	// ✅ Check if action was successful, then redirect
	useEffect(() => {
		if (formState?.success) {
			router.push("/transfers"); // ✅ Redirect from client
		}
	}, [formState, router]);

	// Handle selection change
	const handleSelectChange = async e => {
		const { name, value } = e.target;
		const selectedId = e.target.value;
		setSelectedTransferId(selectedId);
		const transferMeans = await getTransferMean();

		// Find the selected transfer and update fullName
		const selectedTransfer = transferMeans.find(t => t.name === selectedId);
		setFullName(selectedTransfer ? selectedTransfer.fullName : ""); // Update fullName

		//update formData
		setFormData(prev => {
			const updatedForm = { ...prev, [name]: value };
			return updatedForm;
		});
	};

	const handleChange = e => {
		const { name, value, type } = e.target;
		if (type === "checkbox") {
			setFormData(prev => {
				return { ...prev, [name]: !prev[name] };
			});
		} else {
			setFormData(prev => {
				const updatedForm = { ...prev, [name]: value };

				return updatedForm;
			});
		}
	};

	const handleSubmit = async event => {
		event.preventDefault();
		const formData = new FormData(event.target);

		const res = await updateTransferById(formData);

		if (res.success) {
			toast.success("Transfer updated.", { theme: "colored" });
			router.push("/transfers"); // ✅ Redirect after success
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4 bg-gray-400 p-4 flex flex-col gap-2 w-3/5 m-auto text-gray-900">
			{/* transfer type / agent */}
			<div className="flex justify-around ">
				<Select dataItem={formData} dataType="transferType" name="transferType" onChange={handleChange}>
					Transfer Type:{" "}
				</Select>
				<Select dataItem={formData} dataType="agents" name="agent" onChange={handleChange}>
					Transfer Agent:{" "}
				</Select>
			</div>

			{/* Transfer Mean and name */}
			<div className="flex justify-around">
				<Select dataItem={formData} dataType="transferMean" name="transferMean" onChange={handleSelectChange}>
					Transfer Mean:{" "}
				</Select>
				<div>
					<label htmlFor="fullName">Mean's Name:</label>
					<input
						id="fullName"
						name="fullName"
						type="text"
						value={fullName}
						readOnly // Prevent manual editing
						onChange={handleChange}
					/>
				</div>
			</div>

			{/* transfer date and time */}
			<div className="flex justify-around">
				<div>
					<label htmlFor="transferDate">Transfer Date: </label>
					<input
						type="date"
						id="transferDate"
						name="transferDate"
						value={formData.transferDate}
						onChange={handleChange}
						className="text-gray-900 text-center"
						required
					/>
				</div>

				<div>
					<label htmlFor="transferTime">Transfer Time: </label>
					<input
						type="time"
						id="transferTime"
						name="transferTime"
						value={formData.transferTime}
						className="text-gray-900 text-center"
						onChange={handleChange}
						required
					/>
				</div>
			</div>

			{/* location from / to */}
			<div className="flex justify-around ">
				<Select dataItem={formData} dataType="locations" name="locationFrom" onChange={handleChange}>
					Location From:{" "}
				</Select>
				<Select dataItem={formData} dataType="locations" name="locationTo" onChange={handleChange}>
					Location To:{" "}
				</Select>
			</div>

			{/* price - paid - noShow */}
			<div className="flex justify-around gap-4">
				<Input type="number" name="price" formData={formData} handleChange={handleChange} extraClasses="w-20">
					Transfer Price
				</Input>
				<label className="flex items-center gap-2">
					<input type="checkbox" name="paid" checked={formData.paid} onChange={handleChange} className="w-4 h-4" />
					Paid
				</label>
				<label className="flex items-center gap-2">
					<input type="checkbox" name="noShow" checked={formData.noShow} onChange={handleChange} className="w-4 h-4" />
					NoShow
				</label>
			</div>

			{/* Transfer Details Inputs */}
			<TransferDetails onChange={setTransferDetails} transferDetailsData={formData.transferDetails} />

			{/* Submit button */}
			<SubmitButton>Transfer</SubmitButton>
		</form>
	);
}
