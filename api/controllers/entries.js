const Entry = require("../models/Entry");

const index = async (req, res) => {
    try {
        const entries = await Entry.getAll();
        res.send(entries)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

const create = async (req, res) => {
    try {
        const entry = await Entry.create(req.body);
        res.status(201).send(entry)
    } catch (err) {
        res.send({ "error": err.message });
    }
}

module.exports = {
    index, create
};
