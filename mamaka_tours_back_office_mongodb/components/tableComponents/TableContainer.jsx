import TableHead from "./TableHead";
import ReservationsTableBody from "./ReservationsTableBody";
import TransfersTableBody from "./TransfersTableBody";

function TableContainer({ tableType }) {
	return (
		<div className="min-w-screen min-h-max flex justify-center bg-gray-100 font-sans">
			<div className="min-w-max lg:w-5/6">
				<div className="bg-white shadow-md rounded">
					<table className="w-screen table-auto">
						<TableHead tableType={tableType} />
						{tableType === "reservations" ? <ReservationsTableBody /> : <TransfersTableBody />}
					</table>
				</div>
			</div>
		</div>
	);
}

export default TableContainer;
