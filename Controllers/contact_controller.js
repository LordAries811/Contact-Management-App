const express = require("express");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: "Get your contacts" });
});

const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw ("All fields are mandatory !");
        //return res.status(400).json({message: "All field are mandatory"});
    }
    return res.status(201).json({ message: "Create a contact" });
});
    

const getContact = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: "Get your contacts" });
});

const updateContact = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: "Get your contacts" });
});

const deleteContact = asyncHandler(async (req, res) => {
    return res.status(200).json({ message: "Get your contacts" });
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };