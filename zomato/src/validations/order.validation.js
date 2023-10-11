const Joi = require("joi");

/** Create Order */
const createOrder = {
  body: Joi.object().keys({
    order_no: Joi.number().required().integer(),
    order_date: Joi.date(),
    Total_Price: Joi.number().required().integer(),
    status: Joi.boolean(),
    cart: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
    restaurant: Joi.string().required().trim(),
  }),
};

module.exports = { createOrder };
