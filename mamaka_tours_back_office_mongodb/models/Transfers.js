import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const TransfersSchema = new Schema(
	{
		transferType: { type: String, required: true },
		agent: { type: String, required: true },
		transferMean: { type: String, required: true },
		transferDate: { type: Date, required: true },
		transferTime: { type: String, required: true },
		locationFrom: { type: String, required: true },
		lactionTo: { type: String, required: true },
		price: { type: Number, required: true },
		paid: { type: Boolean, required: true },
		noShow: { type: Boolean, required: true },
		details: { type: String, required: true },
	},
	{
		timestamps: true, // automaticaly creates a "Created At" and "Updated At" fields
	}
);

const Transfers = models.Transfers || model("Transfers", TransfersSchema);
export default Transfers;
