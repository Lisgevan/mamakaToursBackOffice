"use client";

import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { editData } from "@/app/actions/editActions/editData";
import { getDataById } from "@/app/actions/getActions/getDataById";
import Button from "../Button";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { toast } from "react-toastify";

export default function EditModal() {
	const { dataId, dataType, setShowModal } = useGlobalContext();
	const [formData, setFormData] = useState({});

	let data;
	useEffect(() => {
		const fetchData = async () => {
			if (!dataId || !dataType) return;
			data = await getDataById({ dataId, dataType });
			setFormData(data); // Set form data once data is fetched
		};

		fetchData();
	}, [dataId, dataType]);

	const handleChange = e => {
		const input = e.target.value.toUpperCase();
		setFormData({ ...formData, [e.target.name]: input });
	};

	const handleSubmit = async event => {
		event.preventDefault();
		toast.success("Data updated.", { theme: "colored" });
		await editData(dataId, dataType, formData);
		setShowModal(false);
	};

	const handleShowModal = () => {
		setShowModal(false);
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-indigo-100 p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-xl text-gray-900 font-bold mb-4 capitalize">Edit {dataType}</h2>
				<form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 justify-between text-gray-900">
					<input type="hidden" name={dataType} value={dataType} readOnly />
					<Input type="text" name="name" formData={formData} handleChange={handleChange}>
						Name
					</Input>
					{dataType === "transferMean" && (
						<Input type="text" name="fullName" formData={formData} handleChange={handleChange}>
							Full Name
						</Input>
					)}
					<div className="flex justify-end gap-2 mt-4">
						<SubmitButton>Data</SubmitButton>
						<Button type="button" onClick={handleShowModal} colorClasses="px-4 py-2 bg-gray-400 rounded">
							CANCEL
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
