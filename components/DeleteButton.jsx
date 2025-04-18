"use client";

import { startTransition } from "react";
import { deleteData } from "@/app/actions/deleteActions/deleteData";
import { toast } from "react-toastify";

function DeleteButton(data, dataType) {
	const handleDelete = data => {
		const dataPlus = { ...data.data, dataType: data.dataType };
		const dataName =
			dataPlus.dataType === "reservations"
				? "THIS RESERVATION"
				: dataPlus.dataType === "transfers"
				? "THIS TRANSFER"
				: dataPlus.name;
		if (confirm(`Are you sure you want to delete ${dataName}?`)) {
			startTransition(async () => {
				const result = await deleteData(dataPlus);
				if (!result.success) {
					toast.error(`${dataName} was not deleted.`, { theme: "colored" });
					alert(result.error);
				} else {
					toast.warning(`${dataName} was deleted.`, { theme: "dark" });
				}
			});
		}
	};
	return (
		<div className="flex items-center justify-center">
			<div>
				<button
					onClick={() => {
						handleDelete(data);
					}}
					className="bg-red-500 rounded-xl hover:rounded-3xl hover:bg-yellow-500 transition-all duration-300 text-yellow-200 hover:text-red-800 font-bold py-2 px-4">
					DELETE
				</button>
			</div>
		</div>
	);
}

export default DeleteButton;
