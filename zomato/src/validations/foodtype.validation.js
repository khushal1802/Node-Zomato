const Joi = require("joi");

/** Create Foodtype */
const createFoodtype = {
  body: Joi.object().keys({
    type_name: Joi.string().required().trim(),
    type_desc: Joi.string().required().trim(),
    restaurant: Joi.string().required().trim(),
  }),
};

module.exports = { createFoodtype };
