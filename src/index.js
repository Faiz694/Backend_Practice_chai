import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import express from "express";
import { MongoDB_connection } from "./db/connectDB.js";

const app = express();

(async () => {
  try {
    await MongoDB_connection()
    console.log(" MongoDB connected successfully");


    app.listen(process.env.PORT, () => {
      console.log(`server start running on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Server Connection Faild ", error);
  }
})();


process.on('SIGINT', async () => {
  await mongoose.connection.close(); // 👈 closes the DB connection
  console.log('🔌 Disconnected from MongoDB Atlas');
  process.exit(0); // 👈 exits the app gracefully
});

