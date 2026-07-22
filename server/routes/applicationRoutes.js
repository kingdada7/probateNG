import express from "express";
import { applicantInformation } from "../controllers/applicationControllers";

const applicationRouter = express.Router();

applicationRouter.post("/application-information", applicantInformation);

export default applicationRouter;
