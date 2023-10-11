const Joi = require("joi");

/** Create Reviews */
const createReviews = {
  body: Joi.object().keys({
    comment: Joi.string().required().trim(),
    Raiting: Joi.number().required().integer(),
    user: Joi.string().required().trim(),
  }),
};

module.exports = { createReviews };
