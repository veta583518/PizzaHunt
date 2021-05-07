const router = require("express").Router();
const {
  addComment,
  removeComment,
} = require("../../controllers/comment-controller");

// Set up Post at /api/comments/:pizzaId
router.route("/:pizzaId").post(addComment);

// Set up Delete at /api/comments/:pizzaId/:commentId
router.route("/:pizzaId/:commentId").delete(removeComment);

module.exports = router;
