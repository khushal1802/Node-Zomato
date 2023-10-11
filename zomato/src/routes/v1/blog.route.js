const express = require("express");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { blogValidation } = require("../../validations");
const { blogController } = require("../../controllers");
// const auth =require("../../middlewares/auth")

const router = express.Router();

/** Create blog */
router.post(
  "/create-blog",
  // auth(),
  upload.single("blog_img"),
  validate(blogValidation.createBlog),
  blogController.createBlog
);

/** Get blog details */
router.get("/details/:blogId", blogController.getBlogById);

/** Get blog list */
router.get("/list", blogController.getBlogList);

/** Update blog details */
router.put(
  "/update-details/:blogId",
  upload.single("blog_img"),
  blogController.updateBlog
);


/** Delete blog */
router.delete("/delete/:blogId", blogController.deleteBlog);

module.exports = router;