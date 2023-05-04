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
        const data = await db.query("SELECT * FROM entries");
        const entries = data.rows.map(entry => new Entry(entry));
        return entries;
    }

    static async findById(id) {
        const response = await db.query("SELECT * FROM entries WHERE id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Entry not found.")
        }
        return new Entry(response.rows[0]);
    }

    static async create(data) {
        const { date, time, category, content } = data;
        const response = await db.query("INSERT INTO entries (date, time, category, content) VALUES ($1, $2, $3, $4) RETURNING *;", [date, time, category, content]);
        return new Entry(response.rows[0]);
    }

    async update(data) {
        const { content } = data;
        const response = await db.query("UPDATE entries SET content = $1 WHERE id = $2 RETURNING id, content;", [content, this.id]);
        if (response.rows.length != 1) {
            throw new Error("Cannot update content.")
        }
        return new Entry(response.rows[0]);
    }

}

module.exports = Entry;
