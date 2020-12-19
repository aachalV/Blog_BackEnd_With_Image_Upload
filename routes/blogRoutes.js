const express = require("express");
const {
  checkIfQuery,
  getAllBlogs,
  isIdValid,
  getBlogById,
  verifyPostRequest,
  createBlog,
  deleteBlogById,
} = require("../controllers/blogController");
const { upload } = require("../controllers/uploadImageController");
const router = express.Router();

//End points
router
  .route("/blogs")
  .get(checkIfQuery, getAllBlogs)
  .post(upload.single("blog-image"), verifyPostRequest, createBlog);
router
  .route("/blogs/:id")
  .get(isIdValid, getBlogById)
  .delete(isIdValid, deleteBlogById);

module.exports = router;
