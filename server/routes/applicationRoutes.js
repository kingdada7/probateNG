import express from "express";
import {
  applicantInformation,
  applicationType,
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
applicationRouter.patch(
  "/:applicationId/application-type",
  auth,
  applicationType,
);

applicationRouter.get("/get-applications", auth, getApplications);

export default applicationRouter;
