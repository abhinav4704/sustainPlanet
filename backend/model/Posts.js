const pool = require('../db');

const Post = {
  async create({ user_id, title, content }) {
    const sql = `INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)`;
    const [result] = await pool.execute(sql, [user_id, title, content]);
    return result.insertId; // Return new post ID
  },

  async findById(id) {
    const sql = `SELECT * FROM posts WHERE id = ?`;
    const [rows] = await pool.execute(sql, [id]);
    return rows[0];
  },

  async findAll() {
    const sql = `SELECT * FROM posts ORDER BY created_at DESC`;
    const [rows] = await pool.execute(sql);
    return rows;
  },
};

module.exports = Post;
