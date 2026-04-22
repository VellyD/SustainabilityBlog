const postsService = require("../services/postsService");

async function getAll(req, res) {
  try {
    const posts = await postsService.getAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getOne(req, res) {
  try {
    const post = await postsService.getOne(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const post = await postsService.create({
      ...req.body,
      author: req.user.id,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function edit(req, res) {
  try {
    const post = await postsService.edit(req.params.id, req.body);
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function deletePost(req, res) {
  try {
    await postsService.deletePost(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { getAll, getOne, create, edit, deletePost };
