const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  url: { type: String, unique: true },
  image: String,
  publishedAt: Date,
  source: {
    name: String,
    url: String,
  },
});

module.exports = mongoose.model("News", newsSchema);
