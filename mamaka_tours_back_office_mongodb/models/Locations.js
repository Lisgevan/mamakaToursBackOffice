import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const LocationsSchema = new Schema(
	{
		name: { type: String, required: true },
	},
	{
		timestamps: true, // automaticaly creates a "Created At" and "Updated At" fields
	}
);

const Locations = models.Locations || model("Locations", LocationsSchema);
export default Locations;
