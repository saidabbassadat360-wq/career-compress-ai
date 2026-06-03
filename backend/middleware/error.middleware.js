export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log to the terminal for development debugging
  console.error(`🚨 System Error Caught: ${err.stack || err.message}`);

  // Handle Mongoose Bad ObjectId (CastError) - e.g., bad user ID format
  if (err.name === 'CastError') {
    const message = 'Resource not found with that tracking identifier format';
    error = new Error(message);
    error.statusCode = 404;
  }

  // Handle Mongoose Duplicate Key Error (e.g., registering an email that already exists)
  if (err.code === 11000) {
    const message = 'The email address or resource configuration already exists in our system';
    error = new Error(message);
    error.statusCode = 400;
  }

  // Handle Mongoose Validation Errors
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message).join(', ');
    error = new Error(message);
    error.statusCode = 400;
  }

  // Handle JSON Web Token Errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Your login session is invalid, please log in again';
    error = new Error(message);
    error.statusCode = 401;
  }

  // Handle JSON Web Token Expiration
  if (err.name === 'TokenExpiredError') {
    const message = 'Your login session has expired, please log in again';
    error = new Error(message);
    error.statusCode = 401;
  }

  // Send uniform JSON error format to client
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server encountered an unexpected internal error',
  });
};