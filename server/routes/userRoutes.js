import express from "express";
import { userRegister } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/citizenregistration", userRegister);
