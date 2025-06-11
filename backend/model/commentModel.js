const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    parent_id: { type: mongoose.Schema.Types.ObjectId, ref: "Comment", default: null },
    content: String,
    user_id: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
