import express from "express";
import {
  getAdmin,
  getAllStaff,
  getPendingStaff,
  hodLogin,
  hodRegister,
  reviewApplication,
  updateStaffStatus,
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

adminRouter.patch("/staff/:staffId/status", adminAuth, updateStaffStatus);

adminRouter.get("/staff/pending", adminAuth, getPendingStaff);

adminRouter.get("/staff", adminAuth, getAllStaff);

export default adminRouter;
