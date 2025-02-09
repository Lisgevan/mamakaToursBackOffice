import Link from "next/link";

function EditButton({ dataItemId, dataItemType }) {
	return (
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

export default EditButton;
