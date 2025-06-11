const express = require('express');
const router = express.Router();
const { createPost, getPostById, getPosts } = require('../controller/postController');

router.post('/', createPost);
router.get('/:id', getPostById);
router.get('/', getPosts);

module.exports = router;
