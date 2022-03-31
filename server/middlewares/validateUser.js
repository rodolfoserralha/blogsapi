const userSchema = require('../schemas/userSchema');

module.exports = async (req, res, next) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    };
    next();
  } catch (error) {
    console.log(error);
  }
}