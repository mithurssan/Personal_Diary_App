const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const entryRoutes = require("./routers/entries");

const db = require("./database/db");
const api = express();

//middleware
api.use(cors());
api.use(express.json());
api.use(logger("dev"));

api.get("/", (req, res) => {
    res.send("Welcome to the diary entires.");
})

api.use("/entries", entryRoutes);

module.exports = api;
