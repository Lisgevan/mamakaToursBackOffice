function TableContainer({ children }) {
	return (
		<div className="">
			<div className="min-w-screen min-h-screen flex items-center justify-center bg-gray-100 font-sans">
				<div className="min-w-max lg:w-5/6">
					<div className="bg-white shadow-md rounded">
						<table className="w-screen table-auto">{children}</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TableContainer;
