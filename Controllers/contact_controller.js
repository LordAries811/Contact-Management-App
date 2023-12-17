const express = require("express");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const contactModel = require("../Models/contactModel");

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await contactModel.find();
    return res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw ("All fields are mandatory !");
    }
    const contact = await contactModel.create({
        name,
        email,
        phone
    });
    return res.status(201).json(contact);
});
    

const getContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const contact = await contactModel.findById(id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    return res.status(200).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const contact = await contactModel.findById(id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }

    const updatedContact = await contactModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );
    return res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const contact = await contactModel.findById(id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }

    await contactModel.deleteOne({ _id: id });
    await contactModel.save;
    return res.status(200).json(contact);
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };