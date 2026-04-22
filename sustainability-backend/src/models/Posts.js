const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "other",
    },
    likes: {
      type: Array,
      default: [],
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Posts = mongoose.model("Posts", postsSchema);
module.exports = Posts;
