import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("DB Connected.");
    } catch (error) {
        console.log(`Database error: ${error}`);
    }
}

export default connectDB;