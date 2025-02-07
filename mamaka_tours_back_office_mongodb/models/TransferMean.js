import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const TransferMeanSchema = new Schema(
	{
		name: { type: String, required: true },
		fullName: { type: String, required: true },
	},
	{
		timestamps: true, // automaticaly creates a "Created At" and "Updated At" fields
		collection: "transfermean",
	}
);

const TransferMean = models.TransferMean || model("TransferMean", TransferMeanSchema);
export default TransferMean;
