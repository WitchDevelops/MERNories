import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB")
    } catch (erorr) {
        console.log("Error connecting to MongoDB", erorr);
        process.exit(1); //exit with failure
    }
}