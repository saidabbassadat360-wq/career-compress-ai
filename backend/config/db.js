import mongoose from 'mongoose';

const connectDB = async (retries = 5, delay = 3000) => {
  const mongoUri = process.env.MONGO_URI;
  
  if (!mongoUri) {
    console.error('❌ MONGO_URI environment variable is not set. Please check your .env file.');
    process.exit(1);
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const conn = await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 10000,
        retryWrites: true,
        w: 'majority'
      });
      console.log(`💾 MongoDB Connected Successfully: ${conn.connection.host}`);
      return conn;
    } catch (error) {
      console.error(`❌ MongoDB Connection Attempt ${attempt}/${retries} Failed: ${error.message}`);
      
      if (attempt < retries) {
        console.log(`⏳ Retrying in ${delay / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error(`❌ Failed to connect to MongoDB after ${retries} attempts.`);
        console.error('Possible causes:');
        console.error('1. Invalid MONGO_URI in .env file');
        console.error('2. MongoDB Atlas IP whitelist - add your server IP');
        console.error('3. Network connectivity issues');
        process.exit(1);
      }
    }
  }
};

export default connectDB;