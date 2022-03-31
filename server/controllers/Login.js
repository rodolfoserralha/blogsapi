const generateToken = require('../helpers/generateToken');

const createLogin = async (req, res, _next) => {
  const { email } = req.body;
  const { id, displayName } = req.body.user;
  const token = generateToken({ email, id });

  return res.status(200).json({ token, displayName, id });
};

module.exports = {
  createLogin,
};