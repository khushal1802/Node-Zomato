const Joi = require("joi");

/** Create Restaurant */
const createRestaurant = {
  body: Joi.object().keys({
    restaurant_name: Joi.string().required().trim(),
    restaurant_address: Joi.string().required().trim(),
    restaurant_image: Joi.string().required().trim(),
    restaurant_status: Joi.boolean(),
    phone_no: Joi.number().required().integer(),
    whatsapp_notification: Joi.boolean(),
    food: Joi.string().required().trim(),
    city: Joi.string().required().trim(),
    restaurant_type: Joi.string().required().trim(),
  }),
};

module.exports = { createRestaurant };
