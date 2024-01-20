const { ValidationError } = require('sequelize');


module.exports.errorValidateHandle = async (error, req, res, next) => {
  if (error instanceof ValidationError) {
    res.status(400).send({
      errors: [{ title: error.message }]
    })
  }
  next(error);
}


module.exports.errorHandle = async (error, req, res, next) => {

  const status = error.status || 500
  res.status(status).send({
    errors: [{ title: error.message || 'server dead' }]
  });
}