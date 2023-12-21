const express = require("express");
const mongoose = require("mongoose");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const { status } = require("express/lib/response");
const dotenv = require("dotenv").config();


const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    //console.log(req.body);
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are mandatory" });
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        return status(400).json({ message: "User already exists" });
    }

    const hashPwd = await bcrypt.hash(password, 10);
    //console.log(hashPwd);
    const user = await User.create({
        username,
        email,
        password: hashPwd
    });

    if (user) {
        return res.status(201).json({ _id: user.id, email: user.email });
    }
    else {
        return res.status(400).json({ message: "User data is not valid" });
    }
    //res.json("User has been registered");
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are mandatory" });
    }

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        },
            process.env.ACCESS_TOKEN,
            { expiresIn: "15m" },);

        res.status(200).json({ accessToken });
    }
    else {
        res.status(401).json({ message: "Incorrect credentials provided" });
    }
});

const currentUser = asyncHandler(async (req, res) => {
    console.log(req.user);
    return res.json(req.user);
});

module.exports = { loginUser, registerUser, currentUser };