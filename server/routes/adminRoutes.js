import express from "express";
import {
  approveStaff,
  getAdmin,
  hodLogin,
  hodRegister,
  rejectStaff,
  reviewApplication,
} from "../controllers/adminControllers.js";

import adminAuth from "../middleware/adminAuth.js";


const adminRouter = express.Router();

adminRouter.post("/hodlogin", hodLogin);

adminRouter.post("/hodregister", hodRegister);

adminRouter.get("/me", adminAuth, getAdmin);

adminRouter.patch(
  "/applications/:applicationId/review",
  adminAuth,
  reviewApplication,
);

adminRouter.patch("/staff/:staffId/approve", adminAuth, approveStaff);
adminRouter.patch("/staff/:staffId/reject", adminAuth, rejectStaff);

export default adminRouter;
