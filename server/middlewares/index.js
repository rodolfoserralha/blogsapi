const checkToken = require('./checkToken');
const checkBlogPosts = require('./checkBlogPosts');
const checkCategory = require('./checkCategory');
const checkUpdatePosts = require('./checkUpdatePosts');
const checkDeletePost = require('./checkDeletePost');
const validateUser = require('./validateUser');
const validateLogin = require('./validateLogin');

module.exports = {
  checkToken,
  checkBlogPosts,
  checkCategory,
  checkUpdatePosts,
  checkDeletePost,
  validateUser,
  validateLogin,
};