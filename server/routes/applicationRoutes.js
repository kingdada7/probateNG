import express from "express";
import {
  applicantInformation,
  deceasedInformation,
  getApplications,
} from "../controllers/applicationControllers.js";
import auth from "../middleware/auth.js";

const applicationRouter = express.Router();

applicationRouter.post("/application-information", auth, applicantInformation);
applicationRouter.patch(
  "/:applicationId/deceased-information",
  auth,
  deceasedInformation,
);

applicationRouter.get("/get-applications", auth, getApplications);

export default applicationRouter;
