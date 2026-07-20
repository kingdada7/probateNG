import express from "express";
import {
  getUser,
  userLogin,
  userRegister,
} from "../controllers/userControllers.js";
import auth from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/citizenregistration", userRegister);
userRouter.post("/citizenlogin", userLogin);
userRouter.get("/get-user", auth, getUser);

export default userRouter;
