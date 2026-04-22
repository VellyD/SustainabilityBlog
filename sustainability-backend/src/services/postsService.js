const Posts = require("../models/Posts");

async function getAll() {
  return Posts.find().populate("author", "firstName lastName email");
}

async function getOne(id) {
  return Posts.findById(id).populate("author", "firstName lastName email");
}

async function create(postData) {
  return Posts.create(postData);
}

async function edit(id, postData) {
  return Posts.findByIdAndUpdate(id, postData, { new: true });
}

async function deletePost(id) {
  return Posts.findByIdAndDelete(id);
}

module.exports = { getAll, getOne, create, edit, deletePost };
