"use client";

import { useActionState, useState, useEffect } from "react";
import Button from "../Button";
import Input from "./Input";
import { addReservations } from "@/app/actions/addActions/addReservations";
import { useRouter } from "next/navigation";
import Select from "./Select";

export default function AddReservationForm() {
	const [formState, formAction] = useActionState(addReservations, null);
	const [formData, setFormData] = useState({
		reference: "",
		agent: "",
		clientName: "",
		accommodation: "",
		adults: 0,
		kids: 0,
		infants: 0,
		totalPax: 0,
		taxiCost: 0,
		agentFee: 0,
		totalCost: 0,
		arrivalDetails: "arrival",
		arrivalDate: "",
		arrivalTime: "",
		departureDetails: "departure",
		departureDate: "",
		departureTime: "",
		details: "",
		arrivalOnly: false,
		departureOnly: false,
	});

	const router = useRouter();
	// ✅ Check if action was successful, then redirect
	useEffect(() => {
		if (formState?.success) {
			router.push("/reservations"); // ✅ Redirect from client
		}
	}, [formState, router]);

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
		<form action={formAction} className="space-y-4 bg-gray-400 p-4 flex flex-col gap-4 w-3/5 m-auto text-gray-900">
			{/* Display success message */}
			{formState?.message && (
				<p className={formState.success ? "text-green-600" : "text-red-600"}>{formState.message}</p>
			)}
			{/* reference / agent */}
			<div className="flex justify-around ">
				<Input type="text" name="reference" formData={formData} handleChange={handleChange}>
					Reference
				</Input>

				<Select name="agent">Agent: </Select>
			</div>

			{/* client / accommodation */}
			<div className="flex justify-around">
				<Input type="text" name="clientName" formData={formData} handleChange={handleChange}>
					Client Name
				</Input>
				<Select name="accommodation">Accommodation: </Select>
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
					<Input
						type="number"
						name="totalPax"
						formData={formData}
						// handleChange={handleChange}
						extraClasses="w-12"
						readOnly={true}
					>
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
				<Input
					type="number"
					name="totalCost"
					formData={formData}
					// handleChange={handleChange}
					extraClasses="w-20"
					readOnly={true}
				>
					TotalCost
				</Input>
			</div>

			{/* arrival inputs */}
			<div className="flex justify-around">
				<Input
					type="text"
					name="arrivalDetails"
					formData={formData}
					readOnly={true}
					extraClasses="placeholder-gray-900"
				>
					Details for
				</Input>

				<div>
					<label htmlFor="arrivalDate">Arrival Date: </label>
					<input
						type="date"
						id="arrivalDate"
						name="arrivalDate"
						value={formData.arrivalDate}
						onChange={handleChange}
						className="text-gray-900 text-center"
						required
					/>
				</div>

				<div>
					<label htmlFor="arrivalTime">Arrival Time: </label>
					<input
						type="time"
						id="arrivalTime"
						name="arrivalTime"
						value={formData.arrivalTime}
						className="text-gray-900 text-center"
						onChange={handleChange}
						required
					/>
				</div>
			</div>

			{/* departure inputs */}
			<div className="flex justify-around">
				<Input
					type="text"
					name="departureDetails"
					formData={formData}
					readOnly={true}
					extraClasses="placeholder-gray-900"
				>
					Details for
				</Input>
				<div>
					<label htmlFor="departureDate">Departure Date: </label>
					<input
						type="date"
						id="departureDate"
						name="departureDate"
						value={formData.departureDate}
						onChange={handleChange}
						className="text-gray-900 text-center"
						required
					/>
				</div>

				<div>
					<label htmlFor="departureTime">Departure Time: </label>
					<input
						type="time"
						id="departureTime"
						name="departureTime"
						value={formData.departureTime}
						onChange={handleChange}
						className="text-gray-900 text-center"
						required
					/>
				</div>
			</div>

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
								name="arrivalOnly"
								checked={formData.arrivalOnly}
								onChange={handleChange}
								className="w-4 h-4"
							/>
							Arrival only
						</label>
						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								name="departureOnly"
								checked={formData.departureOnly}
								onChange={handleChange}
								className="w-4 h-4"
							/>
							Departure only
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
