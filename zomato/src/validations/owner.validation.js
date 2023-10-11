const Joi = require("joi");

/** Create Owner */
const createOwner = {
  body: Joi.object().keys({
    owner_name: Joi.string().required().trim(),
    owner_phoneNo: Joi.number().required().integer(),
    owner_email: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
    restaurant: Joi.string().required().trim(),
  }),
};

module.exports = { createOwner };
