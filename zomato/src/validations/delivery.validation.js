const Joi = require("joi");

/** Create Delivery */
const createDelivery = {
  body: Joi.object().keys({
    delivery_boy_name: Joi.string().required().trim(),
    vehical_no: Joi.number().required().integer(),
    status: Joi.string().required().trim(),
    payment: Joi.string().required().trim(),
    order: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
  }),
};

module.exports = { createDelivery };
