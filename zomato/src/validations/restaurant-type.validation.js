const Joi = require("joi");

/** Create Restaurant-type */
const createRestaurantType = {
  body: Joi.object().keys({
    restaurant_type: Joi.string().required().trim(),
    type_desc: Joi.string().required().trim(),
  }),
};

module.exports = { createRestaurantType };
