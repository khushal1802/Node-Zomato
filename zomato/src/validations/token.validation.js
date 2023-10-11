const joi = require("joi");

const generateToken = {
    body: joi.object({
        user: joi.string().required().trim(),
    })
};

module.exports = {
    generateToken
}