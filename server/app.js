const express = require("express");
const cors = require("cors");
const conenctionToMongoDB = require("./config/db_connection");
const prisonerRouters = require("./routes/prisoners");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/prisoners", prisonerRouters);

const myDataBase = "myDB";
const url = `mongodb://0.0.0.0:27017/${myDataBase}`;
conenctionToMongoDB(url);

module.exports = app;