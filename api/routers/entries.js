const { Router } = require("express");

const entriesController = require("../controllers/entries");

const router = Router();

router
    .route("/")
    .get(entriesController.index);


module.exports = router;
