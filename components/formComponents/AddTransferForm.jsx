"use client";

import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { unstable_noStore } from "next/cache";
import { getTransferMean } from "@/app/actions/getActions/getTransferMean";
import { addTransfers } from "@/app/actions/addActions/addTransfers";
import Input from "./Input";
import Select from "./Select";
import TransferDetails from "../TransferDetails";

export default function AddTransfernForm() {
	unstable_noStore();
	const [formState, formAction] = useActionState(addTransfers, null);
	const [selectedTransferId, setSelectedTransferId] = useState(""); // ID of the selected transfer
	const [fullName, setFullName] = useState(""); // Auto-filled value
	const [transferDetails, setTransferDetails] = useState([]);
	const [formData, setFormData] = useState({
		transferType: "",
		transferMean: "",
		fullName: "",
		transferDate: "",
		transferTime: "",
		locationFrom: "",
		locationTo: "",
		price: 0,
		paid: false,
		noShow: false,
		agent: "",
		transferDetails: {
			reference: "",
			accommodation: "",
			clientName: "",
		},
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

	return (
		<form action={formAction} className="space-y-4 bg-gray-400 p-4 flex flex-col gap-2 w-3/5 m-auto text-gray-900">
			{/* Display success message */}
			{formState?.message && (
				<p className={formState.success ? "text-green-600" : "text-red-600"}>{formState.message}</p>
			)}
			{/* transfer type / agent */}
			<div className="flex justify-around ">
				<Select name="transferType" dataType="transferType" onChange={handleChange} dataItem={formData}>
					Transfer Type:{" "}
				</Select>
				<Select name="agent" dataType="agents" onChange={handleChange} dataItem={formData}>
					Transfer Agent:{" "}
				</Select>
			</div>

			{/* Transfer Mean and name */}
			<div className="flex justify-around">
				<Select name="transferMean" dataType="transferMean" onChange={handleSelectChange} dataItem={formData}>
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
				<Select name="locationFrom" dataType="locations" onChange={handleChange} dataItem={formData}>
					Location From:{" "}
				</Select>
				<Select name="locationTo" dataType="locations" onChange={handleChange} dataItem={formData}>
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
			<TransferDetails onChange={setTransferDetails} />

			{/* Submit button */}
			<SubmitButton>Transfer</SubmitButton>
		</form>
	);
}
