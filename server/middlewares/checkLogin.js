const invalidFields = { message: 'Invalid fields' };
const { User } = require('../sequelize/models');

const checkEmailLogin = async (req, res, next) => {
  const { email } = req.body;

  const userExists = await User.findOne({ where: { email } });

  if (!userExists) return res.status(400).json(invalidFields);

  req.body.user = userExists;
  next();
};

module.exports = {
  checkEmailLogin,
};