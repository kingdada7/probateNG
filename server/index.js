import "dotenv/config";

import cors from "cors";
import express from "express";

import connectDB from "./config/db.js";

// Connect DB
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
