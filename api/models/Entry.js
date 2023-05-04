const db = require("../database/db");

class Entry {
    constructor({ id, date, time, category, content }) {
        this.id = id
        this.date = date
        this.time = time
        this.category = category
        this.content = content
    }

    static async getAll() {
        const data = await db.query('SELECT * FROM entries');
        const entries = data.rows.map(entry => new Entry(entry));
        return entries;
    }

    static async create(data) {
        const { date, time, category, content } = data;
        const response = await db.query('INSERT INTO entries (date, time, category, content) VALUES ($1, $2, $3, $4) RETURNING *;', [date, time, category, content]);
        return new Entry(response.rows[0]);
    }

}

module.exports = Entry;
