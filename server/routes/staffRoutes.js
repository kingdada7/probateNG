import express from "express";
import { staffRegister } from "../controllers/adminControllers";
const staffRouter = express.Router();

staffRouter.post("/register", staffRegister);

export default staffRouter;
