"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import Button from "./Button";

function EditButton({ dataItemId, dataItemType }) {
	const { setDataType, setShowModal, setDataId } = useGlobalContext();

	const handleShowModal = () => {
		setDataType(dataItemType);
		setDataId(dataItemId);
		setShowModal(true);
	};

	let editButtonElement;
	if (dataItemType !== "reservations" && dataItemType !== "transfers") {
		editButtonElement = (
			<div className="flex items-center justify-center">
				<div>
					<Button
						onClick={handleShowModal}
						colorClasses="bg-blue-500 rounded-xl hover:rounded-3xl hover:bg-yellow-500 transition-all duration-300 text-yellow-200 hover:text-blue-800 font-bold py-2 px-4"
					>
						EDIT
					</Button>
				</div>
			</div>
		);
	} else {
		editButtonElement = (
			<div className="flex items-center justify-center">
				<div>
					<Link
						href={`/${dataItemType}/edit/${dataItemId}`}
						className="bg-blue-500 rounded-xl hover:rounded-3xl hover:bg-yellow-500 transition-all duration-300 text-yellow-200 hover:text-blue-800 font-bold py-2 px-4"
					>
						EDIT
					</Link>
				</div>
			</div>
		);
	}
	return editButtonElement;
}

export default EditButton;
