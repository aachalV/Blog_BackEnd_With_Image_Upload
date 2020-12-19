const express = require("express");
const {
  checkIfQuery,
  getAllBlogs,
  isIdValid,
  getBlogById,
  verifyPostRequest,
  createBlog,
} = require("../controllers/blogController");

const router = express.Router();

//End points
router
  .route("/blogs")
  .get(checkIfQuery, getAllBlogs)
  .post(verifyPostRequest, createBlog);
router.route("/blogs/:id").get(isIdValid, getBlogById);

module.exports = router;
