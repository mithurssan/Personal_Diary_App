const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const api = express();

//middleware
api.use(express.json());
api.use(cors());
api.use(logger("dev"));

api.get("/", (req, res) => {
    res.send("Welcome to the diary entires.");
})

module.exports = api;
