import TableHead from "./TableHead";
import ReservationsTableBody from "./ReservationsTableBody";
import TransfersTableBody from "./TransfersTableBody";
import AccommodationsTableBody from "./AccommodationsTableBody";
import AgentsTableBody from "./AgentsTableBody";
import LocationsTableBody from "./LocationsTableBody";
import TransfermeanTableBody from "./TransferMeanTableBody";
import ReservationsReportTableBody from "./ReservationsReportTableBody";
import TransfersReportTableBody from "./TransfersReportTableBody";

function TableContainer({ tableType, reportSearchParams, data }) {
	let tableBody;
	if (tableType === "reservations") {
		tableBody = <ReservationsTableBody />;
	} else if (tableType === "transfers") {
		tableBody = <TransfersTableBody />;
	} else if (tableType === "accommodations") {
		tableBody = <AccommodationsTableBody accommodations={data} />;
	} else if (tableType === "agents") {
		tableBody = <AgentsTableBody agents={data} />;
	} else if (tableType === "locations") {
		tableBody = <LocationsTableBody locations={data} />;
	} else if (tableType === "transfermean") {
		tableBody = <TransfermeanTableBody transferMeans={data} />;
	} else if (tableType === "reservationsReport") {
		tableBody = <ReservationsReportTableBody reportSearchParams={reportSearchParams} />;
	} else if (tableType === "transfersReport") {
		tableBody = <TransfersReportTableBody reportSearchParams={reportSearchParams} />;
	}

	return (
		<div className="min-w-screen min-h-max flex justify-center bg-gray-100 font-sans">
			<div className="min-w-max lg:w-5/6">
				<div className="bg-white shadow-md rounded">
					<table className="w-screen table-auto">
						<TableHead tableType={tableType} />
						{tableBody}
					</table>
				</div>
			</div>
		</div>
	);
}

export default TableContainer;
