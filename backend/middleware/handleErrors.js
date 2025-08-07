const { StatusCodes } = require("http-status-codes");
const handleErrors = (err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    status: "error",
    message: message,
  });
};

module.exports = handleErrors;
