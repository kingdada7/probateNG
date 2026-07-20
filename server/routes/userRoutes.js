import express from "express";
import { userRegister } from "../controllers/userControllers.js";
import auth from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/citizenregistration", auth, userRegister);

export default userRouter;
