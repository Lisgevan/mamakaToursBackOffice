"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import { getReservations } from "@/app/actions/reportActions/getReportReservations";

export default function TransferDetails({ onChange, transferDetailsData = null }) {
	const [reservations, setReservations] = useState([]);
	const [transferDetails, setTransferDetails] = useState([{ reference: "", accommodation: "", clientName: "" }]);

	useEffect(() => {
		if (transferDetailsData) {
			setTransferDetails(transferDetailsData);
		}
	}, []);

	useEffect(() => {
		async function fetchReservations() {
			try {
				const res = await getReservations();
				setReservations(Array.isArray(res) ? res : []);
			} catch (error) {
				console.error("Error fetching reservations:", error);
				setReservations([]);
			}
		}
		fetchReservations();
	}, []);

	// Pass transferDetails to the parent only when it changes
	useEffect(() => {
		onChange(transferDetails);
	}, [transferDetails, onChange]);

	const handleAddTransferDetail = () => {
		setTransferDetails(prev => [...prev, { reference: "", accommodation: "", clientName: "" }]);
	};

	const handleRemoveTransferDetail = index => {
		setTransferDetails(prev => prev.filter((_, i) => i !== index));
	};

	const handleReferenceChange = (index, e) => {
		const selectedReference = e.target.value;
		const selectedReservation = reservations.find(r => r.reference === selectedReference);

		setTransferDetails(prevDetails => {
			const updatedDetails = [...prevDetails];
			updatedDetails[index] = {
				reference: selectedReference, // Store reference value here
				accommodation: selectedReservation ? selectedReservation.accommodation : "",
				clientName: selectedReservation ? selectedReservation.clientName : "",
			};
			return updatedDetails;
		});
	};

	return (
		<div className="bg-gray-300 p-4 rounded-md w-min m-auto">
			<h3 className="text-lg font-bold mb-2">Transfer Details</h3>
			{transferDetails.map((detail, index) => (
				<div key={index} className="flex gap-4 mb-2">
					{/* Reservation Reference Selection */}
					<select
						className="border p-2 w-40"
						name={`transferDetails[${index}].reference`}
						onChange={e => handleReferenceChange(index, e)}
						value={detail.reference} // Use the reference directly
					>
						<option value="">Select Reservation</option>
						{reservations.map(res => (
							<option key={res._id} value={res.reference}>
								{res.reference}
							</option>
						))}
					</select>

					{/* Accommodation (Read-only) */}
					<input
						type="text"
						name={`transferDetails[${index}].accommodation`}
						value={detail.accommodation}
						readOnly
						className="border p-2 w-40"
					/>

					{/* Client Name (Read-only) */}
					<input
						type="text"
						name={`transferDetails[${index}].clientName`}
						value={detail.clientName}
						readOnly
						className="border p-2 w-40"
					/>

					{/* Remove Button */}
					<Button
						type="button"
						onClick={() => handleRemoveTransferDetail(index)}
						colorClasses="bg-red-500 text-white px-2"
					>
						X
					</Button>
				</div>
			))}

			{/* Add Transfer Detail Button */}
			<Button type="button" onClick={handleAddTransferDetail} colorClasses="bg-blue-500 text-white px-4 mt-2">
				Add Transfer Detail
			</Button>
		</div>
	);
}
