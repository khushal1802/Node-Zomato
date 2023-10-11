const Joi = require("joi");

/** Create Payment */
const createPayment = {
  body: Joi.object().keys({
    payment_method: Joi.string().required().trim(),
    card_holder_name: Joi.string().required().trim(),
    card_number: Joi.number().required().integer(),
    amount: Joi.number().required().integer(),
    user: Joi.string().required().trim(),
    order: Joi.string().required().trim(),
  }),
};

module.exports = { createPayment };
