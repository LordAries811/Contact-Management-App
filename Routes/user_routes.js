const express = require("express");
const userRouter = express.Router();
const { currentUser, loginUser, registerUser } = require("../Controllers/user_controller")

userRouter.get("/current", currentUser);
userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);

module.exports = userRouter;