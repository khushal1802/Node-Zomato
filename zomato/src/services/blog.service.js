const { Blog } = require("../models");

/** Create Blog service */
const createBlog = async (reqBody) => {
  return Blog.create(reqBody);
};

/** Get Blog list service */
const getBlogList = async () => {
  return Blog.find().populate("food");
};

/** Get Blog by Id service */
const getBlogById = async (BlogId) => {
  return Blog.findById(BlogId);
};

/** Blog detials update by Id service */
const updateBlog = async (BlogId, updateBody) => {
  return Blog.findByIdAndUpdate(BlogId, { $set: updateBody });
};

/** Delete Blog service */
const deleteBlog = async (BlogId) => {
  return Blog.findByIdAndDelete(BlogId);
};

module.exports = {
  createBlog,
  getBlogList,
  getBlogById,
  updateBlog,
  deleteBlog,
};
