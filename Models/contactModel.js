const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Kindly add your name"]
    },
    email: {
        type: String,
        required: [true, "Kindly add your email address"]
    },
    phone: {
        type: String,
        required: [true, "Kindly add your phone number"]
    },
},
    {
        timestamps: true
    });

module.exports = mongoose.model("Contact", contactSchema);