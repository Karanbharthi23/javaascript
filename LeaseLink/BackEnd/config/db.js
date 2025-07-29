import mongoose from "mongoose";
import dotenv from "dotenv";
export const connectDB = async () => {
    try {  
        const conn = await mongoose.connect(`${process.env.DATABASE_URL}/Asset-Rental`) 
        if(conn) {
            console.log("MongoDB connected successfully");
        }
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
};