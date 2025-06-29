// routes/commentRoutes.js
const express = require('express');
const router = express.Router({ mergeParams: true });
const authenticate = require("../middleware/auth");
const {
  createComment,
  getCommentsByPost,

} = require('../controller/commentController');

router.post('/posts/:postId/comments', authenticate, createComment);

router.get('/', getCommentsByPost);



module.exports = router;
