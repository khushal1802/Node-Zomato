const joi = require("joi");
const Contact = require("../models/contact.model");

// create Contact
const createContact = {
  body: joi.object().keys({
    subject: joi.string().required().trim(),
      message: joi.string().required().trim(),
    user:joi.string().required().trim(),
  }),
};

module.exports = {
    createContact,
}