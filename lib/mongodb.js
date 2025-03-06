import mongoose from "mongoose";

const connectToDatabase = async () => {
	const MONGO_URI = process.env.MONGODB_URI;
	try {
		if (!MONGO_URI) {
			throw new Error("MONGODB_URI is not defined in the .env file");
		}

		// Connect to MongoDB
		const connection = await mongoose.connect(MONGO_URI);
		console.log("Connected to MongoDB!");

		return connection;
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};

export default connectToDatabase;
