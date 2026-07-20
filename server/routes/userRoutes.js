import express from "express";
import { userLogin, userRegister } from "../controllers/userControllers.js";
import auth from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/citizenregistration", userRegister);
userRouter.post("/citizenlogin", userLogin);

export default userRouter;
