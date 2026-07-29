import express from "express";
import {
  applicantInformation,
  applicationType,
  deceasedInformation,
  getApplications,
  uploadDocuments,
} from "../controllers/applicationControllers.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";

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

applicationRouter.patch(
  "/:applicationId/documents-upload",
  auth,
  (req, res, next) => {
    upload.fields([
      { name: "deathCertificate", maxCount: 1 },
      { name: "otherSupporting", maxCount: 1 },
      { name: "willDocument", maxCount: 1 },
      { name: "affidavit", maxCount: 1 },
    ])(req, res, (err) => {
      if (err) {
        console.log("Multer error:", err.message);
        console.log("Rejected field:", err.field);
        return res.status(400).json({
          message: err.message,
          field: err.field,
        });
      }
      next();
    });
  },
  uploadDocuments
);

applicationRouter.get("/get-applications", auth, getApplications);

export default applicationRouter;
