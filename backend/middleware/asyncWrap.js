const asyncWrap = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next); // Call the async function
    } catch (error) {
      next(error); // Pass the error to the next middleware
    }
  };
};

module.exports = asyncWrap;
