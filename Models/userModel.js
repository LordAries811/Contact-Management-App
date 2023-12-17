const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        requied: [true, "Kindly add your user name"]
    },
    email: {
        type: String,
        unique: [true, "This email address already exits"],
        requied: [true, "Kindly add your email address"]
    },
    password: {
        type: String,
        requied: [true, "Kindly add your password"]
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model("User", userSchema);