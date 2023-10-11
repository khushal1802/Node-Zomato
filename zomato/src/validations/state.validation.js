const Joi = require("joi");

/** create State */
const createState = {
  body: Joi.object().keys({
    State_name: Joi.string().required().trim(),
    country: Joi.string().required().trim(),
  }),
};

module.exports = {
  createState,
};
