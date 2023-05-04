const { Router } = require("express");

const entriesController = require("../controllers/entries");

const router = Router();

router
    .route("/")
    .get(entriesController.index)
    .post(entriesController.create)


module.exports = router;
