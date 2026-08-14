import express from "express";
import { getHOD, hodLogin, hodRegister } from "../controllers/adminControllers.js";
import hodAuth from "../middleware/adminAuth.js";

const adminRouter = express.Router();

adminRouter.post("/hodlogin", hodLogin);

adminRouter.post("/hodregister", hodRegister);

adminRouter.get("/me", );


export default adminRouter;
