const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().email().required().empty().messages({
    'any.required': '422|"email" is required',
    'string.base': '422|"password" must be a string',
    'string.email': '422|"email" must be a valid email',
    'string.empty': '411|"email" is not allowed to be empty',
  }),
  password: Joi.string().min(6).required().empty().messages({
    'any.required': '422|"password" is required',
    'string.base': '422|"password" must be a string',
    'string.min': '422|"password" length must be at least 6 characters long',
    'string.empty': '411|"password" is not allowed to be empty',
  }),
})