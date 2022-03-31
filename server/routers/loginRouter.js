const express = require('express');
const { createLogin } = require('../controllers/Login');
const { checkEmailLogin } = require('../middlewares/checkLogin');
const middlewares = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middlewares.validateLogin,
  checkEmailLogin,
  createLogin,
);

module.exports = router;