const express = require("express");
const userRouter = express.Router();
const { currentUser, loginUser, registerUser } = require("../Controllers/user_controller")
const validateToken = require("../middleware/validateToken");

userRouter.get("/current", validateToken, currentUser);
userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);

module.exports = userRouter;