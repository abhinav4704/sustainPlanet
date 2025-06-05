// models/postModel.js
const pool = require('../db');

const Post = {
  // Create a new post
  async create({ user_id, title, content }) {
    const sql = `
      INSERT INTO posts (user_id, title, content)
      VALUES (?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [user_id, title, content]);
    return result.insertId; // returns the new post's ID
  },

  // Find one post by its ID
  async findById(id) {
    const sql = `SELECT * FROM posts WHERE id = ?`;
    const [rows] = await pool.execute(sql, [id]);
    return rows[0] || null;
  },

  // Get all posts, paginated
  async findAll() {
    const sql = `
      SELECT * 
      FROM posts
      ORDER BY created_at DESC
      
    `;
    const [rows] = await pool.execute(sql);
    return rows;
  },

  // Count total number of posts (for pagination metadata)
  async countAll() {
    const sql = `SELECT COUNT(*) AS total FROM posts`;
    const [rows] = await pool.execute(sql);
    return rows[0].total;
  },
};

module.exports = Post;
