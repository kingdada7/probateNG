import express from "express";

import {
  getUser,
  userLogin,
  userRegister,
  forgotPassword,
  resetPassword,
} from "../controllers/userControllers.js";

import auth from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/citizenregistration", userRegister);

userRouter.post("/citizenlogin", userLogin);

userRouter.get("/get-user", auth, getUser);

// Password reset routes
userRouter.post("/forgot-password", forgotPassword);

userRouter.post("/reset-password/:token", resetPassword);

export default userRouter;