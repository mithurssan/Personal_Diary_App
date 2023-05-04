const db = require("../database/db");

class Entry {
    constructor({ id, date, category, content }) {
        this.id = id
        this.date = date
        this.category = category
        this.content = content
    }

    static async getAll() {
        const data = await db.query("SELECT * FROM entries");
        const entries = data.rows.map(entry => new Entry(entry));
        return entries;
    }
}

module.exports = Entry;
