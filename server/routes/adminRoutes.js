import express from "express";
import { getHOD, hodLogin, hodRegister } from "../controllers/adminControllers.js";
import hodAuth from "../middleware/hodAuth.js";

const adminRouter = express.Router();

adminRouter.post("/hodlogin", hodLogin);

adminRouter.post("/hodregister", hodRegister);

adminRouter.get("/gethod", hodAuth, getHOD);


export default adminRouter;
