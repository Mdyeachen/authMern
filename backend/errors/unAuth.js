const CustomError = require("./customError");
const { StatusCodes } = require("http-status-codes");

class UnAuthError extends CustomError {
  constructor(message) {
    super(message || "Unauthorized access", StatusCodes.UNAUTHORIZED);
  }
}

module.exports = UnAuthError;
