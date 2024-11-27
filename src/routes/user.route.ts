import express from "express";
const userRoutes = express.Router();

import { authMiddleware } from "../api/middlewares/auth.middleware";
import userController from "../api/entities/user/user.controller";

// get all user
userRoutes.get("/getUserById", userController.getAllUsers);

// get user by id
userRoutes.get(
    "/getUserById",
    authMiddleware.verifyToken,
    userController.getUserById
);

//search user
userRoutes.get(
    "/searchUser",
    authMiddleware.verifyToken,
    userController.getUserById
);

export default userRoutes;
