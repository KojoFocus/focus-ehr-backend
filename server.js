import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./src/routes/allRoutes.js";

// Load env variables
dotenv.config();

// Create express app
const app = express();

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('uploads'));

// Use routes

app.use('/api', router);


// Make database connection
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('Please define the MONGO_URI environment variable inside .env file');
  process.exit(1);
}
await mongoose.connect(mongoUri);

// Listen for incoming requests
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Express app is running on PORT: ${port}!`);
});
