const Entry = require("../models/Entry");

const index = async (req, res) => {
    try {
        const entries = await Entry.getAll();
        res.send(entries)
    } catch (err) {
        res.status(500).send({error: err.message})
    }
    
}

module.exports = {
    index
};
