const mongoose = require("mongoose");

let isConnected = false; // Track the connection status

export const connectDB = async () => {
  const DB_URL = `${process.env.DB_URL_BASE}:${process.env.SECRET_KEY}${process.env.DB_HOST}`;
  if (isConnected) return; // Avoid re-connection if already connected

  try {
    const db = await mongoose.connect(DB_URL);

    isConnected = db.connection.readyState === 1;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};
