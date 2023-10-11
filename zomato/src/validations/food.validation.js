const Joi = require("joi");

// create food validation
const createFood = {
  body: Joi.object().keys({
    food_name: Joi.string().required().trim(),
    food_price: Joi.number().required(),
    food_dec: Joi.string().required().trim(),
    food_image: Joi.string().allow(""),
    restaurant: Joi.string().required().trim(),
    foodType: Joi.string().required().trim(),
  }),
};

module.exports = {
  createFood,
};
