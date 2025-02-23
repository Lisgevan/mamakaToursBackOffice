"use server";

import { dataToObject } from "@/lib/dataToObject";
import connectToDatabase from "@/lib/mongodb";
import Transfers from "@/models/Transfers";
import { revalidatePath } from "next/cache";

export async function addTransfers(prevState, formData) {
	try {
		await connectToDatabase();

		const formDataObj = dataToObject(formData);

		// Now we can process the transferDetails properly
		const transferDetails = [];
		let i = 0;

		// While the transferDetails entry exists, push the objects to the array
		while (formDataObj[`transferDetails[${i}].reference`]) {
			transferDetails.push({
				reference: formDataObj[`transferDetails[${i}].reference`],
				accommodation: formDataObj[`transferDetails[${i}].accommodation`],
				clientName: formDataObj[`transferDetails[${i}].clientName`],
			});
			i++;
		}

		const finalFormData = {};
		formData.forEach((value, key) => {
			if (!key.includes("transferDetails") && !key.includes("$ACTION")) {
				finalFormData[key] = value;
			}
		});
		finalFormData.transferDetails = transferDetails;
		finalFormData.paid = finalFormData.paid === "on" ? true : false;
		finalFormData.noShow = finalFormData.noShow === "on" ? true : false;

		const newTransfer = new Transfers(finalFormData);
		await newTransfer.save();

		revalidatePath("/");

		return { success: true, message: "Transfers added successfully" };
	} catch (error) {
		console.error("Error adding transfers:", error);
		return { success: false, message: "Server error" };
	}
}
