import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const AgentsSchema = new Schema(
	{
		name: { type: String, required: true },
	},
	{
		timestamps: true, // automaticaly creates a "Created At" and "Updated At" fields
	}
);

const Agents = models.Agents || model("Agents", AgentsSchema);
export default Agents;
