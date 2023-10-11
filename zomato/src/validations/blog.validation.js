const Joi = require("joi");

/** Create Blog Validation */
const createBlog = {
  body: Joi.object().keys({
    name: Joi.string().trim().required(),
    blog_img: Joi.string().allow(),
    title: Joi.string().trim().required(),
    dec: Joi.string().trim().required(),
    hashtags: Joi.string().trim().required(),
    likes: Joi.number().integer().required(),
    comment: Joi.string().trim().required(),
    date: Joi.date(),
    food: Joi.string().trim().required(),
  }),
};

module.exports = {
  createBlog,
};
