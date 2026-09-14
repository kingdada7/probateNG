import express from "express";
import {
  getAdmin,
  hodLogin,
  hodRegister,

} from "../controllers/adminControllers.js";

import adminAuth from "../middleware/adminAuth.js";

const adminRouter = express.Router();

adminRouter.post("/hodlogin", hodLogin);

adminRouter.post("/hodregister", hodRegister);

adminRouter.get("/me", adminAuth, getAdmin);


export default adminRouter;
