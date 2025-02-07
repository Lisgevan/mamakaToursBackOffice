function EditButton() {
	return (
		<div className="flex items-center justify-center">
			<div>
				<button className="bg-blue-500 rounded-xl hover:rounded-3xl hover:bg-yellow-500 transition-all duration-300 text-yellow-200 hover:text-blue-800 font-bold py-2 px-4">
					EDIT
				</button>
				{/* <button className="flex p-2.5 bg-blue-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-yellow-200 hover:text-blue-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3 w-3"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
						/>
					</svg>
				</button> */}
			</div>
		</div>
	);
}

export default EditButton;
