import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const TransferMeansSchema = new Schema(
	{
		name: { type: String, required: true },
	},
	{
		timestamps: true, // automaticaly creates a "Created At" and "Updated At" fields
	}
);

const TransferMeans = models.TransferMeans || model("TransferMeans", TransferMeansSchema);
export default TransferMeans;
