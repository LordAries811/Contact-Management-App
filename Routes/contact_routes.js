const express = require("express");
const contactRouter = express.Router();
const { getContacts, getContact, createContact, updateContact, deleteContact } = require("../Controllers/contact_controller");

contactRouter.get("/", getContacts)
contactRouter.post("/", createContact)
contactRouter.get("/:id", getContact)
contactRouter.put("/:id", updateContact)
contactRouter.delete("/:id", deleteContact)

module.exports = contactRouter;