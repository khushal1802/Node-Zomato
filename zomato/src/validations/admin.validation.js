const joi = require("joi");

//create admin validation
const createAdmin = {
  body: joi.object().keys({
    admin_name: joi.string().required().trim(),
    email: joi.string().required().trim(),
    password: joi.string().required(),
    status: joi.string().trim(),
    order: joi.string().required().trim(),
    food: joi.string().required().trim(),
    restaurant: joi.string().required().trim(),
    country: joi.string().required().trim(),
    state: joi.string().required().trim(),
    city: joi.string().required().trim(),
  }),
};

module.exports = {
  createAdmin,
};