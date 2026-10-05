import express from "express";
import { staffLogin, staffRegister } from "../controllers/adminControllers.js";
const staffRouter = express.Router();

staffRouter.post("/staffregister", staffRegister);
staffRouter.post("/stafflogin", staffLogin);

export default staffRouter;
