const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/auth");
const { createPost, getPostById, getPosts } = require('../controller/postController');

router.post('/',authenticate, createPost);
router.get('/:id', getPostById);
router.get('/', getPosts);

module.exports = router;
