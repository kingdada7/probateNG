import express from "express";
import { hodLogin, hodRegister } from "../controllers/adminControllers.js";

const adminRouter = express.Router();

adminRouter.post("/hodlogin", hodLogin);

adminRouter.post("/hodregister", hodRegister);

export default adminRouter;
