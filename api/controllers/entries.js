const Entry = require("../models/Entry");

const index = async (req, res) => {
    try {
        const entries = await Entry.getAll();
        res.send(entries)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

const show = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const entry = await Entry.findById(id);
        res.status(200).send(entry);
    } catch (err) {
        res.status(404).send({ "error": err.message });
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

const update = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const entry = await Entry.findById(id);
        const result = await entry.update(data);
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send({ "error": err.message });
    }
}

const destroy = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const entry = await Entry.findById(id);
        const result = await entry.destroy();
        res.status(204).send(result);
    } catch (err) {
        res.status(404).send({ "error": err.message });
    }
}

module.exports = {
    index, show, create, update, destroy
};
