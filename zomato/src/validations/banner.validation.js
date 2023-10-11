const Joi = require("joi");

/** Create Banner */
const createBanner = {
  body: Joi.object().keys({
    banner_name: Joi.string().required().trim(),
    banner_description: Joi.string().required().trim(),
    banner_image: Joi.array().allow(""),
    food: Joi.string().required(),
  }),
};

module.exports = { createBanner };