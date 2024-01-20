const createError = require('http-errors');
const { User } = require('../models');


module.exports.checkUser = async (req, res, next) => {
  try {
    const { params: { idUser } } = req;
    const userInstance = await User.findByPk(idUser);
    if (!userInstance) {
      return next(createError(404, 'Not found'));
    }
    req.userInstance = userInstance;
    next();
  } catch (error) {
    next(error)
  }
}