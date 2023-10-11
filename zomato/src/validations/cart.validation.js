const Joi = require("joi");

/** Create Cart */
const createReviews = {
  body: Joi.object().keys({
    quantity: Joi.number().required().integer(),
    total_price: Joi.string().required().trim(),
    food: Joi.string().required(),
    user: Joi.string().required(),
    order: Joi.string().required(),
  }),
};

module.exports = { createReviews };
