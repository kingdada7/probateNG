import express from "express";
import { applicantInformation } from "../controllers/applicationControllers.js";
import auth from "../middleware/auth.js";

const applicationRouter = express.Router();

applicationRouter.post("/application-information", auth, applicantInformation);

applicationRouter.get("/get-applications", auth, getApplications);

export default applicationRouter;
