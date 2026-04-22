const router = require("express").Router();
const authController = require("./controllers/authController");
const postsController = require("./controllers/postsController");
const authMiddleware = require("./middlewares/authMiddleware");

// Auth routes — public
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.post("/auth/logout", authController.logout);

// Posts routes
router.get("/posts", postsController.getAll); // public
router.get("/posts/:id", postsController.getOne); // public
router.post("/posts", authMiddleware, postsController.create); // protected
router.put("/posts/:id", authMiddleware, postsController.edit); // protected
router.delete("/posts/:id", authMiddleware, postsController.deletePost); // protected

module.exports = router;
