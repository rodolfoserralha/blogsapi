const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi.string().min(8).required().empty().messages({
    'any.required': '400|"displayName" is required',
    'string.base': '422|"displayName" must be a string',
    'string.min': '422|"displayName" length must be at least 8 characters long',
    'string.empty': '411|"displayName" cannot be empty',
  }),
  email: Joi.string().email().required().empty().messages({
    'any.required': '422|"email" is required',
    'string.base': '422|"password" must be a string',
    'string.email': '422|"email" must be a valid email',
    'string.empty': '411|"email" cannot be empty',
  }),
  password: Joi.string().min(6).required().empty().messages({
    'any.required': '422|"password" is required',
    'string.base': '422|"password" must be a string',
    'string.min': '422|"password" length must be at least 6 characters long',
    'string.empty': '411|"password" cannot be empty',
  }),
  image: Joi.string().required().messages({
    'any.required': '422|"image" is required',
    'string.base': '422|"image" must be a string',
  })
})
