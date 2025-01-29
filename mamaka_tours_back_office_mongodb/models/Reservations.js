import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const ReservationsSchema = new Schema(
	{
		reference: { type: String, required: true },
		agent: { type: String, required: true },
		accommodation: { type: String, required: true },
		clientName: { type: String, required: true },
		totalPax: { type: Number, required: true },
		adults: { type: Number, required: true },
		kids: { type: Number },
		infants: { type: Number },
		reservationType: { type: String, required: true },
		reservationDate: { type: Date, required: true },
		reservationTime: { type: String, required: true },
		taxiCost: { type: Number, required: true },
		agentFee: { type: Number, required: true },
		totalCost: { type: Number, required: true },
		checkInOut: { type: Boolean, required: true },
		details: { type: String, required: true },
	},
	{
		timestamps: true, // automaticaly creates a "Created At" and "Updated At" fields
	}
);

const Reservations = models.Reservations || model("Reservations", ReservationsSchema);
export default Reservations;
