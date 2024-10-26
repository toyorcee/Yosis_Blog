import mongoose from "mongoose";
import User from "./models/user.model.js";
import dotenv from "dotenv"; // Import dotenv

// Load environment variables from .env file
dotenv.config(); // Activate dotenv

const migrateUsers = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");

    // Connect to MongoDB using the URI from your .env file
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB.");

    // Update users to add googleId field
    const result = await User.updateMany(
      { googleId: { $exists: false } }, // Only update users without a googleId
      { $set: { googleId: null } } // Initialize googleId to null
    );

    console.log(`Migration completed: ${result.modifiedCount} users updated.`);
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
};

migrateUsers();
