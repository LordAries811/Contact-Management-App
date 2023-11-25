const express = require("express");
const dotenv = require("dotenv").config();
const contact_router = require("./Routes/contact_routes");
const errorHandler = require("./middleware/errorHandler");
const dbConnection = require("./config/dbConnection");

dbConnection();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contact", contact_router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`I am connected to ${PORT}`);
})