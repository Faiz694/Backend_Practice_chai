import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const MongoDB_connection = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection FAILD!!! ", error);
    throw error
  }
}
                  
export { MongoDB_connection }
