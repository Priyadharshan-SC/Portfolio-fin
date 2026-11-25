const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
  
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000, // Timeout after 3s if no local MongoDB instance
    });
    isConnected = true;
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
  } catch (err) {
    isConnected = false;
    console.warn(`[MongoDB Notice] Database connection unavailable (${err.message}).`);
    console.warn('[MongoDB Notice] Server running in resilient mode. Set MONGODB_URI in server/.env to connect to MongoDB Atlas or local MongoDB.');
  }
};

const getDbStatus = () => isConnected;

module.exports = { connectDB, getDbStatus };

