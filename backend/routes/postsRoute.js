const express = require('express');
const router = express.Router();
const { createPost, getPostById, getAllPosts } = require('../controller/postController');

router.post('/', createPost);
router.get('/:id', getPostById);
router.get('/', getAllPosts);

module.exports = router;
