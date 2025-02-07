function DeleteButton() {
	return (
		<div className="flex items-center justify-center">
			<div>
				<button className="bg-red-500 rounded-xl hover:rounded-3xl hover:bg-yellow-500 transition-all duration-300 text-yellow-200 hover:text-red-800 font-bold py-2 px-4">
					DELETE
				</button>
			</div>
		</div>
	);
}

export default DeleteButton;
