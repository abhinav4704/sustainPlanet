// controllers/commentController.js
const Comment = require('../model/commentModel');
const Post = require('../model/postModel');

async function createComment(req, res) {
  try {
    const { postId } = req.params;
    const { parent_id = null, content, user_id } = req.body;

    // Check that the post exists first
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (!content || !user_id) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // If parent_id is provided, ensure that comment exists and belongs to same post
    if (parent_id) {
      const parentComment = await Comment.findById(parent_id);
      if (!parentComment || parentComment.post_id !== Number(postId)) {
        return res.status(400).json({ message: 'Invalid parent_id' });
      }
    }

    const commentId = await Comment.create({
      post_id: Number(postId),
      parent_id,
      content,
      user_id,
    });

    res.status(201).json({ message: 'Comment created', commentId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getCommentsByPostId(req, res) {
  try {
    const { postId } = req.params;

    // Check post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Fetch all comments (flat) for that post
    const comments = await Comment.findByPostId(postId);
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getCommentById(req, res) {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  createComment,
  getCommentsByPostId,
  getCommentById,
};
