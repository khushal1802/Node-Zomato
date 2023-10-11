const { blogService } = require("../services");
const fs = require("fs");

/** Create blog controller */
const createBlog = async (req, res) => {
  try {
    const reqBody = req.body;

  if (req.file) {
    reqBody.blog_img = req.file.filename;
  } else {
    throw new Error("blog image is required!");
  }

    const blogExists = await blogService.createBlog(reqBody);
    if (!blogExists) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "blog create successfully!",
      data: blogExists,
    });
  } catch (error) {
    res.status(error.status || 400).json({
      success: false,
      message: error.message || "Something went wrong!",
      stack: error.stack,
    });
  }
};

/** Get blog list  controller */
const getBlogList = async (req, res) => {
  try {
    const getlist = await blogService.getBlogList();
    res.status(200).json({
      success: true,
      message: "Get blog successfully!",
      data: getlist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Something went wrong!",
    });
  }
};

/** Get blog by Id controller */
const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.blogId;

    const blogExists = await blogService.getBlogById(blogId);
    if (!blogExists) {
      throw new Error("blog not found!");
    }

    res.status(200).json({
      success: true,
      message: "blog details get successfully!",
      data: blogExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** blog details update by Id controller */
const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;

    const blogExists = await blogService.getBlogById(blogId);
    if (!blogExists) {
      throw new Error("blog not found!");
    }

    blogService.updateBlog(blogId, req.body);

    res.status(200).json({
      success: true,
      message: "blog details update successfully!",
      data: blogExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Delete blog controller */
const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;

    const blogExists = await blogService.getBlogById(blogId);
    if (!blogExists) {
      throw new Error("blog not found!");
    }

    blogService.deleteBlog(blogId, req.body);

    res.status(200).json({
      success: true,
      message: "blog details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

module.exports = {
  createBlog,
  getBlogList,
  getBlogById,
  updateBlog,
  deleteBlog,
};
