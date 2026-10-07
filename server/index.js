import "dotenv/config";

import cors from "cors";
import express from "express";

import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import staffRouter from "./routes/staffRoutes.js";

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "https://probatengcitzenportal.vercel.app",
      "https://probateng-admin.vercel.app",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("API is working"));

app.use("/api/citizen", userRouter);
app.use("/api/application", applicationRouter);
app.use("/api/hodadmin", adminRouter);
app.use("/api/staff", staffRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
