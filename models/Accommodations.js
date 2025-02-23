import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const AccommodationsSchema = new Schema(
	{
		name: { type: String, required: true },
	},
	{
		timestamps: true, // automaticaly creates a "Created At" and "Updated At" fields
	}
);

const Accommodations = models.Accommodations || model("Accommodations", AccommodationsSchema);
export default Accommodations;
