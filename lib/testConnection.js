import mongoose from "mongoose";
// import Transfers from "../models/Transfers.js";

const MONGO_URI = process.env.MONGODB_URI; // Replace with your MongoDB URI
console.debug("MONGO_URI: ", MONGO_URI);

const testConnection = async () => {
	try {
		// Connect to MongoDB
		await mongoose.connect(MONGO_URI, {});
		console.log("Connected to MongoDB!");

		// Retrieve data from the Transfers collection
		const transfers = await Transfers.find({});
		console.log("Transfers:", transfers);

		// Close the connection
		await mongoose.disconnect();
		console.log("Disconnected from MongoDB!");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};

testConnection();
