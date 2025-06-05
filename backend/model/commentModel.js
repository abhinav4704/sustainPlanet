// models/commentModel.js
const pool = require('../db');

const Comment = {
  // Create a new comment under a specific post (and optionally a parent comment)
  async create({ post_id, parent_id = null, content, user_id }) {
    const sql = `
      INSERT INTO comments (post_id, parent_id, content, user_id)
      VALUES (?, ?, ?, ?)
    `;
    // parent_id can be null (for top-level comments)
    const [result] = await pool.execute(sql, [post_id, parent_id, content, user_id]);
    return result.insertId;
  },

  // Find one comment by its ID
  async findById(id) {
    const sql = `SELECT * FROM comments WHERE id = ?`;
    const [rows] = await pool.execute(sql, [id]);
    return rows[0] || null;
  },

  // Get all comments for a given post_id (flat list, ordered by creation time)
  // Frontend can build nesting using parent_id
  async findByPostId(post_id) {
    const sql = `
      SELECT * 
      FROM comments
      WHERE post_id = ?
      ORDER BY created_at ASC
    `;
    const [rows] = await pool.execute(sql, [post_id]);
    return rows;
  },

  // (Optional) Count total comments under a post
  async countByPostId(post_id) {
    const sql = `SELECT COUNT(*) AS total FROM comments WHERE post_id = ?`;
    const [rows] = await pool.execute(sql, [post_id]);
    return rows[0].total;
  },
};

module.exports = Comment;
