import mongoose from "mongoose";

const connectToDatabase = async () => {
	const MONGO_URI = process.env.MONGODB_URI; // Replace with your MongoDB URI
	// console.debug("MONGO_URI: ", MONGO_URI);
	// console.debug("MONGO_URI: ", typeof MONGO_URI);
	try {
		if (!MONGO_URI) {
			throw new Error("MONGODB_URI is not defined in the .env file");
		}

		// Connect to MongoDB
		const connection = await mongoose.connect(MONGO_URI);
		console.log("Connected to MongoDB!");

		// console.log("Connected to database:", connection.connection.name); // Should log "mamaka_tours"
		// console.log("Connection state:", connection.connection.readyState); // Logs connection status

		return connection;
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};

export default connectToDatabase;
