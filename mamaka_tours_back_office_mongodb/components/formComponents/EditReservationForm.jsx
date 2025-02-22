"use client";

import { useActionState, useState, useEffect } from "react";
import Button from "../Button";
import Input from "./Input";
import { useRouter } from "next/navigation";
import Select from "./Select";
import { editReservations } from "../../actions/editActions/editReservations";

export default function EditReservationForm({ reservation }) {
	const updateReservationById = editReservations.bind(null, reservation._id);
	const [formState, formAction] = useActionState(editReservations, null);
	const [formData, setFormData] = useState({
		...reservation,
		reservationDate: reservation.reservationDate ? reservation.reservationDate.split("T")[0] : "",
		reservationTime: reservation.reservationTime || "00:00",
	});

	const router = useRouter();

	// ✅ Check if action was successful, then redirect
	useEffect(() => {
		if (formState?.success) {
			router.push("/reservations"); // ✅ Redirect from client
		}
	}, [formState, router]);

	const handleSubmit = async event => {
		event.preventDefault();
		const formData = new FormData(event.target);

		const res = await updateReservationById(formData);

		if (res.success) {
			router.push("/reservations"); // ✅ Redirect after success
		}
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

				// Auto-update totalPax
				updatedForm.totalPax =
					parseInt(updatedForm.adults || 0) + parseInt(updatedForm.kids || 0) + parseInt(updatedForm.infants || 0);

				// Auto-update totalCost
				updatedForm.totalCost =
					parseInt(updatedForm.taxiCost || 0) * 2 +
					parseInt(updatedForm.agentFee || 0) * parseInt(updatedForm.adults || 0) +
					(parseInt(updatedForm.agentFee || 0) / 2) * parseInt(updatedForm.kids || 0);

				return updatedForm;
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4 bg-gray-400 p-4 flex flex-col gap-4 w-3/5 m-auto text-gray-900">
			{/* Display success message */}
			{formState?.message && (
				<p className={formState.success ? "text-green-600" : "text-red-600"}>{formState.message}</p>
			)}
			{/* reference / agent */}
			<div className="flex justify-around ">
				<Input type="text" name="reference" formData={formData} handleChange={handleChange}>
					Reference
				</Input>

				<Select name="agent" dataType="agents" dataItem={formData} onChange={handleChange}>
					Agent:{" "}
				</Select>
			</div>

			{/* client / accommodation */}
			<div className="flex justify-around">
				<Input type="text" name="clientName" formData={formData} handleChange={handleChange}>
					Client Name
				</Input>
				<Select name="accommodation" dataType="accommodations" dataItem={formData} onChange={handleChange}>
					Accommodation:{" "}
				</Select>
			</div>

			{/* pax inputs */}
			<div className="flex flex-col gap-4">
				<div className="flex justify-around">
					<Input type="number" name="adults" formData={formData} handleChange={handleChange} extraClasses="w-10">
						Adults
					</Input>
					<Input
						type="number"
						name="kids"
						formData={formData}
						handleChange={handleChange}
						extraClasses="w-10"
						required={false}
					>
						Kids
					</Input>
					<Input
						type="number"
						name="infants"
						formData={formData}
						handleChange={handleChange}
						extraClasses="w-10"
						required={false}
					>
						Infants
					</Input>
					<Input type="number" name="totalPax" formData={formData} extraClasses="w-12" readOnly={true}>
						Total Pax
					</Input>
				</div>
			</div>

			{/* taxi cost / agent fee / total cost */}
			<div className="flex justify-around">
				<Input type="number" name="taxiCost" formData={formData} handleChange={handleChange} extraClasses="w-20">
					Taxi Cost
				</Input>
				<Input type="number" name="agentFee" formData={formData} handleChange={handleChange} extraClasses="w-20">
					Agent Fee
				</Input>
				<Input type="number" name="totalCost" formData={formData} extraClasses="w-20" readOnly={true}>
					TotalCost
				</Input>
			</div>

			{/* arrival inputs */}
			{reservation.reservationType === "Arrival" && (
				<div className="flex justify-around">
					<Input
						type="text"
						name="reservationType"
						formData={formData}
						readOnly={true}
						extraClasses="placeholder-gray-900"
					>
						Details for
					</Input>

					<div>
						<label htmlFor="reservationDate">Arrival Date: </label>
						<input
							type="date"
							id="reservationDate"
							name="reservationDate"
							value={formData.reservationDate}
							onChange={handleChange}
							className="text-gray-900 text-center"
							required
						/>
					</div>

					<div>
						<label htmlFor="reservationTime">Arrival Time: </label>
						<input
							type="time"
							id="reservationTime"
							name="reservationTime"
							value={formData.reservationTime}
							className="text-gray-900 text-center"
							onChange={handleChange}
							required
						/>
					</div>
				</div>
			)}

			{/* departure inputs */}
			{reservation.reservationType === "Departure" && (
				<div className="flex justify-around">
					<Input
						type="text"
						name="reservationType"
						formData={formData}
						readOnly={true}
						extraClasses="placeholder-gray-900"
					>
						Details for
					</Input>
					<div>
						<label htmlFor="reservationDate">Departure Date: </label>
						<input
							type="date"
							id="reservationDate"
							name="reservationDate"
							value={formData.reservationDate}
							onChange={handleChange}
							className="text-gray-900 text-center"
							required
						/>
					</div>

					<div>
						<label htmlFor="reservationTime">Departure Time: </label>
						<input
							type="time"
							id="reservationTime"
							name="reservationTime"
							value={formData.reservationTime}
							onChange={handleChange}
							className="text-gray-900 text-center"
							required
						/>
					</div>
				</div>
			)}

			{/* details and more */}
			<div className="flex justify-between">
				<div className="flex flex-col">
					<label htmlFor="details">Details: </label>
					<textarea
						id="details"
						name="details"
						value={formData.details || " "}
						className="text-gray-900 w-96 h-28"
						onChange={handleChange}
						required={false}
					/>
				</div>
				<div className="w-full p-4 m-auto">
					<div className="flex justify-around mb-4">
						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								name="checkInOut"
								checked={formData.checkInOut}
								onChange={handleChange}
								className="w-4 h-4"
							/>
							CHECK IN / OUT
						</label>
					</div>
					<Button type="submit" colorClasses="text-gray-700 border-gray-700 hover:bg-green-500 w-full text-2xl">
						Save Reservation
					</Button>
				</div>
			</div>
		</form>
	);
}
