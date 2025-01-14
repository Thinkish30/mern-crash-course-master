import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const mongoUri = "mongodb+srv://root:root@cluster0.2wa8c.mongodb.net/";

if (!mongoUri) {
  throw new Error('MONGO_URI environment variable is not defined');
}

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // process code 1 code means exit with failure, 0 means success
	}
};
