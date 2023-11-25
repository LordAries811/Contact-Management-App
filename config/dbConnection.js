const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Connected to Database");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnection;