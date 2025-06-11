// routes/commentRoutes.js
const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  createComment,
  getCommentsByPost,

} = require('../controller/commentController');

/**
 * mergeParams: true
 * allows us to access req.params.postId (from the parent route)
 */

// POST   /posts/:postId/comments      → create a new comment under that post
router.post('/posts/:postId/comments', createComment);

// GET    /posts/:postId/comments      → list all comments (flat) for that post
router.get('/', getCommentsByPost);

// GET    /posts/:postId/comments/:id  → get a single comment by its ID


module.exports = router;
