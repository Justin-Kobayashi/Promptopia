import mongoose from "mongoose";

let isConnected = false; // trach the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {

            dbName: "share_prompt",
        })
        console.log(process.env.MONGODB_URI)
        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}