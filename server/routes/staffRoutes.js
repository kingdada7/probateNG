import express from "express";
import { staffRegister } from "../controllers/adminControllers.js";
const staffRouter = express.Router();

staffRouter.post("/staffregister", staffRegister);

export default staffRouter;
